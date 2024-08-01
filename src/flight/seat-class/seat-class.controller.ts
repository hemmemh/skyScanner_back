import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get('getAll')
    getAll() {
      return this.seatClassService.getAll();
    }

    @Get('getOne/:id')
    getOne(@Param('id') id:string) {
      return this.seatClassService.getOne(id);
    }

    @Post('createMany')
    createMany() {
      return this.seatClassService.createMany();
    }
}
