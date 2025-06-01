import React, { useState } from "react";
import Navbar from "../Navbar";

interface Option {
  text?: string;
  image?: string;
  scores?: Record<string, number>;
  correct?: boolean;
}

interface SubQuestion {
  text: string;
  options: Option[];
}

interface Question {
  id: string;
  type: string;
  question: string;
  options?: Option[];
  sub_questions?: SubQuestion[];
  content?: string;
  max_select?: number;
  time_limit?: number;
  hint?: string;
  feedback?: string;
}

interface SectionProps {
  section_name: string;
  section_description: string;
  questions: Question[];
}

export const AptitudeSkillsForm: React.FC<SectionProps> = ({
  section_name,
  section_description,
  questions,
}) => {
  const [responses, setResponses] = useState<Record<string, any>>({});

  const handleOptionSelect = (questionId: string, option: Option) => {
    setResponses((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleSubQuestionSelect = (
    questionId: string,
    subIndex: number,
    option: Option
  ) => {
    setResponses((prev) => {
      const existing = prev[questionId] || [];
      const updated = [...existing];
      updated[subIndex] = option;
      return { ...prev, [questionId]: updated };
    });
  };

  return (
     <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all pt-10 px-4 sm:px-8 md:px-16">
  <Navbar />

  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-2">{section_name}</h2>
    <p className="text-gray-700 dark:text-gray-300 mb-8">{section_description}</p>

    {questions.map((q, index) => (
      <div key={q.id} className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all hover:shadow-lg">
        <h3 className="font-semibold text-xl mb-3 text-indigo-700 dark:text-indigo-300">
          {index + 1}. {q.question}
        </h3>

        {q.content && <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{q.content}</p>}

        {q.hint && (
          <p className="text-xs italic text-yellow-600 dark:text-yellow-400 mb-3">
            💡 Hint: {q.hint}
          </p>
        )}

        {q.options && q.options.map((opt, idx) => (
          <label
            key={idx}
            className={`flex items-center gap-3 p-3 border rounded-xl mb-2 cursor-pointer hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all ${
              responses[q.id]?.text === opt.text || responses[q.id]?.image === opt.image
                ? "border-indigo-600 dark:border-indigo-400 bg-indigo-100 dark:bg-gray-700"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <input
              type="radio"
              className="accent-indigo-600"
              name={q.id}
              checked={responses[q.id]?.text === opt.text || responses[q.id]?.image === opt.image}
              onChange={() => handleOptionSelect(q.id, opt)}
            />
            {opt.image ? (
              <img
                src={opt.image}
                alt="option"
                className="w-20 h-20 object-contain rounded-md border border-gray-300 dark:border-gray-500"
              />
            ) : (
              <span>{opt.text}</span>
            )}
          </label>
        ))}

        {q.sub_questions && q.sub_questions.map((sub, subIdx) => (
          <div key={subIdx} className="mt-4">
            <p className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">↳ {sub.text}</p>
            {sub.options.map((opt, optIdx) => (
              <label
                key={optIdx}
                className={`flex items-center gap-2 mb-2 pl-4 py-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                  responses[q.id]?.[subIdx]?.text === opt.text
                    ? "bg-indigo-100 dark:bg-gray-700"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  className="accent-indigo-600"
                  name={`${q.id}_${subIdx}`}
                  checked={responses[q.id]?.[subIdx]?.text === opt.text}
                  onChange={() => handleSubQuestionSelect(q.id, subIdx, opt)}
                />
                <span>{opt.text}</span>
              </label>
            ))}
          </div>
        ))}

        {q.feedback && (
          <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">📝 Feedback: {q.feedback}</p>
        )}
      </div>
    ))}
  </div>
    </main>
  );
};
