'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import SuccessModal from '@/components/SuccessModal';
import styles from './page.module.css';

type PaymentMethod = 'credit' | 'debit' | 'upi' | 'cod';

export default function PaymentPage() {
  const { totalPrice, clearCart } = useCart();
  const [selected, setSelected] = useState<PaymentMethod>('credit');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardNum, setCardNum] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');

  const shipping = totalPrice > 30 ? 0 : 4.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  const formatCard = (val: string) =>
    val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) return `${digits.slice(0,2)}/${digits.slice(2)}`;
    return digits;
  };

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      clearCart();
    }, 2000);
  };

  const paymentOptions: { id: PaymentMethod; label: string; icon: string; desc: string }[] = [
    { id: 'credit', label: 'Credit Card', icon: '💳', desc: 'Visa, Mastercard, Amex' },
    { id: 'debit', label: 'Debit Card', icon: '🏧', desc: 'All major bank cards' },
    { id: 'upi', label: 'UPI Payment', icon: '📱', desc: 'GPay, PhonePe, Paytm' },
    { id: 'cod', label: 'Cash on Delivery', icon: '💵', desc: 'Pay when you receive' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <h1 className={styles.title}>Payment</h1>
        <div className={styles.steps}>
          <span className={styles.stepDone}>1. Details ✓</span>
          <span className={styles.stepDash}>→</span>
          <span className={`${styles.step} ${styles.active}`}>2. Payment</span>
          <span className={styles.stepDash}>→</span>
          <span className={styles.step}>3. Confirm</span>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.methods}>
          <h2 className={styles.sectionTitle}>Select Payment Method</h2>

          <div className={styles.optionsList}>
            {paymentOptions.map(opt => (
              <button
                key={opt.id}
                className={`${styles.option} ${selected === opt.id ? styles.selected : ''}`}
                onClick={() => setSelected(opt.id)}
              >
                <div className={styles.optionLeft}>
                  <span className={styles.optionIcon}>{opt.icon}</span>
                  <div>
                    <div className={styles.optionLabel}>{opt.label}</div>
                    <div className={styles.optionDesc}>{opt.desc}</div>
                  </div>
                </div>
                <div className={`${styles.radio} ${selected === opt.id ? styles.radioSelected : ''}`}>
                  {selected === opt.id && <div className={styles.radioDot} />}
                </div>
              </button>
            ))}
          </div>

          {(selected === 'credit' || selected === 'debit') && (
            <div className={styles.cardForm}>
              <h3 className={styles.cardTitle}>Card Details</h3>
              <div className={styles.field}>
                <label className={styles.label}>Card Number</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNum}
                  onChange={e => setCardNum(formatCard(e.target.value))}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Expiry Date</label>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={e => setExpiry(formatExpiry(e.target.value))}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>CVV</label>
                  <input
                    className={styles.input}
                    type="password"
                    placeholder="•••"
                    maxLength={4}
                    value={cvv}
                    onChange={e => setCvv(e.target.value.replace(/\D/g,'').slice(0,4))}
                  />
                </div>
              </div>
            </div>
          )}

          {selected === 'upi' && (
            <div className={styles.cardForm}>
              <h3 className={styles.cardTitle}>UPI Details</h3>
              <div className={styles.field}>
                <label className={styles.label}>UPI ID</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={e => setUpiId(e.target.value)}
                />
              </div>
              <div className={styles.upiApps}>
                {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                  <div key={app} className={styles.upiApp}>{app}</div>
                ))}
              </div>
            </div>
          )}

          {selected === 'cod' && (
            <div className={styles.codNote}>
              <span style={{ fontSize: 32 }}>💵</span>
              <div>
                <h4>Cash on Delivery</h4>
                <p>Pay with cash when your fresh produce arrives at your doorstep. Our delivery agent will collect payment.</p>
              </div>
            </div>
          )}

          <div className={styles.secureRow}>
            <span>🔒</span>
            <span>Your payment information is 256-bit SSL encrypted and secure</span>
          </div>
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Total</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span style={{ color: shipping === 0 ? 'var(--green-mid)' : '' }}>
              {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          <div className={styles.summaryRow}>
            <span>Tax</span><span>${tax.toFixed(2)}</span>
          </div>
          <div className={styles.summaryDivider} />
          <div className={styles.total}>
            <span>Total Amount</span>
            <strong>${finalTotal.toFixed(2)}</strong>
          </div>

          <button
            className={`${styles.payBtn} ${loading ? styles.loading : ''}`}
            onClick={handlePay}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner} />
                Processing...
              </>
            ) : (
              <>
                Pay ${finalTotal.toFixed(2)} →
              </>
            )}
          </button>

          <Link href="/checkout" className={styles.back}>
            ← Edit Details
          </Link>
        </div>
      </div>

      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
