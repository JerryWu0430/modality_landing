'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type State = {
  message: string;
  success: boolean;
} | null;

export async function contactFormAction(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !company || !message) {
    return { message: 'Please fill out all fields before submitting.', success: false };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // You can change this to your domain later
      to: ['woohaoran@gmail.com'], // Replace with your actual email
      subject: `New contact form submission from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from your website's contact form.
          </p>
        </div>
      `,
    });

    return { 
      message: "Your meeting request has been sent successfully. We'll be in touch shortly!", 
      success: true 
    };
  } catch (error) {
    console.error('Email send error:', error);
    return { 
      message: 'Failed to send your message. Please try again or contact us directly.', 
      success: false 
    };
  }
} 