import { PrismaService } from '@yid/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export  class RoleService{
  constructor(
    private prisma: PrismaService,
  ) {}


}
