import Link from 'next/link';
import { products } from '@/data/products';
import styles from './page.module.css';

export default function DashboardPage() {
  const stats = [
    { icon: '🛍️', label: 'Total Products', value: products.length, color: '#4CAF50', bg: '#E8F5E9' },
    { icon: '📦', label: 'Orders This Week', value: 24, color: '#2196F3', bg: '#E3F2FD' },
    { icon: '⭐', label: 'Happy Customers', value: '500+', color: '#FF9800', bg: '#FFF3E0' },
    { icon: '💚', label: 'Fresh Categories', value: 3, color: '#9C27B0', bg: '#F3E5F5' },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <div>
          <h1 className={styles.title}>Good morning! 👋</h1>
          <p className={styles.subtitle}>Here's what's happening at Farm Fresh today</p>
        </div>
        <Link href="/products" className="btn btn-primary">
          View Products
        </Link>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard} style={{ '--s-color': s.color, '--s-bg': s.bg } as React.CSSProperties}>
            <div className={styles.statIcon}>{s.icon}</div>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.grid2}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Recent Products</h2>
          <div className={styles.productList}>
            {products.slice(0, 5).map(p => (
              <div key={p.id} className={styles.productRow}>
                <span className={styles.productEmoji}>{p.emoji}</span>
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{p.name}</span>
                  <span className={styles.productCat}>{p.category}</span>
                </div>
                <span className={styles.productPrice}>${p.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <Link href="/products" className={styles.viewAll}>View all products →</Link>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Quick Actions</h2>
          <div className={styles.actions}>
            {[
              { href: '/products', icon: '🛍️', label: 'Browse Products', desc: 'Explore fresh items' },
              { href: '/cart', icon: '🛒', label: 'View Cart', desc: 'Check your items' },
              { href: '/checkout', icon: '📦', label: 'Checkout', desc: 'Place your order' },
              { href: '/orders', icon: '📋', label: 'My Orders', desc: 'Track your orders' },
            ].map(a => (
              <Link key={a.href} href={a.href} className={styles.actionCard}>
                <span className={styles.actionIcon}>{a.icon}</span>
                <div>
                  <div className={styles.actionLabel}>{a.label}</div>
                  <div className={styles.actionDesc}>{a.desc}</div>
                </div>
                <span className={styles.actionArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
