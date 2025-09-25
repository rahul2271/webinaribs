import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone } = await req.json();

    // Create Order on Cashfree
    const response = await axios.post(
      "https://api.cashfree.com/pg/orders", // PRODUCTION endpoint
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: customerPhone,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
        },
        order_note: "Webinar Registration - Yukti Herbs",
        order_meta: {
          return_url: `https://webinars.yuktiherbs.com/payment-success?order_id=${orderId}`,
          notify_url: "https://webinars.yuktiherbs.com/api/payment-webhook",
        },
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "x-api-version": "2022-09-01",
          "Content-Type": "application/json",
        },
      }
    );

    // Extract payment link
    const paymentLink = response.data.payment_link;

    return NextResponse.json({ paymentLink });
  } catch (error) {
    console.error("Cashfree API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
