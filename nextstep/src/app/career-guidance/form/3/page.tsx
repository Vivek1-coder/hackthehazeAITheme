import React from "react";

export const CareerGoalsForm = ({ section_name, section_description, questions }: any) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{section_name}</h1>
      <p className="text-gray-600 mb-6">{section_description}</p>

      {questions.map((q: any, i: number) => {
        switch (q.type) {
          case "timeline":
            return (
              <div key={q.id} className="mb-6">
                <h2 className="font-semibold mb-2">{q.question}</h2>
                {q.dimensions.map((dim: any) => (
                  <div key={dim.timeframe} className="mb-4">
                    <p className="font-medium">{dim.timeframe}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      {dim.options.map((opt: any, idx: number) => (
                        <label key={idx} className="p-3 border rounded cursor-pointer">
                          <input type="radio" name={`${q.id}-${dim.timeframe}`} className="mr-2" />
                          {opt.text}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );

          case "priority_ranking":
            return (
              <div key={q.id} className="mb-6">
                <h2 className="font-semibold mb-2">{q.question}</h2>
                {q.items.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-4 mb-2">
                    <label className="w-1/2">{item.item}</label>
                    <input type="number" min={1} max={q.items.length} className="border rounded px-2 py-1 w-20" />
                  </div>
                ))}
              </div>
            );

          case "tradeoff_analysis":
            return (
              <div key={q.id} className="mb-6">
                <h2 className="font-semibold mb-2">{q.question}</h2>
                {q.pairs.map((pair: any, idx: number) => (
                  <div key={idx} className="flex items-center gap-6 mb-4">
                    <label className="p-3 border rounded w-1/2 cursor-pointer">
                      <input type="radio" name={`tradeoff-${idx}`} className="mr-2" /> {pair.option_a}
                    </label>
                    <label className="p-3 border rounded w-1/2 cursor-pointer">
                      <input type="radio" name={`tradeoff-${idx}`} className="mr-2" /> {pair.option_b}
                    </label>
                  </div>
                ))}
              </div>
            );

          case "role_model":
            return (
              <div key={q.id} className="mb-6">
                <h2 className="font-semibold mb-2">{q.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {q.profiles.map((profile: any, idx: number) => (
                    <label key={idx} className="p-4 border rounded cursor-pointer">
                      <input type="radio" name={q.id} className="mr-2" />
                      <strong>{profile.name}</strong>: {profile.traits}
                    </label>
                  ))}
                </div>
                {q.allow_custom_example && (
                  <input
                    type="text"
                    placeholder="Or describe your own..."
                    className="mt-3 p-2 border rounded w-full"
                  />
                )}
              </div>
            );

          case "non_negotiable":
            return (
              <div key={q.id} className="mb-6">
                <h2 className="font-semibold mb-2">{q.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((opt: any, idx: number) => (
                    <label key={idx} className="p-3 border rounded cursor-pointer">
                      <input type="checkbox" className="mr-2" name={q.id} /> {opt.item}
                    </label>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};