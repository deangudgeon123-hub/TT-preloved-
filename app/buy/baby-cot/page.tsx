import Link from 'next/link';

export default function BuyBabyCotPage() {
  return (
    <main className="site">
      <section className="pageHeader">
        <h1>Baby Cot</h1>
        <p className="lead">Preparing checkout integration.</p>
        <p><strong>Price: £60</strong></p>
        <Link href="/contact" className="button">Continue Purchase</Link>
      </section>
    </main>
  );
}
