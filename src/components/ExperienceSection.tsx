import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'App Innovation Technologies',
      role: 'Full Stack Developer',
      duration: 'Apr 16, 2024 – Jul 29, 2025',
      location: 'Remote',
      description: [
        'Developed and maintained scalable web applications using React.js and Node.js',
        'Implemented RESTful APIs and database optimization with MongoDB',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Integrated third-party services and payment gateways like Stripe',
      ],
    },
    {
      company: 'Bluez Technology',
      role: 'Frontend Developer',
      duration: 'Dec 9, 2023 – Mar 15, 2024',
      location: 'Hybrid',
      description: [
        'Built responsive user interfaces using React.js and modern CSS frameworks',
        'Implemented state management using Redux and React Context',
        'Collaborated with UI/UX designers to create pixel-perfect designs',
        'Optimized application performance and user experience',
      ],
    },
  ];

  // Calculate total experience
  const calculateExperience = () => {
    const startDate = new Date('2023-12-09');
    const endDate = new Date('2025-07-29');
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Building innovative solutions with modern technologies
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-card glass-card px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium text-primary">
              Total Experience: {calculateExperience()}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;