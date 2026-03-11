export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'vegetables' | 'milk-products' | 'rice-products';
  image: string;
  emoji: string;
  description: string;
  unit: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}
