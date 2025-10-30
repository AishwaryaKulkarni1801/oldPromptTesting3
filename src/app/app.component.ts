import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alex Johnson Portfolio';

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Technologies',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript', level: 94 },
        { name: 'HTML/CSS', level: 96 },
        { name: 'SCSS/Sass', level: 90 }
      ]
    },
    {
      name: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'Python', level: 78 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'RESTful APIs', level: 88 }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 68 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest/Testing', level: 80 },
        { name: 'Figma/Design', level: 72 }
      ]
    }
  ];

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Angular and Node.js, featuring user authentication, shopping cart, payment integration, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
      liveUrl: 'https://ecommerce-demo.vercel.app',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL', 'Material-UI'],
      liveUrl: 'https://taskmanager-pro.netlify.app',
      githubUrl: 'https://github.com/alexjohnson/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts using multiple weather APIs.',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Geolocation', 'PWA'],
      liveUrl: 'https://weather-dashboard-vue.vercel.app',
      githubUrl: 'https://github.com/alexjohnson/weather-dashboard'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'Animations', 'Responsive'],
      liveUrl: 'https://alexjohnson-portfolio.netlify.app',
      githubUrl: 'https://github.com/alexjohnson/portfolio'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media metrics with data visualization and performance tracking.',
      technologies: ['React', 'D3.js', 'Python', 'Flask', 'Chart.js'],
      liveUrl: 'https://social-analytics-dashboard.vercel.app',
      githubUrl: 'https://github.com/alexjohnson/social-analytics'
    },
    {
      title: 'Fitness Tracker App',
      description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and nutritional guidance.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health APIs', 'Push Notifications'],
      liveUrl: 'https://fitness-tracker-app.expo.dev',
      githubUrl: 'https://github.com/alexjohnson/fitness-tracker'
    }
  ];

  contactData: ContactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit() {
    // Initialize any component logic here
    this.initializeAnimations();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed navigation
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // In a real application, you would send this data to a backend service
      console.log('Contact form submitted:', this.contactData);
      
      // Show success message (you could use a toast service in a real app)
      alert('Thank you for your message! I\'ll get back to you soon.');
      
      // Reset form
      this.resetContactForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  private isFormValid(): boolean {
    return !!(this.contactData.name && 
             this.contactData.email && 
             this.contactData.subject && 
             this.contactData.message);
  }

  private resetContactForm(): void {
    this.contactData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  private initializeAnimations(): void {
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll(
        '.skill-category, .project-card, .stat, .about-text'
      );
      elementsToAnimate.forEach((el) => observer.observe(el));
    }, 100);
  }

  // Helper method to get skill categories for template
  getSkillCategories(): SkillCategory[] {
    return this.skillCategories;
  }

  // Helper method to get projects for template
  getProjects(): Project[] {
    return this.projects;
  }

  // Helper method to handle external links
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Method to download resume (you would implement this with an actual resume file)
  downloadResume(): void {
    // In a real application, you would link to an actual resume file
    alert('Resume download would be implemented here with an actual PDF file.');
  }
}
