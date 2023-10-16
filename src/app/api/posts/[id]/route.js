import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { id } }) => {
  try {
    await connect();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Error DB", { status: 500 });
  }
};

export const DELETE = async (req, { params: { id } }) => {
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse("Post deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Error DB", { status: 500 });
  }
};
