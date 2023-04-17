import { Cart, CartItem } from 'src/cart/entities/cart.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'orders' })
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  user_id!: string;

  @Column('uuid')
  cart_id!: string;

  @OneToOne(
    () => Cart,
    cart => cart.order,
    { eager: true, cascade: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({
    name: 'cart_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'orders_cart_id_fkey',
  })
  cart!: Cart;

  @Column('simple-json', { nullable: true })
  payment: {
    type: string;
    address?: any;
    creditCard?: any;
  };

  @Column('simple-json', { nullable: true })
  delivery: {
    type: string;
    address: any;
  };

  @Column('varchar', { length: 2000 })
  comments: string;

  @Column('varchar', { length: 10 })
  status!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total!: number;
}
