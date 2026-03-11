import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  program?: string;
  goals?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData;

    const { name, email, phone, program, goals, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('[Contact Form Submission]', {
      name,
      email,
      phone: phone ?? 'N/A',
      program: program ?? 'N/A',
      goals: goals ?? 'N/A',
      message: message ?? 'N/A',
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (e.g. Resend, SendGrid, Nodemailer)
    // when CONTACT_EMAIL and SMTP credentials are configured.

    return NextResponse.json(
      { success: true, message: 'Message received. We will be in touch within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'Failed to process request.' },
      { status: 500 }
    );
  }
}
