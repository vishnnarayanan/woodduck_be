import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './DTO/createUserDTO.dto';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/role.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private repository : Repository<User>,private roleService: RolesService){}

  async createUser(createUserDTO: CreateUserDTO)
  {
    const user= new User();
    user.isActiveUser = true;
    user.emailAddress=createUserDTO.emailAddress;
    user.firstName=createUserDTO.firstName;
    user.lastName=createUserDTO.lastName;
    user.password=createUserDTO.password;
    user.userName=createUserDTO.userName;
    const role = await this.roleService.getRoleByName('ADMIN');
    user.role = role;
    return await this.repository.save(user);
  }

  getListofUsers()
  {
    const list= this.repository.find();
    console.log(list);
    return list;
  }

  async getUserByEmail(emailAddress : string)
  {
    if(!emailAddress)
    {
      return null;
    }
    // return this.repository.find({ where: { emailAddress } });
    return await this.repository.findOneBy( { emailAddress } );
  }

  async updateUser(userId : number, attrs: Partial<User>)
  {
    const user = await this.repository.findOneBy({userId});
    if(!user)
    {
      throw new NotFoundException("User not Found");
    }
    Object.assign(user,attrs);
    return this.repository.save(user);
  }


  async removeUser(userName: string)
  {
    const user = await this.repository.findOneBy({userName});
    if(!user)
    {
      throw new NotFoundException("User not Found");
    }
    return this.repository.remove(user);
  }
}
