
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Path } from "./Path.schema";
import { SeatClass } from "./SeatClass.schema";
import { Order } from "./Order.schema";


@Entity()
export class Trip {
    @PrimaryGeneratedColumn('uuid')
    uid: string;

    @Column()
    price: number



    @Column({default:1})
    seats: number

   @ManyToOne(() => SeatClass, (seatClass) => seatClass.trips, { eager:true,onDelete:'CASCADE'})
    seatClass: SeatClass


    @Column({type: 'bigint'})
    departure_time: number

    @Column({type: 'bigint'})
    arrival_time: number

    @ManyToOne(() => Company, (company) => company.trips, {eager:true,onDelete:'CASCADE'})
    company: Company


    
    @ManyToOne(() => AirBus, (airbus) => airbus.trips, {eager:true,onDelete:'CASCADE'})
    airBus: AirBus


    @ManyToOne(() => City, (city) => city.departure_trips, {eager:true,onDelete:'CASCADE'})
    departure_city: City

    @ManyToOne(() => City, (city) => city.arrival_trips, {eager:true,onDelete:'CASCADE'})
    arrival_city: City

    @ManyToMany(() => Order, {cascade:true})
    orders: Order[]

}