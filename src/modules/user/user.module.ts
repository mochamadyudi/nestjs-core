import { Module } from '@nestjs/common'
import { PrismaModule } from '../../prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[PrismaModule],
  controllers:[UserController],
  providers:[UserService,JwtService]
})
export class UserModule{

}
