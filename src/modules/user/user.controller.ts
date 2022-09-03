import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express'
import {UserService} from './user.service'
import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController{
    constructor(private userService: UserService) {}



    @UseGuards(AuthGuard('jwt'))
    @Get('profiles')
    profiles(@Req() req: Request){
        console.log({
            user:req.user
        })
        return req.user
    }
    @Get(':id')
    get(@Param('id') id){
        return this.userService
    }

}
