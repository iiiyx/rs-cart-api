import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Order } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Cart, CartStatusEnum } from 'src/cart/entities/cart.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    private dataSource: DataSource,
  ) {}

  async findById(orderId: string): Promise<Order> {
    return await this.ordersRepository.findOne({
      where: { id: orderId },
      relations: ['cart'],
    });
  }

  async create(data: Order): Promise<Order | Error> {
    const id = v4(v4());
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const order = await queryRunner.manager.save(
        this.ordersRepository.create({
          ...data,
          id,
          status: 'inProgress',
        }),
      );
      const upres = await queryRunner.manager.update(
        Cart,
        { id: order.cart_id, status: CartStatusEnum.OPEN },
        { status: CartStatusEnum.ORDERED },
      );
      if (!upres.affected) {
        throw new Error('Cart not found or not OPEN');
      }
      await queryRunner.commitTransaction();
      return order;
    } catch (e) {
      console.error(e);
      await queryRunner.rollbackTransaction();
      return e;
    }
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
