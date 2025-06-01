'use client'
import React, { useState } from 'react';

const EnhancedInnovationAssessment = () => {
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  const handleChange = (id: string, value: any) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* 1. Analogical Thinking */}
      <div>
        <h2 className="text-xl font-semibold">1. Analogical Thinking</h2>
        <p>If "keyboard" is to "piano", then "brush" is to:</p>
        {['Painting', 'Sculpture', 'Orchestra'].map((option) => (
          <label key={option} className="block">
            <input
              type="radio"
              name="innov_6"
              value={option}
              onChange={(e) => handleChange('innov_6', e.target.value)}
            />{' '}
            {option}
          </label>
        ))}
      </div>

      {/* 2. Constraint Reframing */}
      <div>
        <h2 className="text-xl font-semibold">2. Constraint Reframing</h2>
        <p>How could a limited budget actually BENEFIT a product design?</p>
        <textarea
          className="w-full border p-2"
          rows={3}
          onChange={(e) => handleChange('innov_7', e.target.value)}
        />
      </div>

      {/* 3. Failure Analysis */}
      <div>
        <h2 className="text-xl font-semibold">3. Failure Analysis</h2>
        <p>Your prototype failed spectacularly in a demo. Next steps? (Pick up to 2)</p>
        {[
          'Analyze failure points systematically',
          'Pivot to a completely new approach',
          'Salvage working components for new version'
        ].map((option) => (
          <label key={option} className="block">
            <input
              type="checkbox"
              name="innov_8"
              value={option}
              onChange={(e) => {
                const current = responses['innov_8'] || [];
                const updated = e.target.checked
                  ? [...current, option].slice(0, 2)
                  : current.filter((item: string) => item !== option);
                handleChange('innov_8', updated);
              }}
            />{' '}
            {option}
          </label>
        ))}
      </div>

      {/* 4. Cross-Disciplinary Innovation */}
      <div>
        <h2 className="text-xl font-semibold">4. Cross-Disciplinary Innovation</h2>
        <p>Combine features from smartphones and refrigerators to create something new:</p>
        <textarea
          className="w-full border p-2"
          rows={4}
          onChange={(e) => handleChange('innov_9', e.target.value)}
        />
      </div>

      {/* 5. Temporal Thinking */}
      <div>
        <h2 className="text-xl font-semibold">5. Temporal Thinking</h2>
        <p>How might social media evolve in 2030? List 3 disruptive possibilities:</p>
        <textarea
          className="w-full border p-2"
          rows={4}
          onChange={(e) => handleChange('innov_10', e.target.value)}
        />
      </div>

      {/* 6. Resourcefulness Test */}
      <div>
        <h2 className="text-xl font-semibold">6. Resourcefulness Test</h2>
        <p>
          Using only office supplies, create a solution for:
          <br /> Preventing coffee spills during earthquakes
        </p>
        <textarea
          className="w-full border p-2"
          rows={4}
          onChange={(e) => handleChange('innov_11', e.target.value)}
        />
      </div>

      {/* 7. Ethical Innovation */}
      <div>
        <h2 className="text-xl font-semibold">7. Ethical Innovation</h2>
        <p>
          Your AI innovation could displace 1000 jobs but help millions. Do you:
        </p>
        {[
          'Proceed and create retraining programs',
          'Seek alternative implementations',
          'Pause for societal impact assessment'
        ].map((option) => (
          <label key={option} className="block">
            <input
              type="radio"
              name="innov_12"
              value={option}
              onChange={(e) => handleChange('innov_12', e.target.value)}
            />{' '}
            {option}
          </label>
        ))}
      </div>

      {/* 8. Simplicity Challenge */}
      <div>
        <h2 className="text-xl font-semibold">8. Simplicity Challenge</h2>
        <p>Simplify online shopping checkout to just TWO steps (must include payment and address):</p>
        <textarea
          className="w-full border p-2"
          rows={3}
          onChange={(e) => handleChange('innov_13', e.target.value)}
        />
      </div>

      {/* 9. Serendipity Index */}
      <div>
        <h2 className="text-xl font-semibold">9. Serendipity Index</h2>
        <p>
          While developing X, you accidentally discover Y which:
        </p>
        {[
          'Ignore to stay focused on X',
          'Document for future exploration',
          'Immediately pivot research to Y'
        ].map((option) => (
          <label key={option} className="block">
            <input
              type="radio"
              name="innov_14"
              value={option}
              onChange={(e) => handleChange('innov_14', e.target.value)}
            />{' '}
            {option}
          </label>
        ))}
      </div>

      {/* 10. Innovation Sustainability */}
      <div>
        <h2 className="text-xl font-semibold">10. Innovation Sustainability</h2>
        <p>Will your solution still be relevant in 10 years? Why?</p>
        <textarea
          className="w-full border p-2"
          rows={3}
          onChange={(e) => handleChange('innov_15', e.target.value)}
        />
      </div>

      <pre className="mt-6 bg-gray-100 p-4 rounded">
        {JSON.stringify(responses, null, 2)}
      </pre>
    </div>
  );
};

export default EnhancedInnovationAssessment;