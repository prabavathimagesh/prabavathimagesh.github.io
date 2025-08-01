# Google reCAPTCHA v2 Setup Guide

This guide will help you set up Google reCAPTCHA v2 for the contact form in your portfolio website.

## 🔧 Prerequisites

- Google account
- Access to Google reCAPTCHA Admin Console
- Your website domain (for production) or localhost (for development)

## 📋 Step-by-Step Setup

### 1. Create reCAPTCHA Site

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Sign in with your Google account
3. Fill in the form:
   - **Label**: Your website name (e.g., "Prabavathi Portfolio")
   - **reCAPTCHA type**: Choose "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add your domains:
     - For development: `localhost`
     - For production: `prabavathimagesh.github.io` (or your actual domain)
   - **Owners**: Add any additional Google accounts that should have access
4. Accept the reCAPTCHA Terms of Service
5. Click "Submit"

### 2. Get Your Keys

After creating the site, you'll see:
- **Site Key** (Public Key): Used in your frontend code
- **Secret Key** (Private Key): Used for server-side verification

### 3. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace `YOUR_SITE_KEY_HERE` with your actual Site Key:
   ```env
   VITE_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

### 4. Test the Implementation

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section
3. Fill out the form
4. Complete the reCAPTCHA challenge
5. Submit the form

## 🚀 Production Deployment

### For GitHub Pages:

1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add a new repository secret:
   - **Name**: `VITE_RECAPTCHA_SITE_KEY`
   - **Value**: Your Site Key

### For Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add:
   - **Name**: `VITE_RECAPTCHA_SITE_KEY`
   - **Value**: Your Site Key

### For Netlify:

1. Go to your Netlify dashboard
2. Select your site
3. Go to "Site settings" → "Environment variables"
4. Add:
   - **Key**: `VITE_RECAPTCHA_SITE_KEY`
   - **Value**: Your Site Key

## ✅ Implementation Features

The reCAPTCHA implementation includes:

- ✅ **reCAPTCHA v2** "I'm not a robot" checkbox
- ✅ **Form validation** that requires reCAPTCHA completion
- ✅ **Token management** with automatic reset after submission
- ✅ **Error handling** for expired or failed reCAPTCHA
- ✅ **Environment variable** support for secure key management
- ✅ **Responsive design** that works on all devices
- ✅ **User-friendly error messages**
- ✅ **Automatic cleanup** on form submission or errors

## 🔒 Security Best Practices

1. **Never expose the Secret Key**: Only use it on your backend server
2. **Domain restrictions**: Always restrict your reCAPTCHA to specific domains
3. **Environment variables**: Never commit your `.env` file to version control
4. **HTTPS only**: Use reCAPTCHA only on HTTPS websites in production

## 🛠 Troubleshooting

### Common Issues:

1. **"Invalid site key"**: 
   - Check that your Site Key is correct
   - Verify the domain is added to your reCAPTCHA site settings

2. **reCAPTCHA not loading**:
   - Check your internet connection
   - Verify the reCAPTCHA script is loaded in index.html
   - Check browser console for errors

3. **Form submits without reCAPTCHA**:
   - Verify the validation logic in `ContactSection.tsx`
   - Check that `recaptchaToken` is being set

4. **Environment variable not found**:
   - Make sure `.env` file exists in project root
   - Restart your development server after adding environment variables
   - Verify the variable name starts with `VITE_`

## 📚 How It Works

1. **User fills out the form** and completes the reCAPTCHA challenge
2. **reCAPTCHA returns a token** that proves the user is human
3. **Form validation checks** that the token exists before submission
4. **Token is included** in the email template parameters
5. **After submission**, the token and form are reset for security

## 🎯 Quick Start

1. Get your reCAPTCHA Site Key from Google
2. Create a `.env` file with: `VITE_RECAPTCHA_SITE_KEY=your_site_key`
3. Start the dev server: `npm run dev`
4. Test the contact form with reCAPTCHA
5. Deploy with the environment variable set in your hosting platform

Your contact form is now protected with Google reCAPTCHA v2! 🛡️
