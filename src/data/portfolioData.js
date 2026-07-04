// ============================================================
// portfolioData.js — Centralized configuration for Saurabh Pratap Singh's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Saurabh Pratap Singh",
  firstName: "Saurabh",
  brandName: "Saurabh",
  title: "Full Stack Web Developer",
  location: "Gorakhpur, UP, India",
  phone: "+91 8853829494",
  emails: {
    primary: "saurabhsin6294@gmail.com",
  },
  summary:
    "Full Stack Web Developer with hands-on experience building production-grade platforms using PHP (Laravel), React.js, and Tailwind CSS. Experienced in B2B SaaS architecture, e-commerce synchronizations, QA regression testing, and agile tools.",
  resumeUrl: "/Saurabh_Pratap_Singh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/saurabhsin6294",
  linkedin: "https://www.linkedin.com/in/saurabh-pratap-singh-4a9968253",
  instagram: "https://instagram.com/saurabhsingh_2608",
};

export const heroContent = {
  greeting: "Hi, I'm Saurabh Pratap Singh",
  titleHighlight: "Full Stack Developer",
  subtitle:
    "I build fast, scalable B2B SaaS and e-commerce applications using PHP, Laravel, React.js, and Tailwind CSS.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:saurabhsin6294@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Saurabh,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Saurabh_Pratap_Singh_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Saurabh Pratap Singh</span>, a results-oriented Full Stack Web Developer based in India, dedicated to crafting high-performance, production-grade applications using PHP, Laravel, React.js, and Tailwind CSS.`,
  techStack: ["Laravel", "React.js", "PHP"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, agile, and quality-centric workflow to deliver production-ready web products.",
  cards: [
    {
      number: "01",
      title: "Analyze & Architect",
      text: "Understanding client goals and designing scalable database schemas and clean backend architectures.",
    },
    {
      number: "02",
      title: "Develop Modules",
      text: "Building robust RESTful APIs in Laravel and responsive, interactive user interfaces in React.js.",
    },
    {
      number: "03",
      title: "Rigorous QA",
      text: "Executing functional and regression testing cycles using Jira, Slack, and Loom to squash performance bottlenecks.",
    },
    {
      number: "04",
      title: "Optimize & Ship",
      text: "Refactoring code, verifying builds, and deploying to platforms like Vercel with zero production defects.",
    },
  ],
  endText: "Ready to deploy!",
};

// Technical Skills Stack
export const technicalSkills = {
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "PHP", level: 92 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 }
      ]
    },
    {
      title: "Frameworks & CSS",
      skills: [
        { name: "Laravel", level: 92 },
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 85 }
      ]
    },
    {
      title: "APIs & Integrations",
      skills: [
        { name: "Shopify API", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "reCAPTCHA v3", level: 80 },
        { name: "SMTP / Email Delivery", level: 85 }
      ]
    },
    {
      title: "Tools & Agile Platforms",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Jira", level: 85 },
        { name: "Slack & Loom", level: 90 },
        { name: "XAMPP", level: 88 },
        { name: "Vercel", level: 90 },
        { name: "Brevo", level: 80 }
      ]
    },
    {
      title: "Testing & QA Methodologies",
      skills: [
        { name: "Functional Testing", level: 92 },
        { name: "Regression Testing", level: 90 },
        { name: "Bug Tracking", level: 88 },
        { name: "Test Documentation", level: 85 }
      ]
    }
  ]
};

// Content Creation Data (Left as placeholder to avoid breaking potential imports)
export const contentCreation = {
  badge: "Creative Works",
  heading: "Other Interdisciplinary Works",
  description: "Applying creative approaches to simplify technical communication.",
  categories: []
};

// Adapted for Education Timeline (formerly Leadership)
export const leadershipList = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Acquired deep understanding of software development, algorithms, databases, and Object-Oriented Programming principles.",
    role: "SRMCEM, Lucknow",
    badge: "2022 – 2025 (Score: 70%)"
  },
  {
    title: "Intermediate (PCM)",
    description: "Completed higher secondary education focusing on Physics, Chemistry, and Mathematics.",
    role: "Kendriya Vidyalaya GKP",
    badge: "2021 – 2022 (Score: 65%)"
  },
  {
    title: "High School",
    description: "Graduated with excellent scores, building a strong foundation in science, math, and logical thinking.",
    role: "Kendriya Vidyalaya GKP",
    badge: "2019 – 2020 (Score: 90.4%)"
  }
];

// Professional Experience / Internships List
export const internshipsList = [
  {
    organization: "Aadhnik Technology Pvt. Ltd. | eSyncora",
    role: "Full Stack Developer – CRM Platform",
    duration: "Jan 2026 - Present (Lucknow, UP / Remote)",
    skills: [
      "Leads & Deals modules with Kanban pipeline boards",
      "Interactive analytics charts and pipeline funnels",
      "RelatedTasks component with role-based access control",
      "SMTP and production email integrations"
    ],
    tech: ["Laravel", "React.js", "Tailwind CSS", "TypeScript", "MySQL", "reCAPTCHA"]
  },
  {
    organization: "Aadhnik Technology Pvt. Ltd. | eSyncora",
    role: "Full Stack Developer – VMS Platform",
    duration: "Jan 2026 - Present (Lucknow, UP / Remote)",
    skills: [
      "B2B client procurement modules",
      "Interactive onboarding flows for vendors",
      "Analytics dashboards and database optimizations",
      "Cross-device performance tuning"
    ],
    tech: ["Laravel", "React.js", "Tailwind CSS", "PostgreSQL", "Jira", "Agile"]
  },
  {
    organization: "FirstShake",
    role: "Full Stack Developer – E-Commerce Platform",
    duration: "Jul 2025 - Jul 2026 (Remote)",
    skills: [
      "Brand Portal (product listing, order management)",
      "Creator Portal (influencer marketing, affiliate tracking)",
      "Shopify API integrations for multi-store sync",
      "RESTful API design and secure authentication"
    ],
    tech: ["Laravel", "Tailwind CSS", "Shopify API", "REST APIs", "MySQL", "RBAC"]
  },
  {
    organization: "FirstShake",
    role: "QA Engineer",
    duration: "Jul 2025 - Jul 2026 (Remote)",
    skills: [
      "Functional, regression, and cross-browser UI testing",
      "Documenting issues in Jira and coordinating via Loom & Slack",
      "Testing REST API endpoints and payload responses",
      "Maintaining release-ready test case suites"
    ],
    tech: ["QA Testing", "Jira", "Slack", "Loom", "API Testing", "Bug Tracking"]
  }
];

// Soft Skills List
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Analyzing complex system flows and designing clean database & code structures." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working in agile sprint environments with developers, product managers, and testers." },
  { name: "Quality Minded", icon: "🛡️", desc: "Rigorous attention to edge cases, UI alignment, responsiveness, and performance." },
  { name: "Technical Communication", icon: "💬", desc: "Writing clean documentations and recording precise video walkthroughs via Loom." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning new technologies, tools, and third-party APIs." },
  { name: "Time Management", icon: "⏰", desc: "Handling parallel full-stack modules and QA cycles efficiently under tight deadlines." }
];

// Projects List
export const projects = [
  {
    id: "crm-platform",
    number: "01",
    badge: "🚀 Production CRM",
    title: "eSyncora CRM Platform",
    description:
      "A production-grade B2B Customer Relationship Management (CRM) SaaS. Features a visual Leads & Deals pipeline, Kanban board system, detailed Reports, interactive pipeline funnel charts, and an access-controlled Tasks manager.",
    techTags: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "reCAPTCHA", "SMTP"],
    links: {
      github: null,
      demo: "https://crm.esyncora.com",
    },
    isFlagship: true,
  },
  {
    id: "vms-platform",
    number: "02",
    badge: "⚡ Procurement SaaS",
    title: "eSyncora Vendor Management System (VMS)",
    description:
      "A comprehensive SaaS system automating B2B client procurement. Integrates custom onboarding workflows, procurement modules, and detailed dashboard analytics with optimized cross-device performance.",
    techTags: ["Laravel", "React.js", "Tailwind CSS", "PostgreSQL", "Jira", "Agile"],
    links: {
      github: null,
      demo: "https://vms.esyncora.com",
    },
    isFlagship: false,
  },
  {
    id: "firstshake-ecommerce",
    number: "03",
    badge: "🛍️ E-Commerce Portal",
    title: "FirstShake E-Commerce Platform",
    description:
      "An advanced e-commerce platform encompassing a Brand Portal (product listing, order management, Shopify synchronization) and a Creator Portal (influencer marketing campaigns, affiliate referral tracking).",
    techTags: ["Laravel", "Tailwind CSS", "Shopify API", "MySQL", "Authentication"],
    links: {
      github: null,
      demo: "https://tryfirstshake.com/",
    },
    isFlagship: false,
  },
  {
    id: "anti-cheat-exam",
    number: "04",
    badge: "🔒 Security Project",
    title: "Online Exam Portal with Anti-Cheating Features",
    description:
      "A secure web-based examination platform developed with advanced browser-level integrity protocols: automatic full-screen enforcement, tab-switch detection counters, and auto-submit features on violations.",
    techTags: ["JavaScript", "HTML5", "CSS3", "PHP"],
    links: {
      github: "https://github.com/saurabhsin6294",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "e-billing",
    number: "05",
    badge: "📊 Collegiate Tool",
    title: "E-Billing System",
    description:
      "An administrative billing management system built for collegiate systems featuring instant invoice PDF generation, purchase item tracking, payment status dashboards, and search parameters.",
    techTags: ["PHP", "JavaScript", "CSS3", "MySQL"],
    links: {
      github: "https://github.com/saurabhsin6294",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Full Stack Web Development",
      issuer: "Production Projects",
      icon: "💻",
    },
    {
      name: "Laravel & PHP Backend Engineering",
      issuer: "eSyncora Systems",
      icon: "⚙️",
    },
    {
      name: "Quality Assurance & QA Methodologies",
      issuer: "FirstShake Testing",
      icon: "🛡️",
    },
  ],
  viewAllUrl: "https://github.com/saurabhsin6294",
};

export const education = {
  degree: "BCA – Bachelor of Computer Applications",
  institution: "SRMCEM, Lucknow",
  cgpa: "70%",
  graduation: "2025",
  twelfth: "12th Science – 65%",
  tenth: "10th CBSE – 90.4%",
};

export const footerContent = {
  taglines: [
    "Full Stack Web Development",
    "PHP · Laravel · React.js · Tailwind CSS",
    "Clean Code & QA Production Standards",
  ],
  credential: "BCA · SRMCEM Lucknow",
  copyright: `© ${new Date().getFullYear()} Saurabh Pratap Singh | All Rights Reserved`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
