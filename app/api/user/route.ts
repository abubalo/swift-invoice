import { NextRequest, NextResponse } from "next/server";
import { addUser } from "./controller";

export async function POST(request: NextRequest) {

  return (await addUser(await request.json()));
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
