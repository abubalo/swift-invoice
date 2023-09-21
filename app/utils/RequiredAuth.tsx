"use client";

import { useRouter } from "next/navigation";
import { AuthContextValue, useAuth } from "./hooks/AuthContext";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

const RequiredAuth = <T extends AuthContextValue>(WrappedComponent: any) => {
  return function WithAuth(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (!user) {
      router.replace("/login");
      return null;
    }

    return loading ? <LoadingIndicator /> : <WrappedComponent {...props} />;
  };
};

export default RequiredAuth;
