import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDTO } from './DTO/createRoleDTO.dto';
import { Role } from './role.entity';


@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private repository: Repository<Role>){}

  createRole(createRoleDTO :CreateRoleDTO)
  {
    const role = this.repository.create(createRoleDTO);
    return this.repository.save(role);
  }


  getRoleByName(userType: string)
  {
   return this.repository.findOneBy({userType})
  }
}
