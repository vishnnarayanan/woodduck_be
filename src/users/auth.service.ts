import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes,scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { UserDTO } from "./DTO/userDTO.dto";
import { CreateUserDTO } from "./DTO/createUserDTO.dto";
import { User } from "./user.entity";

const scrypt= promisify(_scrypt);

@Injectable()
export class AuthService{

  constructor(private userService: UsersService){}

  async signup(createUserDTO: CreateUserDTO)
  {
      const user= await this.userService.getUserByEmail(createUserDTO.emailAddress);
      console.log(user);
      if(user !== null)
      {
        throw new BadRequestException('Email already Exists');
      }

      const salt = randomBytes(8).toString('hex');
      const hash = (await scrypt(createUserDTO.password,salt,32)) as Buffer;
      const result = salt + '.' + hash.toString('hex');

      createUserDTO.password = result;
      const savedUser=this.userService.createUser(createUserDTO);
      return savedUser;
  }

  async signin(emailAddress: string, password: string)
  {
    const user= await this.userService.getUserByEmail(emailAddress);

      if(!user)
      {
        throw new BadRequestException('Invalid Email Address or Password');
      }
      const [salt,storedHash] = user.password.split('.');
      const hash = (await scrypt(password,salt,32)) as Buffer;
      // const result = salt + '.' + hash.toString('hex');
      if(storedHash===hash.toString('hex'))
      {
          return user;
      }else
      {
        throw new BadRequestException('Incorrect Password !!!');
      }
    
  }

}