import { ForbiddenException, Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import { _AuthSignInDto, AuthDto } from '@yid/entities';
import * as argon from 'argon2'
import { config, first } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';


@Injectable({})
export class AuthService{
    constructor(
      private prisma: PrismaService,
      private jwt: JwtService,
      private config:ConfigService,
      private userService: UserService
    ) {
    }

    async login(dto:_AuthSignInDto){
        try{
            // @ts-ignore
            const [err,user] = await this.userService._checkEmail(dto.email)
            if(err) throw new ForbiddenException(err?.message ?? "Some Error")

            if(!user) throw new ForbiddenException('Credentials incorrect!')

            const pwMatch = await argon.verify(user.hash,dto.password)

            if(!pwMatch) throw new ForbiddenException('Credentials incorrect!')


            delete user.hash
            let token = await this._signToken(user.id,user.email)
            Reflect.set(user,'token',token)
            return {
                error:false,
                message: "Successfully Sign in",
                data: user
            }
        }catch (err){
            return {
                error:true,
                message: err?.message ?? "Some Error",
                data:null
            }
        }
    }

    async signup(dto:AuthDto){
        //generate hash password
        let hash = await argon.hash(dto.password)
        let username = dto.email.split('@')[0]

        let fields = {
            email:dto.email,
            hash:hash,
            username: username
        }
        try{

            const [err,dataUser] = await this.userService._checkEmail(dto.email)
            if(err) throw new ForbiddenException(err?.message ?? "Some Error")

            if(dataUser) throw new ForbiddenException('Email is registered!')

            //save new user
            const user = await this.prisma.user.create({
                data:fields
            })

            delete user.hash
            //return the saved user
            return {
                error:false,
                message:"Successfully registered1",
                data:user
            }
        }catch(err){
            return {
                error:true,
                message: err.message,
                data:null
            }
        }
    }


    _signToken(userId: number,email: string): Promise<string>{
        const payload = {
            sub:userId,
            email
        }

        return this.jwt.signAsync(payload, {
            expiresIn:'15m',
            secret: this.config.get('JWT_SECRET') || process.env.JWT_SECRET || "yidSecret"
        })
    }

}
