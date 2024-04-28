import Image from "next/image";
import Navbar from "@/components/Navbar";
import UserCalendar from "@/components/UserCalendar";
import AvailableTimeSlots from "@/components/AvailableTimeSlots";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      test
      <AvailableTimeSlots />
      <UserCalendar />
    </main>
  );
}
