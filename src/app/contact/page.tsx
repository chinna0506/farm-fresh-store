'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>We'd love to hear from you!</p>

      <div className={styles.layout}>
        {sent ? (
          <div className={styles.success}>
            <span style={{ fontSize: 48 }}>✅</span>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. We'll respond within 24 hours.</p>
            <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
          </div>
        ) : (
          <div className={styles.form}>
            <div className={styles.field}>
              <label>Name</label>
              <input className={styles.input} type="text" placeholder="Your name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} />
            </div>
            <div className={styles.field}>
              <label>Email</label>
              <input className={styles.input} type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
            </div>
            <div className={styles.field}>
              <label>Message</label>
              <textarea className={styles.textarea} placeholder="How can we help?" rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} />
            </div>
            <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Send Message</button>
          </div>
        )}

        <div className={styles.info}>
          {[
            { icon: '📍', label: 'Address', value: '123 Farm Road, Green Valley, CA 90210' },
            { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
            { icon: '📧', label: 'Email', value: 'hello@farmfresh.com' },
            { icon: '⏰', label: 'Hours', value: 'Mon-Sat: 7 AM – 8 PM' },
          ].map(info => (
            <div key={info.label} className={styles.infoRow}>
              <span className={styles.infoIcon}>{info.icon}</span>
              <div>
                <div className={styles.infoLabel}>{info.label}</div>
                <div className={styles.infoValue}>{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
