import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
// import { serialize } from "next/serialize";

import UserService from "./service";

type User = {
  name: string;
  email: string;
  password: string;
};

export const addUser = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { name, email, password } = await req.json();
    console.log(await req.json())
    

    const isExists = await UserService.verifyUser(email);

    if (isExists) {
      console.log("User already exist");
      return NextResponse.json("User already exists", { status: 409 });
    }else{
      console.log("You are good bro")
    }

    const user = await UserService.addUser(name, email, password)
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const login = async (req: NextRequest): Promise<NextResponse> => {
  try {
    
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const updateUser = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const deleteUser = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
