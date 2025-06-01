'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";





// Features data and checkmark icon remain the same
const features = [
  {
    category: "Core Features",
    emoji: "🚀",
    items: [
      "Career Path Recommendations based on your profile",
      "Personality & Aptitude Assessments",
      "Resume Analyzer with improvement tips",
      "Skill Gap Analysis & course suggestions",
      "College & Major Selector",
    ],
  },
  {
    category: "Mentorship & Guidance",
    emoji: "🧑‍🏫",
    items: [
      "Virtual Mentor Chatbot",
      "Connect with Seniors & Alumni",
      "Career Stories Library",
    ],
  },
  {
    category: "Learning & Resources",
    emoji: "📚",
    items: [
      "Personalized Course Recommendations",
      "AI-led Mock Interviews & Quizzes",
      "Internship & Job Matching",
    ],
  },
  {
    category: "Planning & Tracking",
    emoji: "🗺️",
    items: [
      "Visual Career Roadmap Builder",
      "Goal Setting & Progress Tracker",
    ],
  },
  {
    category: "Community & Networking",
    emoji: "🤝",
    items: [
      "Career Forums & Peer Discussions",
      "Live Q&A Sessions & Expert Webinars",
    ],
  },
  {
    category: "Bonus Features",
    emoji: "🎁",
    items: [
      "Anonymous Doubt Section",
      "Multilingual Support",
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 inline-block mr-2 text-indigo-500 dark:text-indigo-400 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const LandingPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
    // Animate content fade-in on mount
    setTimeout(() => setContentVisible(true), 200);
  }, []);

  // Toggle theme from here to sync with Navbar if needed
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500 relative overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto flex-grow px-6 py-24 flex flex-col gap-16 md:gap-28">
        {/* Hero Section */}
        <section
          className={`flex flex-col items-center text-center max-w-4xl mx-auto
          transition-all duration-1000 ease-out
          ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
          style={{ willChange: "opacity, transform" }}
        >
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight
            bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
            aria-label="Welcome to NxtStep"
          >
            Unlock Your Future with <br /> NxtStep 
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
            Your AI-powered personal career guidance companion — personalized, insightful,
            and designed to help you make the best career decisions.
          </p>
          <a
            href="#features"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
            text-white font-semibold rounded-lg shadow-lg
            transform hover:scale-105 transition-transform duration-300"
          >
            Explore Features
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map(({ category, emoji, items }) => (
            <article
              key={category}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-lg
                hover:shadow-indigo-500/40 hover:scale-[1.04] transition-transform duration-300
                border border-transparent hover:border-indigo-400
                flex flex-col"
              tabIndex={0}
              aria-labelledby={`${category}-heading`}
              role="region"
            >
              <h3
                id={`${category}-heading`}
                className="text-xl font-semibold mb-4 flex items-center gap-2 select-none"
              >
                <span aria-hidden="true" className="text-2xl">{emoji}</span>
                {category}
              </h3>
              <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-1">
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>

      {/* Subtle SVG background animation */}
      <svg
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-10 dark:opacity-5"
        style={{ zIndex: 0 }}
      >
        <defs>
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="8" stroke="none" fill="url(#grad1)" />
            <circle cx="60" cy="60" r="8" stroke="none" fill="url(#grad2)" />
          </pattern>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-circles)" />
      </svg>
      <Footer/>
    </div>
  );
};

export default LandingPage;
