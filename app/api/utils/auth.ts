import { UserDocument } from "@/app/types/types";
import Jwt from "jsonwebtoken"
import UserModel from "../user/model";


export const generateAccessToken = async (user: Partial<UserDocument>): Promise<string> => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT is not provided");

    const payload = {sub: user._id, name:user.name, email:user.email}
  
    const token = await Jwt.sign(payload, jwtSecret, {expiresIn: "24h"});
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