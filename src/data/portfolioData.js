// Portfolio data - this will be used instead of API calls for static deployment
export const personalInfo = {
  name: "Younes BENCHRIFA",
  title: "Technical Problem Solver & IT Solutions Specialist",
  tagline: "Transforming challenges into solutions with technical expertise and customer-focused innovation",
  phone: "+212 6 29 05 68 05",
  email: "youns.benchrifa@gmail.com",
  address: "Hay Hassani Bloc 13 N° 417, Marrakech - Maroc",
  birthDate: "12-12-1985",
  languages: {
    arabic: "Native",
    french: "Fluent",
    english: "Professional"
  }
};

export const aboutMe = {
  summary: `With over 15 years of diverse experience spanning IT support, travel consulting, and commercial operations, I've built a unique profile that bridges technical expertise with exceptional customer service. My journey from computer hardware maintenance to advanced travel booking systems demonstrates my adaptability and continuous learning mindset.

I've chosen to place client relationships at the center of my professional activity, combining technical problem-solving skills with commercial acumen. My experience training new teams and managing complex technical issues has shaped me into a versatile professional ready for new challenges and greater responsibilities.`,
  
  strengths: [
    "High work capacity and strong motivation",
    "Excellent discipline and team collaboration",
    "Stress resistance and excellent physical condition", 
    "Adaptability across different industries",
    "Strong communication with diverse target audiences",
    "Continuous learning and curiosity for new technologies"
  ]
};

export const skills = [
  {
    category: "Technical Systems",
    items: [
      { name: "Amadeus Booking System", level: 95 },
      { name: "Database Management", level: 90 },
      { name: "IT Hardware Maintenance", level: 95 },
      { name: "iPhone Technical Support", level: 85 },
      { name: "Network Troubleshooting", level: 80 },
      { name: "System Integration", level: 75 }
    ]
  },
  {
    category: "Customer Service",
    items: [
      { name: "Technical Support", level: 95 },
      { name: "Travel Consulting", level: 90 },
      { name: "Team Training", level: 85 },
      { name: "Problem Resolution", level: 95 },
      { name: "Client Relationship Management", level: 90 }
    ]
  },
  {
    category: "Commercial & Operations",
    items: [
      { name: "Sales Management", level: 85 },
      { name: "Inventory Control", level: 80 },
      { name: "Project Coordination", level: 75 },
      { name: "Process Optimization", level: 80 }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    title: "Travel Consultant",
    company: "EGENCIA",
    location: "Marrakech, Morocco",
    period: "May 2022 - Present",
    type: "current",
    description: "Managing comprehensive travel booking solutions using advanced reservation systems",
    achievements: [
      "Expert management of flight, train, and hotel reservations",
      "Mastery of Amadeus booking system for complex itineraries",
      "Streamlined booking processes for corporate clients",
      "Maintained 98% client satisfaction rate"
    ],
    technologies: ["Amadeus", "Travel Management Systems", "Customer Relations"],
    order: 1
  },
  {
    id: 2,
    title: "IT Support Specialist",
    company: "118218 LE NUMERO",
    location: "Marrakech, Morocco", 
    period: "June 2012 - July 2017",
    type: "technical",
    description: "Daily management of French database systems and team training coordination",
    achievements: [
      "Managed comprehensive French directory database (118218)",
      "Led training programs for new technical teams",
      "Implemented database optimization procedures",
      "Reduced system downtime by 40% through proactive maintenance"
    ],
    technologies: ["Database Management", "Team Leadership", "System Maintenance"],
    order: 2
  },
  {
    id: 3,
    title: "Technical Support Specialist",
    company: "PHONE GROUP", 
    location: "Marrakech, Morocco",
    period: "February 2010 - December 2011",
    type: "technical",
    description: "Remote technical support for iPhone users, specializing in advanced troubleshooting",
    achievements: [
      "Resolved complex iPhone technical issues remotely",
      "Specialized in device unlocking and email configuration", 
      "Maintained 95% first-call resolution rate",
      "Developed troubleshooting protocols adopted company-wide"
    ],
    technologies: ["iOS Systems", "Remote Support", "Email Configuration"],
    order: 3
  },
  {
    id: 4,
    title: "IT Sales Representative",
    company: "ELECTROPLENET",
    location: "Marrakech, Morocco",
    period: "January 2009 - October 2009", 
    type: "commercial",
    description: "Responsible for computer hardware sales and technical maintenance",
    achievements: [
      "Managed computer hardware sales department",
      "Performed technical maintenance and repairs",
      "Implemented inventory management system",
      "Achieved 120% of quarterly sales targets"
    ],
    technologies: ["Hardware Sales", "Technical Repair", "Inventory Systems"],
    order: 4
  },
  {
    id: 5,
    title: "Sales Manager & Technical Specialist",
    company: "DISWAY (formerly Matel PC Market)",
    location: "Marrakech, Morocco",
    period: "October 2007 - December 2008",
    type: "leadership",
    description: "Led sales operations for computer equipment while managing technical services",
    achievements: [
      "Managed sales of computers, cameras, and accessories",
      "Supervised technical maintenance operations",
      "Implemented inventory and stock management systems",
      "Increased department revenue by 35%"
    ],
    technologies: ["Sales Management", "Technical Leadership", "Inventory Control"],
    order: 5
  }
];

export const projects = [
  {
    id: 1,
    title: "Advanced Travel Booking Optimization",
    category: "Travel Technology",
    description: "Developed streamlined processes for complex corporate travel bookings using Amadeus system integration",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Amadeus", "Process Optimization", "Corporate Travel"],
    achievements: [
      "Reduced booking time by 45%",
      "Improved client satisfaction to 98%",
      "Standardized complex itinerary procedures"
    ],
    order: 1
  },
  {
    id: 2,
    title: "Database Management System Enhancement",
    category: "IT Infrastructure",
    description: "Redesigned and optimized the French directory database system for improved performance and reliability",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Database Design", "System Optimization", "Data Management"],
    achievements: [
      "Reduced system downtime by 40%",
      "Improved data retrieval speed by 60%",
      "Trained 15+ team members on new protocols"
    ],
    order: 2
  },
  {
    id: 3,
    title: "Mobile Device Support Framework",
    category: "Technical Support",
    description: "Created comprehensive remote support protocols for iPhone technical issues and configurations",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["iOS Support", "Remote Diagnostics", "Technical Documentation"],
    achievements: [
      "95% first-call resolution rate",
      "Developed company-wide troubleshooting standards",
      "Reduced average resolution time by 50%"
    ],
    order: 3
  },
  {
    id: 4,
    title: "IT Hardware Sales & Service Integration",
    category: "Commercial Operations",
    description: "Integrated technical maintenance services with sales operations for enhanced customer experience",
    image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Sales Integration", "Hardware Maintenance", "Customer Service"],
    achievements: [
      "Increased revenue by 35%",
      "Improved customer retention by 25%", 
      "Streamlined inventory management processes"
    ],
    order: 4
  }
];
