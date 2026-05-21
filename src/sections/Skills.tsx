import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface SkillLogo {
  name: string;
  gradient: {
    from: string;
    to: string;
  };
  icon: React.ReactNode;
  darkIcon?: React.ReactNode;
}

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = React.useState<string | null>(null);
  
  const skillsList: SkillLogo[] = [
    {
      name: "JavaScript",
      gradient: { from: "#F7DF1E", to: "#DDAA00" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 14.5c0 .8-.3 1.4-.8 1.8-.5.4-1.2.6-2.1.6-1.1 0-1.9-.3-2.5-.8-.6-.5-.9-1.2-.9-2.2h1.8c0 .5.1.9.3 1.1.2.2.6.3 1.1.3.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8V6h1.8v8.5zm8.5.9c-.3.7-.8 1.2-1.5 1.5-.7.3-1.5.5-2.5.5-1.2 0-2.2-.3-2.9-.9-.7-.6-1.1-1.5-1.1-2.6h1.8c0 .6.2 1.1.5 1.4.3.3.8.5 1.5.5.6 0 1.1-.1 1.4-.4.3-.3.4-.6.4-1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.4-.6l-1.1-.3c-.9-.2-1.6-.6-2-1.1-.4-.5-.6-1.2-.6-2 0-.9.4-1.7 1.1-2.2s1.7-.8 2.8-.8c1.1 0 2 .3 2.7.8.7.5 1.1 1.3 1.1 2.2h-1.8c0-.5-.2-.9-.4-1.1-.3-.2-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7s.7.3 1.4.5l1.1.3c.9.2 1.6.6 2 1.1.4.5.6 1.2.6 2z"
            fill="#F7DF1E"
          />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 14.5c0 .8-.3 1.4-.8 1.8-.5.4-1.2.6-2.1.6-1.1 0-1.9-.3-2.5-.8-.6-.5-.9-1.2-.9-2.2h1.8c0 .5.1.9.3 1.1.2.2.6.3 1.1.3.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8V6h1.8v8.5zm8.5.9c-.3.7-.8 1.2-1.5 1.5-.7.3-1.5.5-2.5.5-1.2 0-2.2-.3-2.9-.9-.7-.6-1.1-1.5-1.1-2.6h1.8c0 .6.2 1.1.5 1.4.3.3.8.5 1.5.5.6 0 1.1-.1 1.4-.4.3-.3.4-.6.4-1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.4-.6l-1.1-.3c-.9-.2-1.6-.6-2-1.1-.4-.5-.6-1.2-.6-2 0-.9.4-1.7 1.1-2.2s1.7-.8 2.8-.8c1.1 0 2 .3 2.7.8.7.5 1.1 1.3 1.1 2.2h-1.8c0-.5-.2-.9-.4-1.1-.3-.2-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7s.7.3 1.4.5l1.1.3c.9.2 1.6.6 2 1.1.4.5.6 1.2.6 2z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      gradient: { from: "#3178C6", to: "#1D4ED8" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M11 6H4v2h2.5v9h2V8H11V6zm11.5 9.4c-.3.7-.8 1.2-1.5 1.5-.7.3-1.5.5-2.5.5-1.2 0-2.2-.3-2.9-.9-.7-.6-1.1-1.5-1.1-2.6h1.8c0 .6.2 1.1.5 1.4.3.3.8.5 1.5.5.6 0 1.1-.1 1.4-.4.3-.3.4-.6.4-1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.4-.6l-1.1-.3c-.9-.2-1.6-.6-2-1.1-.4-.5-.6-1.2-.6-2 0-.9.4-1.7 1.1-2.2s1.7-.8 2.8-.8c1.1 0 2 .3 2.7.8.7.5 1.1 1.3 1.1 2.2h-1.8c0-.5-.2-.9-.4-1.1-.3-.2-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7s.7.3 1.4.5l1.1.3c.9.2 1.6.6 2 1.1.4.5.6 1.2.6 2z"
            fill="#3178C6"
          />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M11 6H4v2h2.5v9h2V8H11V6zm11.5 9.4c-.3.7-.8 1.2-1.5 1.5-.7.3-1.5.5-2.5.5-1.2 0-2.2-.3-2.9-.9-.7-.6-1.1-1.5-1.1-2.6h1.8c0 .6.2 1.1.5 1.4.3.3.8.5 1.5.5.6 0 1.1-.1 1.4-.4.3-.3.4-.6.4-1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.4-.6l-1.1-.3c-.9-.2-1.6-.6-2-1.1-.4-.5-.6-1.2-.6-2 0-.9.4-1.7 1.1-2.2s1.7-.8 2.8-.8c1.1 0 2 .3 2.7.8.7.5 1.1 1.3 1.1 2.2h-1.8c0-.5-.2-.9-.4-1.1-.3-.2-.7-.4-1.3-.4-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7s.7.3 1.4.5l1.1.3c.9.2 1.6.6 2 1.1.4.5.6 1.2.6 2z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      gradient: { from: "#333333", to: "#000000" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path
            d="M50 20c-16.6 0-30 13.4-30 30 0 13.3 8.6 24.6 20.6 28.6.6.1.8-.2.8-.5v-2c-8.3 1.8-10.1-4-10.1-4-1.4-3.5-3.3-4.4-3.3-4.4-2.7-1.9.2-1.8.2-1.8 3 .2 4.6 3.1 4.6 3.1 2.7 4.6 7 3.3 8.7 2.5.3-2 1.1-3.3 1.9-4-6.6-.8-13.6-3.3-13.6-14.8 0-3.3 1.2-6 3.1-8-.3-.8-1.3-3.8.3-7.8 0 0 2.5-.8 8.2 3.1a28.4 28.4 0 0 1 15.6 0c5.7-3.9 8.2-3.1 8.2-3.1 1.6 4 .6 7 .3 7.8 1.9 2 3.1 4.7 3.1 8 0 11.5-7 14-13.7 14.7 1.1.9 2 2.8 2 5.7v4.3c0 .3.2.7.8.5C71.4 74.6 80 63.3 80 50c0-16.6-13.4-30-30-30z"
            fill="#181717"
          />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path
            d="M50 20c-16.6 0-30 13.4-30 30 0 13.3 8.6 24.6 20.6 28.6.6.1.8-.2.8-.5v-2c-8.3 1.8-10.1-4-10.1-4-1.4-3.5-3.3-4.4-3.3-4.4-2.7-1.9.2-1.8.2-1.8 3 .2 4.6 3.1 4.6 3.1 2.7 4.6 7 3.3 8.7 2.5.3-2 1.1-3.3 1.9-4-6.6-.8-13.6-3.3-13.6-14.8 0-3.3 1.2-6 3.1-8-.3-.8-1.3-3.8.3-7.8 0 0 2.5-.8 8.2 3.1a28.4 28.4 0 0 1 15.6 0c5.7-3.9 8.2-3.1 8.2-3.1 1.6 4 .6 7 .3 7.8 1.9 2 3.1 4.7 3.1 8 0 11.5-7 14-13.7 14.7 1.1.9 2 2.8 2 5.7v4.3c0 .3.2.7.8.5C71.4 74.6 80 63.3 80 50c0-16.6-13.4-30-30-30z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: "Gemini AI",
      gradient: { from: "#9F7AEA", to: "#3B82F6" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-lg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gemini-main"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4FACFE" />
              <stop offset="35%" stopColor="#00F2FE" />
              <stop offset="70%" stopColor="#9B51E0" />
              <stop offset="100%" stopColor="#F36" />
            </linearGradient>
          </defs>
          <path
            d="M50 18c-.4 0-.8.4-.8.8C49.2 38 38 49.2 18.8 49.2c-.4 0-.8.4-.8.8s.4.8.8.8c19.2 0 30.4 11.2 30.4 30.4c0 .4.4.8.8.8s.8-.4.8-.8c0-19.2 11.2-30.4 30.4-30.4c.4 0 .8-.4.8-.8s-.4-.8-.8-.8c-19.2 0-30.4-11.2-30.4-30.4c0-.4-.4-.8-.8-.8z"
            fill="url(#gemini-main)"
          />
          <path
            d="M66 60c-.2 0-.4.2-.4.4c0 8-6.4 14.4-14.4 14.4c-.2 0-.4.2-.4.4s.2.4.4.4c8 0 14.4 6.4 14.4 14.4c0 .2.2.4.4.4s.4-.2.4-.4c0-8 6.4-14.4 14.4-14.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4c-8 0-14.4-6.4-14.4-14.4c0-.2-.2-.4-.4-.4z"
            fill="url(#gemini-main)"
            opacity="0.8"
          />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-lg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 18c-.4 0-.8.4-.8.8C49.2 38 38 49.2 18.8 49.2c-.4 0-.8.4-.8.8s.4.8.8.8c19.2 0 30.4 11.2 30.4 30.4c0 .4.4.8.8.8s.8-.4.8-.8c0-19.2 11.2-30.4 30.4-30.4c.4 0 .8-.4.8-.8s-.4-.8-.8-.8c-19.2 0-30.4-11.2-30.4-30.4c0-.4-.4-.8-.8-.8z"
            fill="#FFFFFF"
          />
          <path
            d="M66 60c-.2 0-.4.2-.4.4c0 8-6.4 14.4-14.4 14.4c-.2 0-.4.2-.4.4s.2.4.4.4c8 0 14.4 6.4 14.4 14.4c0 .2.2.4.4.4s.4-.2.4-.4c0-8 6.4-14.4 14.4-14.4c.2 0 .4-.2.4-.4s-.2-.4-.4-.4c-8 0-14.4-6.4-14.4-14.4c0-.2-.2-.4-.4-.4z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      ),
    },
    {
      name: "React Native",
      gradient: { from: "#61DAFB", to: "#2563EB" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(0 50 50)"
            opacity="0.8"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(60 50 50)"
            opacity="0.8"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#61DAFB"
            strokeWidth="2.5"
            transform="rotate(120 50 50)"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="7" fill="#61DAFB" />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            transform="rotate(0 50 50)"
            opacity="0.8"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            transform="rotate(60 50 50)"
            opacity="0.8"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="34"
            ry="12"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            transform="rotate(120 50 50)"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="7" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Android Studio",
      gradient: { from: "#3DDC84", to: "#0788DE" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="as-head" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3DDC84" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="as-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0788DE" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
          <path
            d="M30 46c0-11 9-20 20-20s20 9 20 20v8H30v-8z"
            fill="url(#as-head)"
          />
          <path
            d="M38 27l-5-8M62 27l5-8"
            stroke="#3DDC84"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="43" cy="38" r="3" fill="#FFFFFF" />
          <circle cx="57" cy="38" r="3" fill="#FFFFFF" />
          <path
            d="M25 60l25-10 25 10v12L50 78l-25-6V60z"
            fill="url(#as-sky)"
            opacity="0.9"
          />
          <path d="M38 65l6-3-6-3v6zm24 0l-6-3 6-3v6z" fill="#FFFFFF" />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M30 46c0-11 9-20 20-20s20 9 20 20v8H30v-8z"
            fill="#FFFFFF"
          />
          <path
            d="M38 27l-5-8M62 27l5-8"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="43" cy="38" r="3" fill="#1a1a1a" />
          <circle cx="57" cy="38" r="3" fill="#1a1a1a" />
          <path
            d="M25 60l25-10 25 10v12L50 78l-25-6V60z"
            fill="#FFFFFF"
            opacity="0.9"
          />
          <path d="M38 65l6-3-6-3v6zm24 0l-6-3 6-3v6z" fill="#1a1a1a" />
        </svg>
      ),
    },
    {
      name: "Kotlin",
      gradient: { from: "#7F52FF", to: "#E24A00" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
        >
          <defs>
            <linearGradient
              id="kotlin-grad"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7F52FF" />
              <stop offset="50%" stopColor="#C711E1" />
              <stop offset="100%" stopColor="#E24A00" />
            </linearGradient>
          </defs>
          <path d="M24 24H0V0h24L12 12z" fill="url(#kotlin-grad)" />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M24 24H0V0h24L12 12z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Figma",
      gradient: { from: "#F24E1E", to: "#A259FF" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="8" cy="6" r="4" fill="#F24E1E" />
          <circle cx="8" cy="14" r="4" fill="#A259FF" />
          <circle cx="8" cy="22" r="4" fill="#0ACF83" />
          <circle cx="16" cy="14" r="4" fill="#1ABC9C" />
          <circle cx="16" cy="6" r="4" fill="#FF7262" />
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="8" cy="6" r="4" fill="#FFFFFF" />
          <circle cx="8" cy="14" r="4" fill="#FFFFFF" />
          <circle cx="8" cy="22" r="4" fill="#FFFFFF" />
          <circle cx="16" cy="14" r="4" fill="#FFFFFF" />
          <circle cx="16" cy="6" r="4" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Photoshop",
      gradient: { from: "#001E36", to: "#31A8FF" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            width="70"
            height="70"
            x="15"
            y="15"
            rx="14"
            fill="none"
            stroke="#00C8FF"
            strokeWidth="6"
          />
          <text
            x="50"
            y="60"
            fill="#00C8FF"
            fontSize="36"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
          >
            Ps
          </text>
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            width="70"
            height="70"
            x="15"
            y="15"
            rx="14"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="6"
          />
          <text
            x="50"
            y="60"
            fill="#FFFFFF"
            fontSize="36"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
          >
            Ps
          </text>
        </svg>
      ),
    },
    {
      name: "Illustrator",
      gradient: { from: "#330000", to: "#FF9A00" },
      icon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            width="70"
            height="70"
            x="15"
            y="15"
            rx="14"
            fill="none"
            stroke="#FF9A00"
            strokeWidth="6"
          />
          <text
            x="50"
            y="60"
            fill="#FF9A00"
            fontSize="36"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
          >
            Ai
          </text>
        </svg>
      ),
      darkIcon: (
        <svg
          className="w-11 h-11 transition-all duration-300 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            width="70"
            height="70"
            x="15"
            y="15"
            rx="14"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="6"
          />
          <text
            x="50"
            y="60"
            fill="#FFFFFF"
            fontSize="36"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="Outfit, sans-serif"
          >
            Ai
          </text>
        </svg>
      ),
    },
  ];

  // Render the list twice to create a seamless infinite marquee effect
  const marqueeItems = [...skillsList, ...skillsList];

  return (
    <section
      id="skills"
      className="w-full bg-black py-20 px-4 md:px-6 relative overflow-hidden flex flex-col items-center"
    >
      {/* 2. Main Hero Container & Video Background */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col z-10">
        {/* Underlying layer for background video */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          />
        </div>

        {/* 3. Hero Text Content */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start justify-start select-text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Title / Headline using Outfit font (font-display) */}
            <h2
              className="font-display text-[42px] md:text-[56px] font-medium leading-[1.05] tracking-tight text-[#0a1b33] mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Foundation of my
              <br />
              new digital epoch
            </h2>

            {/* Subheadline using Inter font (font-sans) */}
            <p
              className="font-sans text-[14px] md:text-[15px] font-normal leading-relaxed text-[#64748b] mb-8 max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Designing premium mobile interfaces, crafting smooth interactive
              architectures, and writing optimized code using modern tools,
              native environments, and advanced web technologies.
            </p>

            {/* Contact Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-[#0a152d] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#0a152d]/10 hover:shadow-[#0a152d]/25 transition-all cursor-pointer"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>

        {/* 4. Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-auto px-4">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 bg-white/90 backdrop-blur-2xl px-3 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            {/* Small circular logo placeholder */}
            <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm flex items-center justify-center rounded-full text-slate-800 text-lg font-bold">
              ✦
            </div>

            {/* Nav links */}
            <a
              href="#skills"
              className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors px-2 py-1"
            >
              Products
            </a>
            <a
              href="#projects"
              className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors px-2 py-1"
            >
              Docs
            </a>

            {/* "Get in touch" button */}
            <a
              href="#contact"
              className="flex items-center gap-1 bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all"
            >
              <span>Get in touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </motion.nav>
        </div>
      </div>

      {/* 5. Seamless Marquee Logo Scroller Component */}
      <div className="w-full max-w-[1400px] mt-10 relative overflow-hidden select-none z-10 py-4 mask-fade-edges">
        <div className="animate-marquee gap-6 flex">
          {marqueeItems.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredSkill(`${skill.name}-${index}`)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Gradient hover background that scales from 1.5 -> 1 and opacity 0 -> 100% */}
              <div
                className="absolute inset-0 bg-gradient-to-br transition-all duration-500 scale-[1.5] opacity-0 group-hover:scale-100 group-hover:opacity-100 z-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${skill.gradient.from}, ${skill.gradient.to})`,
                }}
              />

              {/* Logo icon wrapper - show dark icon on hover if available */}
              <div className="relative z-10 text-slate-700 group-hover:text-white transition-all duration-300 group-hover:drop-shadow-lg">
                {hoveredSkill === `${skill.name}-${index}` && skill.darkIcon 
                  ? skill.darkIcon 
                  : skill.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
