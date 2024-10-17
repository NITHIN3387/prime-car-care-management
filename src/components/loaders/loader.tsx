"use client";

import Image from "next/image";
import { userGetUser } from "@/contexts/user-context";
import clsx from "clsx";
import { Loading } from "./loading";

export const Loader = () => {
  const user = userGetUser();

  return (
    <div
      className={clsx(
        "fixed h-dvh w-full bg-primary-bg flex flex-col gap-4 justify-center items-center top-0 left-0 z-10",
        user && "hidden"
      )}
    >
      <Image
        src={require("@/assets/images/loader.gif")}
        alt="loader"
        width={150}
        height={150}
      />
      <Loading />
    </div>
  );
};
