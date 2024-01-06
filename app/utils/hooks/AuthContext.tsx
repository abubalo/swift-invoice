"use client";

import { Dispatch, SetStateAction, ReactNode, useContext } from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { UserDocument } from "@/app/types/types";

export interface AuthContextValue {
  user: UserDocument | null;
  setUser: Dispatch<SetStateAction<UserDocument | null>>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
  loading: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data);
      } catch (error: any) {
        console.log(error.message);
      }finally{
        setLoading(false)
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
