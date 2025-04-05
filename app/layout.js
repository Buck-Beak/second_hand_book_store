"use client"
import "./globals.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Navbar from "./navbar/page";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavbar = pathname!=='/';
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {showNavbar && <Navbar/>}
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
