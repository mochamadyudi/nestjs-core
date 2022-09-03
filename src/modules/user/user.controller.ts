import { Controller, Get, Post, Body, Param, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { Request } from 'express'
import {UserService} from './user.service'
import { JwtGuard } from '@yid/guard';
import { GetUser } from '../../decorator';
import { User } from '@prisma/client'


@UseGuards(JwtGuard)
@Controller('user')
export class UserController{
    constructor(private userService: UserService) {}

    @Get('profiles')
    profiles(
      @GetUser() user: User,
      @GetUser('id') id:string
    ){
        return this.userService.getProfiles(id)
    }
    @Get(':id')
    get(@Param('id') id){
        return this.userService
    }

}
