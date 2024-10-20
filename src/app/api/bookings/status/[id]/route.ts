import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const bookings = prisma.bookings;

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await bookings.update({
      where: { id: params.id },
      data: { bookingStatus: "done" },
    });

    return NextResponse.json(
      { message: `booking with id: ${params.id} status updated successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
