'use client'
import Image from "next/image";
import Landing from "./landing";
import Navbar from "../components/Navbar.js"
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'
import { useRouter } from "next/navigation";

const App = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()
  const router = useRouter()
  console.log(props)
  return (
    <main className="overflow-y-hidden h-[100%] flex flex-col justify-center items-center">
      <div className="mx-10">
        <Image src={require("../assets/aggie_house.png")}
          className="w-[700px]"
        />
        {/* <Navbar/> */}
        {props.isLoggedIn?

              // <button className="px-6 py-3 mt-4 ml-[auto] bg-white rounded-md flex flex-row items-center gap-2" onClick={() => logoutFunction(true)}>
              //   View Dashboard
              //   <Image src={require("../assets/chevron-forward-b.png")} className="h-[10px] w-[10px]"/>
              // </button>
              <div className="flex flex-row justify-end mt-3 items-center">
                <button 
                  className="mx-6 flex flex-row items-center gap-2 text-grey font-josefin_sans hover:opacity-50 transition-all" 
                  onClick={() => logoutFunction(true)}>
                  Logout
                </button>
                <button 
                  className="px-6 py-3 bg-white border-[1px] transition-all border-white rounded-md flex flex-row items-center justify-between gap-2 text-grey font-josefin_sans hover:translate-x-4 hover:drop-shadow-lg" 
                  onClick={() => router.push("dashboard")}>
                  Volunteer
                  <Image src={require("../assets/chevron-forward-b.png")} className="h-[10px] w-[10px] opacity-80 translate-x-0"/>
                </button>
              </div>
          :
          <div className="flex flex-row justify-end mt-3 items-center gap-3">
            <button 
              className="mx-6 flex flex-row items-center gap-2 text-grey font-josefin_sans hover:opacity-50 transition-all" 
              onClick={() => redirectToLoginPage()}
            >
              Login
            </button>
            <button 
              className="px-6 py-3 bg-white border-[1px] transition-all border-white rounded-md flex flex-row items-center justify-between gap-2 text-grey font-josefin_sans hover:translate-x-4 hover:drop-shadow-lg z-10" 
              onClick={() => redirectToSignupPage()}
            >
              Signup
              <Image src={require("../assets/chevron-forward-b.png")} className="h-[10px] w-[10px] opacity-80"/>
            </button>
          </div>
        }
          
      </div>
    </main>
  );
})

export default App

