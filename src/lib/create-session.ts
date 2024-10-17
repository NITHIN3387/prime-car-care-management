import deleteSession from "./delete-session";
import { cookies } from "next/headers";
import { type Secret, sign } from "jsonwebtoken";
import type { UserType } from "@/types";

const createSession = (user: UserType) => {
  try {
    const cookieStore = cookies();

    const token = sign(user, process.env.JWT_SECRET as Secret, {
      expiresIn: "2d",
    });

    cookieStore.set("auth-token", token, {
      maxAge: 2 * 24 * 60 * 60,
      httpOnly: true,
    });

    return token;
  } catch (error) {
    deleteSession();

    console.log(error);
    return null;
  }
};

export default createSession;
