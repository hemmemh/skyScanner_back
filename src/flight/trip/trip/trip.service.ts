import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tripArray } from 'src/data/dataForDb';
import { Trip } from 'src/schemas/Trip.schema';
import { Repository } from 'typeorm';

@Injectable()
export class TripService {

    constructor(
        @InjectRepository(Trip)
        private TripRepo: Repository<Trip>,
    ){}

    async getAll(): Promise<Trip[]> {
        return this.TripRepo.find({})
      }  


    async createMany(): Promise<Trip[]> {
        const trips = tripArray
        for(const trip of trips){
           await this.TripRepo.save(trip);
        }
         return this.getAll()
      }
}
