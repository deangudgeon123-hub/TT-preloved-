export type Product = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  priceId: string;
  category: string;
  description: string;
  stock: number;
  active: boolean;
};

export const products: Product[] = [
  {
    id: 'baby-cot',
    name: 'Baby Cot',
    price: 6000,
    priceLabel: '£60',
    priceId: 'price_1TcLZqGXBQ0NVEJpulgjqu0P',
    category: 'Family',
    description: 'Quality preloved cot selected for practical family use.',
    stock: 1,
    active: true,
  },
  {
    id: 'singer-sewing-machine',
    name: 'Singer Sewing Machine',
    price: 14000,
    priceLabel: '£140',
    priceId: '',
    category: 'Home',
    description: 'A useful second-life sewing machine for home projects.',
    stock: 1,
    active: true,
  },
  {
    id: 'adjustable-dumbbell-set',
    name: 'Adjustable Dumbbell Set',
    price: 9500,
    priceLabel: '£95',
    priceId: '',
    category: 'Fitness',
    description: 'Compact fitness kit for home training.',
    stock: 1,
    active: true,
  },
  {
    id: 'garden-bar-unit',
    name: 'Garden Bar Unit',
    price: 22000,
    priceLabel: '£220',
    priceId: '',
    category: 'Garden',
    description: 'A standout garden item ready to be rehomed.',
    stock: 1,
    active: true,
  },
];

export function getActiveProducts() {
  return products.filter((product) => product.active);
}

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId && product.active) ?? null;
}

export function getProductByPriceId(priceId: string) {
  return products.find((product) => product.priceId === priceId && product.active) ?? null;
}
