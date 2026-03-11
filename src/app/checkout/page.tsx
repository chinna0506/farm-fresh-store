'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CheckoutFormData } from '@/types';
import styles from './page.module.css';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice } = useCart();
  const [form, setForm] = useState<CheckoutFormData>({
    fullName: '', email: '', phone: '', address: '', city: '', zipCode: ''
  });
  const [errors, setErrors] = useState<Partial<CheckoutFormData>>({});

  const shipping = totalPrice > 30 ? 0 : 4.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  const validate = () => {
    const errs: Partial<CheckoutFormData> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!form.email.includes('@')) errs.email = 'Valid email is required';
    if (form.phone.length < 10) errs.phone = 'Valid phone number is required';
    if (!form.address.trim()) errs.address = 'Address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (form.zipCode.length < 4) errs.zipCode = 'Valid zip code is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (key: keyof CheckoutFormData, val: string) => {
    setForm(f => ({ ...f, [key]: val }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = () => {
    if (validate()) {
      sessionStorage.setItem('checkoutData', JSON.stringify(form));
      router.push('/payment');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.steps}>
          <span className={`${styles.step} ${styles.active}`}>1. Details</span>
          <span className={styles.stepDash}>→</span>
          <span className={styles.step}>2. Payment</span>
          <span className={styles.stepDash}>→</span>
          <span className={styles.step}>3. Confirm</span>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.form}>
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>
              <span className={styles.formIcon}>👤</span>
              Personal Information
            </h2>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name *</label>
                <input
                  className={`${styles.input} ${errors.fullName ? styles.error : ''}`}
                  type="text"
                  placeholder="John Doe"
                  value={form.fullName}
                  onChange={e => handleChange('fullName', e.target.value)}
                />
                {errors.fullName && <span className={styles.errorMsg}>{errors.fullName}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email Address *</label>
                <input
                  className={`${styles.input} ${errors.email ? styles.error : ''}`}
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                />
                {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Phone Number *</label>
              <input
                className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                type="tel"
                placeholder="+1 234 567 8900"
                value={form.phone}
                onChange={e => handleChange('phone', e.target.value)}
              />
              {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>
              <span className={styles.formIcon}>📍</span>
              Delivery Address
            </h2>

            <div className={styles.field}>
              <label className={styles.label}>Street Address *</label>
              <input
                className={`${styles.input} ${errors.address ? styles.error : ''}`}
                type="text"
                placeholder="123 Main Street, Apt 4B"
                value={form.address}
                onChange={e => handleChange('address', e.target.value)}
              />
              {errors.address && <span className={styles.errorMsg}>{errors.address}</span>}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>City *</label>
                <input
                  className={`${styles.input} ${errors.city ? styles.error : ''}`}
                  type="text"
                  placeholder="New York"
                  value={form.city}
                  onChange={e => handleChange('city', e.target.value)}
                />
                {errors.city && <span className={styles.errorMsg}>{errors.city}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Zip / Postal Code *</label>
                <input
                  className={`${styles.input} ${errors.zipCode ? styles.error : ''}`}
                  type="text"
                  placeholder="10001"
                  value={form.zipCode}
                  onChange={e => handleChange('zipCode', e.target.value)}
                />
                {errors.zipCode && <span className={styles.errorMsg}>{errors.zipCode}</span>}
              </div>
            </div>
          </div>

          <div className={styles.formActions}>
            <Link href="/cart" className="btn btn-outline">
              ← Back to Cart
            </Link>
            <button className="btn btn-primary btn-lg" onClick={handleSubmit}>
              Proceed to Payment →
            </button>
          </div>
        </div>

        <div className={styles.orderSummary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryItems}>
            {items.map(item => (
              <div key={item.product.id} className={styles.summaryItem}>
                <span className={styles.summaryEmoji}>{item.product.emoji}</span>
                <div className={styles.summaryInfo}>
                  <span className={styles.summaryName}>{item.product.name}</span>
                  <span className={styles.summaryQty}>x{item.quantity}</span>
                </div>
                <span className={styles.summaryPrice}>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.summaryDivider} />
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
          <div className={styles.summaryTotal}>
            <span>Total</span><strong>${finalTotal.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
