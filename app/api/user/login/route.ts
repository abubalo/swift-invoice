import { NextRequest, NextResponse } from "next/server";
import { login } from "../controller";

export async function POST(req: NextRequest) {
    const data = await req.json()
    await login(data )
  }