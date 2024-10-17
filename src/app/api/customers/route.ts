import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const customers = prisma.customers;

export const GET = async () => {
  try {
    const customer = await customers.findMany();

    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  const { customerName, mobileNumber } = await request.json();

  try {
    const customer = await customers.create({
      data: {
        customerName,
        mobileNumber,
      },
    });

    return NextResponse.json(
      { customer, message: "customer added successfully" },
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
