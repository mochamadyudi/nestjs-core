import { Controller,Body,Get,Param } from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService) {
    }

    @Get('load-user')
    loadUser(){
        return {
            data:this.authService.findAll()
        }
    }

    @Get(":id")
    findOne(@Param('id') id){
        console.log(this.authService.findOne(parseInt(id)))
        return {
            data: this.authService.findOne(parseInt(id))
        }
    }
}
