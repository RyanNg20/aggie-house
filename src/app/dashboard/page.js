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
    <main className="bg-white">
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between p-24 gap-6">
        <h1 className="text-grey text-4xl font-josefin_sans mt-6"> Dashboard </h1>
        <ShiftsComponent/>
        <div className="flex flex-col md:flex-row md:justify-between justify-center">
          <AvailableTimeSlots />
          <HourTracker />
        </div>
        <UserCalendar />
      </div>
    </main>
  );
})

export default Dashboard
