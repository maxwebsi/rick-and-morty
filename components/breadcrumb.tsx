import Image from "next/image";
import Link from "next/link";
import React from "react";

const Breadcrumb = (props) => {
    return (
        <div className="text-white flex items-center">
            <Link href="/" className="flex gap-4">
                <Image
                    src="/icons/home.svg"
                    alt="Icona home"
                    width={16}
                    height={16}
                    className="fill-white"
                />
                Home
                <Image
                    src="/icons/chevron-right.svg"
                    alt="Freccia destra percorso"
                    width={21}
                    height={21}
                />
                <span className="text-blue-500">{props.title}</span>
            </Link>


        </div>
    )
}

export default Breadcrumb;