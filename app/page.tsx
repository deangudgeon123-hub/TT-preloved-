import Link from 'next/link';

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <Link href="/" className="logo">TT Preloved</Link>
        <div className="navLinks">
          <Link href="/products">Products</Link>
          <a href="mailto:hello@ttpreloved.co.uk" className="button">Enquire</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <span className="kicker">High-end finds. Preloved prices.</span>
          <h1>Premium preloved pieces, carefully selected.</h1>
          <p className="lead">
            TT Preloved is a curated selling page for quality second-life items,
            including designer-style accessories, premium trainers, tech, clothing
            and standout everyday pieces.
          </p>
          <div className="actions">
            <Link href="/products" className="button">View products</Link>
            <a href="mailto:hello@ttpreloved.co.uk" className="secondaryButton">Ask about an item</a>
          </div>
        </div>

        <div className="heroCard">
          <div className="darkCard">
            <p className="gold">Curated resale</p>
            <h2>Quality products with a second life.</h2>
            <p>
              Start with simple enquiries, build trust, then add checkout and
              individual product pages once stock grows.
            </p>
          </div>
        </div>
      </section>

      <section className="whiteSection">
        <div className="section">
          <p className="gold"><strong>Why TT Preloved?</strong></p>
          <h2>Built around trust, quality and simple buying.</h2>
          <div className="grid3">
            <div className="card">
              <h3>Quality checked</h3>
              <p>Items are selected before listing so the site feels premium from day one.</p>
            </div>
            <div className="card">
              <h3>High-end feel</h3>
              <p>A clean, luxury-style design for decent products without messy clutter.</p>
            </div>
            <div className="card">
              <h3>Easy enquiries</h3>
              <p>Customers can message first, ask questions and buy with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="gold"><strong>TT Preloved</strong></p>
        <h2>Premium pieces. Second-life prices.</h2>
        <Link href="/products" className="button">Browse products</Link>
      </footer>
    </main>
  );
}
