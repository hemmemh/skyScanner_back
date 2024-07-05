import { Body, Controller, Post } from '@nestjs/common';
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
        console.log('dto', dto);
        
      return this.cityService.createCity(dto)
    }


    @Post('createMany')
    createMany() {
      return this.cityService.createMany();
    }

}
