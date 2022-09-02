import { Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";

@Injectable({})
export class AuthService{
    constructor(private prisma: PrismaService) {
    }

    login(){

    }
    signup(){

    }

    loadUser(){}

    emailVerified(){}

    _forgotPassword(){}
    _forgotNumber(){}
    _resetPassword(){}
    _resetNumber(){}

    logOut(){}


}
