import styles from './page.module.css';

export default function ServicesPage() {
  const services = [
    { icon: '🚚', title: 'Same Day Delivery', desc: 'Order by noon, get it delivered by 6 PM the same day to your doorstep.' },
    { icon: '📦', title: 'Weekly Subscription', desc: 'Subscribe to weekly boxes of fresh produce. Customizable and cancelable anytime.' },
    { icon: '🌿', title: 'Organic Certification', desc: 'All products are certified organic and tested for purity and freshness daily.' },
    { icon: '🤝', title: 'Farmer Direct', desc: 'Connect directly with local farmers and know exactly where your food comes from.' },
    { icon: '💚', title: 'Quality Guarantee', desc: '100% satisfaction guaranteed. If you\'re not happy, we\'ll replace it or refund you.' },
    { icon: '📱', title: 'Easy Ordering', desc: 'Order through our website or app with a simple, intuitive checkout experience.' },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.subtitle}>Everything we do to bring fresh food to your table</p>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>{s.icon}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
