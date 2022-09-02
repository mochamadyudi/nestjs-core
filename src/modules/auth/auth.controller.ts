import {Controller, Get, Post,Body} from '@nestjs/common'
import {AuthService} from "./auth.service";
import {AuthDto} from "./dto/auth.dto";

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post("signup")
    signUp(@Body() dto:AuthDto){
        console.log({
            dto
        })
        return this.authService.signup(dto)
    }


    @Post("login")
    signIn(){

    }

    @Get("load-user")
    loadUser(){

        return 'hiiii'
    }

}
