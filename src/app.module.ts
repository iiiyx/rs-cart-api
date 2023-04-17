import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { Cart, CartItem, Product } from './cart/entities/cart.entity';
import { Order } from './order/entities/order.entity';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: +process.env.PG_PORT,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_NAME,
      entities: [Cart, CartItem, Product, Order],
      synchronize: true, // ?
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
