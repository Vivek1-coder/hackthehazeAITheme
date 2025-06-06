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
  console.log(session)
  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized: No session or userId found" },
      { status: 401 }
    );
  }

  try {
    const existingResponse = await Response.find({email:session.user.email});
    if(existingResponse && existingResponse.length > 0){
      return NextResponse.json({ id: existingResponse[0]._id }, { status: 201 });
    }

    else{
      const newResponse = new Response({
      email: session.user.email,
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
    }
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create response", details: error },
      { status: 500 }
    );
  }
}
