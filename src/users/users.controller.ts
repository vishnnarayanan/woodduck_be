import { Controller,Post,Get,Put,Body,
  Query,Delete,UseInterceptors,ClassSerializerInterceptor,Session, HttpStatus,UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './DTO/createUserDTO.dto';
import { UsersService } from './users.service';
import {serialize} from '../interceptors/serialize.interceptor'
import { UserDTO } from './DTO/userDTO.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from 'src/decorators/currentUser.decorators';
import { CurrentUserInterceptor } from './interceptors/currentUserInterceptor.interceptor';
import { User } from './user.entity';
import {AuthGuard} from '../guards/authGuard.guard';
import { AdminGuard } from 'src/guards/AdminGuard.guard';
import { Console } from 'console';


@Controller('users')
// @UseInterceptors(CurrentUserInterceptor)
export class UsersController {

  constructor(public userService: UsersService,public authService: AuthService){}

  @Post('/signup')
  async createUser(@Body() createUserDTO: CreateUserDTO,@Session() session:any)
  {
      const user=await this.authService.signup(createUserDTO);
      session.userId = user.userId;
      return user;
  }

  // @Get('/whoAmI')
  // whoAmI(@Session() session:any)
  // {
  //   return this.userService.getUserByEmail(session.emailAddress);
  // }

  @UseGuards(AuthGuard)
  @Get('/whoAmI')
  whoAmI(@CurrentUser() user : User)
  {
    return user;
  }

  @Post('signout')
  signout(@Session() session: any)
  {
    session.emailAddress=null;
    return HttpStatus.OK;
  }

  @serialize(UserDTO)
  @Post('/signin')
  async signin(@Query('email') email : string, @Query('password') password: string,@Session() session:any)
  {
      const user = await this.authService.signin(email,password);
      session.emailAddress = user.emailAddress;
      return user;
  }

  @serialize(UserDTO)
  @Get('/listOfUsers')
  @UseGuards(AdminGuard)
  async getListOfUsers()
  {
    const user= await this.userService.getListofUsers();
    console.log(user);
    return user;

  }

  @serialize(UserDTO)
  @Get('/getUserByEmail')
  getUserByEmail(@Query('email') email: string )
  {
      return this.userService.getUserByEmail(email);
  }

  @Put('/updateUser')
  updateUserByUserId(@Query('userId') userId: number,@Query('emailAddress') emailAddress: string)
  {
    return this.userService.updateUser(userId,{emailAddress: emailAddress});
  }

  @Delete()
  removeUser(@Query('userName') userName: string)
  {
      return this.userService.removeUser(userName);
  }

}
