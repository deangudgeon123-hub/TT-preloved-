import { NextRequest, NextResponse } from 'next/server';
import { generateOrderId, type CartItem } from '../../../lib/orders';
import { getProductById } from '../../../lib/products';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const items = body.items as CartItem[];

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Invalid cart.' }, { status: 400 });
    }

    let subtotal = 0;

    for (const item of items) {
      const product = getProductById(item.productId);

      if (!product) {
        return NextResponse.json({ error: 'Invalid product.' }, { status: 400 });
      }

      if (item.quantity < 1) {
        return NextResponse.json({ error: 'Invalid quantity.' }, { status: 400 });
      }

      subtotal += product.price * item.quantity;
    }

    const orderId = generateOrderId();

    return NextResponse.json({
      success: true,
      order: {
        id: orderId,
        subtotal,
        currency: 'GBP',
        status: 'pending',
      },
      redirectUrl: `/checkout/success?orderId=${orderId}`,
    });
  } catch {
    return NextResponse.json(
      { error: 'Unable to process checkout.' },
      { status: 500 }
    );
  }
}
