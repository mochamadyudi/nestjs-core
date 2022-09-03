import { Controller, Get, Param } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController{
  constructor(private roleService: RoleService) {}

  @Get('list')
  list(@Param() param){
    return 'hiiiii'
  }
}
