import { useState, useRef } from 'react';
import { Send, CheckCircle, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';
import ReCAPTCHA from 'react-google-recaptcha';
import { RECAPTCHA_CONFIG } from '@/config/recaptcha';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    toast({
      title: "reCAPTCHA Expired",
      description: "Please verify the reCAPTCHA again.",
      variant: "destructive",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // reCAPTCHA validation (only if enabled)
    if (RECAPTCHA_CONFIG.ENABLED && !recaptchaToken) {
      toast({
        title: "Please complete the reCAPTCHA",
        description: "reCAPTCHA verification is required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        ...(RECAPTCHA_CONFIG.ENABLED && { recaptcha_token: recaptchaToken }), // Include reCAPTCHA token only if enabled
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });
      
      // Reset form and reCAPTCHA
      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      if (RECAPTCHA_CONFIG.ENABLED && recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
      
      // Reset reCAPTCHA on error
      setRecaptchaToken(null);
      if (RECAPTCHA_CONFIG.ENABLED && recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prabavathi3898@gmail.com',
      href: 'mailto:prabavathi3898@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 94453 73019',
      href: 'tel:+919445373019',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/prabavathi-m-5b176227b',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repos',
      href: 'https://github.com/prabavathimagesh',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            I'm always excited to discuss new opportunities and innovative projects
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Actively seeking new opportunities</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up stagger-1">
            <div className="glass-card p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* reCAPTCHA (conditionally rendered) */}
                {RECAPTCHA_CONFIG.ENABLED && (
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_CONFIG.SITE_KEY}
                      onChange={handleRecaptchaChange}
                      onExpired={handleRecaptchaExpired}
                      theme={RECAPTCHA_CONFIG.THEME}
                      size={RECAPTCHA_CONFIG.SIZE}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || (RECAPTCHA_CONFIG.ENABLED && !recaptchaToken)}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark hover:shadow-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner w-5 h-5"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up stagger-2">
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl shadow-soft">
                <h3 className="text-xl font-bold mb-6 text-foreground">Get in touch</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Based in India, available for remote work and collaboration worldwide.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl shadow-soft">
                <h3 className="text-lg font-bold mb-4 text-foreground">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to call me directly.
                </p>
                <div className="flex space-x-3">
                  <div className="flex items-center space-x-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;