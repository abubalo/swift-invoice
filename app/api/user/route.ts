import { NextRequest, NextResponse } from "next/server";
import { addUser } from "./controller";

export async function POST(req: NextRequest) {
  const data = await req.json();

  await addUser(data); 

  console.log("data", data);
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
