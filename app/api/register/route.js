import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  try {
    const { name, email, phone, orderId, paymentLink } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const response = await axios.post(process.env.SHEETDB_URL, {
      data: { name, email, phone, orderId, paymentLink },
    });

    return NextResponse.json({ message: "Registered successfully", data: response.data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
