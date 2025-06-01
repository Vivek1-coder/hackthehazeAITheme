import React, { useState } from "react";

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
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">{section_name}</h2>
      <p className="text-gray-600 mb-6">{section_description}</p>

      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <h3 className="font-medium text-lg mb-2">
            {index + 1}. {q.question}
          </h3>
          {q.content && <p className="text-sm mb-2">{q.content}</p>}
          {q.hint && <p className="text-xs text-gray-500 italic mb-2">Hint: {q.hint}</p>}

          {q.options && q.options.map((opt, idx) => (
            <div key={idx} className="mb-1">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name={q.id}
                  checked={responses[q.id]?.text === opt.text || responses[q.id]?.image === opt.image}
                  onChange={() => handleOptionSelect(q.id, opt)}
                />
                {opt.image ? (
                  <img src={opt.image} alt="option" className="w-20 h-20 object-contain border" />
                ) : (
                  <span>{opt.text}</span>
                )}
              </label>
            </div>
          ))}

          {q.sub_questions && q.sub_questions.map((sub, subIdx) => (
            <div key={subIdx} className="mb-3">
              <p className="mb-1">- {sub.text}</p>
              {sub.options.map((opt, optIdx) => (
                <label key={optIdx} className="flex items-center gap-2 mb-1">
                  <input
                    type="radio"
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
            <p className="text-xs text-blue-600 mt-1">Feedback: {q.feedback}</p>
          )}
        </div>
      ))}
    </div>
  );
};
