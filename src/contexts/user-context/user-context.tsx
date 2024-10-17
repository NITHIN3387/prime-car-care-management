"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserType } from "./user-context.types";
import { toast } from "sonner";

const UserContext = createContext<UserType | null>(null);

export const userGetUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const URL = "/api/auth/user";

      const response = await fetch(URL, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        if (response.status === 401)
          toast.error("Access Denied: Please sign in to continue.");
        else toast.error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data);
    };

    getUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
