import Image from "next/image";
import Signup from "./signup/page";

export default function Home() {
  return (
    <section className="bg-bannerImg bg-contain bg-center bg-repeat bg-[auto] w-full h-screen">
      <div className="w-full h-screen flex items-end bg-blackOverlay">
        <Signup/>
      </div>
    </section>
  );
}
