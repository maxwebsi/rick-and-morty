import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <div className="flex items-center p-6 w-full justify-between rounded-b-[20px] text-white bg-gray-900 z-10">
            <Link href="/">
                <Image
                    src="/wodka-streaming.svg"
                    alt="Wodka Streaming Logo"
                    width={250}
                    height={36}
                    priority
                />
            </Link>
            <nav>
                <ul className="flex gap-8">
                    <li>
                        <Link href="single">Episodes</Link>
                    </li>
                    <li>
                        <Link href="#">Marketplace</Link>
                    </li>
                    <li>
                        <Link href="#">Features</Link>
                    </li>
                    <li>
                        <Link href="#">Team</Link>
                    </li>
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row justify-center items-center gap-4">
                <button type="button">Log In</button>
                <button type="button" className="bg-blue-700 rounded-lg px-3 py-2">Get started</button>
            </div>
        </div>
    )
}

export default Navbar;