'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './SuccessModal.module.css';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = 'Payment Successful!',
  message = 'Your order has been placed. We\'ll deliver fresh produce to your door!'
}: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.successRing}>
          <div className={styles.checkCircle}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <div className={styles.confetti}>
          {['🎉', '✨', '🌿', '🛍️', '⭐'].map((e, i) => (
            <span key={i} className={styles.confettiItem} style={{ animationDelay: `${i * 0.12}s` }}>
              {e}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.orderInfo}>
          <div className={styles.orderRow}>
            <span>Order ID</span>
            <strong>FF-{Math.random().toString(36).substring(2, 8).toUpperCase()}</strong>
          </div>
          <div className={styles.orderRow}>
            <span>Estimated Delivery</span>
            <strong>2-3 Business Days</strong>
          </div>
          <div className={styles.orderRow}>
            <span>Status</span>
            <strong className={styles.statusBadge}>✓ Confirmed</strong>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/products" className={styles.shopBtn} onClick={onClose}>
            Continue Shopping
          </Link>
          <Link href="/orders" className={styles.ordersBtn} onClick={onClose}>
            View Orders
          </Link>
        </div>

        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
}
