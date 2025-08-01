import { Code, Database, Cloud, Palette, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
      color: 'text-blue-500',
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: ['React.js', 'Redux', 'Bootstrap', 'React Hook Form', 'Yup'],
      color: 'text-green-500',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'NestJS', 'REST API', 'MongoDB'],
      color: 'text-purple-500',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'Postman', 'GitHub Desktop', 'Swagger', 'Stripe'],
      color: 'text-orange-500',
    },
    {
      title: 'Cloud & Design',
      icon: Cloud,
      skills: ['Firebase', 'AWS S3', 'Google Cloud Console', 'Figma', 'Photoshop'],
      color: 'text-cyan-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up stagger-${index + 1}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-soft animate-scale-in`}
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slide-up stagger-5">
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Always Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about staying updated with the latest technologies and best practices. 
              Currently exploring advanced React patterns, microservices architecture, and cloud-native development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;