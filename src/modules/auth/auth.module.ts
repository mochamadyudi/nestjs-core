import { Module } from '@nestjs/common';
import {AuthController} from '@yid/modules';
import {AuthService} from '@yid/modules';
import {PrismaModule} from "../../prisma/prisma.module";
import { UserService } from '@yid/modules';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from '../../strategy';

@Module({
    imports:[PrismaModule,JwtModule.register({})],
    controllers:[AuthController],
    providers:[AuthService,UserService,JwtStrategy,ConfigService]
})
export class AuthModule{}
