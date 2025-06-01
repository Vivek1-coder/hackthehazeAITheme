import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import Response from "@/models/Response.model";

import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import { handler } from "../../../auth/[...nextauth]/route";

export async function POST(req: Request) {
  await connectToDB();
  const formData = await req.json();
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
      existingResponse[0].awareness = formData;
      await existingResponse[0].save();
      return NextResponse.json({ id: existingResponse[0]._id }, { status: 201 });
    }

    else{
     return NextResponse.json(
      { error: "Failed to find response" },
      { status: 404 }
    );
    }
    
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to create response", details: error },
      { status: 500 }
    );
  }
}
