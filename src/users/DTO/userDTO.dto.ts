// import { IsEmail, IsString } from "class-validator";
import {Expose,Exclude, Transform} from  'class-transformer';
export class UserDTO
{
  @Expose()
  userName: string;

  @Exclude()
  password: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  emailAddress: string;

  @Expose()
  activeUser: boolean;

  @Expose()
  @Transform(({obj})=> 
   {
    return {userType :  obj.role.userType };
  }
  )
  permissionSet: any;
}