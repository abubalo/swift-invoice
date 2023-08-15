import { NextResponse } from "next/server";

export async function POST(req: Request) {
  NextResponse.json("Hello", { status: 200 });
}

export async function GET(req: Request): Promise<Response> {
    console.log("Hello")
 return new Response("Hello", {status: 200});
}
