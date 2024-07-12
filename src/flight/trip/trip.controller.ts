import { Controller, Get, Post, Query } from '@nestjs/common';
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


    @Get()
    getAll(@Query() query: getAllTripsDTO) {
      return this.tripService.getAll(query);
    }
}
