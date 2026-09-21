import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    fullName: 'Ragab Adel Ragab Ali',
    professionalName: 'Ragab Adel',
    primaryRole: 'Junior .NET Developer',
    roleSubtitle: 'C# | ASP.NET Core | Web API | SQL Server',
    location: 'Cairo, Egypt',
    email: 'RagabAdel862@hotmail.com',
    phone: '+20 114 912 0925',
    whatsappNumber: '+20 114 912 0925',
    whatsappUrl: 'https://wa.me/201149120925',
    heroHeadline: 'Moving from IT infrastructure into professional .NET development',
    heroStatement: 'I am transitioning from hands-on IT support and infrastructure into software development, building practical web applications and APIs with C#, ASP.NET Core, Entity Framework Core, and SQL Server.',
    aboutStory: [
      "I'm moving from an IT support and infrastructure career into professional software development, with a current focus on C#, .NET, ASP.NET Core, Web APIs, Entity Framework Core, and SQL Server.",
      "My development projects cover real business workflows, relational data, API design, validation, and maintainable application structure. My goal is a Junior .NET Developer role where I can continue building production-focused backend and web development skills.",
      "My Helpdesk background remains a practical advantage: I have hands-on experience with Windows Server resources, Fortinet FortiGate, LAN and switch support, CCTV/NVR systems, troubleshooting, and Python and PowerShell automation. This also makes me suitable for System Administration and Network Security support opportunities."
    ],
    cvPath: 'assets/cv/Ragab-Adel-CV.pdf',
    avatarPath: 'assets/images/profile/ragab-adel-portfolio-profile.png',
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
        label: 'Development Mindset',
        description: 'Business-focused projects, structured debugging, relational data, validation, and maintainable code',
        icon: 'server'
      },
      {
        label: 'IT Infrastructure Background',
        description: 'Helpdesk, Windows Server, networking, FortiGate, CCTV/NVR, and Python/PowerShell automation',
        icon: 'shield-check'
      }
    ]
  },
  skillCategories: [
    {
      id: 'backend',
      categoryName: 'BACKEND',
      categorySubtitle: 'Core engineering stack & API architectures',
      isPrimaryBackend: true,
      skills: [
        { name: 'C#', level: 'Advanced', featured: true },
        { name: '.NET', level: 'Advanced', featured: true },
        { name: 'ASP.NET Core', level: 'Advanced', featured: true },
        { name: 'ASP.NET Core MVC', level: 'Intermediate', featured: true },
        { name: 'ASP.NET Web API', level: 'Advanced', featured: true },
        { name: 'Entity Framework Core', level: 'Intermediate', featured: true },
        { name: 'REST APIs', level: 'Advanced', featured: true }
      ]
    },
    {
      id: 'database',
      categoryName: 'DATABASE',
      categorySubtitle: 'Relational data modeling & query operations',
      isPrimaryBackend: true,
      skills: [
        { name: 'SQL Server', level: 'Intermediate', featured: true },
        { name: 'T-SQL Queries', level: 'Intermediate' },
        { name: 'Database Normalization', level: 'Intermediate' },
        { name: 'Relational Constraints', level: 'Intermediate' }
      ]
    },
    {
      id: 'networking-security',
      categoryName: 'NETWORKING & NETWORK SECURITY',
      categorySubtitle: 'LAN operations, network devices, FortiGate administration, and access policies',
      skills: [
        { name: 'Network Switch Management', level: 'Intermediate', featured: true },
        { name: 'LAN Administration', level: 'Intermediate', featured: true },
        { name: 'TCP/IP', level: 'Intermediate' },
        { name: 'IP Addressing', level: 'Intermediate' },
        { name: 'Network Device Management', level: 'Intermediate' },
        { name: 'Network Troubleshooting', level: 'Intermediate' },
        { name: 'Fortinet FortiGate', level: 'Intermediate', featured: true },
        { name: 'FortiGate Firewall Administration', level: 'Intermediate' },
        { name: 'Firewall Policy Management', level: 'Intermediate', featured: true },
        { name: 'Access Control Policies', level: 'Intermediate' },
        { name: 'Firewall Configuration Backup', level: 'Intermediate' },
        { name: 'Network Security Basics', level: 'Intermediate' },
        { name: 'Network Access Management', level: 'Intermediate' },
        { name: 'Connectivity Troubleshooting', level: 'Intermediate' }
      ]
    },
    {
      id: 'windows-infrastructure',
      categoryName: 'WINDOWS SERVER & INFRASTRUCTURE',
      categorySubtitle: 'Centralized users, devices, file sharing, permissions, and endpoint support',
      skills: [
        { name: 'Windows Server Administration', level: 'Intermediate', featured: true },
        { name: 'User & Computer Management', level: 'Intermediate' },
        { name: 'Windows Device Administration', level: 'Intermediate' },
        { name: 'File Server Management', level: 'Intermediate', featured: true },
        { name: 'Windows File Sharing', level: 'Intermediate' },
        { name: 'Shared Folder Administration', level: 'Intermediate' },
        { name: 'NTFS Permissions', level: 'Intermediate', featured: true },
        { name: 'User & Group Permissions', level: 'Intermediate' },
        { name: 'Centralized IT Administration', level: 'Intermediate' },
        { name: 'Endpoint Support', level: 'Advanced' }
      ]
    },
    {
      id: 'automation',
      categoryName: 'IT AUTOMATION & SCRIPTING',
      categorySubtitle: 'Scripts for repeatable administration, backups, and device synchronization',
      skills: [
        { name: 'Python', level: 'Intermediate', featured: true },
        { name: 'PowerShell', level: 'Intermediate', featured: true },
        { name: 'Automation Scripting', level: 'Intermediate' },
        { name: 'Infrastructure Automation', level: 'Intermediate' },
        { name: 'Configuration Backup Automation', level: 'Intermediate' },
        { name: 'Scheduled Administrative Tasks', level: 'Intermediate' },
        { name: 'IT Process Automation', level: 'Intermediate' }
      ]
    },
    {
      id: 'cctv-support',
      categoryName: 'CCTV, NVR & IT SUPPORT',
      categorySubtitle: 'Infrastructure support for endpoints, printers, CCTV, NVR, and Windows systems',
      skills: [
        { name: 'NVR Device Administration', level: 'Intermediate', featured: true },
        { name: 'CCTV Infrastructure Support', level: 'Advanced', featured: true },
        { name: 'NVR Network Configuration', level: 'Intermediate' },
        { name: 'NVR Date & Time Synchronization', level: 'Intermediate' },
        { name: 'Technical Support', level: 'Advanced' },
        { name: 'IT Infrastructure Support', level: 'Intermediate' },
        { name: 'Hardware Troubleshooting', level: 'Advanced' },
        { name: 'Software Troubleshooting', level: 'Advanced' },
        { name: 'Printer Support', level: 'Advanced' },
        { name: 'Windows Troubleshooting', level: 'Advanced' }
      ]
    },
    {
      id: 'frontend-tools',
      categoryName: 'FRONTEND & DEVELOPMENT TOOLS',
      categorySubtitle: 'Interface fundamentals, source control, development, and API testing',
      skills: [
        { name: 'HTML5', level: 'Advanced' },
        { name: 'CSS3', level: 'Intermediate' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'jQuery', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate', featured: true },
        { name: 'GitHub', level: 'Intermediate', featured: true },
        { name: 'Postman', level: 'Intermediate', featured: true },
        { name: 'Visual Studio', level: 'Advanced' },
        { name: 'VS Code', level: 'Intermediate' }
      ]
    }
  ],
  projects: [
    {
      id: 'clinic-management-system',
      title: 'Clinic Management System',
      shortDescription: 'A clinic operations application covering patient records, appointments, visits, invoices, and payments.',
      fullDescription: 'Built a web application for managing patients, doctors, departments, appointments, visits, medical records, invoices, and payments. The project uses a layered structure, server-side validation, Entity Framework Core, and SQL Server.',
      technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework Core', 'HTML5', 'CSS3'],
      features: [
        'Layered architecture separating Domain models, Data access, and MVC Controllers',
        'Patient & Doctor record management with department associations',
        'Appointment scheduling, status transitions, and doctor consultation visits',
        'Invoice generation, payment status tracking, and reporting balance',
        'Server-side model validation and secure relational foreign keys in SQL Server'
      ],
      githubUrl: 'https://github.com/ragabadel/ClinicManagementSystem-Portfolio',
      image: 'assets/images/projects/clinic-management.svg',
      isFeatured: true,
      category: 'Full Stack'
    },
    {
      id: 'product-management-api',
      title: 'Product Management REST API',
      shortDescription: 'Clean RESTful API service for catalog management with Postman test coverage and standard HTTP response semantics.',
      fullDescription: 'Built REST endpoints for creating, retrieving, updating, and deleting products. The API uses standard HTTP status codes and structured JSON payloads, with the main request flows checked in Postman.',
      technologies: ['ASP.NET Core Web API', 'C#', 'REST API', 'Postman', 'JSON'],
      features: [
        'Standardized HTTP Verbs: GET (collection & item), POST, PUT, DELETE',
        'Payload validation and informative HTTP error responses',
        'Resource-oriented route definitions following REST best practices',
        'Comprehensive Postman request collection verification for all endpoints',
        'Extensible repository design prepared for entity mapping and persistence'
      ],
      githubUrl: '', // Ready for GitHub link update
      image: 'assets/images/projects/product-api.svg',
      isFeatured: true,
      category: 'Backend / Web API'
    },
    {
      id: 'fortigate-backup-automation',
      title: 'FortiGate Configuration Backup Automation',
      shortDescription: 'A scheduled script that creates repeatable backups of FortiGate firewall configurations for safer recovery.',
      fullDescription: 'Developed an automation script to back up FortiGate firewall configurations on a schedule. The workflow reduces manual backup work and improves readiness when a configuration must be restored.',
      technologies: ['Fortinet FortiGate', 'Python', 'PowerShell', 'Scheduled Tasks', 'Configuration Backup'],
      features: [
        'Automated scheduled configuration backups',
        'Repeatable backup workflow with clear operational steps',
        'Improved configuration safety and disaster recovery readiness',
        'High-level implementation that does not expose company credentials or firewall configuration data'
      ],
      image: 'assets/images/projects/fortigate-backup.svg',
      isFeatured: true,
      category: 'IT Automation'
    },
    {
      id: 'nvr-time-sync-automation',
      title: 'NVR Time Synchronization Automation',
      shortDescription: 'A script that synchronizes NVR date and time settings so CCTV recordings retain accurate timestamps.',
      fullDescription: 'Developed a script to update and synchronize date and time settings across NVR devices. Accurate timestamps make CCTV recordings easier to review and reduce repetitive device administration.',
      technologies: ['NVR Administration', 'Python', 'PowerShell', 'Network Devices', 'Time Synchronization'],
      features: [
        'Automated NVR date and time updates',
        'Reduced repetitive manual device administration',
        'Improved timestamp consistency across CCTV recordings',
        'No internal addresses, credentials, or topology details exposed'
      ],
      image: 'assets/images/projects/nvr-time-sync.svg',
      isFeatured: true,
      category: 'IT Automation'
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
        'Manage and monitor network switches and troubleshoot LAN connectivity for users, workstations, printers, NVR systems, and other connected devices across the factory environment.',
        'Administer Fortinet FortiGate firewall policies, access rules, network access controls, traffic rules, and connectivity troubleshooting based on operational and security requirements.',
        'Develop scheduled scripts for FortiGate configuration backups to improve configuration safety and disaster recovery readiness.',
        'Develop scripts that synchronize NVR date and time settings to maintain accurate CCTV recording timestamps.',
        'Support Windows Server administration, including users, computers, shared resources, file services, and centralized endpoint administration.',
        'Configure departmental shared folders and manage NTFS and share permissions for users and groups.',
        'Troubleshoot Windows, hardware, software, printers, network access, CCTV/NVR, and infrastructure issues while documenting configurations and backup procedures.'
      ],
      technologies: ['Fortinet FortiGate', 'Windows Server', 'LAN & Switches', 'Python', 'PowerShell', 'NVR / CCTV', 'NTFS Permissions', 'IT Automation']
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
        'Supported retail POS systems and Microsoft Dynamics 365 environments to maintain business continuity.',
        'Installed and configured enterprise hardware and software workstations.',
        'Supported CCTV and IP-based security network systems across physical facilities.'
      ],
      technologies: ['Microsoft Dynamics 365', 'POS Systems', 'IP CCTV Systems', 'Hardware Configuration']
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
        'Delivered proactive on-site and remote technical diagnostics and end-user support.',
        'Assisted with complete workstation setup, system staging, and technical documentation.'
      ],
      technologies: ['Remote Support', 'Workstation Deployment', 'Technical Diagnostics', 'System Staging']
    }
  ],
  education: [
    {
      id: 'bachelor-is',
      degree: 'Bachelor of Information Systems',
      institution: 'Abbasid Institute',
      grade: 'Good',
      details: 'Comprehensive study of computer information systems, database management, software engineering fundamentals, systems analysis, and enterprise networking.'
    }
  ],
  certifications: [
    {
      id: 'cert-cls-fullstack',
      title: 'ASP.NET Full Stack Developer',
      issuer: 'CLS Learning Solutions',
      credentialType: 'Professional Engineering Training'
    },
    {
      id: 'cert-ms-web-apps',
      title: 'Developing ASP.NET Web Applications',
      issuer: 'Microsoft',
      credentialType: 'Official Technology Certification'
    },
    {
      id: 'cert-ms-web-prog',
      title: 'Programming in HTML5, JavaScript & CSS3',
      issuer: 'Microsoft',
      credentialType: 'Official Technology Certification'
    }
  ],
  languages: [
    { language: 'Arabic', proficiency: 'Native Speaker' },
    { language: 'English', proficiency: 'Good Professional Working Proficiency' }
  ]
};
