"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Board from "./_component/Board";
import { withAuthInfo } from '@propelauth/react'

const Leaderboard = withAuthInfo((props) => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between p-24 gap-6">
        <div className="flex flex-row items-center gap-4 mt-4 py-2">
            <Image src={require("../../assets/leaderboard.png")} width={50}></Image>
            <h1 className="text-grey text-4xl font-josefin_sans"> Leaderboard </h1>
        </div>
        <Board />
      </div>
    </main>
  );
})

export default Leaderboard