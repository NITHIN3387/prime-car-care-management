import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const bookings = prisma.bookings;

export const GET = async () => {
  try {
    const booking = await bookings.findMany({ include: { owner: true } });

    return NextResponse.json({ booking }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
