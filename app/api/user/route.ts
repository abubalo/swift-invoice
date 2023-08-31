import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { addUser } from "./controller";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const requestData = await request.json();
    const response = await addUser(requestData);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json("Something went wrong!", { status: 500 });
  }
}

export async function GET() {
  return new Response("Hello from get user route", { status: 200 });
}

export async function PUT(req: Request) {
  console.log("Hello");
  return new Response("Hello", { status: 200 });
}

export async function DELETE(req: Request) {
  console.log("Hello");
  return new Response("Hello", { status: 200 });
}
