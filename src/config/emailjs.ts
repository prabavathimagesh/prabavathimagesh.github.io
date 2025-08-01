
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_wxtdjpq',
  TEMPLATE_ID: 'portfolio_templateid_143',
  PUBLIC_KEY: 'FC42gXnB9lD-drF1X',
  TO_EMAIL: 'prabavathi3898@gmail.com',
};

// Template variables that EmailJS will use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_email}} - Your email address

/* 
SETUP INSTRUCTIONS:

1. Visit https://www.emailjs.com/ and create an account
2. Go to Email Services and add a new service (Gmail recommended)
3. Go to Email Templates and create a new template with this content:

Subject: New Contact Form Message from {{from_name}}

Hello Prabavathi,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.

4. Go to Account and copy your Public Key
5. Replace the values in EMAILJS_CONFIG above with your actual values
6. Test the form to ensure it works correctly

Note: Never commit your actual EmailJS credentials to version control.
Consider using environment variables for production.
*/
