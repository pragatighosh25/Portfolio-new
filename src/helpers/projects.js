// projects.js
import tomato from "../assets/tomato.png";
import medicure from "../assets/medicure.png";
import cryptoplace from "../assets/cryptoplace.png";
import quickchat from "../assets/Chat.png";
import thefilms from "../assets/flims.png";
import imagify from "../assets/imagify.png";

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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

  {
    id: 6,
    title: "Cryptoplace",
    subtitle: "Crypto Market Tracker",
    description:
      "A crypto tracking dashboard with live market data, search functionality, and data visualization powered by public APIs.",
    preview: cryptoplace,
    links: {
      demo: "https://cryptoplace-drab-psi.vercel.app/",
      github: "https://github.com/pragatighosh25/cryptoplace",
    },
    stack: ["React", "CoinGecko API", "Google Charts"],
    year: "2023",
    category: "Data Visualization",
  },
];
