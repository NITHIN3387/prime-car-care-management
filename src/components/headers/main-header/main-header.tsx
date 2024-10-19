"use client";

import { MenuIcon, ProfileIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useNavbarToggle } from "@/contexts/main-navbar-context";
import { UserGetUser } from "@/contexts/user-context";

export const MainHeader = () => {
  const { setToggle } = useNavbarToggle();
  const user = UserGetUser();

  return (
    <header className="sm:p-5 flex sm:justify-end justify-between items-center h-16">
      <Button
        className="sm:hidden"
        onClick={() => setToggle(true)}
        size="sm"
        variant="ghost"
      >
        <MenuIcon height={35} width={35} />
      </Button>
      <section className="flex items-center sm:gap-8 gap-4">
        <Button>+ Add New Booking</Button>
        <Button className="flex items-center gap-3 px-2 py-1" variant="ghost">
          <ProfileIcon className="text-primary" height={35} width={35} />
          <main className="text-start sm:inline hidden">
            <h3 className="text-base">{user?.name}</h3>
            <p className="text-sm text-white/60">{user?.role}</p>
          </main>
        </Button>
      </section>

      
    </header>
  );
};
