import Link from 'next/link';

export default function ContactPage() {
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
        <p className="gold"><strong>Contact</strong></p>
        <h1>Enquire about a product.</h1>
        <p className="lead">
          Ask about availability, sizing, condition or delivery using the form below.
        </p>
      </section>

      <section className="section">
        <form className="card" style={{ maxWidth: '720px' }}>
          <div style={{ display: 'grid', gap: '18px' }}>
            <input
              type="text"
              placeholder="Your name"
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)' }}
            />

            <input
              type="email"
              placeholder="Your email"
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)' }}
            />

            <textarea
              placeholder="Tell us which item you're enquiring about"
              rows={6}
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)', resize: 'vertical' }}
            />

            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              style={{ display: 'none' }}
            />

            <button type="submit" className="button" style={{ border: 'none', cursor: 'pointer' }}>
              Send enquiry
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
