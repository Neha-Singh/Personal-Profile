import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Optional: small validator
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, message, hp } = await req.json();

    // honeypot: if filled, likely a bot
    if (hp) return NextResponse.json({ ok: true });

    if (!name || !email || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Missing or invalid fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // change to your domain after verifying in Resend
      to: "nehasngh56@gmail.com", // <-- your inbox
      subject: `New enquiry from ${name}`,
      html: `
        <h2>New Portfolio Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
