export type CartItem = {
  productId: string;
  quantity: number;
};

export type OrderStatus = 'pending' | 'paid' | 'cancelled';

export type Order = {
  id: string;
  items: CartItem[];
  subtotal: number;
  currency: string;
  status: OrderStatus;
  createdAt: string;
};

export function generateOrderId() {
  return `ttp_${crypto.randomUUID().replace(/-/g, '').slice(0, 18)}`;
}
