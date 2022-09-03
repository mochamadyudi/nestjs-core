import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';



import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './modules/role/role.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
