"use client";

import { BookingsCard } from "@/components/cards/bookings-card";
import { DialogBox } from "@/components/ui/dialog-box";
import { BookingInfoProps } from "./booking-info.types";

export const BookingInfo = (props: BookingInfoProps) => {
  const { booking, fetchBooking, payment = false, open, setOpen } = props;

  return (
    <DialogBox
      className="xl:w-1/3 lg:w-1/2 sm:w-2/3 w-full p-0"
      open={open}
      setOpen={setOpen}
    >
      <BookingsCard {...booking} fetchBooking={fetchBooking} payment={payment} info />
    </DialogBox>
  );
};
