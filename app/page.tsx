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
          <span className="kicker">Home • lifestyle • garden • fitness</span>

          <h1>
            A cleaner way to shop
            <br />
            preloved finds.
          </h1>

          <p className="lead">
            TT Preloved brings together carefully selected second-life home and lifestyle pieces with
            a premium boutique feel. Discover useful, standout and quality products chosen with care.
          </p>

          <div className="actions">
            <Link href="/products" className="button">Browse products</Link>
            <Link href="/contact" className="secondaryButton">Ask about an item</Link>
          </div>
        </div>

        <div className="heroCard">
          <div className="darkCard">
            <p className="gold">TT Signature Finds</p>
            <h2 style={{ fontSize: '42px', marginTop: '10px' }}>
              Quality pieces with personality.
            </h2>

            <p style={{ color: 'rgba(255,255,255,.72)', lineHeight: 1.8 }}>
              From home essentials to garden bars, sewing machines, fitness kit and family items,
              every piece is presented with a refined luxury-inspired feel.
            </p>

            <div style={{ marginTop: '28px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="secondaryButton">Home</span>
              <span className="secondaryButton">Garden</span>
              <span className="secondaryButton">Fitness</span>
            </div>
          </div>
        </div>
      </section>

      <section className="whiteSection">
        <div className="section">
          <p className="gold"><strong>Why shop TT Preloved?</strong></p>

          <h2 style={{ fontSize: '48px', maxWidth: '760px' }}>
            Curated home and lifestyle pieces, premium presentation and quality over quantity.
          </h2>

          <div className="grid3">
            <div className="card">
              <h3>Worth rehoming</h3>
              <p>
                Quality second-life products selected for usefulness, style and longevity.
              </p>
            </div>

            <div className="card">
              <h3>Carefully selected</h3>
              <p>
                Products chosen for quality, condition, usefulness and lasting value.
              </p>
            </div>

            <div className="card">
              <h3>Simple enquiries</h3>
              <p>
                Ask about condition, measurements, availability or delivery before purchasing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="gold"><strong>TT Preloved</strong></p>
        <h2 style={{ fontFamily: 'cursive', fontWeight: 400, fontSize: '52px' }}>
          Quality finds. Second-life prices.
        </h2>

        <Link href="/products" className="button">
          Explore products
        </Link>
      </footer>
    </main>
  );
}
