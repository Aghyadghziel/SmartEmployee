/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/Button";
import Chat from "../components/Chat";
import Design from "../components/Design";
export default function Home() {
  return (
    <main className="relative  ">
      <div className=" relative h-screen">
        <div className=" hidden md:block absolute left-1/2 top-[10%] transform -translate-x-1/2 -translate-y-1/2 text-white  drop-shadow-lg  font-bold   tracking-tighter text-5xl  ">
          <h2>AIOS Niue Chat</h2>
        </div>

        <img
          src="afterfleaLOGO.png"
          alt="Logo"
          className=" logo absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  "
        />
        <div className="bg">
          <Chat />
          <Design />
        </div>
      </div>
    </main>
  );
}
