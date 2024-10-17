import { MainHeader } from "@/components/headers/main-header";
import { Loader } from "@/components/loaders/loader";
import { MainNavbar } from "@/components/navbars/main-navbar";
import { MainNavbarContextProvider } from "@/contexts/main-navbar-context/main-navbar-context";
import { UserContextProvider } from "@/contexts/user-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserContextProvider>
      <MainNavbarContextProvider>
        <div className="flex h-dvh bg-primary-bg text-white">
          <MainNavbar />
          <section className="flex flex-col flex-1 overflow-hidden">
            <MainHeader />
            <main className="flex-1 bg-secondary-bg overflow-y-scroll overflow-x-hidden rounded-xl p-6">
              {children}
            </main>
          </section>
        </div>
        <Loader />
      </MainNavbarContextProvider>
    </UserContextProvider>
  );
}
