// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, carName } = body;
    
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "aslanyanarman88@gmail.com", 
      subject: `New Booking Request for ${carName}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Car:</strong> ${carName}</p>
        <p><strong>Customer Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `
    });

    return NextResponse.json({
      message: "Email sent successfully"
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}