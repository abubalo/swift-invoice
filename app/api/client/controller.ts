import { cookies } from "next/headers";

import { NextResponse } from "next/server";
// Add alias to import to avoid name merge issue
import {
  addClient as ServiceAddClient,
  selectClient as ServiceSelectClient,
  selectAllClients as serviceSelectAllClients,
  updateClient as serviceUpdateClient,
  deleteClient as serviceDeleteClient,
} from "./service";

export const addClient = async (req: Request): Promise<void> => {
  try {
    NextResponse.json("Hell there", { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const selectClient = async (req: Request): Promise<void> => {
  try {
    NextResponse.json("Hell there");
  } catch (error) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const selectAllClient = async (req: Request): Promise<void> => {
  try {
    NextResponse.json("Hell there");
  } catch (error) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const updateClient = async (req: Request): Promise<void> => {
  try {
    NextResponse.json("Hell there");
  } catch (error) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export const deleteClient = async (req: Request): Promise<void> => {
  try {
    NextResponse.json("Hell there");
  } catch (error) {
    NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
