import { IsEmail, IsString } from "class-validator";
export class CreateUserDTO
{
    @IsString()
    userName: string;

    @IsString()
    password: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsEmail()
    emailAddress: string;

}