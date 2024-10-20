import type { BookingType } from "@/types";
import type { Dispatch, SetStateAction } from "react";

export interface BookingInfoProps {
  booking: Omit<BookingType, "bookingStatus" | "paymentMode" | "amount">;
  fetchBooking: () => Promise<void>;
  payment?: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
