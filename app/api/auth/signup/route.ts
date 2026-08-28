import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ message: "Name is required" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ message: "Valid email address is required" }, { status: 400 });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for existing account
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email address already exists" },
        { status: 400 }
      );
    }

    // Hash password with bcrypt (salt rounds 10)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User record
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        isAdmin: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      { message: "Account created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "An error occurred during account creation" },
      { status: 500 }
    );
  }
}
