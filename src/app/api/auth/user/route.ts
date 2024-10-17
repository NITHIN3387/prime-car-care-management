import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type Secret, verify } from "jsonwebtoken";
import prisma from "@/config/prisma";
import { UserType } from "@/types";

const users = prisma.users;

export const GET = async (request: Request) => {
  const cookeisStore = cookies();

  const token =
    cookeisStore.get("auth-token")?.value ||
    request.headers.get("Authorization")?.split(" ")[1];

  if (!token)
    return NextResponse.json({ message: "unauthorized user" }, { status: 401 });

  const decoded = verify(token, process.env.JWT_SECRET as Secret);

  const user = await users.findUnique({
    where: { mobileNumber: (decoded as UserType).mobileNumber },
  });

  if (!user)
    return NextResponse.json({ message: "unauthorized user" }, { status: 401 });

  return NextResponse.json({ user: decoded }, { status: 200 });
};
