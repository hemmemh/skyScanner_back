
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip.schema";


@Entity()
export class AirBus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Trip, (trip) => trip.airBus, {cascade:true})
    trips: Trip[]
}