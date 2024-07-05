
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip.schema";
import { Path } from "./Path.schema";


@Entity()
export class SeatClass {
    @PrimaryGeneratedColumn('uuid')
    uid: string;

   

    @Column()
    name: string

    @Column()
    multiplier: number

    @OneToMany(() => Trip, (trip) => trip.seatClass, {cascade:true})
    trips: Trip[]
}