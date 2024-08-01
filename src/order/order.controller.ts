import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order } from 'src/schemas/Order.schema';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
 
     constructor(private orderService:OrderService){}

    @Post()
    createOrder(@Body() dto: Order) {
      return this.orderService.createOrder(dto);
    }


    @Get()
    getAll() {
      return this.orderService.getAll();
    }


}
