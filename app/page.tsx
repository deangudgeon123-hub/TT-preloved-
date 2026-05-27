import Link from 'next/link';

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <div>
          <Link href="/" className="logo">
            TT <span style={{ fontFamily: 'cursive', fontWeight: 400 }}>Preloved</span>
          </Link>
        </div>

        <div className="navLinks">
          <Link href="/products">Products</Link>
          <a href="mailto:hello@ttpreloved.co.uk" className="button">Enquire</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <span className="kicker">Luxury resale • curated pieces • premium finds</span>

          <h1>
            A cleaner way to shop
            <br />
            preloved fashion.
          </h1>

          <p className="lead">
            TT Preloved brings together premium second-life pieces with a luxury,
            boutique feel. Carefully selected products, cleaner presentation and
            timeless styling.
          </p>

          <div className="actions">
            <Link href="/products" className="button">Browse products</Link>
            <a href="mailto:hello@ttpreloved.co.uk" className="secondaryButton">
              Contact us
            </a>
          </div>
        </div>

        <div className="heroCard">
          <div className="darkCard">
            <p className="gold">TT Signature Collection</p>
            <h2 style={{ fontSize: '42px', marginTop: '10px' }}>
              Premium pieces with personality.
            </h2>

            <p style={{ color: 'rgba(255,255,255,.72)', lineHeight: 1.8 }}>
              Luxury-inspired styling, standout finds and a cleaner shopping
              experience built for modern resale.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="secondaryButton">Designer</span>
              <span className="secondaryButton">Streetwear</span>
              <span className="secondaryButton">Accessories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="whiteSection">
        <div className="section">
          <p className="gold"><strong>Why shop TT Preloved?</strong></p>

          <h2 style={{ fontSize: '48px', maxWidth: '760px' }}>
            Minimal, premium and built around quality over clutter.
          </h2>

          <div className="grid3">
            <div className="card">
              <h3>Luxury aesthetic</h3>
              <p>
                Cleaner layouts, softer colours and premium presentation inspired
                by high-end fashion retailers.
              </p>
            </div>

            <div className="card">
              <h3>Curated stock</h3>
              <p>
                Hand-picked products and quality-first listings instead of endless
                low-quality clutter.
              </p>
            </div>

            <div className="card">
              <h3>Built to grow</h3>
              <p>
                Starting simple with enquiries and evolving into a full resale
                platform over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="gold"><strong>TT Preloved</strong></p>
        <h2 style={{ fontFamily: 'cursive', fontWeight: 400, fontSize: '52px' }}>
          Premium pieces. Second-life prices.
        </h2>

        <Link href="/products" className="button">
          Explore products
        </Link>
      </footer>
    </main>
  );
}
