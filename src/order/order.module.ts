import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from 'src/schemas/Order.schema';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports:[
    TypeOrmModule.forFeature([
       Order
     ]),
  ],
})
export class OrderModule {}
