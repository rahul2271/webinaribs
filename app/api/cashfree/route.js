import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone } = await req.json();

    const response = await axios.post(
      "https://test.cashfree.com/api/v2/cftoken/order",
      {
        orderId,
        orderAmount: amount,
        orderCurrency: "INR",
        customerName,
        customerEmail,
        customerPhone,
        returnUrl: "https://yourwebsite.com/payment-success",
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ paymentLink: response.data.paymentLink });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
