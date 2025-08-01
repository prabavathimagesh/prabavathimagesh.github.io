import { ExternalLink, Github, Users, Calendar, DollarSign, Utensils } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'CX Future',
      description: 'Employee management system with comprehensive HR features including attendance tracking, leave management, and performance monitoring.',
      image: project1,
      icon: Users,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      features: ['Employee Dashboard', 'Attendance System', 'Leave Management', 'Performance Tracking'],
      link: '#',
      github: '#',
    },
    {
      title: 'Teemie',
      description: 'Restaurant staff shift management and communication app that streamlines scheduling and team coordination.',
      image: project2,
      icon: Utensils,
      technologies: ['React.js', 'Redux', 'Node.js', 'MongoDB'],
      features: ['Shift Scheduling', 'Team Chat', 'Availability Management', 'Real-time Updates'],
      link: 'https://test.teemieapp.com',
      github: '#',
    },
    {
      title: 'Humm',
      description: 'Loan tracking and approval system that simplifies the lending process with automated workflows and real-time status updates.',
      image: project3,
      icon: DollarSign,
      technologies: ['React.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
      features: ['Loan Applications', 'Approval Workflow', 'Document Management', 'Status Tracking'],
      link: 'https://login.shophumm.co.uk',
      github: '#',
    },
    {
      title: 'Cookie',
      description: 'Family task and calendar management app designed to help families organize their daily activities and responsibilities.',
      image: project4,
      icon: Calendar,
      technologies: ['React.js', 'Firebase', 'React Hook Form', 'Tailwind CSS'],
      features: ['Task Management', 'Family Calendar', 'Reward System', 'Progress Tracking'],
      link: 'https://app.mycookiefam.com',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 group animate-slide-up stagger-${index + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 p-3 bg-primary/90 rounded-full">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary-dark hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;