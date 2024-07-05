import { Body, Controller, Post } from '@nestjs/common';
import { AirBus } from 'src/schemas/AirBus.schema';
import { AirbusService } from './airbus.service';
import { Public } from 'src/auth/guards/JwtGuard';

@Controller('airbus')
@Public()
export class AirbusController {


    constructor(private airbusService: AirbusService) {}


    @Post()
    createAirBus(@Body() dto: AirBus) {
      return this.airbusService.createAirBus(dto);
    }


    @Post('createMany')
    createManyAirBus() {
      return this.airbusService.createManyAirBus();
    }
}
