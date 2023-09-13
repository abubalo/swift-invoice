"use client"

import type { Dispatch, SetStateAction, ReactNode} from "react"
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { UserDocument } from "@/app/types/types";


export interface AuthContextValue {
  user: UserDocument | null;
  setUser: Dispatch<SetStateAction<UserDocument | null>>;
  ready: boolean;
  setReady: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
  ready: false,
  setReady: () => Boolean,
});

export const AuthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<UserDocument | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data);
        setReady(true);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, ready, setReady }}>
      {children}
    </AuthContext.Provider>
  );
};
