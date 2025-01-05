"use client";

import { useUser } from "@/hooks/users";
import { User } from "@prisma/client";
import { createContext, ReactNode, useContext, useState } from "react";

type SessionContextType = {
  user: User | null;
  isLoadingUser: boolean;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data: user, isLoading: isLoadingUser } = useUser();

  return (
    <SessionContext value={{ user, isLoadingUser }}>{children}</SessionContext>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
