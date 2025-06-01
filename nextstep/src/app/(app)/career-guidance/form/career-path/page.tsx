"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function SummaryPage() {
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Replace this with your auth logic or pass email via props/context
  const userEmail = "student@example.com";

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.post("/api/summarizer")
        const data = res.data;

        setSummary(data.summary);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [userEmail]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Career Guidance Summary</h1>

      {loading && <p>Generating your personalized summary...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {summary && (
        <div className="bg-white p-4 border rounded shadow whitespace-pre-wrap">
          {summary}
        </div>
      )}
    </div>
  );
}
