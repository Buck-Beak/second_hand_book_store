"use client"
import "./globals.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Navbar from "./navbar/page";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavbar = pathname!=='/';
  const showBackground = pathname !== '/';
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          {showBackground?(<div className="bg-yellow-700/50 bg-cover bg-center bg-no-repeat w-full h-screen">
            {showNavbar && <Navbar/>}
            {children}
            
          </div>):(
            <>
              {showNavbar && <Navbar/>}
              {children}
            </>
          )}  
        </AuthContextProvider>
      </body>
    </html>
  );
}
