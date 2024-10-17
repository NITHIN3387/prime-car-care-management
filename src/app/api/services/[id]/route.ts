import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

const services = prisma.services;

export const PUT = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { serviceName, cost } = await request.json();

  try {
    const service = await services.update({
      where: { id: params.id },
      data: { serviceName, cost },
    });

    return NextResponse.json(
      {
        service,
        message: `service with id: ${params.id} updated successfully`,
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
    await services.delete({ where: { id: params.id } });

    return NextResponse.json(
      { message: `service with id: ${params.id} deleted successfully` },
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
