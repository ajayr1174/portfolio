// Portfolio Configuration File
// All portfolio content is centralized here for easy updates

export const portfolioConfig = {
  // Selected Works / Projects Section
  projects: [
    {
      id: 1,
      title: "Interactive React Application with PixiJS",
      description:
        "Built a production-ready interactive React application using PixiJS as part of a 2-member engineering team. Delivered the entire feature set within one month while maintaining high performance and visual fidelity with Figma designs.",
      category: "FRONTEND ENGINEERING",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      github: "https://github.com/ajayr1174",
      live: "https://example.com",
      accentGradient: "from-cyan-400 to-transparent",
      gridSpan: "md:col-span-2",
    },
    {
      id: 2,
      title: "OpenSearch Dashboards POC",
      description:
        "Led a proof-of-concept initiative to extend OpenSearch dashboards with custom React components and enhanced visualization features, securing stakeholder approval for full product implementation.",
      category: "DATA VISUALIZATION",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/ajayr1174",
      live: "https://example.com",
      accentGradient: "from-indigo-400 to-transparent",
      gridSpan: "md:col-span-1",
    },
    {
      id: 3,
      title: "Automation Testing Framework",
      description:
        "Designed and implemented an enterprise automation framework using WebdriverIO, Cucumber, and JavaScript with 1500+ automated tests. Achieved 90% automation coverage and reduced execution time by 40% using parallel processing.",
      category: "TEST AUTOMATION",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      github: "https://github.com/ajayr1174",
      live: "https://example.com",
      accentGradient: "from-emerald-400 to-transparent",
      gridSpan: "md:col-span-1",
    },
  ],

  // Experience / Timeline Section
  timeline: [
    {
      id: 1,
      position: "top",
      title: "Senior Software Engineer",
      subtitle: "Persistent Systems — Oct 2024 - Present",
      description:
        "Leading frontend development, building scalable React applications and maintaining production systems.",
    },
    {
      id: 2,
      position: "bottom",
      title: "Software Engineer",
      subtitle: "Persistent Systems — Jul 2022 - Sep 2024",
      description:
        "Developed high-performance React applications, OpenSearch dashboards POC, and automation frameworks.",
    },
    {
      id: 3,
      position: "top",
      title: "B.Tech Computer Science & Engineering",
      subtitle: "Institute of Technology Gopeshwar — 2018 - 2022",
      description:
        "Graduated with 78% while building strong foundations in software engineering and algorithms.",
    },
  ],

  // Insights / Blog Section
  blog: [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Lessons learned while designing scalable React component architectures for enterprise production applications.",
      timestamp: "Recent",
    },
    {
      title: "Automating End-to-End Testing with WebdriverIO",
      excerpt:
        "How to build large-scale test automation frameworks using WebdriverIO, Cucumber, and parallel test execution.",
      timestamp: "Recent",
    },
    {
      title: "Optimizing Frontend Performance",
      excerpt:
        "Strategies for improving performance, debugging production issues, and maintaining scalable frontend architectures.",
      timestamp: "Recent",
    },
  ],

  // Contact Section
  contactLinks: [
    {
      label: "Email",
      value: "ajayr1174@gmail.com",
      href: "mailto:ajayr1174@gmail.com",
      icon: "Mail",
    },
    {
      label: "GitHub",
      value: "github.com/ajayr1174",
      href: "https://github.com/ajayr1174",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ajay-singh",
      href: "https://linkedin.com",
      icon: "Linkedin",
    },
  ],

  // Footer Section
  footerLinks: [
    { href: "#works", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#stack", label: "Tech Stack" },
    { href: "#contact", label: "Contact" },
  ],

  socialLinks: [
    {
      icon: "Github",
      href: "https://github.com/ajayr1174",
      label: "GitHub",
    },
    {
      icon: "Linkedin",
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ],

  // Footer branding
  footer: {
    initials: "A·S",
    subtitle: "Senior Software Engineer",
    copyright: "© 2026 Ajay Singh. All rights reserved.",
  },

  // Section headings and labels
  sections: {
    selectedWorks: {
      title: "Selected Projects",
      viewAllLabel: "View all projects",
    },
    experience: {
      title: "Experience & Timeline",
    },
    insights: {
      title: "Insights & Engineering Notes",
      viewAllLabel: "View all articles",
    },
    contact: {
      title: "Let's Work Together",
    },
  },
};
