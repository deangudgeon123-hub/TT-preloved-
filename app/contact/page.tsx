'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const honeypot = String(data.get('website') || '');

    if (honeypot) {
      setSent(true);
      return;
    }

    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');

    const subject = encodeURIComponent('TT Preloved enquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@ttpreloved.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
  }

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
        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '720px' }}>
          <div style={{ display: 'grid', gap: '18px' }}>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)' }}
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)' }}
            />

            <textarea
              name="message"
              placeholder="Tell us which item you're enquiring about"
              rows={6}
              required
              style={{ padding: '16px', borderRadius: '14px', border: '1px solid rgba(0,0,0,.12)', resize: 'vertical' }}
            />

            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: 'none' }}
            />

            <button type="submit" className="button" style={{ border: 'none', cursor: 'pointer' }}>
              Send enquiry
            </button>

            {sent && (
              <p className="gold"><strong>Your email app should open with the enquiry ready to send.</strong></p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
