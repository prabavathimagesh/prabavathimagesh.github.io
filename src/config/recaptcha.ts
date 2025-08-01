// reCAPTCHA Configuration
// Replace these with your actual reCAPTCHA keys when you get them

export const RECAPTCHA_CONFIG = {
  // Site key (public key) - to be replaced with your actual site key
  SITE_KEY: process.env.VITE_RECAPTCHA_SITE_KEY || '6LcCTZcrAAAAAG8OXO-5g068_UGb3AKoM1J3zUSY',
  
  // Secret key is handled on the server side for security
  // This is just for reference - never expose secret key in frontend
  // SECRET_KEY: 'YOUR_SECRET_KEY_HERE' // Only use this on your backend
  
  // reCAPTCHA theme
  THEME: 'light' as 'light' | 'dark',
  
  // reCAPTCHA size
  SIZE: 'normal' as 'compact' | 'normal' | 'invisible',
  
  // Language (optional)
  LANGUAGE: 'en',
};

// Environment variables setup instructions:
// 1. Create a .env file in your project root
// 2. Add: VITE_RECAPTCHA_SITE_KEY=your_actual_site_key_here
// 3. Never commit the .env file to version control
// 4. For production, set environment variables in your hosting platform
