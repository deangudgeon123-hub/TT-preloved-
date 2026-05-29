import { redirect } from 'next/navigation';
import { getStripe } from '../../../lib/stripe';

export default async function BuyBabyCotPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tt-preloved.vercel.app';
  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: 'price_1TcLZqGXBQ0NVEJpulgjqu0P',
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/success`,
    cancel_url: `${siteUrl}/cancel`,
  });

  if (!session.url) {
    redirect('/products');
  }

  redirect(session.url);
}
