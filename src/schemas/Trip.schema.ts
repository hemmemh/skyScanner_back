
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.schema";
import { AirBus } from "./AirBus.schema";
import { City } from "./City.schema";
import { Path } from "./Path.schema";


@Entity()
export class Trip {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number


    @Column()
    departure_time: number

    @Column()
    arrival_time: number

    @ManyToOne(() => Company, (company) => company.trips, {onDelete:'CASCADE'})
    company: Company


    
    @ManyToOne(() => AirBus, (airbus) => airbus.trips, {onDelete:'CASCADE'})
    airBus: AirBus


    @ManyToOne(() => City, (city) => city.departure_trips, {onDelete:'CASCADE'})
    departure_city: City

    @ManyToOne(() => City, (city) => city.arrival_trips, {onDelete:'CASCADE'})
    arrival_city: City



    @ManyToMany(() => Path)
    paths: Path[]

}