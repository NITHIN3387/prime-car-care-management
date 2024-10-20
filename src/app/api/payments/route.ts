import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const bookings = prisma.bookings;

export const GET = async () => {
  try {
    const payments = await bookings.findMany({
      where: { bookingStatus: "done", amount: 0 },
      include: { owner: true },
    });

    return NextResponse.json({ payments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
