import { Module } from '@nestjs/common';
import { PrismaModule } from '@yid/prisma';
import { RoleController } from './role.controller';
import { JwtStrategy } from '../../strategy';
import { ConfigService } from '@nestjs/config';
import { UserService } from '@yid/modules';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    PrismaModule,
    JwtModule.register({})
  ],
  controllers:[RoleController],
  providers:[
    JwtStrategy,
    ConfigService,
    UserService
  ]
})
export class RoleModule {}
