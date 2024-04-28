"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ImportantContacts from "./_components/ImportantContacts";
import Tutorials from "./_components/Tutorials";
import FormsView from "./_components/Forms";
import FAQs from "./_components/FAQs";
import { withAuthInfo } from '@propelauth/react'

const Resources = withAuthInfo((props) => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="flex min-h-screen flex-col justify-between p-24 gap-6">
        <div className="flex flex-row items-center gap-4 mt-4 py-2">
            <Image src={require("../../assets/resources.png")} width={50}></Image>
            <h1 className="text-grey text-4xl font-josefin_sans"> Resources </h1>
        </div>
        <ImportantContacts />
        <Tutorials/>
        <FormsView />
        <FAQs />
      </div>
    </main>
  );
})

export default Resources