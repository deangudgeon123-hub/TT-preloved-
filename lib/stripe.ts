import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY;

if (!key) {
  throw new Error('Stripe is not configured.');
}

export const stripe = new Stripe(key);
