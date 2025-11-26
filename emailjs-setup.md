# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (developerarman777@gmail.com)
5. Note down your **Service ID** (e.g., `service_wesurveil`)

## Step 3: Create Email Template
1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template ID**: `template_contact`

**Subject**: New Contact Form Submission - WeSurveil

**Content**:
```
New Contact Form Submission - WeSurveil

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service}}
Business Type: {{business_type}}

Message:
{{message}}

---
This email was sent from the WeSurveil contact form.
Reply to: {{from_email}}
```

## Step 4: Get Public Key
1. Go to Account > General
2. Copy your **Public Key**

## Step 5: Update Contact6.jsx
Replace these values in the Contact6.jsx file:
- `service_wesurveil` → Your actual Service ID
- `template_contact` → Your actual Template ID  
- `YOUR_PUBLIC_KEY` → Your actual Public Key

## Example Configuration:
```javascript
await emailjs.send(
  'service_abc123',     // Your Service ID
  'template_xyz789',    // Your Template ID
  templateParams,
  'user_def456'         // Your Public Key
);
```

## Test the Form
After updating the IDs, test the contact form to ensure emails are being sent to developerarman777@gmail.com.