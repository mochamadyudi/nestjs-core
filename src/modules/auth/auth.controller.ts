import { Controller,Get,Post,Delete,Put } from '@nestjs/common'
import {AuthService} from "./auth.service";
@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post("register")
    signUp(){

    }

    @Post("login")
    signIn(){

    }

    @Get("load-user")
    loadUser(){

        return 'hiiii'
    }

}
