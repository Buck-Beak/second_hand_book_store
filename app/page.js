"use client"
import Image from "next/image";
import Signup from "./signup/page";
import Login from "./login/page";
import { useState } from "react";

export default function Home() {
   const [login,setLogin] = useState(false);
  return (
    <section className="bg-bannerImg bg-contain bg-center bg-repeat bg-[auto] w-full h-screen">
      <div className="w-full h-screen flex items-end bg-blackOverlay">
        {login?<Login/>:<Signup setLogin = {setLogin} />}
      </div>
    </section>
  );
}
