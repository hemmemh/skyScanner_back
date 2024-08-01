import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/schemas/Order.schema';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {

    constructor(
  
        @InjectRepository(Order)
        private OrderRepo: Repository<Order>,
      ) {}

    async createOrder(order:Order): Promise<Order> {
        return this.OrderRepo.save(order);
      }

      async getAll(): Promise<Order[]> {
        return this.OrderRepo.find({})
      }  
}
