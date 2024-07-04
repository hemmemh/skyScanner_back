import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AirBus } from 'src/schemas/AirBus.schema';
import { Repository } from 'typeorm';

@Injectable()
export class AirbusService {


    constructor(
  
        @InjectRepository(AirBus)
        private AirBusRepo: Repository<AirBus>,
      ) {}

    async createAirBus(airBus:AirBus) {
        return this.AirBusRepo.create(airBus);
 
      }


}
