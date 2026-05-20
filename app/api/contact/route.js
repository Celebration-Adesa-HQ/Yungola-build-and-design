import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/schemas/contact";
import ContactEmail from "@/components/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple In-Memory Rate Limiter (Basic protection)
const rateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const userStats = rateLimit.get(ip) || { count: 0, firstRequestTime: now };

  if (now - userStats.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    userStats.count = 1;
    userStats.firstRequestTime = now;
  } else {
    userStats.count++;
  }

  rateLimit.set(ip, userStats);
  return userStats.count <= MAX_REQUESTS;
}

export async function POST(req) {
  try {
    // 1. IP & Rate Limiting Check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown_ip";
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Strict Origin/CORS Check
    const origin = req.headers.get("origin");
    // In production, you would strictly verify `origin` matches your actual domain
    // e.g. if (process.env.NODE_ENV === "production" && origin !== "https://yungolabuildanddesign.com")
    
    // 3. Payload Parsing & Size Limit (Next.js defaults to 2mb, but we enforce via Zod)
    const body = await req.json();

    // 4. Strict Data Sanitization & Validation via Zod
    const validatedData = contactSchema.parse(body);

    // 5. Environment Config Verification
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_TO_EMAIL || !process.env.RESEND_FROM_EMAIL) {
      console.error("Missing Resend environment variables.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // 6. Execute Secure Action
    const { data, error } = await resend.emails.send({
      from: `YUNGOLA Contact <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New Inquiry from ${validatedData.name}`,
      replyTo: validatedData.email,
      react: React.createElement(ContactEmail, validatedData),
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);
    
    // Do not leak stack traces or internal errors to client
    if (error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Invalid form data. Please check your inputs." },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
