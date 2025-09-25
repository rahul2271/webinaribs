import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone } = await req.json();

    // Choose endpoint based on environment
    const CASHFREE_URL =
      process.env.NODE_ENV === "production"
        ? "https://api.cashfree.com/pg/orders"
        : "https://sandbox.cashfree.com/pg/orders";

    // Create order on Cashfree
    const response = await axios.post(
      CASHFREE_URL,
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

    console.log("Cashfree API raw response:", response.data);

    return NextResponse.json({
      paymentLink: response.data.payment_link, // ✅ Correct key
    });
  } catch (error) {
    console.error("Cashfree API Error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: error.response?.data || error.message },
      { status: 500 }
    );
  }
}
