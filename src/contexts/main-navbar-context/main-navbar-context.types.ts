import type { Dispatch, SetStateAction } from "react";

export interface MainNavbarContextType {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>
}