import { Module } from '@nestjs/common'
import { PrismaModule } from '@yid/prisma';

import { JwtService } from '@nestjs/jwt';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[PrismaModule],
  controllers:[UserController],
  providers:[UserService,JwtService]
})
export class UserModule{

}
