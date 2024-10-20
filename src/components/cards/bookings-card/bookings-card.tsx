"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubTitle,
  CardTitle,
} from "@/components/ui/card";
import type { BookingsCardProps } from "./bookings-card.types";
import { useEffect, useState } from "react";
import { CustomerType } from "@/types";
import { BookingInfo } from "@/components/dialog-boxes/booking-info";
import {
  fetchOwnerDetails,
  handleBookingComplete,
} from "./bookings-card.utils";

export const BookingsCard = (props: BookingsCardProps) => {
  const {
    id,
    model,
    carNumber,
    ownedBy,
    services,
    info = false,
    fetchBooking,
    payment = false,
  } = props;

  const [owner, setOwner] = useState<CustomerType>();
  const [showInfo, setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    fetchOwnerDetails(ownedBy, setOwner);
  }, []);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-wrap justify-between items-center">
            <span>{model}</span>
            <span className="text-base">{`[${carNumber}]`}</span>
          </CardTitle>
          <CardSubTitle className="flex items-center gap-3">
            Owned By{" "}
            <Button className="p-0 hover:bg-transparent" variant="ghost">
              {owner ? (
                owner.customerName
              ) : (
                <div className="h-4 w-16 bg-white/20 animate-pulse" />
              )}
            </Button>
          </CardSubTitle>
        </CardHeader>
        <CardBody>
          <ul className="bg-secondary-bg py-2 rounded-md">
            {(info ? services : services.slice(0, 3)).map((service) => (
              <li className="px-4 py-1" key={service}>
                {service}
              </li>
            ))}
          </ul>
          {services.length > 3 && !info ? (
            <div className="flex items-center shadow-[0px_-10px_20px_20px_#111]">
              <div className="w-full border border-secondary-bg" />
              <Button
                className="hover:bg-transparent"
                onClick={() => setShowInfo(true)}
                size="sm"
                variant="ghost"
              >
                View More
              </Button>
              <div className="w-full border border-secondary-bg" />
            </div>
          ) : null}
        </CardBody>
        <CardFooter className="space-x-4">
          {payment ? (
            <>
              <Button onClick={() => handleBookingComplete(id, fetchBooking)}>
                ₹ Cash
              </Button>
              <Button onClick={() => handleBookingComplete(id, fetchBooking)}>
                UPI {">>"}
              </Button>
            </>
          ) : (
            <Button onClick={() => handleBookingComplete(id, fetchBooking)}>
              Mark as Done
            </Button>
          )}
        </CardFooter>
      </Card>
      {showInfo ? (
        <BookingInfo
          booking={{ id, model, carNumber, ownedBy, services }}
          fetchBooking={fetchBooking}
          open={showInfo}
          setOpen={setShowInfo}
          payment={payment}
        />
      ) : null}
    </>
  );
};
