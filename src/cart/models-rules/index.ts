import { Cart, CartItem } from '../entities/cart.entity';

/**
 * @param {Cart} cart
 * @returns {number}
 */
export function calculateCartTotal(cart: Cart): number {
  return cart
    ? cart.items.reduce(
        (acc: number, { product: { price }, count }: CartItem) => {
          return (acc += price * count);
        },
        0,
      )
    : 0;
}
