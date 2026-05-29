import { redirect } from 'next/navigation';
import { stripe } from '../../../../lib/stripe';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tt-preloved.vercel.app';

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
