import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    const { firstName, lastName, email, phone, service, businessType, message, terms } = formData;

    // Validation
    if (!firstName || !lastName || !email || !message || !terms) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission - WeSurveil
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Service: ${service || 'Not specified'}
      Business Type: ${businessType || 'Not specified'}
      
      Message:
      ${message}
      
      Submitted: ${new Date().toLocaleString()}
    `;

    // Send email using a webhook service (like Formspree, Netlify Forms, or similar)
    // For now, we'll use a simple fetch to a webhook service
    try {
      // You can replace this with Formspree, Netlify Forms, or any webhook service
      const webhookResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          service: service,
          businessType: businessType,
          message: message,
          _replyto: email,
          _subject: 'New Contact Form Submission - WeSurveil'
        })
      });

      if (!webhookResponse.ok) {
        throw new Error('Webhook failed');
      }
    } catch (webhookError) {
      // Fallback: log the submission
      console.log('Email webhook failed, logging submission:', {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        service,
        businessType,
        message,
        timestamp: new Date().toISOString()
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
}