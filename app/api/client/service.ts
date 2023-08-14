import { ClientDocument } from "@/app/types/types";
import ClientModel from "./model";

export const addClient = async (
  userId: string,
  name: string,
  email: string,
  address: string
): Promise<ClientDocument> => {
  try {
    const newUser = await ClientModel.create({
      name,
      email,
      address,
      userId,
    });

    return newUser;
  } catch (error: any) {
    throw new Error(`Error adding user: ${error.message}`);
  }
};

export const selectClient = async (
  id: string
): Promise<ClientDocument | null> => {
  try {
    const client = await ClientModel.findById(id);
    return client;
  } catch (error: any) {
    console.error(`Error selecting user: ${error.message}`);
    return null;
  }
};

export const selectAllClients =
  async (): Promise<Array<ClientDocument> | null> => {
    try {
      const client = await ClientModel.find();
      return client;
    } catch (error: any) {
      console.error(`Error selecting user: ${error.message}`);
      return null;
    }
  };

export const updateClient = async (
  id: string,
  newData: Partial<ClientDocument>
): Promise<Boolean> => {

  const client = await ClientModel.findByIdAndUpdate(id, newData);
  return !!client
  
};

export const deleteClient = async (id: string): Promise<Boolean | null> => {
  const client = await ClientModel.findByIdAndDelete(id);
  return !!client;
};

export const verifyClient = async (email: string): Promise<Boolean> => {
  const isClientExist = await ClientModel.findOne({ email });
  return !!isClientExist; // Return true if the user exists, otherwise false
};
