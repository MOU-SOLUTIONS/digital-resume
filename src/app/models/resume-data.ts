/**
 * Editor / Developer: Mohamed Dhaoui
 * Project: Digital Resume
 * Date: 2025-01-27
 */

// ============================================================================
// Interfaces
// ============================================================================
export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  isPrivate?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  description: string;
  image?: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  contact: ContactInfo;
}

// ============================================================================
// Resume Data
// ============================================================================
export const RESUME_DATA = {
  personal: {
    name: 'Mohamed Amine Dhaoui',
    title: 'Full Stack Developer',
    description: 'Passionate about creating innovative web solutions',
    avatar: 'assets/Images/User.png',
    contact: {
      email: 'mohamed.a.dhaoui@outlook.com',
      phone: '+1 786 681 2966',
      location: 'Miami, Florida, USA',
      linkedin: 'https://linkedin.com/in/yourprofile',
      github: 'https://github.com/yourusername',
      twitter: 'https://twitter.com/yourhandle'
    }
  },
  
  // ============================================================================
  // Experience
  // ============================================================================
  experience: [
    {
      id: 1,
      company: 'AuraX Solutions',
      position: 'Full-Stack Developer',
      location: 'USA',
      startDate: '2025-05-01',
      endDate: '',
      isPresent: true,
      logo: 'assets/logos/aurax.png',
      description: [
        'Working as a Full-Stack Developer delivering solutions for clients facing complex IT system, application, and infrastructure issues',
        'Designing, developing, and maintaining web applications and internal tools to diagnose, fix, and optimize client systems',
        'Contributing across the full stack, from front-end interfaces to back-end logic and integrations',
        'Actively involved in troubleshooting, performance improvements, and system hardening to ensure reliability and scalability',
        'Operating in a fast-paced environment requiring ownership, adaptability, and production-ready delivery'
      ],
      technologies: ['Full-Stack Development', 'System Fixes', 'Performance Optimization', 'Client Solutions']
    },
    {
      id: 2,
      company: 'Poly-Tel Ltd',
      position: 'Web Developer',
      location: 'UK',
      startDate: '2022-12-01',
      endDate: '2024-01-24',
      isPresent: false,
      logo: 'assets/logos/polytel.png',
      description: [
        'Contributed to the development and enhancement of Smart Roaster, a large-scale web application used to monitor and manage 300+ active sites across the UK',
        'Worked on features related to site access control, gate code management, CCTV monitoring, and workforce data tracking',
        'Implemented new functionalities and improved existing modules to enhance system reliability, usability, and operational visibility',
        'Collaborated on a production system handling real-world infrastructure data, requiring high availability and accuracy',
        'Participated in maintaining and evolving a platform critical to day-to-day operational decision-making'
      ],
      technologies: ['Site Monitoring Systems', 'Access Control', 'CCTV', 'Workforce Management']
    },
    {
      id: 3,
      company: 'ADDIXO Group',
      position: 'Software Engineering Intern',
      location: 'France',
      startDate: '2023-01-24',
      endDate: '2023-05-15',
      isPresent: false,
      logo: 'assets/logos/addixo.png',
      description: [
        'Contributed to ADDIXO Smart Factory, an enterprise MOM/MES solution designed to digitize and optimize manufacturing processes',
        'Worked on systems that aggregate real-time shop floor data from multiple sources to provide production KPIs, quality metrics, and operational visibility',
        'Designed and implemented a new E-Kanban module, supporting lean "zero-paper" manufacturing workflows',
        'Helped integrate production stakeholders, equipment, and information systems into a unified digital platform',
        'Gained hands-on experience with industrial-scale applications, real-time data flows, and manufacturing process digitization'
      ],
      technologies: ['Angular', 'Spring Boot', 'MES/MOM', 'Smart Factory', 'Lean Manufacturing']
    },
    {
      id: 4,
      company: 'Centre Sectoriel de Formation et Techniques Appliquées en Cuir',
      position: 'Software Development Intern',
      location: 'Tunisia',
      startDate: '2022-08-01',
      endDate: '2022-08-31',
      isPresent: false,
      logo: 'assets/logos/atfp.png',
      description: [
        'Designed and developed a desktop-based management application to digitize internship and intern administration, replacing manual paper-based processes',
        'Centralized intern records, internship tracking, and archival data into a single digital system, improving data accessibility and organization',
        'Implemented the application using HTML, CSS, JavaScript, and PHP, covering UI, business logic, and data handling',
        'Delivered an end-to-end solution used internally, eliminating reliance on physical archives and reducing administrative overhead'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
    }
  ],

  // ============================================================================
  // Skills
  // ============================================================================
  skills: [
    // Frontend
    { name: 'Angular', level: 90, category: 'frontend', icon: 'fab fa-angular' },
    { name: 'React', level: 85, category: 'frontend', icon: 'fab fa-react' },
    { name: 'TypeScript', level: 88, category: 'frontend', icon: 'fab fa-js' },
    { name: 'JavaScript', level: 92, category: 'frontend', icon: 'fab fa-js-square' },
    { name: 'HTML5', level: 95, category: 'frontend', icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, category: 'frontend', icon: 'fab fa-css3-alt' },
    { name: 'Sass/SCSS', level: 85, category: 'frontend', icon: 'fab fa-sass' },
    
    // Backend
    { name: 'Node.js', level: 88, category: 'backend', icon: 'fab fa-node-js' },
    { name: 'Python', level: 80, category: 'backend', icon: 'fab fa-python' },
    { name: 'Java', level: 75, category: 'backend', icon: 'fab fa-java' },
    { name: 'Express.js', level: 85, category: 'backend', icon: 'fas fa-server' },
    
    // Database
    { name: 'MongoDB', level: 82, category: 'database', icon: 'fas fa-database' },
    { name: 'PostgreSQL', level: 78, category: 'database', icon: 'fas fa-database' },
    { name: 'MySQL', level: 80, category: 'database', icon: 'fas fa-database' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools', icon: 'fab fa-git-alt' },
    { name: 'Docker', level: 75, category: 'tools', icon: 'fab fa-docker' },
    { name: 'AWS', level: 70, category: 'tools', icon: 'fab fa-aws' },
    { name: 'Jenkins', level: 65, category: 'tools', icon: 'fas fa-cogs' }
  ],

  // ============================================================================
  // Projects
  // ============================================================================
  projects: [
    {
      id: 1,
      title: 'E-Kanban Integration',
      description: 'Developed and integrated the E-Kanban module at ADDIXO Group: defined requirements, wireframes and RESTful Spring Boot services; built Angular standalone components with reactive forms, data tables, modals and real-time charts.',
      detailedDescription: 'A comprehensive Kanban board system integrated into ADDIXO Group\'s workflow management platform. This project involved full-stack development from requirements gathering to deployment, featuring real-time updates, drag-and-drop functionality, and advanced reporting capabilities.',
      features: [
        'Requirements analysis and wireframe design',
        'RESTful Spring Boot backend services',
        'Angular standalone components architecture',
        'Reactive forms with validation',
        'Interactive data tables with sorting/filtering',
        'Modal dialogs for task management',
        'Real-time charts and analytics',
        'GitLab CI/CD pipeline integration'
      ],
      image: 'assets/Images/e-kanban.png',
      technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'Angular', 'Swagger', 'GitLab CI/CD'],
      featured: true,
      isPrivate: true
    },
    {
      id: 2,
      title: 'Alpha Vault',
      description: 'Lead full-stack developer of a personal finance platform: implemented core Spring Boot modules (Income, Expense, Savings, Debt, Investments) with JWT security and PostgreSQL; crafting Angular standalone components for dashboards, charts and responsive UX.',
      detailedDescription: 'A comprehensive personal finance management platform that helps users track, analyze, and optimize their financial health. Features include multi-account management, budget planning, investment tracking, and detailed financial analytics.',
      features: [
        'Multi-module Spring Boot architecture',
        'JWT-based authentication and authorization',
        'PostgreSQL database with complex queries',
        'Angular standalone component design',
        'Interactive financial dashboards',
        'Real-time charts and analytics',
        'Responsive mobile-first design'
      ],
      image: 'assets/Images/alpha-vault.png',
      technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Angular', 'Chart.js'],
      githubUrl: 'https://github.com/MOU-SOLUTIONS/alpha-vault',
      liveUrl: 'https://alpha-vault.aurax.global/home',
      featured: true
    },
    {
      id: 3,
      title: 'AuraCast',
      description: 'A modern, high-performance weather intelligence platform built with Angular 20, designed to provide real-time meteorological data, interactive maps, and advanced atmospheric analytics with a sleek, responsive UI.',
      detailedDescription: 'AuraCast is a comprehensive weather intelligence platform that delivers real-time meteorological data, interactive geospatial maps, and advanced atmospheric analytics. Built with Angular 20 and TypeScript 5.8, it features a modular architecture with multi-source weather API integration, interactive Leaflet.js maps, Chart.js analytics, and full internationalization support. The platform offers smart forecasts, air quality monitoring, and a responsive dashboard optimized for all devices.',
      features: [
        'Real-time Weather Engine with live tracking of temperature, humidity, and atmospheric pressure',
        'Interactive Geospatial Maps using Leaflet.js for visual weather tracking',
        'Advanced Analytics with detailed category breakdowns and trends using Chart.js',
        'Smart Forecasts with hourly and daily summaries, moon phase and sun-time indicators',
        'Multi-Language Support with full localization (English, Spanish, French)',
        'Air Quality Monitoring with dedicated metrics for environmental health tracking',
        'Responsive Dashboard optimized for mobile, tablet, and desktop viewing',
        'Modular UI architecture with Angular standalone components'
      ],
      image: 'assets/Images/auracast.png',
      technologies: ['Angular', 'TypeScript', 'Vercel', 'RxJS', 'Chart.js', 'ng2-charts', 'Leaflet.js', 'SCSS', '@ngx-translate/core'],
      githubUrl: 'https://github.com/MOU-SOLUTIONS/auracast',
      liveUrl: 'https://auracast.aurax.global/',
      featured: true
    },
    {
      id: 4,
      title: 'AuraFX',
      description: 'A high-performance forex analytics platform built with Angular, designed to provide real-time currency exchange rates, multi-currency conversion, historical data charts, and advanced market insights with a sleek, responsive UI.',
      detailedDescription: 'AuraFX is a comprehensive forex analytics platform that delivers real-time currency exchange rates, multi-currency conversion capabilities, historical data visualization, and advanced market insights. Built with Angular 21 and TypeScript 5.9, it features standalone components with OnPush change detection, signal-based reactive state management, and a modular UI architecture. The platform includes interactive dashboards, currency converters, exchange rates tables, and advanced charting capabilities with technical indicators.',
      features: [
        'Dashboard with market overview, top gainers/losers, and base currency selector',
        'Currency Converter with single & multi-currency conversion and historical conversions',
        'Exchange Rates Table with real-time rates, advanced filtering, sorting, and pagination',
        'Currency Charts with historical line, bar, and area charts, multi-currency overlay',
        'Technical indicators (MA, EMA) and chart export to PNG',
        'Export functionality (CSV/JSON), print, and share capabilities',
        'Language selector (EN, ES, FR) and theme toggle (Dark/Light)',
        'Responsive design with active route highlighting and mobile menu'
      ],
      image: 'assets/Images/aurafx.png',
      technologies: ['Angular', 'TypeScript', 'Java', 'Angular Material', 'Chart.js', 'ng2-charts', 'RxJS', 'SCSS', '@ngx-translate/core', 'Vitest'],
      githubUrl: 'https://github.com/MOU-SOLUTIONS/aurafx',
      liveUrl: 'https://aurafx.aurax.global/',
      featured: true
    }
  ],

  // ============================================================================
  // Education
  // ============================================================================
  education: [
    {
      id: 1,
      degree: 'Master of Science in Information Technology',
      institution: 'Atlantis University',
      location: 'Miami, FL, USA',
      startDate: '2024-07',
      endDate: '2025-12',
      isPresent: true,
      description: 'Elevated to architecting safe, scalable cloud and networking environments under real demands.',
      gpa: '4.00 / 4.00',
      relevantCourses: [
        'Network Architecture & Protocols',
        'Cloud Infrastructure & DevSecOps',
        'Security Engineering & Incident Response',
        'System Architecture & Scalability',
        'Virtualization & Container Orchestration',
        'Emerging Technologies & Digital Transformation'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'The Higher Institute of IT & Communication',
      location: 'Borj Cedria, Tunisia',
      startDate: '2020-09',
      endDate: '2023-06',
      isPresent: false,
      description: 'Gained hands-on experience delivering end-to-end software solutions with clean, maintainable code.',
      gpa: '3.02 / 4.00',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Advanced Web Development',
        'Software Quality Assurance',
        'Cloud Computing Fundamentals',
        'DevOps & CI/CD Practices'
      ]
    }
  ],

  // ============================================================================
  // Certifications
  // ============================================================================
  certifications: [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-03',
      expiryDate: '2026-03',
      credentialId: 'AWS-123456789',
      description: 'Expert-level certification for designing distributed systems on AWS.',
      url: 'https://aws.amazon.com/certification/'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      issueDate: '2022-11',
      expiryDate: '2025-11',
      credentialId: 'GCP-987654321',
      description: 'Professional certification for developing applications on Google Cloud Platform.',
      url: 'https://cloud.google.com/certification/'
    },
    {
      id: 3,
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      issueDate: '2023-01',
      credentialId: 'MS-456789123',
      description: 'Associate-level certification for developing applications on Microsoft Azure.',
      url: 'https://www.microsoft.com/en-us/learning/'
    },
    {
      id: 4,
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      issueDate: '2022-08',
      expiryDate: '2025-08',
      credentialId: 'CKA-789123456',
      description: 'Professional certification for Kubernetes administration and management.',
      url: 'https://www.cncf.io/certification/cka/'
    }
  ]
}; 