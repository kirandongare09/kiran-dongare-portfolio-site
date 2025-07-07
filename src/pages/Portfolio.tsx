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
      <section id="home" className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-card rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <p className="text-muted-foreground mb-4">Hey, I'm Kiran 👋</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-primary">Front</span>end
                  <br />
                  Developer
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Highly skilled and meticulous Front-End Developer with 3.8 years of experience 
                  in creating innovative and user-friendly websites. Proficient in Angular, JavaScript, 
                  HTML, CSS, RESTful APIs, responsive design, Git, and agile development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Download Resume
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}>
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Kiran Dongare"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-purple-gradient opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a frontend developer based in India, I'll help you build beautiful websites 
              your users will love. Strong problem-solving abilities and a keen eye for detail. 
              Dedicated to delivering clean and efficient code.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 mb-12">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((competency) => (
                    <Badge key={competency} variant="outline" className="text-sm">
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
      <section id="projects" className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
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
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">Software Developer</CardTitle>
                    <p className="text-lg font-semibold">Accenture Pvt. Ltd., Pune</p>
                  </div>
                  <Badge variant="outline" className="text-sm">Oct 2021 – Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Requirement analysis and UI implementation using Angular, HTML, CSS</li>
                  <li>• Refactoring code to improve performance and maintainability</li>
                  <li>• Debugging and fixing bugs in front-end code</li>
                  <li>• Using Git for version control and Jira/Buganizer for issue tracking</li>
                  <li>• Writing and executing unit/regression test cases</li>
                  <li>• Collaborating with QA and automation teams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">🏆</span>
                    </div>
                    <p className="font-medium">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">Bachelor of Engineering in Computer Science</CardTitle>
                    <p className="text-lg font-semibold">Shivaji University, Kolhapur</p>
                  </div>
                  <Badge variant="outline" className="text-sm">June 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="font-medium">Percentage:</span> 74%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in new opportunities and interesting projects. 
                  Let's discuss how we can work together!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="mailto:kiran.dongare@example.com">
                      📧 Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://www.linkedin.com/in/kiran-dongare-1094191aa" target="_blank" rel="noopener noreferrer">
                      💼 LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
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
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Kiran Ashok Dongare. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}