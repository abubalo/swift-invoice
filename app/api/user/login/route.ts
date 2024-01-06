import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken } from "../../utils/accessToken";
import UserService from "../service";
import { serialize, parse } from "cookie";


export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const {email, password} = await req.json()
    const user = await UserService.authenticate(email, password);

    if (!user) {
      return NextResponse.json("Invalid login credentials", { status: 401 });
    }

    const token = await generateAccessToken(user);

    const cookie = serialize("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      expires : new Date(Date.now() + 24 * 60 * 60 * 1000),
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
