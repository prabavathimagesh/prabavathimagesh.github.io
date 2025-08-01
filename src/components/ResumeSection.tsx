import { Download, Eye, FileText, Award, Code, Briefcase } from 'lucide-react';

const ResumeSection = () => {
  const resumeHighlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      items: ['1+ years in Full Stack Development', 'Experience with React.js & Node.js', 'Agile development methodologies'],
    },
    {
      icon: Code,
      title: 'Technical Skills',
      items: ['Frontend: React.js, Redux, TypeScript', 'Backend: Node.js, Express, NestJS', 'Database: MongoDB, PostgreSQL'],
    },
    {
      icon: Award,
      title: 'Key Achievements',
      items: ['Built scalable web applications', 'Improved application performance', 'Delivered projects on time'],
    },
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground">
            Download my resume or view key highlights below
          </p>
        </div>

        <div className="text-center mb-12 animate-scale-in stagger-1">
          <div className="glass-card p-8 rounded-2xl shadow-medium max-w-md mx-auto">
            <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">
              Prabavathi M - Resume
            </h3>
            <p className="text-muted-foreground mb-6">
              Full Stack Developer with experience in modern web technologies
            </p>
            
            <div className="space-y-3">
              <a
                href="/assets/prabavathi_resume.pdf"
                download="Prabavathi_M_Resume.pdf"
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark hover:shadow-medium hover:scale-105"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
              
              <button className="w-full inline-flex items-center justify-center space-x-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:scale-105">
                <Eye className="w-5 h-5" />
                <span>Preview Online</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeHighlights.map((section, index) => (
            <div
              key={section.title}
              className={`glass-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up stagger-${index + 2}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <section.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
              </div>

              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up stagger-5">
          <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-foreground mb-3">
              Ready to collaborate?
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm actively seeking new opportunities where I can contribute my skills 
              and continue growing as a developer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary-dark hover:scale-105"
            >
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;