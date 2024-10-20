"use client";

import { BookingsCard } from "@/components/cards/bookings-card";
import { Loading } from "@/components/loaders/loading";
import MainPageLayout from "@/layouts/main-page/main-page";
import type { BookingType } from "@/types";
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Payments() {
  const [payments, setPayments] = useState<BookingType[]>();

  const fetchPayments = async () => {
    const response = await fetch("/api/payments");
    const { payments } = await response.json();

    if(response.ok) setPayments(payments);
    else toast.error("Fail to fetch payment details")
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <MainPageLayout
      className={
        payments?.length
          ? "grid lg:xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6"
          : ""
      }
      title="Payments"
    >
      {payments ? (
        payments.length ? (
          payments.map((payment: BookingType) => (
            <Fragment key={payment.id}>
              <BookingsCard fetchBooking={fetchPayments} {...payment} payment />
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
