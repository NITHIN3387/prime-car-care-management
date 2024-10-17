"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { MainNavbarContextType } from "./main-navbar-context.types";

const MainNavbarContext = createContext<MainNavbarContextType>({
  toggle: false,
  setToggle: () => null,
});

export const useNavbarToggle = () => useContext(MainNavbarContext);

export const MainNavbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <MainNavbarContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MainNavbarContext.Provider>
  );
};
