import { NextResponse } from "next/server";
import Response from "@/models/Response.model";
import ResponseSummary from "@/models/Summary.model";
import { getServerSession, Session } from "next-auth";
import { handler } from "../auth/[...nextauth]/route";
import { connectToDB } from "@/lib/connectToDB";

const GEMINI_API_URL = process.env.GEMINI_API_URL!;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;

// Convert each section of the response into a readable string
function stringifyResponseData(response: any): string {
  const fields = [
    "generalInfo",
    "aptitude",
    "careerPreferences",
    "awareness",
    "familyExpectations",
    "skillsAndSelfEval",
  ];

  let result = "";

  for (const field of fields) {
    const data = response[field];
    if (data && typeof data === "object") {
      result += `\n--- ${field} ---\n`;
      for (const [key, value] of Object.entries(data)) {
        result += `${key}: ${value}\n`;
      }
    }
  }

  return result;
}


export async function POST() {
  await connectToDB();
  try {
    const session = await getServerSession();
    console.log(session);
    console.log(session);
    if (!session || !session.user || !session.user.email) {
      return NextResponse.json(
        { error: "Unauthorized: No session or user email found" },
        { status: 401 }
      );
    }

    const email = session.user.email;

    const responseDoc = await Response.findOne({ email }).lean();

    if (!responseDoc) {
      return NextResponse.json({ error: "No response found for the given email" }, { status: 404 });
    }

    const inputText = stringifyResponseData(responseDoc);

    const prompt = `
You are an expert career counselor. Based on the following comprehensive student profile (including aptitude, interests, awareness, preferences, and self-evaluation), generate a personalized career guidance summary. This summary should help the user refer back to it in future conversations to ask questions related to career growth, stream selection, college planning, and skill development.
Profile:
${inputText}
    `;

    const geminiRes = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify({ input: prompt }),
    });

    if (!geminiRes.ok) {
      const err = await geminiRes.json();
      return NextResponse.json({ error: "Gemini API error", details: err }, { status: geminiRes.status });
    }

    const { summary } = await geminiRes.json();

    if (!summary) {
      return NextResponse.json({ error: "Gemini did not return a summary." }, { status: 500 });
    }

    // Save to Summary model
    await ResponseSummary.create({
      email: email,
      summary,
    });

    return NextResponse.json({ summary });
  } catch (err) {
    console.error("Summarize error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
