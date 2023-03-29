import { IsString,IsNumber,Min,Max,IsLatitude,IsLongitude } from "class-validator";
export class CreateRoleDTO{

  @IsString()
  userType: string;


}