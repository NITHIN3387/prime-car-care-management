"use client";

import { BookingsCard } from "@/components/cards/bookings-card";
import { Loading } from "@/components/loaders/loading";
import MainPageLayout from "@/layouts/main-page/main-page";
import { BookingType } from "@/types";
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Bookings() {
  const [bookings, setBookings] = useState<BookingType[]>();

  const fetchBookings = async () => {
    const response = await fetch("/api/bookings");
    const { booking } = await response.json();

    if(response.ok) setBookings(booking);
    else toast.error("Fail to fetch payment details")
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <MainPageLayout
      className={
        bookings?.length
          ? "grid lg:xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6"
          : ""
      }
      title="Bookings"
    >
      {bookings ? (
        bookings.length ? (
          bookings.map((booking: BookingType) => (
            <Fragment key={booking.id}>
              <BookingsCard fetchBooking={fetchBookings} {...booking} />
            </Fragment>
          ))
        ) : (
          <p className="text-center py-8 font-bold text-white/50">
            No Data to Display
          </p>
        )
      ) : (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
    </MainPageLayout>
  );
}
