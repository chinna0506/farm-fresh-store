'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

function ProductsContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat');
  const [activeCategory, setActiveCategory] = useState<string>(catParam || 'all');
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, sortBy, searchTerm]);

  return (
    <div className={styles.page}>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.title}>Our Products</h1>
          <p className={styles.subtitle}>Fresh organic produce from local farms</p>
        </div>
        <div className={styles.searchWrap}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
            <span className={styles.tabCount}>{products.length}</span>
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.emoji} {cat.name}
              <span className={styles.tabCount}>{cat.count}</span>
            </button>
          ))}
        </div>

        <select
          className={styles.sort}
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <span style={{ fontSize: 56 }}>🔍</span>
          <h3>No products found</h3>
          <p>Try adjusting your search or filters</p>
          <button className="btn btn-primary" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <p className={styles.resultCount}>{filtered.length} products found</p>
          <div className={styles.grid}>
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 60} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="page-inner" style={{ padding: 40 }}>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
