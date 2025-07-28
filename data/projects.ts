export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tags: string[];
  category?: string;
  year?: string;
  duration?: string;
  client?: string;
  featured?: boolean;
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
  technologies?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  features?: string[];
  challenges?: string[];
  solutions?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Tugboat Monitoring System",
    subtitle: "Featured Project",
    description:
      "A full-stack web application built with Next.js for analyzing tugboat sensor data and visualizing system health. Features an interactive steel door UI that opens to reveal AI-powered monitoring dashboards with real-time data visualization.",
    longDescription:
      "This tugboat monitoring system provides an intuitive interface for uploading and analyzing sensor data files. It features an animated steel door entrance, real-time temperature and pressure visualization, trip simulation playback, and AI-generated alerts for system anomalies. The application processes binary sensor data through an external AI service to provide comprehensive system health monitoring.",
    image: "/imgs/project1.png",
    images: [
      "/imgs/Project1/1.png",
      "/imgs/Project1/2.png",
      "/imgs/Project1/3.png",
      "/imgs/Project1/4.png",
      "/imgs/Project1/5.png",
      "/imgs/Project1/6.png",
    ],
    tags: ["React", "TypeScript", "Next.js", "SCSS", "Framer Motion"],
    category: "Frontend",
    year: "2025",
    duration: "4 months",
    client: "Pep Arab Company",
    featured: true,
    technologies: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "SCSS Modules",
        "Framer Motion",
        "Recharts",
        "Chart.js",
      ],
      tools: [
        "Binary Processing",
        "Data Visualization",
        "Animation Libraries",
        "Virtual Scrolling",
      ],
    },
    features: [
      "Interactive Tugboat Door UI with Animated Entrance",
      "Multi-file Binary Sensor Data Upload (4 files required)",
      "Dual Line Charts for Temperature and Pressure Monitoring",
      "Interactive Time Cursor for Data Exploration",
      "Trip Simulation with Playback Controls",
      "Adjustable Playback Speed",
      "AI-Generated System Alerts and Anomaly Detection",
      "Detailed Issue Explanations with Countermeasures",
      "Real-time Status Indicators for Individual Sensors",
      "Overall System Health Visualization",
      "Responsive Design with SCSS Modules",
      "Printable Alert Reports with Professional Formatting",
      "Virtual Scrolling for Large Datasets",
      "Paginated Data Display for Performance",
    ],
    challenges: [
      "Handling large volumes of sensor readings on both the main page with trip simulator and mission analysis page",
      "Performance issues when rendering correlation graphs with massive datasets",
      "Creating professional, well-designed printable reports for system alerts",
      "Maintaining smooth UI performance with real-time data updates",
    ],
    solutions: [
      "Implemented pagination for readings on the main page to improve performance and user experience",
      "Applied virtual scrolling technique on mission analysis page to handle large datasets efficiently",
      "Migrated from Recharts to Chart.js for correlation graphs, significantly improving rendering performance",
      "Developed custom print functionality with styled HTML templates for professional alert reports, including formatted troubleshooting steps and system diagnostics",
    ],
  },
  {
    id: 2,
    title: "Reddit Post Clone",
    subtitle: "Interactive Social Media UI",
    description:
      "A pixel-perfect Reddit post page clone built with React and SASS, featuring interactive voting, nested commenting, and responsive design. Demonstrates advanced UI/UX patterns with hover effects, profile cards, and dynamic sorting.",
    longDescription:
      "This Reddit clone recreates the complete Reddit post page experience with all interactive elements. Users can view posts with rich media content, engage through upvoting and downvoting, add nested comments with real-time updates, and sort discussions by different criteria. The application features sophisticated UI patterns including hover-triggered profile cards, animated vote buttons, collapsible comment threads, and responsive design that works seamlessly across all device sizes.",
    image: "/imgs/project2.png",
    images: ["/imgs/Project2/1.png"],
    tags: ["React", "SASS", "JavaScript"],
    category: "Frontend",
    year: "2023",
    duration: "3 days",
    client: "Personal Project",
    featured: false,
    links: {
      github: "https://github.com/hussein1574/reddit-post",
      live: "https://redditclone-31lm.onrender.com/",
    },
    technologies: {
      frontend: [
        "React 18",
        "JavaScript (ES6+)",
        "SASS/SCSS",
        "CSS Grid & Flexbox",
        "React Hooks",
        "SASS Variables & Mixins",
        "Responsive Design",
      ],
      tools: ["Create React App", "Render (Deployment)"],
    },
    features: [
      "Pixel-Perfect Reddit Post Page Recreation",
      "Interactive Voting System (Upvote/Downvote) for Posts and Comments",
      "Real-time Vote Count Updates with Visual Feedback",
      "Nested Comment System with Unlimited Depth",
      "Reply to Comments with Dynamic Threading",
      "Collapsible Comment Threads with Visual Indicators",
      "Add New Comments with Form Validation",
      "Hover-Triggered Profile Cards with User Statistics",
      "Community Information Cards with Member Stats",
      "Dynamic Comment Sorting (Best/New) with Real-time Updates",
      "Post Content Display with Rich Media Support",
      "Responsive Design for Mobile, Tablet, and Desktop",
      "Animated Button States and Hover Effects",
      "Visual Connection Lines for Comment Hierarchy",
    ],
    challenges: [
      "Implementing complex nested comment threading with proper visual hierarchy",
      "Managing state across multiple interactive components without prop drilling",
      "Creating pixel-perfect hover cards with proper positioning and z-index management",
      "Handling responsive design for complex nested layouts",
      "Implementing smooth animations while maintaining performance",
      "Managing comment state updates for voting and new replies",
    ],
    solutions: [
      "Developed a recursive comment component structure to handle unlimited nesting depth with proper parent-child relationships",
      "Used React's useState hook with functional updates to manage complex state transitions for voting and comment additions",
      "Implemented absolute positioning with careful z-index management for overlay components like profile cards",
      "Applied mobile-first responsive design with CSS Grid and Flexbox for complex layouts that adapt seamlessly",
      "Used CSS transitions and transform properties for smooth hover effects without impacting layout performance",
      "Created a centralized comment management system that efficiently updates vote counts and handles new comment insertion",
    ],
  },
  {
    id: 3,
    title: "Tabali CRM - Task Management System",
    subtitle: "Full-Stack Laravel Web Application",
    description:
      "A comprehensive task management system built with Laravel, designed to help department managers assign and track tasks for their employees. Features role-based access control, team management, project organization, and multilingual support.",
    longDescription:
      "Tabali CRM is a production-ready task management web application that streamlines workflow between managers and employees. The system provides a complete solution for task assignment, progress tracking, and team collaboration. Built with Laravel's robust architecture, it features a sophisticated role-based permission system, real-time task status updates, comprehensive commenting system, and bilingual interface support. The application handles complex business logic including task lifecycle management, team hierarchies, project organization, and detailed user management with account activation workflows.",
    image: "/imgs/project3.png",
    images: [
      "/imgs/Project3/1.png",
      "/imgs/Project3/3.png",
      "/imgs/Project3/4.png",
      "/imgs/Project3/5.png",
      "/imgs/Project3/6.png",
      "/imgs/Project3/7.png",
      "/imgs/Project3/8.png",
      "/imgs/Project3/9.png",
      "/imgs/Project3/10.png",
      "/imgs/Project3/11.png",
      "/imgs/Project3/12.png",
      "/imgs/Project3/13.png",
      "/imgs/Project3/14.png",
      "/imgs/Project3/15.png",
      "/imgs/Project3/16.png",
      "/imgs/Project3/17.png",
    ],
    tags: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Full Stack",
    year: "2023",
    duration: "1 month",
    client: "Oriental Cookary (Tabali)",
    featured: true,
    technologies: {
      backend: [
        "Laravel 10",
        "PHP 8.1+",
        "MySQL Database",
        "Eloquent ORM",
        "Laravel Authentication",
        "Laravel Validation",
        "Laravel Middleware",
        "Laravel Mail",
        "Laravel Pagination",
        "UUID Primary Keys",
        "Database Migrations",
        "Database Seeders",
        "Model Relationships",
      ],
      frontend: [
        "Blade Templates",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Responsive Design",
        "SCSS",
        "Ion Icons",
        "Custom CSS Grid & Flexbox",
        "Mobile-First Design",
        "Interactive UI Components",
      ],
      tools: [
        "Composer",
        "Laravel Artisan",
        "NPM",
        "Vite Build Tool",
        "Git Version Control",
      ],
    },
    features: [
      "Complete User Authentication System with Registration, Login, and Password Reset",
      "Role-Based Access Control (Admin vs Regular User permissions)",
      "Account Activation System with Email Verification",
      "Comprehensive Task Management with CRUD Operations",
      "Task Status Workflow (Opened → Pending → Closed)",
      "Task Priority Levels (Low, Normal, Severe) with Visual Indicators",
      "Deadline Tracking with Visual Alerts for Overdue Tasks",
      "Task Assignment to Individual Users or Entire Teams",
      "Team Management System with Team Admin Roles",
      "Project Organization with Task Categorization",
      "Real-time Comments and Discussion System on Tasks",
      "Advanced Search and Filtering Capabilities",
      "Dashboard with Statistics and Key Performance Indicators",
      "Multilingual Support (English and Arabic) with RTL Layout",
      "Responsive Design for Mobile, Tablet, and Desktop",
      "Pagination for Large Data Sets",
      "User Management Panel for Administrators",
      "Team Hierarchy with Member and Admin Role Management",
      "Task Submission and Approval Workflow",
      "Comprehensive User Profile Management",
      "Settings and Preferences Management",
      "Professional UI with Consistent Design Language",
      "Form Validation with User-Friendly Error Messages",
      "Secure Password Hashing and Session Management",
    ],
    challenges: [
      "Implementing complex role-based permissions that scale across different user types and team structures",
      "Designing a flexible task assignment system that works for both individual users and team-based workflows",
      "Creating a robust task status workflow that prevents unauthorized status changes while maintaining usability",
      "Building a multilingual interface with proper RTL support for Arabic language",
      "Managing complex database relationships between users, teams, tasks, and projects without performance issues",
      "Implementing secure authentication with account activation and password reset functionality",
    ],
    solutions: [
      "Developed a sophisticated middleware system with role-based guards that check permissions at multiple levels (route, controller, and view)",
      "Created a flexible pivot table architecture (UsersTask, UsersTeam) that allows for granular task assignments while maintaining data integrity",
      "Implemented a state machine pattern for task status management with validation rules that ensure proper workflow progression",
      "Built a comprehensive localization system using Laravel's translation features with dedicated Arabic language files and CSS for RTL layout support",
      "Optimized database queries using Eloquent relationships with eager loading and implemented pagination to handle large datasets efficiently",
      "Integrated Laravel's built-in authentication with custom account activation workflow using signed URLs and email verification for enhanced security",
    ],
  },
  {
    id: 4,
    title: "Student Information System (SIS)",
    subtitle: "University Management Platform",
    description:
      "A comprehensive web-based student information system that streamlines course registration processes for universities. Features automated timetable generation using genetic algorithms, multi-role user management, and intelligent course scheduling optimization.",
    longDescription:
      "The Student Information System (SIS) is an enterprise-level web application designed to revolutionize how universities manage course registration and academic scheduling. Built with a modern tech stack combining Laravel backend and React frontend, the system serves multiple user roles including students, professors, academic advisors, and administrators. The platform's standout feature is its AI-powered timetable generation system that uses genetic algorithms to optimize course and exam schedules while respecting complex constraints. The system handles everything from student course registration with prerequisite validation to automated transcript generation, making it a complete solution for academic institutions seeking to digitize and optimize their registration processes.",
    image: "/imgs/project4.png",
    images: [
      "/imgs/Project4/1.png",
      "/imgs/Project4/2.png",
      "/imgs/Project4/3.png",
      "/imgs/Project4/4.png",
      "/imgs/Project4/5.png",
      "/imgs/Project4/6.png",
      "/imgs/Project4/7.png",
      "/imgs/Project4/8.png",
      "/imgs/Project4/9.png",
      "/imgs/Project4/10.png",
      "/imgs/Project4/11.png",
      "/imgs/Project4/14.png",
      "/imgs/Project4/15.png",
      "/imgs/Project4/16.png",
      "/imgs/Project4/17.png",
      "/imgs/Project4/18.png",
      "/imgs/Project4/19.png",
      "/imgs/Project4/20.png",
      "/imgs/Project4/21.png",
      "/imgs/Project4/23.png",
      "/imgs/Project4/24.png",
      "/imgs/Project4/25.png",
    ],
    links: {
      github:
        "https://github.com/hussein1574/Student-Management-System-Customized-Web-Application-Python-Integrated",
    },
    tags: [
      "Laravel",
      "React",
      "PHP",
      "Python",
      "MySQL",
      "Genetic Algorithm",
      "AI",
    ],
    category: "Full Stack",
    year: "2023",
    duration: "1 Year",
    client: "University Capstone Project",
    featured: true,
    technologies: {
      backend: [
        "Laravel Framework",
        "PHP 8.0+",
        "MySQL Database",
        "Eloquent ORM",
        "Laravel Backpack Admin Panel",
        "RESTful API Architecture",
        "Laravel Authentication & Authorization",
        "Database Migrations & Seeders",
        "Laravel Validation",
        "CSV Data Processing",
      ],
      frontend: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Interactive Data Visualization",
        "Chart.js for Analytics",
        "Bootstrap Framework",
        "Dynamic Form Handling",
        "Real-time UI Updates",
      ],
      tools: [
        "Python (Genetic Algorithm Implementation)",
        "Visual Studio Code",
        "XAMPP Local Server",
        "Git Version Control",
        "Database Design Tools",
        "API Testing Tools",
      ],
    },
    features: [
      "Multi-Role User Authentication System (Admin, Professor, Academic Advisor, Student)",
      "Intelligent Course Registration with Prerequisite Validation",
      "AI-Powered Timetable Generation using Genetic Algorithms",
      "Automated Exam Schedule Optimization",
      "Comprehensive Admin Dashboard with Analytics and Statistics",
      "Student Progress Tracking with GPA Calculations",
      "Course Dependency Mapping and Visualization",
      "Academic Transcript Generation and Management",
      "Professor Grade Upload and Results Management",
      "Academic Advisor Course Approval Workflow",
      "Department and Regulation Management",
      "Hall and Resource Allocation System",
      "Time Period and Day Management for Scheduling",
      "Professor Availability and Preference Setting",
      "Constraint-Based Scheduling (Hard and Soft Constraints)",
      "Real-time Registration Status Monitoring",
      "Course Capacity and Enrollment Management",
      "Interactive Timetable Visualization",
      "CSV Data Import for Course Regulations",
      "Advanced Search and Filtering Capabilities",
      "Course Completion Progress Tracking",
      "Academic Year and Semester Management",
      "Conflict Detection and Resolution",
    ],
    challenges: [
      "Implementing a genetic algorithm that could handle complex university scheduling constraints while maintaining reasonable computation time",
      "Designing a flexible database schema that could accommodate different university structures, departments, and course regulations",
      "Creating an intuitive user interface that serves four distinct user roles with vastly different needs and permissions",
      "Developing a robust constraint satisfaction system that balances hard requirements (no scheduling conflicts) with soft preferences (optimal resource utilization)",
      "Building a scalable course prerequisite system that can handle complex dependency chains and circular dependency detection",
      "Integrating real-time data updates across multiple user sessions while maintaining data consistency and preventing race conditions",
    ],
    solutions: [
      "Developed a sophisticated genetic algorithm with custom fitness functions that evaluate multiple constraint types simultaneously, using population evolution over multiple generations to find optimal timetable solutions",
      "Implemented a modular database architecture with pivot tables and polymorphic relationships, allowing the system to adapt to different university structures while maintaining referential integrity",
      "Created role-based interfaces with Laravel's authorization system and React component composition, ensuring each user type sees only relevant functionality while maintaining a consistent design language",
      "Built a multi-layered constraint validation system that categorizes requirements by priority, allowing the genetic algorithm to satisfy critical constraints first while optimizing for preferred outcomes",
      "Designed a recursive prerequisite checking algorithm with cycle detection, coupled with a visual course dependency graph that helps students and advisors understand academic pathways",
      "Implemented Laravel's queue system with Redis for background processing of complex operations, while using real-time WebSocket connections for immediate UI updates across concurrent user sessions",
    ],
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
