import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  PrimaryColumn,
  OneToOne,
} from 'typeorm';

export enum CartStatusEnum {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity({ name: 'carts' })
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  user_id!: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({
    type: 'enum',
    enum: CartStatusEnum,
    default: CartStatusEnum.OPEN,
  })
  status: CartStatusEnum;

  @OneToMany(
    () => CartItem,
    cartItem => cartItem.cart,
    { eager: true },
  )
  items!: CartItem[];

  @OneToOne(
    () => Order,
    order => order.cart,
  )
  order: Order;
}

@Entity({ name: 'products' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 2000 })
  description: string;

  @Column('decimal', { precision: 4, scale: 2 })
  price: number;

  @Column('varchar', { length: 100 })
  title: string;

  @OneToMany(
    () => CartItem,
    cartItem => cartItem.product,
  )
  cart_items: CartItem[];
}

@Entity({ name: 'cart_items' })
export class CartItem extends BaseEntity {
  @PrimaryColumn('uuid')
  cart_id: string;

  @PrimaryColumn('uuid')
  product_id: string;

  @ManyToOne(
    () => Cart,
    cart => cart.items,
    {
      cascade: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({
    name: 'cart_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'cart_items_cart_id_fkey',
  })
  cart!: Cart;

  @ManyToOne(
    () => Product,
    p => p.cart_items,
    { eager: true, cascade: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({
    name: 'product_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'cart_items_product_id_fkey',
  })
  product!: Product;

  @Column()
  count!: number;
}
