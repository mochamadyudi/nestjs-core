import { Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2'


@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {
    }

    login(){

    }
    async signup(dto:AuthDto){
        //generate hash password
        let hash = await argon.hash(dto.password)
        //save new user
        const user = await this.prisma.user.create({
            data:{
                email:dto.email,
                password:hash,
                hash,
            }
        })

        //return the saved user
        return user
    }

    loadUser(){}

    emailVerified(){}

    _forgotPassword(){}
    _forgotNumber(){}
    _resetPassword(){}
    _resetNumber(){}

    logOut(){}


}
