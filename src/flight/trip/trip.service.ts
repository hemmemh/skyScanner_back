import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { tripArray } from 'src/data/dataForDb';
import { Trip } from 'src/schemas/Trip.schema';
import { Repository } from 'typeorm';
import { getAllTripsDTO } from './DTO/getAllTripsDTO';
import * as dayjs from 'dayjs'
@Injectable()
export class TripService {

    constructor(
        @InjectRepository(Trip)
        private TripRepo: Repository<Trip>,
    ){}

    async getAll(query:getAllTripsDTO): Promise<Trip[]> {
        console.log('query',query);
        
        const departTime = dayjs(+query.depart).startOf('date').hour(0)
        const returnTime = dayjs(+query.return).startOf('day')
 
        const trips = await this.TripRepo.find({
            where:{
                departure_city:{uid:query.from},
                arrival_city:{uid:query.to},
                seats:+query.seatNumber,
                seatClass:{uid:query.seatClass}
            }
                })
        
        return trips.filter(el=>{

            console.log('dayjs(el.departure_time)',departTime, returnTime, dayjs(+el.departure_time), dayjs(+el.arrival_time), el.departure_time, dayjs(el.departure_time).isSame(departTime,'day') );
            
            return dayjs(el.departure_time).startOf('day').isSame(departTime,'day') &&  dayjs(el.arrival_time).startOf('day').isSame(returnTime,'day')
        })
      }  


    async createMany() {
        const trips = tripArray
        for(const trip of trips){
           await this.TripRepo.save(trip);
        }
         //return this.getAll()
      }
}
