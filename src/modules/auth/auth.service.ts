import { ForbiddenException, Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma/prisma.service";
import { _AuthSignInDto, AuthDto } from '@yid/entities';
import * as argon from 'argon2'
import { first } from 'rxjs';


@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {
    }

    async login(dto:_AuthSignInDto){
        try{
            let fields = {
                where: {
                    email: dto.email
                }
            }
            // @ts-ignore
            const user = await this.prisma.user.findUnique(fields)

            if(!user) throw new ForbiddenException('Credentials incorrect!')

            const pwMatch = await argon.verify(user.hash,dto.password)

            if(!pwMatch) throw new ForbiddenException('Credentials incorrect!')


            delete user.hash
            return {
                error:false,
                message: "Successfully Sign in",
                data: user
            }
        }catch (err){

        }
    }

    async signup(dto:AuthDto){
        //generate hash password
        let hash = await argon.hash(dto.password)
        let username = dto.email.split('@')[0]
        //save new user
        let data = {
            email:dto.email,
            hash:hash,
            username: username
        }
        try{
            const user = await this.prisma.user.create({
                data:data
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
}
