import { Injectable } from "@nestjs/common";
import { NestMiddleware } from "@nestjs/common/interfaces/middleware";
import { NextFunction, Request, Response } from "express";
import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";

declare global{
  namespace Express{
    interface Request{
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware{

  constructor(private userService: UsersService){}
  async use(req: Request, res: Response, next: NextFunction) {
    const {emailAddress} = req.session || {};
    const user:User = await this.userService.getUserByEmail(emailAddress);
    req.currentUser = user;
     next();
  }
}