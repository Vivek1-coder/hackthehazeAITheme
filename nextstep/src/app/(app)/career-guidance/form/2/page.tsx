'use client';

import { useState } from 'react';
import questionsData from '@/data/Aptitude.json'; // Adjust the path based on your project structure
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion"; 
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import axios from 'axios';

type QuestionType = {
  question: string;
  options: string[];
};

export default function CareerForm() {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const router = useRouter();
  const questions: QuestionType[] = questionsData;

  const handleChange = (question: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/assessment/add/aptitude", formData);
    console.log("Collected Data:", formData);
    router.replace('/career-guidance/form/2')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          🧭 Career Guidance Questionnaire
        </motion.h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/70 dark:bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-xl space-y-6"
        >
          {questions.map((q: QuestionType, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <label className="block text-lg font-semibold mb-2">
                {q.question}
              </label>

              {q.options.length > 0 ? (
                <select
                  onChange={e => handleChange(q.question, e.target.value)}
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
                >
                  <option value="">Select an option</option>
                  {q.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  required
                  onChange={e => handleChange(q.question, e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                  placeholder="Enter your answer"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
          >
            🚀 Submit
          </motion.button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
