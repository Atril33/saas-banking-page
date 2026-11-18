import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.EXCHANGE_RATE_API_KEY;
  
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`,
    { next: { revalidate: 3600 }}
  )

  if(!res.ok) {
    return NextResponse.json({next: "Failed to fetch API"})
  }

  const data = await res.json();
  return NextResponse.json(data);
}