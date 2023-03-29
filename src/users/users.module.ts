import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { CurrentUserInterceptor } from './interceptors/currentUserInterceptor.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RolesService } from 'src/roles/roles.service';
import { RolesModule } from 'src/roles/roles.module';
import { CurrentUserMiddleware } from './middlewares/currentUserMiddleware.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User]),RolesModule],
  exports: [TypeOrmModule],
  controllers: [UsersController],
  providers: [UsersService,AuthService,
    {
    provide:  APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor
  }
  ],
  
})
export class UsersModule {

  configure(consumer: MiddlewareConsumer)
  {
      consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
