import { CustomerType } from "@/types";
import { Dispatch, SetStateAction } from "react";

export interface BookingsCardProps {
  id: string;
  model: string;
  carNumber: string;
  ownedBy: string;
  services: string[];
  info?: boolean;
  fetchBooking: () => Promise<void>;
  payment?: boolean;
}

export type FetchOwnerDetailsType = (
  ownedBy: string,
  setOwner: Dispatch<SetStateAction<CustomerType | undefined>>
) => Promise<void>;

export type HandleBookingDoneType = (
  id: string,
  fetchBooking: () => Promise<void>
) => Promise<void>
