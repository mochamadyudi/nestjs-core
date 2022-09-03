import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

import { _AuthSignInDto, AuthDto } from '@yid/entities';
import { AuthService } from './auth.service';


@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post("signup")
    signUp(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    signIn(@Body() dto:_AuthSignInDto){
        return this.authService.login(dto)
    }

    @Get("load-user")
    loadUser(){

        return 'hiiii'
    }

}
