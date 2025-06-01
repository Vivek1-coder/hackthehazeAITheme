'use client'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all">
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Your Ideal Career Path
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          An AI-powered personalized career guidance system designed to help you make smart,
          insightful decisions for your future. Complete a few guided sections and find out which
          career path suits you best.
        </motion.p>

        <motion.button
          onClick={() => router.push('career-guidance/form/1')}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Start Assessment
        </motion.button>
      </main>

      <motion.section
        className="mt-20 py-6 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-t-3xl shadow-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold  text-indigo-700 mb-6 dark:text-indigo-300 text-center">
          Assessment Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Current Education Level",
            "Interests (Passion & Preferences)",
            "Aptitude & Skills",
            "Innovative Thinking & Problem-Solving",
            "Career & Long-Term Goals",
            "Personality & Work Style",
            "Additional Factors"
          ].map((section, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md transition hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold mb-2">{idx + 1}. {section}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This section will help us understand your {section.toLowerCase()} to guide your career direction.
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
