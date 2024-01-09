import { NextResponse } from "next/server";
import { createInvoice } from "./controller";
import { addInvoice } from "./service";

export const POST = async (req: Request) => {
  try {
    const requestData = await req.json();

    const invoice = {
      number: Date.now(),
      issueDate: new Date(),
      dueDate: new Date() ,
    }

    const data = await addInvoice({...requestData, invoice});
    console.log(data)
    if (!data)
      return NextResponse.json({
        error: "Unable to generate invoice",
      }, {status: 409});
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
