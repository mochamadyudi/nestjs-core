import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(config: ConfigService) {
        super({
            datasources: {
                db:{
                    url: config.get('DATABASE_URL') || process.env.DATABASE_URL || 'postgresql://postgresUser:postgresPW@localhost:5455/nestjs?schema=public'
                }
            }
        });
    }
}
