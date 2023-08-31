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

export const addUser = async (data: User): Promise<NextResponse> => {
  try {
    const { name, email, password } = data;

    const isExists = await UserService.verifyUser(email);

    if (isExists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const user = await UserService.addUser(name, email, password);
    return NextResponse.json(user);
  } catch (error: any) {
    console.log({ error: error.message });
    return NextResponse.json(
      { error: "Something went wrong, from controller" },
      { status: 500 }
    );
  }
};

export const login = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const updateUser = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const deleteUser = async (req: NextRequest): Promise<NextResponse> => {
  try {
    return NextResponse.json("Hell there");
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
