"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthContextValue, useAuth } from "./hooks/AuthContext";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

const RequiredAuth = <T = unknown>(WrappedComponent: any) => {
  return function WithAuth(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      if (!user && !loading) {
        // User is not authenticated and loading has finished
        setRedirect(true);
      }
    }, [user, loading]);

    if (redirect) {
      router.replace("/login");
      return <LoadingIndicator />;
    }

    return loading ? <LoadingIndicator /> : <WrappedComponent {...props} />;
  };
};

export default RequiredAuth;
