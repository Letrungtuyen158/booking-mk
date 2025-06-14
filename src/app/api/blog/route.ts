// app/api/blog/route.ts
import blogService from "@/services/blog.service";
import { NextRequest, NextResponse } from "next/server";

// GET handler: Lấy danh sách blogs
export async function GET(request: NextRequest) {
  try {
    // Parse query params
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    console.log(page, limit);

    // Gọi service
    const blogs = await blogService.getAll({ page, limit });

    // Trả về response
    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 },
    );
  }
}

// POST handler: Tạo blog mới
export async function POST(request: NextRequest) {
  try {
    // Parse body
    const body = await request.json();

    // Gọi service
    const newBlog = await blogService.create(body);

    // Trả về response
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 },
    );
  }
}
