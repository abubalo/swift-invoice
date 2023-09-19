"use client"

import { useRouter } from "next/navigation";
import React from "react";
import type { ComponentType } from "react";
import { useAuth } from "./hooks/AuthContext";
import LoadingIndicator from "@/components/ui/LoadingIndicator";

const RequiredAuth = <T extends object>(WrappedComponent: any) => {
  return function WithAuth(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (!user) {
      router.replace("/login");
      return null;
    }

    if (loading) {
      return <LoadingIndicator />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default RequiredAuth;
