import { UserDocument } from "@/app/types/types";
import Jwt from "jsonwebtoken"
import UserModel from "../user/model";

export const generateAccessToken = async (user: string): Promise<string> => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT is not provided");
  
    const token = await Jwt.sign({ sub: user }, jwtSecret, {});
    return token;
  };
  
  export const verifyAccessToken = async (
    accessToken: string
  ): Promise<UserDocument | null> => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT is not provided");
  
    try {
      const decoded = Jwt.verify(accessToken, jwtSecret) as { userId: string };
  
      const userId = decoded.userId;
      const user = await UserModel.findOne({ userId });
  
      if (!user) return null;
  
      return user;
    } catch (error: any) {
      console.log({ error: error.message });
      return null;
    }
  };