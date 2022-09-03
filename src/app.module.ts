import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule,ConfigService } from '@nestjs/config';

import {AuthModule} from "./modules/auth/auth.module";
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
