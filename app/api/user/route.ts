import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import UserService from "./service";
import { verifyAccessToken } from "../utils/auth";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { name, email, password } = await req.json();

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

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const token = req.cookies.get("token")?.value;
    console.log("Token: ", token);

    if (!token) {
      return NextResponse.json({ error: "Unauthize access" }, { status: 409 });
    }

    const decodedToken = await verifyAccessToken(token);
    const userId = decodedToken?._id;

    const data = await UserService.selectUser(userId);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { _id, name, email } = await req.json();
    const user = await UserService.updateUser(_id, { name, email });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to delete user" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { _id } = await req.json();
    const user = await UserService.deleteUser(_id);
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }
    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to delete user" },
      { status: 500 }
    );
  }
};
