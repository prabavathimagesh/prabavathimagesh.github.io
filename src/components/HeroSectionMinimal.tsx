// Option 2: Minimal Split Screen Design
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, MapPin, Calendar } from 'lucide-react';
import profileImage from '@/assets/ProfilePic4.jpeg';

const HeroSectionMinimal = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:prabavathi3898@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919445373019', label: 'Phone' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prabavathi-m-5b176227b', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/prabavathimagesh', label: 'GitHub' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-0 pt-0">
      <div className="w-full h-screen flex">
        {/* Left Panel - Profile Image */}
        <div className="w-1/2 bg-gradient-to-br from-primary/20 to-primary-light/30 flex items-center justify-center p-8">
          <div className="minimal-profile-container">
            <div className="minimal-image-frame">
              <img
                src={profileImage}
                alt="Prabavathi M"
                className="minimal-profile-img"
              />
              <div className="minimal-image-overlay">
                <div className="minimal-status">
                  <div className="minimal-dot"></div>
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Panel - Content */}
        <div className="w-1/2 bg-background flex items-center justify-center p-8">
          <div className="max-w-md space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="minimal-badge">
                <Calendar className="w-4 h-4" />
                <span>2024 Portfolio</span>
              </div>
              
              <h1 className="minimal-name">
                Prabavathi M
              </h1>
              
              <div className="minimal-title-container">
                <div className="minimal-title">Full Stack Developer</div>
                <div className="minimal-underline"></div>
              </div>
              
              <div className="minimal-location">
                <MapPin className="w-4 h-4" />
                <span>Based in India</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="minimal-description">
              Passionate developer with 1+ years of experience in creating 
              modern web applications. Specialized in React, Node.js, and 
              cutting-edge technologies.
            </p>
            
            {/* CTA */}
            <div className="space-y-4">
              <a
                href="/assets/prabavathi_resume.pdf"
                download="Prabavathi_M_Resume.pdf"
                className="minimal-btn-primary group"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="minimal-btn-secondary group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Social Links */}
            <div className="minimal-social-grid">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  className="minimal-social-item"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionMinimal;
