import prisma from "@/config/prisma";
import createSession from "@/lib/create-session";
import deleteSession from "@/lib/delete-session";
import { UserType } from "@/types";
import { NextResponse } from "next/server";

const users = prisma.users;

export const POST = async (request: Request) => {
  try {
    const { mobileNumber, password } = await request.json();

    const user = await users.findUnique({ where: { mobileNumber } });    

    if (!user || user.password !== password)
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 401 }
      );

    delete (user as UserType).password;

    const token = createSession(user);

    if (!token)
      return NextResponse.json(
        { message: "internal server error" },
        { status: 500 }
      );

    return NextResponse.json(
      { message: "user sign in successfully" },
      { status: 200 }
    );
  } catch (error) {
    deleteSession();
    console.log(error);

    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
};
