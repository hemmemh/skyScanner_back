
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Path } from "./Path.schema";
import { User } from "./User.schema";


@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    uid: string;


    @OneToOne(() => Path, (path) => path.order_to, {cascade:true})
    to: Path

    @OneToOne(() => Path, (path) => path.order_from, {cascade:true})
    from: Path


    @ManyToOne(() => User, (user) => user.orders, {onDelete:'CASCADE'})
    user: User



}