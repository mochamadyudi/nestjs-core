import {Controller, Get, Post,Body} from '@nestjs/common'
import {AuthService} from "./auth.service";
import { _AuthSignInDto, AuthDto } from '@yid/entities';

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post("signup")
    signUp(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }


    @Post("login")
    signIn(@Body() dto:_AuthSignInDto){
        return this.authService.login(dto)
    }

    @Get("load-user")
    loadUser(){

        return 'hiiii'
    }

}
