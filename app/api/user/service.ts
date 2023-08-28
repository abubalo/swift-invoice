import { UserDocument } from "@/app/types/types";
import UserModel from "./model";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export default class UserService{
  addUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<UserDocument> => {
    try {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
  
      const newUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
  
      return newUser;
    } catch (error: any) {
      throw new Error(`Error adding user: ${error.message}`);
    }
  };
  
  authenticate = async (
    email: string,
    password: string
  ): Promise<UserDocument | null> => {
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      console.log("User does not exist");
      return null;
    }
  
    const passwordMatches = bcrypt.compareSync(password, user.password);
  
    if (!passwordMatches) {
      console.log("Passsword doas not match");
      return null;
    }
  
    return user; // Return the found user document, or null if not found
  };
  
  selectUser = async (id: string): Promise<UserDocument | null> => {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error: any) {
      console.log("User does not exist");
      return null
    }
  };
  
  updateUser = async (
    id: string,
    newData: object
  ): Promise<UserDocument | null> => {
    const user = await UserModel.findByIdAndUpdate(id, newData);
  
    if (!user) return null;
    return user;
  };
  
  deleteUser = async (id: string): Promise<Boolean> => {
    try {
      const user = await UserModel.findByIdAndDelete(id);
  
      return !!user;
    } catch (error) {
      return false;
    }
  };
  
  verifyUser = async (email: string): Promise<Boolean> => {
    try {
      const isUserExist = await UserModel.findOne({ email });
      return !!isUserExist;
    } catch (error) {
      return false;
    }
  };
}

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
