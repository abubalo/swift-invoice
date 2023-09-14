"use client";

import { Dispatch, SetStateAction, ReactNode, useContext } from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { UserDocument } from "@/app/types/types";

export interface AuthContextValue {
  user: UserDocument | null;
  setUser: Dispatch<SetStateAction<UserDocument | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
  loading: false,
  setLoading: () => Boolean,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data);
        setLoading(false);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
