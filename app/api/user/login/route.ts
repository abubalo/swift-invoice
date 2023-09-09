import { NextRequest, NextResponse } from "next/server";
import { login } from "../controller";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const requestData = await req.json();
    const response = await login(requestData);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({error: "something went wrong"}, { status: 200 });
  }
}
