"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Meals from "./_components/Meals";
import Reminders from "./_components/Reminders";
import Chores from "./_components/Chores";
import { withAuthInfo } from '@propelauth/react'

const Todo = withAuthInfo((props) => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between p-24 gap-6">
        <div className="flex flex-row items-center gap-4 mt-4 py-2">
            <Image src={require("../../assets/todo.png")} width={50}></Image>
            <h1 className="text-grey text-4xl font-josefin_sans"> Todo </h1>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between md:gap-0 gap-4">
            <Meals />
            <Reminders />
        </div>
        <Chores />
      </div>
    </main>
  ); 
})

export default Todo