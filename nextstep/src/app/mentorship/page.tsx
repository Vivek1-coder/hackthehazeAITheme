'use client';

import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const mentors = [
  {
    name: "Ayesha Sharma",
    role: "Career Coach",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Guiding students toward tech careers with personalized roadmaps.",
  },
  {
    name: "Rahul Verma",
    role: "Industry Mentor",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Senior developer helping bridge the gap between college and industry.",
  },
  {
    name: "Nidhi Kapoor",
    role: "Soft Skills Mentor",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "Empowering you with confidence, communication & interviews.",
  },
];

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-[#0b1120] dark:to-[#111827] py-16 px-6">
      <Navbar/>
      <section className="text-center max-w-4xl mt-4 mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        >
          Meet Your Mentors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
        >
          Personalized mentorship to accelerate your career. Learn from experienced professionals and unlock your potential.
        </motion.p>
      </section>

      {/* Mentors Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {mentors.map((mentor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{mentor.name}</h3>
            <p className="text-sm text-indigo-500 font-medium mb-2">{mentor.role}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{mentor.bio}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <a
          href="/signup"
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Get Mentorship Now
        </a>
      </motion.div>
    </main>
  );
}
