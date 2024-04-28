"use client";

import { useState } from "react";
import Link from 'next/link';
import useMediaQuery from "../hooks/useMediaQuery";
import Image from "next/image";
import { withAuthInfo } from '@propelauth/react'


const Navbar = withAuthInfo((props)  => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 870px)");

    return(
        <nav className = {`bg-grey z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
            <Link href="/dashboard" passHref>
            <div className="flex flex-row justify-center items-center gap-4">
                <Image className="my-auto" src={require("../assets/Logo.png")} width={50}></Image>
                <h1 className="font-bold font-josefin_sans text-beige">Aggie House Volunteers</h1>
            </div>
            </Link>
            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className="text-beige font-montserrat flex justify-between gap-8 items-center text-lg font-medium">
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> To Do </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Calendar </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Resources </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Leaderboard </Link>
                </div>
            ) : ( <button className="rounded-full bg-black p-2" 
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="white"/>
                </svg>
              </button>)}
            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled && (
                 <div className="fixed right-0 bottom-0 h-full bg-beige w-[300px]"> 
                 {/* CLOSE ICON */}
                 <div className = "flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black" fill-opacity="0.54"/>
                    </svg>
                    </button>
                 </div>
                  {/* MENU ITEMS */}
                  <div className="flex flex-col font-montserrat gap-10 ml-[33%] text-2xl text-beige"> 
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> To Do </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Calendar </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Resources </Link>
                    <Link href="/dashboard" className="hover:text-teal transition duration-500 underline"> Leaderboard </Link>
                  </div>
                </div>
            )}
            </div>
        </nav>
    )
})

export default Navbar