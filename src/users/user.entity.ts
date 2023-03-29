import { Role } from "src/roles/role.entity";
import { Entity,Column,PrimaryGeneratedColumn,
   OneToMany, JoinColumn, OneToOne, ManyToOne,
  CreateDateColumn, 
  UpdateDateColumn,
  DeleteDateColumn} from "typeorm";
// import { Exclude } from "class-transformer";

@Entity()
export class User{

  @PrimaryGeneratedColumn()
  userId : number;

  @Column({length: 300})
  // @Exclude()
  password: string;
  
  @Column({length: 225})
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  emailAddress: string;

  @ManyToOne(type => Role, role => role.users,{
    eager:true
  })
  role: Role;

  @Column()
  isActiveUser: boolean;

  @CreateDateColumn()
  createdOn: Date;
  
  @UpdateDateColumn()
  updatedOn: Date;

  @DeleteDateColumn()
  deletedOn: Date;

  
}