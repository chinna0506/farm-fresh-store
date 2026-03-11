import Link from 'next/link';
import styles from './page.module.css';

export default function OrdersPage() {
  const mockOrders = [
    { id: 'FF-A3K2P', date: 'March 10, 2026', status: 'Delivered', total: 28.45, items: ['🥕 Carrots', '🍅 Tomatoes', '🥛 Milk'] },
    { id: 'FF-B7R9Q', date: 'March 8, 2026', status: 'In Transit', total: 42.10, items: ['🧀 Cheese', '🌾 Basmati Rice'] },
    { id: 'FF-C1X5W', date: 'March 5, 2026', status: 'Processing', total: 15.99, items: ['🥔 Potatoes', '🧈 Butter'] },
  ];

  const statusColors: Record<string, string> = {
    'Delivered': '#38a169',
    'In Transit': '#3182ce',
    'Processing': '#d69e2e',
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>My Orders</h1>
      <p className={styles.subtitle}>Track and manage your orders</p>

      <div className={styles.orderList}>
        {mockOrders.map(order => (
          <div key={order.id} className={styles.orderCard}>
            <div className={styles.orderHead}>
              <div>
                <span className={styles.orderId}>{order.id}</span>
                <span className={styles.orderDate}>{order.date}</span>
              </div>
              <span
                className={styles.orderStatus}
                style={{ background: `${statusColors[order.status]}20`, color: statusColors[order.status] }}
              >
                {order.status}
              </span>
            </div>
            <div className={styles.orderItems}>
              {order.items.map((item, i) => <span key={i} className={styles.orderItem}>{item}</span>)}
            </div>
            <div className={styles.orderFoot}>
              <strong>${order.total.toFixed(2)}</strong>
              <Link href="/products" className="btn btn-outline btn-sm">Reorder</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
