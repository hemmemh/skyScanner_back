import { Body, Controller, Post } from '@nestjs/common';
import { AirBus } from 'src/schemas/AirBus.schema';
import { AirbusService } from './airbus.service';

@Controller('airbus')
export class AirbusController {


    constructor(private airbusService: AirbusService) {}


    @Post('/create')
    createAirBus(@Body() dto: AirBus) {
      return this.airbusService.createAirBus(dto);
    }
}
