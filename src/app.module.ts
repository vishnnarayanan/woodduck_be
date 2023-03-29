import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { join } from 'path';
import {ConfigModule,ConfigService} from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/role.entity';
const cookieSession = require('cookie-session');
// import ormconfig = require('../ormconfig');
import {dataSourceOptions} from './typeorm.config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env.development',
  }),
  //   TypeOrmModule.forRoot({
  //   // name: "dbadmin",
  //   // type: "sap",
  //   // host: "5d7f1a59-72cf-4a09-be2d-f6511f48638f.hana.trial-us10.hanacloud.ondemand.com",
  //   // port: 443,
  //   // username: "dbadmin",
  //   // password: "Root12345*",
  //   "logging": true,
  //   // "schema": "DBADMIN",
  //   // "encrypt": true,
  //   // "extra": {
  //   //   "sslValidateCertificate": false
  //   // },
  //    type : 'sqlite',
  //   // database: 'db.sqlite',
  //   database: process.env.NAME,
  //   entities: [User,Role],
  //   // entities: ['./dist/users/*.entity.js'],
  //   synchronize: true,
  // }),

  TypeOrmModule.forRoot(dataSourceOptions),
  UsersModule,
  RolesModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService){}

  configure(consumer: MiddlewareConsumer)
  {
      consumer.apply(cookieSession({keys: [this.configService.get('COOKIEE-KEY')],}),).forRoutes('*');
  }
}
