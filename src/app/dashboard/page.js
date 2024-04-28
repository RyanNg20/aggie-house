"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import UserCalendar from "@/components/UserCalendar";
import AvailableTimeSlots from "@/components/AvailableTimeSlots";
import { withAuthInfo } from '@propelauth/react'

const Dashboard = withAuthInfo((props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <AvailableTimeSlots />
      <UserCalendar />
    </main>
  );
})

export default Dashboard
