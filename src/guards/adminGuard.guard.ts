import { CanActivate,ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { User } from "src/users/user.entity";

export class AdminGuard implements CanActivate
{
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user:User =  request.currentUser;
    if(user.role.userType === 'ADMIN')
    {
        return true;
    }else{
      return false;
    }
  }
}