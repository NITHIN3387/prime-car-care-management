"use client";

import { BookingsCard } from "@/components/cards/bookings-card";
import { BookingsCardProps } from "@/components/cards/bookings-card/bookings-card.types";
import { Loading } from "@/components/loaders/loading";
import MainPageLayout from "@/layouts/main-page/main-page";
import { BookingType } from "@/types";
import { Fragment, useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState<BookingType[]>();

  useEffect(() => {
    const fetchBookings = async () => {
      const data = await fetch("/api/bookings");
      const { booking } = await data.json();

      setBookings(booking);
    };

    fetchBookings();
  }, []);

  return (
    <MainPageLayout
      className="grid lg:xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6"
      title="Bookings"
    >
      {bookings ? (
        bookings.map((booking: BookingsCardProps) => (
          <Fragment key={booking.id}>
            <BookingsCard {...booking} />
          </Fragment>
        ))
      ) : (
        <Loading />
      )}
    </MainPageLayout>
  );
}
