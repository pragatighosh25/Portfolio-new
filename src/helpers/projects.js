// projects.js
import tomato from "../assets/tomato.png";
import medicure from "../assets/medicure.png";
import cryptoplace from "../assets/cryptoplace.png";
import quickchat from "../assets/Chat.png";
import thefilms from "../assets/flims.png";
import imagify from "../assets/imagify.png";
import eventflow from "../assets/eventflow.png";
import intervuex from "../assets/intervuex.png";

export const projects = [
  {
  id: 1,
  title: "Veda AI",
  subtitle: "AI-Powered Assessment Generation Platform",
  description:
    "A full-stack AI-driven platform that helps educators generate structured, exam-ready question papers with customizable difficulty levels, marks distribution, question types, PDF exports, and automated assessment workflows.",
  preview: vedaai,
  links: {
    demo: "https://veda-ai-coral-one.vercel.app/",
    github: "https://github.com/pragatighosh25/VedaAI",
  },
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "BullMQ",
    "Groq API",
    "Zod",
    "TailwindCSS",
  ],
  year: "2026",
  category: "AI EdTech SaaS Platform",
},
  {
  id: 2,
  title: "EventFlow",
  subtitle: "AI-Powered Event Management Platform",
  description:
    "A full-stack event management and discovery platform with AI-powered event assistance, role-based access, smart recommendations, and seamless attendee-organizer workflows.",
  preview: eventflow,
  links: {
    demo: "https://eventflow-frontend-alpha.vercel.app/",
    github: "https://github.com/pragatighosh25/Eventflow",
  },
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TailwindCSS",
    "Groq API",
    "LLM Integration",
  ],
  year: "2026",
  category: "AI SaaS Platform",
},

{
  id: 3,
  title: "IntervueX",
  subtitle: "AI Resume Analyzer & Interview Platform",
  description:
    "An AI-driven interview preparation platform featuring resume parsing, domain-specific question generation, customizable difficulty levels, and personalized interviews based on uploaded resumes.",
  preview: intervuex,
  links: {
    demo: "https://ai-interview-app-sandy.vercel.app/",
    github: "https://github.com/pragatighosh25/AI-interview-app",
  },
  stack: [
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "Groq API",
    "TailwindCSS",
    "AI Interview System",
  ],
  year: "2026",
  category: "AI Web App",
},
  {
    id: 4,
    title: "Imagify",
    subtitle: "AI Image Generation Platform",
    description:
      "An AI-powered web app that generates and enhances images from text prompts using modern APIs and a clean, responsive UI.",
    preview: imagify, // hover preview image
    links: {
      demo: "https://imagifyfrontend-lovat.vercel.app",
      github: "https://github.com/pragatighosh25/imagify",
    },
    stack: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    year: "2024",
    category: "Web App",
  },

  {
    id: 5,
    title: "QuickChat",
    subtitle: "Real-time Messaging Application",
    description:
      "A real-time chat application with instant messaging, socket-based communication, and performance-focused UI interactions.",
    preview: quickchat,
    links: {
      demo: "https://quick-chat-frontend-pi.vercel.app/",
      github: "https://github.com/pragatighosh25/QuickChat",
    },
    stack: ["React", "Socket.IO", "Node.js", "MongoDB", "TailwindCSS"],
    year: "2024",
    category: "Realtime App",
  },

  {
    id: 6,
    title: "The Films",
    subtitle: "Movie Discovery Platform",
    description:
      "A responsive movie discovery platform featuring dynamic content, trailer playback, and API-driven data rendering.",
    preview: thefilms,
    links: {
      demo: "https://movie-app-flax-mu-77.vercel.app/",
      github: "https://github.com/pragatighosh25/movie-app",
    },
    stack: ["React", "Redux", "TMDB API", "TailwindCSS"],
    year: "2023",
    category: "Frontend App",
  },

  {
    id: 7,
    title: "Tomato",
    subtitle: "Food Ordering Web App",
    description:
      "A food ordering application with category filtering, cart management, and a mock checkout flow built with Redux.",
    preview: tomato,
    links: {
      demo: "https://tomato-beige-delta.vercel.app/",
      github: "https://github.com/pragatighosh25/tomato",
    },
    stack: ["React", "Redux Toolkit", "Node.js", "TailwindCSS"],
    year: "2023",
    category: "E-commerce",
  },

  {
    id: 8,
    title: "Medicure",
    subtitle: "Mental Wellness Web Experience",
    description:
      "A mental wellness platform designed in Figma and developed with Next.js, focused on self-care tools and calming UI.",
    preview: medicure,
    links: {
      demo: "https://mental-health-49jxfofcp-pragati-ghoshs-projects.vercel.app/",
      github: "https://github.com/pragatighosh25/mental-health",
    },
    stack: ["Next.js", "React", "TailwindCSS", "Figma"],
    year: "2024",
    category: "Health Tech",
  },
];
