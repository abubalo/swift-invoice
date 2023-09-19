import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken } from "../../utils/auth";
import UserService from "../service";
import { serialize, parse } from "cookie";


export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const {email, password} = await req.json()
    const user = await UserService.authenticate(email, password);
    console.log("USER:", user)

    if (!user) {
      return NextResponse.json("Invalid login credentials", { status: 401 });
    }

    const token = await generateAccessToken(user);

    const cookie = serialize("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return NextResponse.json(user, {
      headers: {
        "Set-Cookie": cookie,
      },
    });
  } catch (error: any) {
    console.log("Error message: ", error.message)
    return NextResponse.json(
      { error: "Something went wrong. Unable to login user" },
      { status: 500 }
    );
  }
};
