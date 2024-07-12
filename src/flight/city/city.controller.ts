import { Body, Controller, Get, Post } from '@nestjs/common';
import { City } from 'src/schemas/City.schema';
import { CityService } from './city.service';
import { Public } from 'src/auth/guards/JwtGuard';

@Controller('city')
@Public()
export class CityController {

    constructor(private cityService:CityService){

    }

    @Post()
    createCity(@Body() dto:City) {
      return this.cityService.createCity(dto)
    }


    @Get('getAll')
    getAll(@Body() dto:City) {
      return this.cityService.getAll()
    }


    @Post('createMany')
    createMany() {
      return this.cityService.createMany();
    }

}
