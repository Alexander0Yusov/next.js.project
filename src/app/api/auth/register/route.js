import bcrypt from "bcrypt";
import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });

  try {
    await user.save();
    return new NextResponse("User created", { status: 201 });
  } catch (error) {
    return new NextResponse(error.messsage, { status: 500 });
  }
};
