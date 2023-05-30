import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/navbar";
import FooterPage from "@/components/footer";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Rick and Morty',
    description: 'Wodka Streaming Rick and Morty',
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="it">
        <body className={`${inter.className} flex justify-center bg-gray-900`}>
        <main className="flex min-h-screen flex-col items-center justify-between container max-w-[1400px]">
            <Navbar/>
            {children}
            <FooterPage/>
        </main>
        </body>
        </html>
    )
}
