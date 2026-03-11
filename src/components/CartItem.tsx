'use client';

import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';
import styles from './CartItem.module.css';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className={styles.item}>
      <div className={styles.imageWrap}>
        <span className={styles.emoji}>{product.emoji}</span>
      </div>

      <div className={styles.info}>
        <h4 className={styles.name}>{product.name}</h4>
        <span className={styles.unit}>{product.unit}</span>
        <span className={styles.unitPrice}>${product.price.toFixed(2)} each</span>
      </div>

      <div className={styles.qtyWrap}>
        <button
          className={styles.qtyBtn}
          onClick={() => updateQuantity(product.id, quantity - 1)}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className={styles.qty}>{quantity}</span>
        <button
          className={styles.qtyBtn}
          onClick={() => updateQuantity(product.id, quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className={styles.subtotal}>
        ${(product.price * quantity).toFixed(2)}
      </div>

      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(product.id)}
        aria-label="Remove item"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          <line x1="10" y1="11" x2="10" y2="17"/>
          <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
      </button>
    </div>
  );
}
