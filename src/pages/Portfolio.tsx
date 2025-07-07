import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import profileImage from "@/assets/profile-image.jpg";

export default function Portfolio() {
  const skills = {
    "Programming Language": ["Java"],
    "Web Technologies": ["JavaScript", "TypeScript", "Angular 2+", "ReactJS", "HTML", "CSS", "RESTful APIs", "jQuery", "AJAX", "JSON", "Swagger"],
    "Reactive Programming": ["Redux", "RxJS", "NgRx"],
    "Responsive Design": ["Bootstrap", "Angular Material", "PrimeNG"],
    "Version Control": ["Git", "GitHub", "GitLab", "AppEngine"],
    "Development Environment": ["Agile methodology"],
    "Issue Tracking": ["Jira", "Buganizer"],
    "Testing": ["Karma", "Jasmine", "regression/manual testing", "TestTracker Tool"],
    "Deployment": ["Docker"]
  };

  const competencies = [
    "Coding & Development", "Project Management", "Quality Assurance", 
    "Debugging", "User Experience Design", "Agile Methodology", 
    "Data Migration/Analysis", "Problem Solving", "Team player"
  ];

  const certifications = [
    "Certified MEAN Developer – Accenture",
    "Meta's Front-End Certification",
    "Meta's Basic React Certification",
    "Meta's Programming with JavaScript Certification"
  ];

  const projects = [
    {
      title: "E-Commerce App",
      description: "Full-fledged telecom product purchasing platform",
      technologies: ["Angular", "TypeScript", "HTML", "CSS", "RESTful APIs"]
    },
    {
      title: "Legal Management App",
      description: "Case tracking and management for legal affairs",
      technologies: ["Angular", "NgRx", "Angular Material", "Git"]
    },
    {
      title: "Child Welfare App",
      description: "Financial aid tracking platform for government child welfare programs",
      technologies: ["Angular", "RxJS", "Bootstrap", "Jira"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-gradient rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-gradient rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-glass-gradient backdrop-blur-xl rounded-3xl shadow-2xl border border-glass-border/30 p-8 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-8">
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-lg font-medium">Hey, I'm Kiran 👋</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                      <span className="bg-modern-gradient bg-clip-text text-transparent">Front</span>end
                      <br />
                      Developer
                    </h1>
                    <div className="w-24 h-1 bg-purple-gradient rounded-full"></div>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Highly skilled and meticulous Front-End Developer with <span className="text-primary font-semibold">3.8 years</span> of experience 
                    in creating innovative and user-friendly websites. Proficient in Angular, JavaScript, 
                    HTML, CSS, RESTful APIs, responsive design, Git, and agile development.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                      Download Resume
                    </Button>
                    <Button 
                      variant="glass" 
                      size="lg" 
                      className="text-lg px-8 py-4"
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Me
                    </Button>
                  </div>
                </div>
                
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-purple-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={profileImage} 
                        alt="Kiran Dongare"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-section-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              About <span className="bg-purple-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="bg-glass-gradient backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-glass-border/30 shadow-xl">
              <p className="text-xl text-muted-foreground leading-relaxed">
                I'm a frontend developer based in <span className="text-primary font-semibold">India</span>, I'll help you build beautiful websites 
                your users will love. Strong problem-solving abilities and a keen eye for detail. 
                Dedicated to delivering clean and efficient code that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="bg-modern-gradient bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 mb-16">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader>
                    <CardTitle className="text-2xl bg-purple-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 transition-colors duration-200 border border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl bg-blue-gradient bg-clip-text text-transparent text-center">
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {competencies.map((competency) => (
                    <Badge key={competency} variant="outline" className="text-sm px-4 py-2 border-primary/30 hover:bg-primary/10 transition-colors duration-200">
                      {competency}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-section-bg relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-purple-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="text-2xl bg-modern-gradient bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors duration-200 border border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Professional <span className="bg-blue-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="space-y-2">
                    <CardTitle className="text-3xl bg-modern-gradient bg-clip-text text-transparent">Software Developer</CardTitle>
                    <p className="text-xl font-semibold text-muted-foreground">Accenture Pvt. Ltd., Pune</p>
                  </div>
                  <Badge variant="outline" className="text-base px-4 py-2 border-primary/30 bg-primary/10">Oct 2021 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground text-lg">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Requirement analysis and UI implementation using Angular, HTML, CSS
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Refactoring code to improve performance and maintainability
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Debugging and fixing bugs in front-end code
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Using Git for version control and Jira/Buganizer for issue tracking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Writing and executing unit/regression test cases
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-purple-gradient rounded-full mt-3 flex-shrink-0"></span>
                    Collaborating with QA and automation teams
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-section-bg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-purple-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-purple-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">🏆</span>
                    </div>
                    <p className="font-semibold text-lg text-foreground leading-relaxed">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-blue-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="space-y-2">
                    <CardTitle className="text-3xl bg-modern-gradient bg-clip-text text-transparent">Bachelor of Engineering in Computer Science</CardTitle>
                    <p className="text-xl font-semibold text-muted-foreground">Shivaji University, Kolhapur</p>
                  </div>
                  <Badge variant="outline" className="text-base px-4 py-2 border-primary/30 bg-primary/10">June 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  <span className="font-semibold text-foreground">Percentage:</span> 74%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-section-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-gradient opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="bg-modern-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-glass-gradient backdrop-blur-sm border border-glass-border/30 text-center hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-12">
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  I'm always interested in new opportunities and interesting projects. 
                  Let's discuss how we can work together to create something amazing!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
                    <a href="mailto:kiran.dongare@example.com">
                      📧 Email Me
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="lg" className="text-lg px-8 py-4">
                    <a href="https://www.linkedin.com/in/kiran-dongare-1094191aa" target="_blank" rel="noopener noreferrer">
                      💼 LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="modern" size="lg" className="text-lg px-8 py-4">
                    <a href="https://github.com/kirandongare09" target="_blank" rel="noopener noreferrer">
                      🐙 GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-glass-border/30 bg-glass-gradient backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg">
            © 2024 Kiran Ashok Dongare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}