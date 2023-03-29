import { Controller,Post,Get,Put,Query,Body, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/decorators/currentUser.decorators';
import { AuthGuard } from 'src/guards/authGuard.guard';
import { User } from 'src/users/user.entity';
import { CreateRoleDTO } from './DTO/createRoleDTO.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

  constructor(private roleService: RolesService){}

  @Post('/createRole')
  createRole(@Body() createRoleDTO: CreateRoleDTO )
  {
     const role= this.roleService.createRole(createRoleDTO);
     console.log(role);
     return role;
  }

  @Get('getRoleByName')
  getRoleByName(@Query('usertype') roleType: string)
  {
     return this.roleService.getRoleByName(roleType);
  }

}
