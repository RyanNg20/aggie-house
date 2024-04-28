"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import UserCalendar from "@/app/dashboard/_components/UserCalendar";
import AvailableTimeSlots from "@/app/dashboard/_components/AvailableTimeSlots";
import ShiftsComponent from "./_components/ShiftsComponent";
import HourTracker from "./_components/HourTracker";
import { withAuthInfo } from '@propelauth/react'

const Dashboard = withAuthInfo((props) => {
  return (
    <main className="bg-white font-josefin_sans">
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between p-24 gap-6">
        <div className="flex flex-row items-center gap-4 mt-4 py-2">
            <Image src={require("../../assets/dashboard.png")} width={50}></Image>
            <h1 className="text-grey text-4xl font-josefin_sans"> Dashboard </h1>
        </div>
        <ShiftsComponent/>
        <div className="flex flex-col md:flex-row md:justify-between justify-center gap-4">
          <AvailableTimeSlots />
          <HourTracker />
        </div>
        <UserCalendar />
      </div>
    </main>
  );
})

export default Dashboard
