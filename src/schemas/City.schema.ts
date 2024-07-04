
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip.schema";


@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string


    @OneToMany(() => Trip, (trip) => trip.departure_city, {cascade:true})
    departure_trips: Trip[]


    @OneToMany(() => Trip, (trip) => trip.arrival_city, {cascade:true})
    arrival_trips: Trip[]
}