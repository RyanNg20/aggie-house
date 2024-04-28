'use client'
import Image from "next/image";
import Landing from "./landing";
import Navbar from "../components/Navbar.js"
import { withAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react'

const App = withAuthInfo((props) => {
  const logoutFunction = useLogoutFunction()
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } = useRedirectFunctions()

  return (
    <main>
      {/* <Navbar/> */}
      {props.isLoggedIn?
        <div>
          {console.log(props.user)}
          <p>You are logged in as {props.user.email}</p>
          <button onClick={() => redirectToAccountPage()}>Account</button>
          <button onClick={() => logoutFunction(true)}>Logout</button>
        </div>:
        <div>
          <p>You are not logged in</p>
          <button onClick={() => redirectToLoginPage()}>Login</button>
          <button onClick={() => redirectToSignupPage()}>Signup</button>
        </div>
      }
    </main>
  );
})

export default App
