import { Exclude } from "class-transformer";
import { User } from "src/users/user.entity";
import { PrimaryGeneratedColumn,Column, Entity, OneToMany,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from "typeorm";

@Entity()
export class Role{

  @PrimaryGeneratedColumn()
  roleId: number

  @Column()
  userType: string;

  @OneToMany(type => User, user => user.role)
  users: User[];

  @CreateDateColumn()
  createdOn: Date;
  
  @UpdateDateColumn()
  updatedOn: Date;

  @DeleteDateColumn()
  deletedOn: Date;
}