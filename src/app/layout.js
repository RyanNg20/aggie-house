'use client'
import { Inter, Josefin_Sans } from "next/font/google";
import { AuthProvider } from "@propelauth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AuthProvider authUrl={process.env.NEXT_PUBLIC_REACT_APP_AUTH_URL}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
