import { Controller, Get, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { Public } from 'src/auth/guards/JwtGuard';

@Controller('trip')
@Public()
export class TripController {

    constructor(private tripService: TripService) {}

    @Post('createMany')
    createMany() {
      return this.tripService.createMany();
    }


    @Get()
    getAll() {
      return this.tripService.getAll();
    }
}
