import { Github, Linkedin, Mail, Phone, Star, Download, Code, Sparkles, Zap, ArrowDown, MapPin } from 'lucide-react';
import profileImage from '@/assets/ProfilePic3.jpeg';

const HeroSection = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:prabavathi3898@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
    { icon: Phone, href: 'tel:+919445373019', label: 'Phone', color: 'hover:bg-green-500' },
    { icon: Linkedin, href: 'www.linkedin.com/in/prabavathi-m-5b176227b', label: 'LinkedIn', color: 'hover:bg-blue-500' },
    { icon: Github, href: 'https://github.com/prabavathimagesh', label: 'GitHub', color: 'hover:bg-gray-800' },
  ];

  const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB'];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Enhanced particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating particles */}
        <div className="minimal-particle minimal-particle-1"></div>
        <div className="minimal-particle minimal-particle-2"></div>
        <div className="minimal-particle minimal-particle-3"></div>
        <div className="minimal-particle minimal-particle-4"></div>
        
        {/* Additional decorative particles */}
        <div className="decorative-particle decorative-particle-1"></div>
        <div className="decorative-particle decorative-particle-2"></div>
        <div className="decorative-particle decorative-particle-3"></div>
        <div className="decorative-particle decorative-particle-4"></div>
        <div className="decorative-particle decorative-particle-5"></div>
        <div className="decorative-particle decorative-particle-6"></div>
        
        {/* Floating sparkles */}
        <div className="sparkle-particle sparkle-1"></div>
        <div className="sparkle-particle sparkle-2"></div>
        <div className="sparkle-particle sparkle-3"></div>
        <div className="sparkle-particle sparkle-4"></div>
        <div className="sparkle-particle sparkle-5"></div>
        <div className="sparkle-particle sparkle-6"></div>
        <div className="sparkle-particle sparkle-7"></div>
        <div className="sparkle-particle sparkle-8"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Glass card container */}
        <div className="glass-hero-card backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left side - Profile */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="glass-profile-container group mb-6">
                <div className="glass-profile-wrapper">
                  <img
                    src={profileImage}
                    alt="Prabavathi M - Full Stack Developer"
                    className="glass-profile-image"
                  />
                  <div className="glass-profile-border"></div>
                  <div className="glass-profile-glow"></div>
                </div>
                
                {/* Status badge */}
                <div className="glass-status-badge">
                  <div className="status-indicator"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name with typing effect */}
              <div className="mb-6">
                <h1 className="glass-hero-name mb-2">
                  <span className="typing-text">Prabavathi M</span>
                </h1>
                
                <div className="glass-title-container">
                  <Code className="title-icon" />
                  <h2 className="glass-hero-title">Full Stack Developer</h2>
                  <Zap className="title-accent" />
                </div>
                
                {/* Location */}
                <div className="glass-location">
                  <MapPin className="w-4 h-4" />
                  <span>Based in India</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="glass-description mb-8">
                Passionate Full Stack Developer with 
                <span className="text-accent"> 1+ years </span>
                of experience building scalable web applications using modern technologies.
              </p>
              
              {/* Skills showcase */}
              <div className="glass-skills-grid mb-8">
                {skills.map((skill, index) => (
                  <div key={skill} className={`glass-skill-item glass-skill-${index + 1}`}>
                    {skill}
                  </div>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="glass-buttons-container mt-4 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-y-0 lg:space-x-4 flex flex-col sm:flex-row justify-center items-center">
                <a
                  href="/assets/prabavathi_resume.pdf"
                  download="Prabavathi_M_Resume.pdf"
                  className="glass-btn-primary group"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>
                
                <a
                  href="#contact"
                  className="glass-btn-secondary group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
              
              {/* Social links */}
              <div className="glass-social-container">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : '_self'}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass-social-link"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="glass-scroll-indicator">
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;