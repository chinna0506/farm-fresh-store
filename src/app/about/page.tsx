import styles from './page.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.heroEmoji}>🌿</span>
        <h1 className={styles.title}>Our Story</h1>
        <p className={styles.lead}>
          Farm Fresh was founded in 2020 with a simple mission: connect people with the freshest, healthiest food straight from local farms.
        </p>
      </div>

      <div className={styles.body}>
        <div className={styles.textBlock}>
          <h2 className={styles.h2}>Who We Are</h2>
          <p>We are a passionate team of food lovers, farmers, and tech enthusiasts who believe everyone deserves access to fresh, organic produce. We work directly with over 50 local farms to source the best seasonal fruits, vegetables, dairy, and grains.</p>
        </div>

        <div className={styles.valuesGrid}>
          {[
            { icon: '🌱', label: 'Sustainable' },
            { icon: '🤝', label: 'Community' },
            { icon: '💚', label: 'Healthy' },
            { icon: '🌍', label: 'Eco-Friendly' },
          ].map(v => (
            <div key={v.label} className={styles.valueCard}>
              <span>{v.icon}</span>
              <strong>{v.label}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
