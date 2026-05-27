import Link from 'next/link';

const products = [
  {
    name: 'Premium Trainers',
    price: '£65',
    category: 'Footwear',
  },
  {
    name: 'Designer Handbag',
    price: '£120',
    category: 'Accessories',
  },
  {
    name: 'Luxury Jacket',
    price: '£90',
    category: 'Clothing',
  },
];

export default function ProductsPage() {
  return (
    <main className="site">
      <nav className="nav">
        <Link href="/" className="logo">
          <span className="logoMark">TT</span>
          <span className="logoScript">Preloved</span>
        </Link>

        <div className="navLinks">
          <Link href="/products">Products</Link>
        </div>
      </nav>

      <section className="pageHeader">
        <p className="gold"><strong>Products</strong></p>
        <h1>Latest preloved finds.</h1>
        <p className="lead">
          Replace these placeholders with real products, photos and descriptions.
        </p>
      </section>

      <section className="section">
        <div className="grid3">
          {products.map((product) => (
            <article key={product.name} className="productCard">
              <div className="productImage">Product image</div>
              <p className="gold"><strong>{product.category}</strong></p>
              <h3>{product.name}</h3>
              <p><strong>{product.price}</strong></p>
              <a className="button" href="mailto:hello@ttpreloved.co.uk">Enquire</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
