"use client";

import { Fragment } from "react";
import Link from "next/link";
import clsx from "clsx";
import { navList, title } from "./main-navbar.strings";
import { useNavbarToggle } from "@/contexts/main-navbar-context";
import { usePathname } from "next/navigation";

export const MainNavbar = () => {
  const path = usePathname();
  const { toggle, setToggle } = useNavbarToggle();

  return (
    <>
      <aside
        className={clsx(
          "px-6 py-3 sm:bg-primary-bg bg-black h-dvh sm:inline sm:relative fixed z-10",
          toggle && "animate-nav-open",
          !toggle && "hidden"
        )}
      >
        <h1 className={"text-2xl py-3 font-extrabold space-x-2"}>
          {title.split(" ").map((string) => (
            <Fragment key={string}>
              <span className="text-primary">{string.slice(0, 1)}</span>
              {string.slice(1)}
            </Fragment>
          ))}
        </h1>
        <ul>
          {navList.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              onClick={() => (toggle ? setToggle(false) : null)}
            >
              <li
                className={clsx(
                  href.startsWith(path) &&
                    "bg-primary text-black font-semibold",
                  !href.startsWith(path) && "hover:bg-secondary-bg",
                  "rounded-md py-3 px-4 my-4 transition-all duration-200"
                )}
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </aside>
      {toggle ? (
        <div
          className="fixed w-full h-dvh sm:hidden bg-black/50"
          onClick={() => setToggle(false)}
        />
      ) : null}
    </>
  );
};
