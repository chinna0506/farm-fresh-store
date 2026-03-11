import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Carrots',
    price: 2.49,
    originalPrice: 3.29,
    category: 'vegetables',
    image: '',
    emoji: '🥕',
    description: 'Crisp, sweet farm-fresh carrots harvested daily',
    unit: 'per kg',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Ripe Tomatoes',
    price: 3.99,
    originalPrice: 4.99,
    category: 'vegetables',
    image: '',
    emoji: '🍅',
    description: 'Sun-ripened tomatoes bursting with flavor',
    unit: 'per kg',
    badge: 'Organic'
  },
  {
    id: 3,
    name: 'Farm Potatoes',
    price: 1.89,
    category: 'vegetables',
    image: '',
    emoji: '🥔',
    description: 'Earthy golden potatoes, perfect for any dish',
    unit: 'per kg'
  },
  {
    id: 4,
    name: 'Fresh Milk',
    price: 4.29,
    originalPrice: 4.99,
    category: 'milk-products',
    image: '',
    emoji: '🥛',
    description: 'Pure whole milk from grass-fed cows',
    unit: 'per liter',
    badge: 'Fresh Daily'
  },
  {
    id: 5,
    name: 'Artisan Cheese',
    price: 8.99,
    category: 'milk-products',
    image: '',
    emoji: '🧀',
    description: 'Hand-crafted aged cheese with rich flavor',
    unit: 'per 250g',
    badge: 'Artisan'
  },
  {
    id: 6,
    name: 'Farm Butter',
    price: 5.49,
    originalPrice: 6.29,
    category: 'milk-products',
    image: '',
    emoji: '🧈',
    description: 'Creamy cultured butter churned fresh daily',
    unit: 'per 200g'
  },
  {
    id: 7,
    name: 'White Rice',
    price: 6.99,
    category: 'rice-products',
    image: '',
    emoji: '🍚',
    description: 'Premium long-grain white rice, fluffy & light',
    unit: 'per 2kg'
  },
  {
    id: 8,
    name: 'Basmati Rice',
    price: 9.99,
    originalPrice: 11.49,
    category: 'rice-products',
    image: '',
    emoji: '🌾',
    description: 'Aged aromatic basmati with delicate fragrance',
    unit: 'per 2kg',
    badge: 'Premium'
  },
  {
    id: 9,
    name: 'Brown Rice',
    price: 7.49,
    category: 'rice-products',
    image: '',
    emoji: '🌿',
    description: 'Wholesome nutty brown rice, rich in fiber',
    unit: 'per 2kg',
    badge: 'Healthy'
  }
];

export const categories = [
  { id: 'vegetables', name: 'Vegetables', emoji: '🥦', count: 3, color: '#4CAF50', bg: '#E8F5E9' },
  { id: 'milk-products', name: 'Milk Products', emoji: '🥛', count: 3, color: '#2196F3', bg: '#E3F2FD' },
  { id: 'rice-products', name: 'Rice Products', emoji: '🌾', count: 3, color: '#FF9800', bg: '#FFF3E0' }
];
