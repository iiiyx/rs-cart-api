import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Order } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async findById(orderId: string): Promise<Order> {
    return await this.ordersRepository.findOne({
      where: { id: orderId },
      relations: ['cart'],
    });
  }

  async create(data: Partial<Order>): Promise<Order> {
    const id = v4(v4());

    return await this.ordersRepository.save<Order>(
      this.ordersRepository.create({
        ...data,
        id,
        status: 'inProgress',
      }),
    );
  }

  async update(orderId: string, data: Order) {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }

    return await this.ordersRepository.save({
      ...data,
      id: orderId,
    });
  }
}
