import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import Response from "@/models/Response.model";

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import { handler } from "../../auth/[...nextauth]/route";

export async function POST(req: Request) {
  await connectToDB();
  interface CustomSession extends Session {
    userId?: string;
  }

  const session = (await getServerSession(handler)) as CustomSession | null;
  if (!session || !session.userId) {
    return NextResponse.json(
      { error: "Unauthorized: No session or userId found" },
      { status: 401 }
    );
  }

  try {
    const newResponse = new Response({
      userId: session.userId,
      generalInfo: {},
      aptitude: {},
      careerPreferences: {},
      awareness: {},
      familyExpectations: {},
      skillsAndSelfEval: {},
    });

    await newResponse.save();

    // Return only the _id of the created response
    return NextResponse.json({ id: newResponse._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create response", details: error },
      { status: 500 }
    );
  }
}
