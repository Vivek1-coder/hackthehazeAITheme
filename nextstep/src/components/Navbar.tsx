'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useSession } from "next-auth/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Mentorship", href: "/mentorship" },
  { name: "Career Guidance", href: "/career-guidance" }
];

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    setVisible(true);
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isLight = theme === "light";
    setTheme(isLight ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isLight);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-800/40
        transition-opacity duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      `}
      style={{ willChange: "opacity, transform" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-indigo-600 dark:text-indigo-400 font-extrabold text-2xl flex items-center gap-2 select-none"
          aria-label="NxtStep logo"
        >
          NxtStep <span aria-hidden="true">🤖</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 dark:text-gray-300 font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className="relative group transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="px-4 py-1.5 border rounded-md border-gray-400 dark:border-gray-600 hover:bg-indigo-600 hover:text-white transition transform hover:scale-105 focus:outline-none"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </li>

          {!session ? (
            <li>
              <Link href="/signin">
                <button className="px-4 py-1.5 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition hover:scale-105">
                  Sign In
                </button>
              </Link>
            </li>
          ) : (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transform transition-transform duration-300 ${menuOpen ? "rotate-90 scale-110" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-max-height duration-500 overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-300 dark:border-gray-700 px-6 ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}
        style={{ willChange: "max-height" }}
      >
        <ul className="flex flex-col gap-4 text-gray-900 dark:text-gray-100 font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {name}
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              aria-label="Toggle Dark Mode"
              className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </li>

          {!session ? (
            <li>
              <Link href="/signin">
                <button className="w-full px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition">
                  Sign In
                </button>
              </Link>
            </li>
          ) : (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
