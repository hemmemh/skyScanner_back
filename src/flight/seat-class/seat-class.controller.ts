import { Body, Controller, Post } from '@nestjs/common';
import { SeatClassService } from './seat-class.service';
import { SeatClass } from 'src/schemas/SeatClass.schema';
import { Public } from 'src/auth/guards/JwtGuard';



@Controller('seat-class')
@Public()
export class SeatClassController {

    constructor(private seatClassService: SeatClassService) {}


    @Post()
    createSeatClass(@Body() dto: SeatClass) {
      return this.seatClassService.createSeatClass(dto);
    }

    @Post('createMany')
    createMany() {
      return this.seatClassService.createMany();
    }
}
