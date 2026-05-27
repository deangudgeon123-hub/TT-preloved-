import Link from 'next/link';

const products = [
  {
    name: 'Wooden Cot',
    price: '£85',
    category: 'Family',
  },
  {
    name: 'Singer Sewing Machine',
    price: '£140',
    category: 'Home',
  },
  {
    name: 'Adjustable Dumbbell Set',
    price: '£95',
    category: 'Fitness',
  },
  {
    name: 'Garden Bar Unit',
    price: '£220',
    category: 'Garden',
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
          <Link href="/contact" className="button">Enquire</Link>
        </div>
      </nav>

      <section className="pageHeader">
        <p className="gold"><strong>Products</strong></p>
        <h1>Latest preloved finds.</h1>
        <p className="lead">
          Explore curated home, garden, family and lifestyle products.
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
              <Link className="button" href="/contact">Enquire</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
