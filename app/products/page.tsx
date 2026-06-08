import Link from 'next/link';

const products = [
  {
    name: 'Baby Cot',
    price: '£60',
    category: 'Family',
    buyHref: '/buy/baby-cot',
    image: '/dinli-450-sale.PNG',
  },
  {
    name: 'Singer Sewing Machine',
    price: '£140',
    category: 'Home',
    buyHref: '/contact',
  },
  {
    name: 'Adjustable Dumbbell Set',
    price: '£95',
    category: 'Fitness',
    buyHref: '/contact',
  },
  {
    name: 'Garden Bar Unit',
    price: '£220',
    category: 'Garden',
    buyHref: '/contact',
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
              {product.image ? (
                <img className="productImage" src={product.image} alt={product.name} />
              ) : (
                <div className="productImage">Product image</div>
              )}
              <p className="gold"><strong>{product.category}</strong></p>
              <h3>{product.name}</h3>
              <p><strong>{product.price}</strong></p>
              {product.name === 'Baby Cot' ? (
                <Link className="button" href={product.buyHref}>Buy Now • £60</Link>
              ) : (
                <Link className="button" href="/contact">Enquire</Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
