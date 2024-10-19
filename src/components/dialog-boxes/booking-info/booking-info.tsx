"use client";

import { BookingsCard } from "@/components/cards/bookings-card";
import { DialogBox } from "@/components/ui/dialog-box";
import { BookingInfoProps } from "./booking-info.types";

export const BookingInfo = (props: BookingInfoProps) => {
  const { booking, open, setOpen } = props;

  return (
    <DialogBox
      className="xl:w-1/3 lg:w-1/2 sm:w-2/3 w-full"
      open={open}
      setOpen={setOpen}
    >
      <BookingsCard {...booking} info />
    </DialogBox>
  );
};
