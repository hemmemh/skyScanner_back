import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { seatClassArray } from 'src/data/dataForDb';
import { SeatClass } from 'src/schemas/SeatClass.schema';
import { Repository } from 'typeorm';

@Injectable()
export class SeatClassService {

    constructor(
        @InjectRepository(SeatClass)
        private seatClassRepo: Repository<SeatClass>,
    ){}

   async  createSeatClass(seatClass:SeatClass){
      try {
        return this.seatClassRepo.save(seatClass)
      } catch (error) {
        return error
      }
    }

    async getAll(): Promise<SeatClass[]> {
        return this.seatClassRepo.find({})
      }  


    async createMany(): Promise<SeatClass[]> {
        const seatClasses = seatClassArray
        for(const company of seatClasses){
           await this.seatClassRepo.save(company);
        }
         return this.getAll()
      }

}
