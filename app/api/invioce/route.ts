import { NextResponse } from "next/server";
import { createInvoice } from "./controller";

export const POST = async (req: Request) => {
  try {
    const requestData = await req.json();
    const response = await createInvoice(requestData);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went, please try again" },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    const requestData = await req.json();
    const response = await createInvoice(requestData);
    return NextResponse.json(response.json(), { status: 200 });
  } catch (error) {}
};

export const PUT = async (req: Request) => {
  try {
    const requestData = await req.json();
    const response = await createInvoice(requestData);
    return NextResponse.json(response.json(), { status: 200 });
  } catch (error) {}
};

export const DELETE = async (req: Request) => {
  try {
    const requestData = await req.json();
    const response = await createInvoice(requestData);
    return NextResponse.json(response.json(), { status: 200 });
  } catch (error) {}
};
