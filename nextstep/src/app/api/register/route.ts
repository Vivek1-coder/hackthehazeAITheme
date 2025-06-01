// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/connectToDB';
import User from '@/models/User.model';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
  }

  await connectToDB();

  const userExists = await User.findOne({ email });
  if (userExists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();

  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}
