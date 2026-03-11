'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);

  const cartItem = items.find(i => i.product.id === product.id);
  const inCart = cartItem !== undefined;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.imageWrap}>
        <div className={styles.emojiDisplay}>
          {product.emoji}
        </div>
        {product.badge && (
          <span className={`${styles.badge} ${styles[`badge${product.badge.replace(/\s+/g,'')}`] || styles.badgeDefault}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className={styles.discount}>-{discount}%</span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.category}>
          {product.category.replace('-', ' ')}
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.priceRow}>
          <div className={styles.prices}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <span className={styles.unit}>{product.unit}</span>
        </div>

        <button
          className={`${styles.addBtn} ${added ? styles.added : ''} ${inCart ? styles.inCart : ''}`}
          onClick={handleAddToCart}
        >
          {added ? (
            <>
              <span>✓</span> Added!
            </>
          ) : inCart ? (
            <>
              <span>+</span> Add More
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Add to Cart
            </>
          )}
        </button>

        {inCart && (
          <div className={styles.cartNote}>
            {cartItem!.quantity} in cart
          </div>
        )}
      </div>
    </div>
  );
}
