import type { BookingType, CustomerType } from "@/types";
import type { Dispatch, SetStateAction } from "react";

export interface BookingInfoProps {
  booking: BookingType
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}