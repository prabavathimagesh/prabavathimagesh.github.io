// Option 3: Creative Card Stack Design
import { Github, Linkedin, Mail, Phone, Download, Star, Briefcase, Code2 } from 'lucide-react';
import profileImage from '@/assets/ProfilePic.jpeg';

const HeroSectionCreative = () => {
  const achievements = [
    { icon: Code2, title: "1+ Years", subtitle: "Experience" },
    { icon: Briefcase, title: "10+", subtitle: "Projects" },
    { icon: Star, title: "5★", subtitle: "Rating" }
  ];

  const techStack = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 creative-bg-pattern"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="creative-hero-layout">
          
          {/* Main Profile Card */}
          <div className="creative-main-card group">
            <div className="creative-card-header">
              <div className="creative-profile-section">
                <div className="creative-avatar-container">
                  <img
                    src={profileImage}
                    alt="Prabavathi M"
                    className="creative-avatar"
                  />
                  <div className="creative-avatar-ring"></div>
                  <div className="creative-status-indicator">
                    <div className="creative-pulse-dot"></div>
                  </div>
                </div>
                
                <div className="creative-profile-info">
                  <h1 className="creative-name">Prabavathi M</h1>
                  <div className="creative-role">
                    <span className="text-sm sm:text-base">Full Stack Developer</span>
                    <div className="creative-role-badge">🚀</div>
                  </div>
                  <div className="creative-tagline text-xs sm:text-sm">Building digital experiences</div>
                </div>
              </div>
            </div>
            
            <div className="creative-card-body">
              <p className="creative-bio text-sm sm:text-base">
                Passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating seamless user experiences and robust backend solutions.
              </p>
              
              <div className="creative-stats-grid">
                {achievements.map(({ icon: Icon, title, subtitle }) => (
                  <div key={title} className="creative-stat-item">
                    <Icon className="creative-stat-icon" />
                    <div className="creative-stat-value">{title}</div>
                    <div className="creative-stat-label">{subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tech Stack Card */}
          <div className="creative-tech-card space-y-1">
            <div className="creative-tech-header">
              <h3 className="text-base sm:text-lg">Tech Stack</h3>
              <div className="creative-tech-icon">⚡</div>
            </div>
            <div className="creative-tech-grid">
              {techStack.map((tech, index) => (
                <div key={tech} className={`creative-tech-item creative-tech-${index + 1}`}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Card */}
          <div className="creative-action-card space-y-1">
            <div className="creative-action-header">
              <h3 className="text-base sm:text-lg">Let's Connect</h3>
              <div className="creative-availability">
                <div className="creative-available-dot"></div>
                <span className="text-xs sm:text-sm">Available for work</span>
              </div>
            </div>
            
            <div className="creative-action-buttons">
              <a
                href="/assets/prabavathi_resume.pdf"
                download="Prabavathi_M_Resume.pdf"
                className="creative-btn-primary"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Resume</span>
              </a>
              
              <a
                href="mailto:prabavathi3898@gmail.com"
                className="creative-btn-secondary"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Email</span>
              </a>
            </div>
            
            <div className="creative-social-links">
              <a href="https://www.linkedin.com/in/prabavathi-m-5b176227b" className="creative-social-link linkedin">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://github.com/prabavathimagesh" className="creative-social-link github">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:+919445373019" className="creative-social-link phone">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCreative;
