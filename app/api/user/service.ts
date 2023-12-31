import { UserDocument } from "@/app/types/types";
import UserModel from "./model";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import dbConnect from "../utils/db";

dbConnect();
export default class UserService {
  public static addUser = async (
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

  public static authenticate = async (
    email: string,
    password: string
  ): Promise<UserDocument | null> => {
    try {
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
    } catch (error) {
      return null;
    }
  };

  public static selectUser = async (
    id: string
  ): Promise<UserDocument | null> => {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error: any) {
      console.log("User does not exist");
      return null;
    }
  };

  public static updateUser = async (
    id: string,
    newData: Partial<UserDocument>
  ): Promise<UserDocument | null> => {
    const user = await UserModel.findByIdAndUpdate(id, newData);

    if (!user) return null;
    return user;
  };

  public static deleteUser = async (id: string): Promise<Boolean> => {
    try {
      const user = await UserModel.findByIdAndDelete(id);

      return !!user;
    } catch (error) {
      return false;
    }
  };

  public static verifyUser = async (email: string): Promise<Boolean> => {
    try {
      const isUserExist = await UserModel.findOne({ email });
      return !!isUserExist;
    } catch (error) {
      return false;
    }
  };
}
