import Link from 'next/link';

export default function Home() {
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

      <section className="hero">
        <div>
          <span className="kicker">Luxury resale • curated pieces • premium finds</span>

          <h1>
            A cleaner way to shop
            <br />
            preloved fashion.
          </h1>

          <p className="lead">
            TT Preloved brings together carefully selected second-life pieces with
            a premium boutique feel. Discover timeless finds, standout staples
            and quality products chosen with style in mind.
          </p>

          <div className="actions">
            <Link href="/products" className="button">Browse products</Link>
            <Link href="/contact" className="secondaryButton">Ask about an item</Link>
          </div>
        </div>

        <div className="heroCard">
          <div className="darkCard">
            <p className="gold">TT Signature Collection</p>
            <h2 style={{ fontSize: '42px', marginTop: '10px' }}>
              Premium pieces with personality.
            </h2>

            <p style={{ color: 'rgba(255,255,255,.72)', lineHeight: 1.8 }}>
              From everyday essentials to standout finds, every piece is presented
              with a refined luxury-inspired feel.
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
            Curated pieces, premium presentation and quality over quantity.
          </h2>

          <div className="grid3">
            <div className="card">
              <h3>Premium presentation</h3>
              <p>
                Clean styling, refined layouts and a luxury resale aesthetic.
              </p>
            </div>

            <div className="card">
              <h3>Carefully selected</h3>
              <p>
                Products chosen for quality, condition, wearability and timeless style.
              </p>
            </div>

            <div className="card">
              <h3>Simple enquiries</h3>
              <p>
                Ask about sizing, condition, availability or delivery before purchasing.
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
