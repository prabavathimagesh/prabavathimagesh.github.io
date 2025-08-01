import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText, Linkedin, Github, Phone } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'resume', label: 'Resume', icon: FileText },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-40 glass-card border-b">
          <div className="flex justify-between items-center px-4 py-3">
            {/* Name on left */}
            <div className="text-lg font-bold text-primary">Prabavathi M</div>
            
            {/* Social media icons on right */}
            <div className="flex space-x-2">
              <a
                href="mailto:prabavathi3898@gmail.com"
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/in/prabavathi-m"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/prabavathi-m"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="tel:+919445373019"
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </header>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 glass-card border-t">
          <div className="flex justify-around items-center py-2">
            {navItems.slice(0, 4).map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`p-3 rounded-full transition-colors ${
                  activeSection === id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon size={20} />
              </button>
            ))}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-3 rounded-full text-muted-foreground hover:text-primary"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 glass-card">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-primary">Navigation</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-muted-foreground hover:text-primary"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-4">
                {navItems.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-colors ${
                      activeSection === id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Prabavathi M</div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`font-medium transition-colors ${
                  activeSection === id 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;