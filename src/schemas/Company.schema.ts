
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip.schema";


@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string


    @OneToMany(() => Trip, (trip) => trip.company, {cascade:true})
    trips: Trip[]
}