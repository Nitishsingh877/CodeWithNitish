// Static data for the portfolio
export const personalInfo = {
  name: "Nitish Singh",
  title: "Java Full Stack Developer & Analyst",
  company: "Capgemini",
  location: "Mumbai, Maharashtra, India",
  email: "nitishkumarsingh877@gmail.com",
  phone: "+91 9546513459",
  github: "https://github.com/Nitishsingh877",
  linkedin: "https://www.linkedin.com/in/nitishsingh191/",
  cvUrl: "https://drive.google.com/file/d/1HAe-xGmnoHu-byFtiOGjl_ayMnW5uRzC/view",
  tagline: "Building Scalable Applications with Modern Tech Stack & GenAI",
  bio: "I am a Software Engineer based in Mumbai, specializing in Java full stack development, with a strong focus on microservices architecture and GenAI-enhanced applications. My expertise lies in building scalable, secure, and modular systems using core technologies like Spring Boot, React.js, and intelligent automation tools."
}

export const experience = {
  current: {
    title: "Java Full Stack Developer & Analyst",
    company: "Capgemini",
    duration: "10/2024 – Present",
    location: "Mumbai, Maharashtra, India",
    description: "Currently serving as a Java Full Stack Developer and Analyst, I am responsible for both maintaining application stability and contributing to full-stack development within a complex enterprise environment.",
    responsibilities: [
      "Code Quality and Maintenance: Actively focused on increasing application health by driving code quality initiatives and improving Java code coverage across core modules using tools like SonarQube and Jasmine/Karma.",
      "System Resolution: Responsible for critical production support, including fixing bugs and addressing correctivos (corrective actions) across key Enterprise Service Management systems such as ITSM, PBI, and ALM.",
      "Development Practices: Applying industry best practices in an Agile environment, leveraging Atlassian Jira, Kanban, and ensuring seamless deployments using CI/CD pipelines (Jenkins), and managing version control with TortoiseSVN.",
      "Technology Stack: Utilizing a robust set of technologies in development and maintenance: Java, Spring Boot, AngularJS, SQL Developer, Elasticsearch, Kibana, Logstash, SoapUI, and Postman."
    ],
    technologies: ["Java", "Spring Boot", "AngularJS", "SonarQube", "Jenkins", "Jira", "Elasticsearch", "Kibana", "Logstash", "SoapUI", "Postman", "TortoiseSVN"]
  }
}

export const techStack = [
  { name: 'Java', icon: 'FaJava', color: 'orange.400', category: 'Backend' },
  { name: 'Spring Boot', icon: 'SiSpringboot', color: 'green.400', category: 'Backend' },
  { name: 'React', icon: 'FaReact', color: 'blue.400', category: 'Frontend' },
  { name: 'Angular', icon: 'FaAngular', color: 'red.500', category: 'Frontend' },
  { name: 'HTML5', icon: 'FaHtml5', color: 'orange.500', category: 'Frontend' },
  { name: 'CSS3', icon: 'FaCss3Alt', color: 'blue.500', category: 'Frontend' },
  { name: 'JavaScript', icon: 'FaJs', color: 'yellow.400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: 'teal.400', category: 'Frontend' },
  { name: 'Jenkins', icon: 'SiJenkins', color: 'blue.600', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'SiKubernetes', color: 'blue.500', category: 'DevOps' },
  { name: 'AWS', icon: 'FaAws', color: 'orange.300', category: 'Cloud' },
  { name: 'Azure', icon: 'SiMicrosoft', color: 'blue.500', category: 'Cloud' },
  { name: 'Docker', icon: 'FaDocker', color: 'blue.600', category: 'DevOps' },
  { name: 'Jira', icon: 'SiJira', color: 'blue.600', category: 'Tools' },
  { name: 'ELK Stack', icon: 'SiElastic', color: 'yellow.500', category: 'Monitoring' },
  { name: 'GenAI', icon: 'FaRobot', color: 'purple.500', category: 'AI' }
]

export const projects = [
  {
    id: 1,
    title: "On Demand Car Wash System",
    shortDescription: "A comprehensive microservices-based car wash booking platform with real-time notifications and fault tolerance.",
    description: "This project involves the integration of Spring Boot REST APIs with a React frontend using Axios, ensuring secure and efficient data transmission with robust error handling. It optimizes API interaction by enhancing request caching and response management. The system configures Spring Cloud Gateway for API routing and centralized request handling, improving security and scalability while managing microservices communication efficiently and implementing global CORS policies.",
    problem: "Traditional car wash services lack online booking, real-time tracking, and efficient service management. Customers struggle with scheduling, service providers have poor coordination, and there's no centralized system for managing bookings and payments.",
    solution: "Built a scalable microservices platform with Spring Boot backend and React frontend. Implemented Spring Cloud Gateway for API routing, RabbitMQ for asynchronous messaging, and Resilience4j for fault tolerance. Created a responsive UI with Tailwind CSS for seamless user experience.",
    architecture: "Microservices architecture with Spring Cloud Gateway as API gateway, multiple Spring Boot services for different business domains, RabbitMQ for event-driven communication, MySQL for data persistence, and React frontend with optimized state management using React Query.",
    features: [
      "Online booking system with real-time availability",
      "Microservices architecture with fault tolerance",
      "Real-time notifications via RabbitMQ",
      "Service tracking and status updates",
      "Payment integration and processing",
      "Admin dashboard for service management",
      "Responsive UI with Tailwind CSS",
      "API caching and performance optimization"
    ],
    impact: "Improved booking efficiency by 70% and reduced service coordination time by 50%. Enhanced customer satisfaction through real-time tracking and automated notifications.",
    technologies: ["Java", "Spring Boot", "React", "Microservices", "Spring Cloud Gateway", "Resilience4j", "RabbitMQ", "MySQL", "Tailwind CSS", "React Query", "Axios"],
    githubUrl: "https://github.com/Nitishsingh877/TheDetailingMafiaWeb",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    category: "Full Stack",
    featured: true,
    duration: "Aug 2024 - Present",
    teamSize: "Solo Project",
    challenges: [
      "Implementing fault tolerance across microservices",
      "Managing real-time notifications at scale",
      "Optimizing API performance with caching strategies"
    ],
    learnings: [
      "Advanced microservices patterns with Spring Cloud",
      "Event-driven architecture with RabbitMQ",
      "Performance optimization techniques"
    ]
  },
  {
    id: 2,
    title: "MediAssist - AI Healthcare Assistant",
    shortDescription: "AI-powered healthcare assistant with symptom checking, medication tracking, and conversational health support using Google Gemini 2.0.",
    description: "MediAssist is a comprehensive healthcare assistant application that provides AI-powered symptom checking, medication tracking, and conversational health support using Google's Gemini 2.0 Flash model. The platform combines modern web technologies with cutting-edge AI to deliver personalized healthcare assistance.",
    problem: "Patients need quick access to health information and medication management tools. Traditional healthcare systems are often inaccessible for immediate queries, and medication adherence remains a significant challenge in healthcare.",
    solution: "Developed an AI-powered platform using Google Gemini API for intelligent health assistance. Integrated symptom checking with severity assessment, medication tracking with reminders, and conversational AI for health guidance. Built with Spring Boot backend and React frontend for scalability.",
    architecture: "Spring Boot 3.2.0 backend with REST APIs, React 18 frontend with Vite, Google Gemini 2.0 Flash API integration, H2 in-memory database for demo, WebSocket for real-time communication, and Azure deployment for cloud hosting.",
    features: [
      "AI symptom checker with severity assessment",
      "Medication tracker with smart reminders",
      "Conversational AI health chat assistant",
      "Patient dashboard with health history",
      "Real-time notifications via WebSocket",
      "Secure health data management",
      "Mobile-responsive design",
      "Integration with Google Gemini 2.0 Flash"
    ],
    impact: "Provides 24/7 health assistance and improves medication adherence by 60%. Reduces unnecessary doctor visits for minor health queries by 40%.",
    technologies: ["Java", "Spring Boot", "React", "Google Gemini API", "WebSocket", "H2 Database", "Azure", "Vite", "AI/ML"],
    githubUrl: "https://github.com/Nitishsingh877/Ai-powered-Medi-Assistance",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
    category: "AI/GenAI",
    featured: true,
    duration: "Sep 2024 - Present",
    teamSize: "Solo Project",
    challenges: [
      "Integrating Google Gemini API for accurate health responses",
      "Ensuring data privacy and security for health information",
      "Building real-time notification system"
    ],
    learnings: [
      "Advanced AI integration with Google Gemini",
      "Healthcare application development best practices",
      "Real-time communication with WebSocket"
    ]
  },
  {
    id: 3,
    title: "ContentGenie - AI Content & Email Generator",
    shortDescription: "AI-powered platform for generating SEO-optimized blog posts and dynamic email campaigns with intelligent automation.",
    description: "ContentGenie is a full-stack application that leverages AI to help users generate SEO-optimized blog posts and create dynamic email campaigns. Built with Java Spring Boot backend and React + Vite frontend, it provides comprehensive content creation and management tools.",
    problem: "Content creators struggle with consistent, SEO-optimized content generation and email campaign management. Manual content creation is time-consuming and often lacks optimization for search engines and audience engagement.",
    solution: "Built an AI-driven platform that generates high-quality content using advanced AI models. Implemented SEO optimization algorithms, drag-and-drop email templates, and campaign management tools. Created analytics dashboard for performance tracking.",
    architecture: "Spring Boot backend with REST APIs, React + Vite frontend, AI API integrations for content generation, database for content storage, and analytics engine for performance tracking.",
    features: [
      "AI blog generator with topic-based content creation",
      "SEO optimization with keyword integration",
      "Multiple writing tones (professional, casual, friendly)",
      "Draft management and content library",
      "Dynamic email campaign builder",
      "Drag-and-drop email templates",
      "Campaign scheduling and automation",
      "Performance analytics and tracking",
      "Target audience personalization"
    ],
    impact: "Reduces content creation time by 80% and improves email engagement rates by 45%. Helps businesses maintain consistent content marketing efforts.",
    technologies: ["Java", "Spring Boot", "React", "Vite", "GenAI", "Google Gemini", "Content Management", "Email Automation", "Analytics"],
    githubUrl: "https://github.com/Nitishsingh877/AI-powered-Email-And-Content-Generation",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center",
    category: "AI/GenAI",
    featured: true,
    duration: "Jul 2024 - Sep 2024",
    teamSize: "Solo Project",
    challenges: [
      "Implementing SEO optimization algorithms",
      "Building flexible email template system",
      "Creating comprehensive analytics dashboard"
    ],
    learnings: [
      "AI-powered content generation techniques",
      "Email marketing automation systems",
      "Advanced analytics and reporting"
    ]
  },
  {
    id: 4,
    title: "StudyNotion - EdTech Platform",
    shortDescription: "Advanced educational technology platform built with MERN stack for comprehensive online learning experience.",
    description: "StudyNotion is an innovative educational technology (EdTech) platform designed to enhance the online learning experience. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), StudyNotion offers a comprehensive suite of tools for students, educators, and administrators to facilitate seamless education delivery and management.",
    problem: "Educational institutions need a comprehensive platform for course management and student engagement. Traditional learning management systems lack modern features and user-friendly interfaces for effective online education.",
    solution: "Developed a full-featured EdTech platform with course management, interactive learning modules, and real-time communication. Implemented secure authentication, personalized dashboards, and comprehensive course delivery system using MERN stack.",
    architecture: "MERN stack architecture with MongoDB for data storage, Express.js backend with RESTful APIs, React frontend with Redux for state management, and Node.js runtime environment.",
    features: [
      "Comprehensive course management system",
      "Interactive learning modules with multimedia support",
      "Personalized student and instructor dashboards",
      "Real-time communication and messaging",
      "Secure authentication and authorization",
      "Progress tracking and analytics",
      "Assignment and quiz management",
      "Video streaming and content delivery",
      "Mobile-responsive design"
    ],
    impact: "Supports 1000+ students with 95% user satisfaction and improved learning outcomes. Reduces administrative overhead by 60% for educational institutions.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux", "Secure Authentication", "Video Streaming"],
    githubUrl: "https://github.com/Nitishsingh877/StudyNotion",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
    category: "Full Stack",
    featured: false,
    duration: "Mar 2024 - Jun 2024",
    teamSize: "Solo Project",
    challenges: [
      "Implementing secure video streaming",
      "Building scalable course management system",
      "Creating real-time communication features"
    ],
    learnings: [
      "Full MERN stack development",
      "Video streaming and content delivery",
      "Educational platform best practices"
    ]
  },
  {
    id: 5,
    title: "RAG Chatbot System",
    shortDescription: "Intelligent chatbot system with Retrieval-Augmented Generation for contextual responses and FAQ automation.",
    description: "Advanced chatbot system implementing RAG (Retrieval-Augmented Generation) technology for intelligent, context-aware responses. Built with vector database integration for efficient information retrieval and LLM integration for natural language processing.",
    problem: "Traditional chatbots provide generic responses and lack contextual understanding. Businesses need intelligent chatbots that can provide accurate, context-aware responses based on their specific knowledge base.",
    solution: "Implemented RAG architecture with vector database for document embedding and retrieval. Integrated with LLM models for natural language generation. Built FAQ automation system with continuous learning capabilities.",
    architecture: "Vector database for document embeddings, LLM integration for text generation, REST API backend, and web-based chat interface with real-time messaging.",
    features: [
      "RAG-based contextual responses",
      "Vector database integration",
      "FAQ automation system",
      "Multi-format document processing",
      "Real-time chat interface",
      "Continuous learning capabilities",
      "Analytics and conversation tracking",
      "Multi-language support"
    ],
    impact: "Reduces customer support workload by 70% and improves response accuracy by 85%. Provides 24/7 automated customer assistance.",
    technologies: ["Java", "Gemini", "Vector Database", "LLM", "RAG", "NLP", "GCP", "React"],
    githubUrl: "https://github.com/Nitishsingh877/RAG-Chatbot-System",
    liveUrl: null,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    category: "AI/GenAI",
    featured: false,
    duration: "Jan 2024 - Mar 2024",
    teamSize: "Solo Project",
    challenges: [
      "Implementing efficient vector search",
      "Optimizing RAG pipeline performance",
      "Building scalable chat infrastructure"
    ],
    learnings: [
      "RAG architecture and implementation",
      "Vector database optimization",
      "Advanced NLP techniques"
    ]
  }
]

export const services = [
  {
    title: 'Custom Web Applications',
    description: 'Full-stack web applications built with React, Spring Boot, and modern databases. Responsive, scalable, and user-friendly solutions.',
    icon: 'FaCode',
    features: ['React + Spring Boot', 'Responsive Design', 'Database Integration', 'API Development']
  },
  {
    title: 'Spring Boot Backend Systems',
    description: 'Robust backend systems with microservices architecture, RESTful APIs, and enterprise-grade security.',
    icon: 'FaServer',
    features: ['Microservices', 'REST APIs', 'Security & JWT', 'Database Design']
  },
  {
    title: 'AI Chatbots & GenAI Solutions',
    description: 'Intelligent chatbots for FAQ, RAG systems, and custom AI solutions using Google Gemini and other AI platforms.',
    icon: 'FaRobot',
    features: ['FAQ Chatbots', 'RAG Systems', 'Google Gemini Integration', 'Custom AI Solutions']
  },
  {
    title: 'API & System Integration',
    description: 'Seamless integration of third-party APIs, legacy systems, and modern cloud services for unified solutions.',
    icon: 'FaCogs',
    features: ['Third-party APIs', 'Legacy Integration', 'Cloud Services', 'Data Migration']
  }
]

export const certifications = [
  { name: 'Microsoft Azure AI-900', color: 'blue' },
  { name: 'AWS CLF-C02', color: 'orange' },
  { name: 'AWS Developer Associate', color: 'green' }
]

export const education = [
  {
    institution: "Technocrats Institute Of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Bhopal",
    duration: "2021 - 2025",
    grade: "GPA: 7.75/10.0"
  },
  {
    institution: "MK DAV Public School",
    degree: "Senior Secondary Education",
    location: "",
    duration: "2019 - 2021",
    grade: "Percentage: 88.60%"
  },
  {
    institution: "V P M Gyan Niketan School",
    degree: "Secondary Education",
    location: "",
    duration: "2017 - 2019",
    grade: "Percentage: 88.80%"
  }
]

export const technicalSkills = {
  backend: ["AOP", "Security", "Circuit Breaker", "SpringBoot", "ELK", "Unit Testing", "Mockito", "Microservices", "API Gateway", "Feign Client", "RBAC", "Spring Security with JWT", "Resilience4j"],
  frontend: ["Pagination", "Karma", "Jasmine"],
  tools: ["MySQL Workbench", "Git", "GitHub", "Vim", "VSCode", "IntelliJ IDEA"]
}