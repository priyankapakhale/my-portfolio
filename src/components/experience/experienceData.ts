import type { IProject } from "./ProjectCard";

export interface IExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  overview: string;
  projects: IProject[];
}

export const experiences: IExperience[] = [
  {
    role: "Senior Technology Consultant",
    company: "Technogise Pvt Ltd",
    location: "Pune, India",
    period: "July 2023 – Present",
    overview:
      "Leading multiple React and React Native projects within a shared monorepo, mentoring junior developers, and optimizing system performance.",
    projects: [
      {
        name: "Patient Management & Messaging App (Healthcare – US Client)",
        description:
          "Cross-platform application serving 10,000+ users with shared business logic using Monorepo",
        responsibilities: [
          "Delivered <b>100+ features</b> in React (web) and React Native (mobile) within a shared monorepo, <b>improving dev efficiency by 25%</b>",
          "Set up and maintained <b>CI/CD pipelines</b> for web and mobile apps",
          "Resolved critical production issues, ensuring high system stability",
          "<b>Led and mentored</b> 3 junior developers in best practices and TDD-based development",
          "Supported <b>10,000+</b> users with scalable architecture and reusable business logic packages",
          "Improved Lighthouse performance scores from <b>72 to 95+</b> across web app modules",
        ],
        technologies: [
          "React",
          "React Native",
          "TypeScript",
          "Monorepo",
          "Expo",
          "CI/CD",
          "Performance optimization",
          "WebSocket",
        ],
      },
      {
        name: "In-house Notification System",
        description: "Notification system supporting multiple modes",
        responsibilities: [
          "Architected and built a robust notification system supporting <b>SMS, Email, bulk alerts, On-deck, Slack, and WhatsApp</b>",
          "Handled both frontend (React) and backend (Node.js, Serverless) implementation",
          "Deployed across <b>multiple client-facing projects</b> internally",
        ],
        technologies: [
          "React",
          "Node.js",
          "Serverless",
          "Docker",
          "AWS",
          "CI/CD",
          "Jenkins",
        ],
      },
      {
        name: "Feedback Collection App",
        responsibilities: [
          "Led the frontend development for a feedback management system with <b>role-based flows</b> and notifications",
          "Integrated <b>ChatGPT API</b> for intelligent rephrasing and sentiment-aware summaries of feedback",
          "Built admin review dashboards summarizing feedback data by time period with prompt-based analysis",
          "Used Java for select backend modules and <b>GPT-powered prompts</b> to <b>auto-summarize</b> feedback",
        ],
        technologies: ["React", "ChatGPT API", "Java", "TDD"],
      },
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Coditas LLC",
    location: "Pune, India",
    period: "February 2021 – May 2023",
    overview:
      "Developed and maintained multiple React/Redux applications and Node.js backends for US-based fleet management and e-commerce platforms.",
    projects: [
      {
        name: "Fleet Management & E-Commerce App (US Client)",
        description:
          "US-based fleet management system with real-time tracking and analytics",
        responsibilities: [
          "<b>Built and maintained multiple apps</b> using React, Redux, Node.js, Tailwind CSS, MySQL",
          "Migrated <b>SCSS/LESS codebase to Tailwind CSS and Storybook-based component</b> libraries",
          "Introduced <b>React Query and custom hooks</b> to modernize the frontend stack",
          "Implemented <b>Role-Based Access Control (RBAC)</b>, workflows, and geofencing features",
          "Reduced page load times from <b>8–10s to under 1s</b>, cutting <b>bounce rates by ~30%</b> and improving SEO rankings",
        ],
        technologies: [
          "React",
          "Redux",
          "Node.js",
          "Geofencing",
          "RBAC",
          "Tailwind CSS",
          "MySQL",
          "Storybook",
          "React Query",
        ],
      },
      {
        name: "Event Management App",
        responsibilities: [
          "Built vendor event creation and user registration flows using React + TypeScript",
          "<b>Led frontend team</b>, managed deployments to dev and prod environments",
          "Led design discussions and sprint planning",
        ],
        technologies: ["React", "Tailwind CSS", "Storybook", "React Query"],
      },
      {
        name: "Component Library for Social Media App",
        responsibilities: [
          "Designed and implemented <b>100+ Storybook</b> components using React, Tailwind, and TypeScript",
          "Integrated APIs and <b>MixPanel analytics</b> into reusable components",
        ],
        technologies: [
          "React",
          "Typescript",
          "Storybook",
          "Tailwind CSS",
          "MixPanel",
          "Analytics",
        ],
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Zedex Info Pvt Ltd.",
    location: "Mumbai, India",
    period: "July 2020 – February 2021",
    overview:
      "Developed multiple applications including BI platform, marketplace, and mobile safety app using React and React Native.",
    projects: [
      {
        name: "Business Intelligence Platform",
        description:
          "Data visualization and analytics platform with AWS integration",
        responsibilities: [
          "Developed a BI platform for data analysts using React, Redux, and CSS Modules",
          "Implemented <b>performance guidelines</b> and <b>preloading techniques</b> for large datasets",
          "<b>Reduced Athena query response</b> loading time significantly",
        ],
        technologies: ["React", "Redux", "CSS Modules", "AWS Athena"],
      },
      {
        name: "E-commerce App",
        description: "E-commerce marketplace with chat and offer management",
        responsibilities: [
          "Built a marketplace app with listing, chat, and offer features using React and Redux",
          "Designed token refresh logic using Axios interceptors for seamless authentication",
          "Supported launch on iOS using React Native",
        ],
        technologies: ["React", "Redux", "WebSocket", "Authentication"],
      },
      {
        name: "Personal Safety App",
        description:
          "Cross-platform mobile app for personal safety and emergency alerts",
        responsibilities: [
          "Developed <b>Android/iOS alarm app</b> using React native with repeating alarm logic and full-screen alerts",
          "Used Redux for state management and implemented platform-specific behavior",
        ],
        technologies: ["React Native", "iOS", "Android", "Push Notifications"],
      },
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    location: "Mumbai, India",
    period: "March 2018 – March 2020",
    overview:
      "Developed various full-stack applications including gaming, AI/ML, and e-commerce solutions for multiple clients.",
    projects: [
      {
        name: "Multiplayer Chess Game",
        description:
          "Real-time multiplayer chess application with full game rules",
        responsibilities: [
          "Built <b>multiplayer chess game</b> with React, Redux, and Lichess API",
          "Implemented full chess rules validation and game logic",
          "Added sound effects and real-time gameplay features",
        ],
        technologies: ["React", "Redux", "Lichess API", "WebSocket"],
      },
      {
        name: "Banking Chatbot",
        description:
          "AI-powered chatbot for banking customer service automation",
        responsibilities: [
          "Created banking-chatbot using <b>Python NLP for intent recognition</b>",
          "Trained models on real-world banking datasets",
          "Implemented natural language processing for customer queries",
        ],
        technologies: ["Python", "NLP", "Machine Learning", "Banking APIs"],
      },
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with admin dashboard",
        responsibilities: [
          "Developed full-stack e-commerce site with React and Node.js/MongoDB",
          "Implemented admin dashboard, order management, cart flow, and category filters",
          "Used Redux for state management and wrote test cases to ensure quality",
        ],
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        name: "Order Tracking System",
        responsibilities: [
          "Built order status tracking dashboard with live status updates",
          "Designed intuitive admin panel to manage tracking features and visibility",
        ],
        technologies: ["React", "Node.js", "MongoDB"],
      },
    ],
  },
];
