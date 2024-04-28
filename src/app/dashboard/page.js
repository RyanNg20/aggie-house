"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import UserCalendar from "@/app/dashboard/_components/UserCalendar";
import AvailableTimeSlots from "@/app/dashboard/_components/AvailableTimeSlots";
import ShiftsComponent from "./_components/ShiftsComponent";
import HourTracker from "./_components/HourTracker";
import ManageUsers from "./_components/MangageUsers";
import { withAuthInfo } from '@propelauth/react'
import { useEffect } from "react";

const Dashboard = withAuthInfo((props) => {
  const updateMongo = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/email/" + props.user.email, {
      // const response = await fetch("http://localhost:3001/users/email/test@gmail.com", {
        
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await response.json();
      // 
      if (result.message == "User not found") {
        try {
          const response = await fetch("http://localhost:3001/users/addUser", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: props.user.firstName,
              profileImage: props.user.profileImage,
              email: props.user.email,
              admin: false,
            })
          });
          const result2 = await response.json()
          console.log("success", result2.message)
        } catch (error) {
          console.error("Error:", error);
        }
      }
      else {
        console.log("success user found")
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    updateMongo()
  }, [props])
  
  // send email
  // const handleClick = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/send", {
  //       method: "POST", // or 'PUT'
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  
  //     const result = await response.json();
  //     console.log("Success:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }


  return (
    <main className="bg-white font-josefin_sans">
      {/* <button  className="w-20 h-20 absolute top-10 bg-black" onClick={() => {handleClick()}}/> */}
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
        <ManageUsers />
      </div>
    </main>
  );
})

export default Dashboard
