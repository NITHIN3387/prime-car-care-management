import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const customers = prisma.customers;

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const customer = await customers.findUnique({ where: { id: params.id } });

    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { customerName, mobileNumber } = await request.json();

  try {
    const customer = await customers.update({
      where: { id: params.id },
      data: { customerName, mobileNumber },
    });

    return NextResponse.json(
      {
        customer,
        message: `customer with id: ${params.id} updated successfully`,
      },
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

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await customers.delete({ where: { id: params.id } });

    return NextResponse.json(
      { message: `customer with id: ${params.id} deleted successfully` },
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
