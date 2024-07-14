import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TripService } from './trip.service';
import { Public } from 'src/auth/guards/JwtGuard';
import { getAllTripsDTO } from './DTO/getAllTripsDTO';

@Controller('trip')
@Public()
export class TripController {

    constructor(private tripService: TripService) {}

    @Post('createMany')
    createMany() {
      return this.tripService.createMany();
    }

    @Post('generate')
    generate() {
      return this.tripService.generate(4000,1719848309000,1722440309000, 2000, 5000);
    }


    @Get(':depart/:return')
    getAllWithReturn(@Param('depart') departDate: number, @Param('return') returnDate: number, @Query() query: getAllTripsDTO) {
      console.log('dd', departDate, returnDate, query);
      
      return this.tripService.getAllWithReturn(query, departDate, returnDate);
    }

    @Get(':depart')
    getAll(@Param('depart') departDate: number,  @Query() query: getAllTripsDTO) {
      return this.tripService.getAll(query, departDate);
    }
}
