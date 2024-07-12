import { Module } from '@nestjs/common';
import { AirbusController } from './airbus/airbus.controller';
import { CityController } from './city/city.controller';
import { CompanyController } from './company/company.controller';
import { PathController } from './path/path.controller';
import { TripController } from './trip/trip.controller';
import { AirbusService } from './airbus/airbus.service';
import { CityService } from './city/city.service';
import { CompanyService } from './company/company.service';
import { PathService } from './path/path.service';
import { TripService } from './trip/trip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirBus } from 'src/schemas/AirBus.schema';
import { City } from 'src/schemas/City.schema';
import { Company } from 'src/schemas/Company.schema';
import { Order } from 'src/schemas/Order.schema';
import { Path } from 'src/schemas/Path.schema';
import { Trip } from 'src/schemas/Trip.schema';
import { User } from 'src/schemas/User.schema';
import { SeatClass } from 'src/schemas/SeatClass.schema';
import { SeatClassController } from './seat-class/seat-class.controller';
import { SeatClassService } from './seat-class/seat-class.service';


@Module({
    controllers:[
       AirbusController,
       CityController,
       CompanyController,
       PathController,
       SeatClassController,
       TripController,
    ],
    providers:[
       AirbusService,
       SeatClassService,
       CityService,
       CompanyService,
       PathService,
       TripService, 
    ],
    imports:[
      TypeOrmModule.forFeature([
         SeatClass,
         AirBus,
         City,
         Company,
         Order,
         Path,
         Trip,
         User
       
    
       ]),
    ],
  
})
export class FlightModule {

}
