import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const services = prisma.services;

export const GET = async () => {
  try {
    const service = await services.findMany();

    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  const { serviceName, cost } = await request.json();

  try {
    const service = await services.create({
      data: {
        serviceName,
        cost,
      },
    });

    return NextResponse.json(
      { service, message: "service added successfully" },
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
