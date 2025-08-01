import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:prabavathi3898@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919445373019', label: 'Phone' },
    { icon: Linkedin, href: 'www.linkedin.com/in/prabavathi-m-5b176227b', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/prabavathimagesh', label: 'GitHub' },
  ];

  return (
    <footer className="py-12 px-6 bg-gradient-card glass-card border-t">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Prabavathi M</h3>
          <p className="text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 glass-card rounded-full transition-all duration-300 hover:shadow-medium hover:scale-110 group"
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors" />
            </a>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Prabavathi M. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            🌟 Open to new opportunities • Let's build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;