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
            // @ts-ignore
            const [err,user] = await this._checkEmail(dto.email)
            if(err) throw new ForbiddenException(err?.message ?? "Some Error")

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

            const [err,dataUser] = await this._checkEmail(dto.email)
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


    async _checkEmail(email){
        try{
            return this.prisma.user.findUnique({
                where: {
                    email
                }
            }).then((result)=> {
                return [null, result]
            })
              .catch((err)=> {
                  return [ err, null]
              })
        }catch(err){
            return [ err, null ]
        }
    }
}
