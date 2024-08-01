
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Path } from "./Path.schema";
import { User } from "./User.schema";
import { Trip } from "./Trip.schema";


@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    uid: string;



    @ManyToMany(() => Trip,  {eager:true,onDelete:'CASCADE'})
    @JoinTable()
    from: Trip[]

    @Column({type:'json', default:[]})
    excludedDate: string[]
    from_positions: number

    @ManyToMany(() => Trip, {eager:true,onDelete:'CASCADE'})
    @JoinTable()
    to: Trip[]

    @CreateDateColumn()
    createdAt: Date;


    @ManyToOne(() => User, (user) => user.orders, {onDelete:'CASCADE'})
    user: User



}