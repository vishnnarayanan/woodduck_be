import { UseInterceptors,NestInterceptor, ExecutionContext,CallHandler } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor{

  constructor(private userService:UsersService){}

  

  async intercept(context: ExecutionContext, handler: CallHandler<any>)  {
    
    const request = await context.switchToHttp().getRequest();
    const emailAddress = request.session.emailAddress;

    const user = await  this.userService.getUserByEmail(emailAddress);
    request.currentUser = user;

    return handler.handle();
  }
}