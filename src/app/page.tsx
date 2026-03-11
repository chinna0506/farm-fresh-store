import Link from 'next/link';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function HomePage() {
  const featured = products.filter(p => p.badge).slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>🌿 100% Organic & Fresh</span>
          <h1 className={styles.heroTitle}>
            Nature's Best,<br />
            <span className={styles.heroAccent}>Delivered Fresh</span>
          </h1>
          <p className={styles.heroDesc}>
            Farm-to-table goodness. Premium vegetables, dairy & grains sourced directly from local farms every morning.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products" className="btn btn-primary btn-lg">
              Shop Now →
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg">
              Our Story
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <strong>500+</strong>
              <span>Happy Customers</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <strong>9+</strong>
              <span>Fresh Products</span>
            </div>
            <div className={styles.statDiv} />
            <div className={styles.stat}>
              <strong>100%</strong>
              <span>Organic</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroGlobe}>
            {['🥕', '🍅', '🥛', '🌾', '🧀', '🥔'].map((e, i) => (
              <div key={i} className={styles.orbitItem} style={{ '--i': i } as React.CSSProperties}>
                {e}
              </div>
            ))}
            <div className={styles.heroCenter}>🌿</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <Link href="/products" className={styles.seeAll}>View all →</Link>
        </div>
        <div className={styles.catGrid}>
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/products?cat=${cat.id}`}
              className={styles.catCard}
              style={{ '--cat-color': cat.color, '--cat-bg': cat.bg } as React.CSSProperties}
            >
              <span className={styles.catEmoji}>{cat.emoji}</span>
              <div>
                <h3 className={styles.catName}>{cat.name}</h3>
                <span className={styles.catCount}>{cat.count} products</span>
              </div>
              <span className={styles.catArrow}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <Link href="/products" className={styles.seeAll}>View all →</Link>
        </div>
        <div className={styles.productsGrid}>
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className={styles.promoBanner}>
        <div className={styles.promoContent}>
          <h2 className={styles.promoTitle}>Free Delivery on Orders Over $30</h2>
          <p className={styles.promoText}>Use code FRESH10 for an extra 10% off your first order</p>
          <Link href="/products" className="btn btn-amber btn-lg">
            Claim Offer 🎁
          </Link>
        </div>
        <div className={styles.promoEmoji}>🚚</div>
      </section>

      {/* Why Us */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: 24 }}>Why Farm Fresh?</h2>
        <div className={styles.featuresGrid}>
          {[
            { icon: '🌱', title: 'Always Organic', desc: 'Certified organic produce with no harmful pesticides' },
            { icon: '⚡', title: 'Same Day Fresh', desc: 'Harvested in the morning, at your door by evening' },
            { icon: '🤝', title: 'Local Farmers', desc: 'Supporting local agriculture and sustainable farming' },
            { icon: '💚', title: 'Guaranteed Quality', desc: '100% satisfaction guaranteed or your money back' },
          ].map((f, i) => (
            <div key={i} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
