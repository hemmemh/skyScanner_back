
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Trip } from "./Trip.schema";
import { Order } from "./Order.schema";


@Entity()
export class Path {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    departure_time: number

    @Column()
    arrival_time: number



    @ManyToOne(() => City, (city) => city.departure_trips, {onDelete:'CASCADE'})
    departure_city: City

    @ManyToOne(() => City, (city) => city.arrival_trips, {onDelete:'CASCADE'})
    arrival_city: City


    @ManyToMany(() => Trip)
    @JoinTable()
    trips: Trip[]


    @OneToOne(() => Order, (order) => order.from, {onDelete:'CASCADE'})
    order_from: Path

    @OneToOne(() => Order, (order) => order.to, {onDelete:'CASCADE'})
    order_to: Path




}