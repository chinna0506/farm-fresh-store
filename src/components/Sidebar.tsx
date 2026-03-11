'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
}

export default function Sidebar({ collapsed }: SidebarProps) {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [categoriesOpen, setCategoriesOpen] = useState(true);

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/products', label: 'Products', icon: '🛍️' },
    { href: '/orders', label: 'Orders', icon: '📦' },
    { href: '/cart', label: 'Cart', icon: '🛒', badge: totalItems > 0 ? totalItems : undefined },
  ];

  const categories = [
    { href: '/products?cat=vegetables', label: 'Vegetables', icon: '🥦' },
    { href: '/products?cat=milk-products', label: 'Milk Products', icon: '🥛' },
    { href: '/products?cat=rice-products', label: 'Rice Products', icon: '🌾' },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.section}>
        <span className={styles.sectionLabel}>Menu</span>
        <nav className={styles.nav}>
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.item} ${pathname === item.href || pathname.startsWith(item.href + '?') ? styles.active : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <span className={styles.itemIcon}>{item.icon}</span>
              {!collapsed && (
                <>
                  <span className={styles.itemLabel}>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className={styles.itemBadge}>{item.badge}</span>
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {!collapsed && (
        <div className={styles.section}>
          <button
            className={styles.sectionToggle}
            onClick={() => setCategoriesOpen(o => !o)}
          >
            <span className={styles.sectionLabel}>Categories</span>
            <span className={`${styles.chevron} ${categoriesOpen ? styles.chevronOpen : ''}`}>
              ›
            </span>
          </button>
          {categoriesOpen && (
            <nav className={styles.nav}>
              {categories.map(cat => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`${styles.item} ${styles.subItem} ${pathname + (typeof window !== 'undefined' ? window.location.search : '') === cat.href ? styles.active : ''}`}
                >
                  <span className={styles.itemIcon}>{cat.icon}</span>
                  <span className={styles.itemLabel}>{cat.label}</span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      )}

      {!collapsed && (
        <div className={styles.section}>
          <Link href="/services" className={`${styles.item} ${pathname === '/services' ? styles.active : ''}`}>
            <span className={styles.itemIcon}>⭐</span>
            <span className={styles.itemLabel}>Services</span>
          </Link>
        </div>
      )}

      {!collapsed && (
        <div className={styles.proCard}>
          <div className={styles.proEmoji}>🌱</div>
          <p className={styles.proTitle}>Go Premium</p>
          <p className={styles.proText}>Get free delivery on all orders</p>
          <button className={styles.proBtn}>Upgrade</button>
        </div>
      )}
    </aside>
  );
}
