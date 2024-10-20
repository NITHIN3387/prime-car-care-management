import { toast } from "sonner";
import type {
  FetchOwnerDetailsType,
  HandleBookingDoneType,
} from "./bookings-card.types";

export const fetchOwnerDetails: FetchOwnerDetailsType = async (
  ownedBy,
  setOwner
) => {
  const data = await fetch(`/api/customers/${ownedBy}`);
  const { customer } = await data.json();

  setOwner(customer);
};

export const handleBookingComplete: HandleBookingDoneType = async (
  id,
  fetchBooking
) => {
  const response = await fetch(`/api/bookings/status/${id}`, {
    method: "PUT",
  });

  if (!response.ok) toast.error("Internal Server Error");
  else {
    fetchBooking();
    toast.success("successfully completed");
  }
};
