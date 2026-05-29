import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tt-preloved.vercel.app';

  try {
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
      return NextResponse.redirect(`${siteUrl}/products`);
    }

    return NextResponse.redirect(session.url);
  } catch {
    return NextResponse.redirect(`${siteUrl}/products`);
  }
}
