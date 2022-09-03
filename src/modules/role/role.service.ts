import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export  class RoleService{
  constructor(
    private prisma: PrismaService,
  ) {}


}
