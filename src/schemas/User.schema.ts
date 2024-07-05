
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Path } from "./Path.schema";
import { Order } from "./Order.schema";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    uid: string;

    @Column()
    email: string


    @Column()
    password: string


    @OneToMany(() => Order, (order) => order.user, {cascade:true})
    orders: Order[]





}