import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    fullName: 'Ragab Adel Ragab Ali',
    professionalName: 'Ragab Adel',
    primaryRole: 'Junior .NET Developer',
    roleSubtitle: 'C# & ASP.NET Core | Windows Server | Fortinet FortiGate',
    location: 'Cairo, Egypt',
    email: 'RagabAdel862@hotmail.com',
    phone: '+20 114 912 0925',
    whatsappNumber: '+20 114 912 0925',
    whatsappUrl: 'https://wa.me/201149120925',
    heroHeadline: 'Junior .NET development with hands-on systems and firewall experience',
    heroStatement: 'Junior .NET Developer with hands-on experience in ASP.NET Core development, Windows Server environments, Fortinet FortiGate firewall policies, network support, and technical troubleshooting.',
    aboutStory: [
      'I build backend and web applications with C#, ASP.NET Core MVC, Web API, Entity Framework Core, SQL Server, and REST.',
      'My project work applies object-oriented programming, SOLID principles, layered architecture, clean code, server-side validation, and relational data access.',
      'Alongside development, I support Windows Server environments, device administration, shared-file access, FortiGate firewall policies, network switches, CCTV/NVR systems, POS environments, and day-to-day technical troubleshooting.',
      'I am open to Junior .NET Developer, Backend Developer, System Administrator, and Firewall Administrator opportunities that match this experience.'
    ],
    cvPath: 'assets/cv/Ragab-Adel-CV.pdf',
    avatarPath: 'assets/images/profile/ragab-adel-portfolio-profile.webp',
    socials: [
      {
        name: 'WhatsApp',
        url: 'https://wa.me/201149120925',
        icon: 'whatsapp',
        ariaLabel: 'Message Ragab Adel on WhatsApp',
        isPrimary: true
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ragab-adel-al-saidi/',
        icon: 'linkedin',
        ariaLabel: 'Connect with Ragab Adel on LinkedIn',
        isPrimary: true
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ragabadel',
        icon: 'github',
        ariaLabel: 'View Ragab Adel GitHub repositories',
        isPrimary: true
      },
      {
        name: 'Email',
        url: 'mailto:RagabAdel862@hotmail.com',
        icon: 'envelope',
        ariaLabel: 'Send email to Ragab Adel',
        isPrimary: true
      }
    ],
    highlights: [
      {
        label: '.NET Development',
        description: 'C#, ASP.NET Core MVC and Web API, Entity Framework Core, REST APIs, and SQL Server',
        icon: 'code'
      },
      {
        label: 'Programming Foundations',
        description: 'OOP, SOLID principles, layered architecture, clean code, design patterns, and server-side validation',
        icon: 'server'
      },
      {
        label: 'Systems Administration',
        description: 'Windows Server environments, device administration, shared-file access, operating systems, and user support',
        icon: 'server'
      },
      {
        label: 'Firewall & Network Operations',
        description: 'Fortinet FortiGate policies, network security support, switches, connectivity troubleshooting, CCTV, and NVR systems',
        icon: 'shield-check'
      }
    ]
  },
  skillCategories: [
    {
      id: 'backend',
      categoryName: 'BACKEND',
      categorySubtitle: 'C# and ASP.NET web development',
      isPrimaryBackend: true,
      skills: [
        { name: 'C#', featured: true },
        { name: '.NET', featured: true },
        { name: 'ASP.NET Core MVC', featured: true },
        { name: 'ASP.NET Web API', featured: true },
        { name: 'REST APIs', featured: true },
        { name: 'Entity Framework Core', featured: true }
      ]
    },
    {
      id: 'programming-design',
      categoryName: 'PROGRAMMING & DESIGN',
      categorySubtitle: 'Software design foundations used in project work',
      isPrimaryBackend: true,
      skills: [
        { name: 'Object-Oriented Programming', featured: true },
        { name: 'SOLID Principles', featured: true },
        { name: 'Layered Architecture' },
        { name: 'Clean Code' },
        { name: 'Design Patterns' }
      ]
    },
    {
      id: 'database',
      categoryName: 'DATABASES',
      categorySubtitle: 'Relational database technologies',
      isPrimaryBackend: true,
      skills: [
        { name: 'SQL Server', featured: true },
        { name: 'PostgreSQL', featured: true }
      ]
    },
    {
      id: 'frontend',
      categoryName: 'FRONTEND',
      categorySubtitle: 'Web interface fundamentals',
      skills: [
        { name: 'HTML5', featured: true },
        { name: 'CSS3', featured: true },
        { name: 'JavaScript' },
        { name: 'jQuery' }
      ]
    },
    {
      id: 'frontend-tools',
      categoryName: 'DEVELOPMENT TOOLS',
      categorySubtitle: 'Source control, API testing, and development environment',
      skills: [
        { name: 'Git', featured: true },
        { name: 'GitHub', featured: true },
        { name: 'Postman', featured: true },
        { name: 'Visual Studio', featured: true }
      ]
    },
    {
      id: 'systems-administration',
      categoryName: 'SYSTEM ADMINISTRATION & IT SUPPORT',
      categorySubtitle: 'Hands-on support across Windows environments, devices, files, users, and business systems',
      skills: [
        { name: 'Windows Server Environments', featured: true },
        { name: 'Device Administration', featured: true },
        { name: 'Shared-File Access', featured: true },
        { name: 'Systems Support' },
        { name: 'Hardware & Software Troubleshooting' },
        { name: 'Operating Systems & Applications' },
        { name: 'FOODICS POS Environments' },
        { name: 'Microsoft Dynamics 365 POS' }
      ]
    },
    {
      id: 'firewall-networking',
      categoryName: 'FIREWALL, NETWORKING & SECURITY',
      categorySubtitle: 'FortiGate policy maintenance and operational network support',
      skills: [
        { name: 'Fortinet FortiGate', featured: true },
        { name: 'Firewall Policy Configuration', featured: true },
        { name: 'Network Security Operations', featured: true },
        { name: 'Network Switches' },
        { name: 'Network Troubleshooting' },
        { name: 'CCTV / IP Systems' },
        { name: 'NVR Devices' }
      ]
    },
    {
      id: 'infrastructure-automation',
      categoryName: 'INFRASTRUCTURE AUTOMATION',
      categorySubtitle: 'Scripts used for recurring firewall and NVR administration tasks',
      skills: [
        { name: 'FortiGate Configuration Backup Scripts', featured: true },
        { name: 'NVR Date/Time Synchronization Scripts', featured: true },
        { name: 'Python' }
      ]
    }
  ],
  projects: [
    {
      id: 'clinic-management-system',
      title: 'Clinic Management System',
      shortDescription: 'ASP.NET Core MVC application for managing clinic records, appointments, visits, invoices, and payments.',
      fullDescription: 'Built a web application for managing patients, doctors, departments, appointments, visits, invoices, and payments. It includes CRUD operations, server-side validation, layered architecture, and Entity Framework Core data access.',
      technologies: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server'],
      features: [
        'CRUD operations for patient, doctor, and department data',
        'Appointment and visit management',
        'Invoice and payment workflows',
        'Server-side validation and layered architecture',
        'Entity Framework Core data access'
      ],
      githubUrl: 'https://github.com/ragabadel/ClinicManagementSystem-Portfolio',
      image: 'assets/images/projects/clinic-management.svg',
      isFeatured: true,
      category: 'Full Stack'
    },
    {
      id: 'product-management-api',
      title: 'Product Management REST API',
      shortDescription: 'ASP.NET Core Web API with CRUD endpoints for product management and Postman-tested request flows.',
      fullDescription: 'Built REST API endpoints for creating, retrieving, updating, and deleting products. Used Postman to test the endpoints and applied resource-oriented API design.',
      technologies: ['ASP.NET Core Web API', 'C#', 'REST API', 'Postman'],
      features: [
        'Create, read, update, and delete product endpoints',
        'Resource-oriented API design',
        'Endpoint testing with Postman'
      ],
      githubUrl: '', // Ready for GitHub link update
      image: 'assets/images/projects/product-api.svg',
      isFeatured: true,
      category: 'Backend / Web API'
    }
  ],
  experiences: [
    {
      id: 'ctp',
      company: 'Cairo Traffic Products (CTP)',
      role: 'IT Helpdesk Specialist / Technical Support',
      location: 'Cairo, Egypt',
      period: 'October 2024 – Present',
      startDate: '2024-10',
      endDate: 'Present',
      isCurrent: true,
      responsibilities: [
        'Manage and troubleshoot network switches, CCTV cameras, and NVR systems.',
        'Configure and maintain Fortinet FortiGate firewall policies and network access.',
        'Manage Windows Server shared resources and file services.',
        'Develop automation scripts for scheduled FortiGate configuration backups and NVR date and time synchronization.',
        'Diagnose hardware, software, and network incidents supporting day-to-day operations.'
      ],
      technologies: ['Fortinet FortiGate', 'Windows Server', 'Network Switches', 'CCTV / NVR', 'Automation Scripts']
    },
    {
      id: 'aman-investment',
      company: 'Aman Investment',
      role: 'IT Helpdesk Specialist',
      location: 'Cairo, Egypt',
      period: 'July 2023 – July 2024',
      startDate: '2023-07',
      endDate: '2024-07',
      isCurrent: false,
      responsibilities: [
        'Diagnosed and resolved hardware, software, and network issues for users.',
        'Installed and configured FOODICS POS devices, including iPads, printers, and cash drawers.',
        'Installed required software and supported Microsoft Dynamics 365 POS.'
      ],
      technologies: ['FOODICS POS', 'Microsoft Dynamics 365 POS', 'Hardware Support', 'Network Troubleshooting']
    },
    {
      id: 'radioshack',
      company: 'RadioShack',
      role: 'IT Helpdesk Technician',
      location: 'Cairo, Egypt',
      period: 'April 2023 – July 2023',
      startDate: '2023-04',
      endDate: '2023-07',
      isCurrent: false,
      responsibilities: [
        'Provided first-line IT support for hardware, software, and connectivity issues.',
        'Supported desktops, laptops, printers, POS devices, and related peripherals.',
        'Installed operating systems, applications, and device drivers.',
        'Maintained technical documentation and provided user guidance.'
      ],
      technologies: ['Technical Support', 'POS Devices', 'Printers', 'Desktop Support']
    }
  ],
  education: [
    {
      id: 'bachelor-is',
      degree: 'Bachelor of Information Systems',
      institution: 'Abbasid Institute',
      grade: 'Good',
      period: '2019',
      details: 'Bachelor of Information Systems, completed in 2019.'
    }
  ],
  certifications: [
    {
      id: 'cert-cls-fullstack',
      title: 'ASP.NET Full Stack Developer',
      issuer: 'CLS Learning Solutions',
      credentialType: 'Training certificate',
      date: '9 January 2026'
    },
    {
      id: 'cert-ms-web-apps',
      title: 'Developing ASP.NET Web Applications',
      issuer: 'Relevant coursework',
      credentialType: 'ASP.NET web development'
    },
    {
      id: 'cert-ms-web-prog',
      title: 'Programming in HTML5, JavaScript & CSS3',
      issuer: 'Relevant coursework',
      credentialType: 'Frontend web development'
    }
  ],
  languages: [
    { language: 'Arabic', proficiency: 'Native Speaker' },
    { language: 'English', proficiency: 'Good' }
  ]
};
