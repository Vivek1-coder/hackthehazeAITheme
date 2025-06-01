'use client';

import { useState } from 'react';
import questionsData from '@/data/Aptitude.json'; // Adjust the path based on your project structure
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion"; 
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

type QuestionData = {
  category: string;
  questions: {
    question: string;
    options: string[];
  }[];
};

export default function AptitudePage() {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const router = useRouter();
  const handleChange = (question: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [question]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Aptitude Data:', responses);
    router.replace('/career-guidance/form/3')
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all pt-20 ">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center">Aptitude & Morality Test</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        {(questionsData as QuestionData[]).flatMap(section => section.questions).map((q, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <label className="block font-medium mb-2">{q.question}</label>
            <select
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
              onChange={e => handleChange(q.question, e.target.value)}
              required
            >
              <option value="">Select an option</option>
              {q.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}

        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition mb-10"
          >
            🚀 Submit
          </motion.button>
      </form>
      <Footer/>
    </div>
  );
}
