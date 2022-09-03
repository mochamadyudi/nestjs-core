import { Controller, Get, Param,Post } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController{
  constructor(private roleService: RoleService) {}

  @Get('list')
  list(@Param() param){
    return 'hiiiii'
  }

  @Post()
  create(){
    return 'hiiii'
  }
}
