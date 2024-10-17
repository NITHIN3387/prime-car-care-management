import type { Metadata } from "next";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import "@/styles/globals.css";

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Prime Car Care",
  description: "Prime Car Care Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
