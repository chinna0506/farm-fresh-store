'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItemComponent from '@/components/CartItem';
import styles from './page.module.css';

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCart();

  const shipping = totalPrice > 30 ? 0 : 4.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🛒</div>
        <h2 className={styles.emptyTitle}>Your cart is empty</h2>
        <p className={styles.emptyText}>Add some fresh products to get started!</p>
        <Link href="/products" className="btn btn-primary btn-lg">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <h1 className={styles.title}>My Cart</h1>
        <button className="btn btn-danger btn-sm" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className={styles.layout}>
        <div className={styles.itemsSection}>
          <div className={styles.itemsHeader}>
            <span>Product</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <div className={styles.items}>
            {items.map(item => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </div>
          <Link href="/products" className={styles.continueShopping}>
            ← Continue Shopping
          </Link>
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>

          <div className={styles.summaryRows}>
            <div className={styles.summaryRow}>
              <span>Subtotal ({items.length} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span className={shipping === 0 ? styles.free : ''}>
                {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          {shipping > 0 && (
            <div className={styles.freeShipNote}>
              Add ${(30 - totalPrice).toFixed(2)} more for free shipping!
            </div>
          )}

          <div className={styles.divider} />

          <div className={styles.total}>
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>

          <Link href="/checkout" className={`btn btn-primary btn-full btn-lg ${styles.checkoutBtn}`}>
            Proceed to Checkout →
          </Link>

          <div className={styles.secureNote}>
            <span>🔒</span> Secure checkout · SSL encrypted
          </div>

          <div className={styles.payments}>
            {['💳', '🏧', '📱', '💵'].map((icon, i) => (
              <div key={i} className={styles.payIcon}>{icon}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
