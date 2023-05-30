import React from "react";
import Image from "next/image";

const BannerHome: React.FC = () => {
    return (
        <div className="rounded-[40px] w-full bg-banner w-full bg-no-repeat bg-cover">
            <div>
                <div className="flex flex-col items-start gap-11 mx-12 my-32">
                    <Image
                        src="/images/rick-and-morty.png"
                        alt="Rick and Morty logo"
                        width={450}
                        height={141}
                    />
                    <h1 className="text-white text-5xl font-bold leading-normal">Rick and Morty</h1>
                    <div className="flex gap-3 text-gray-400">
                        <span className="text-sm">2013</span>
                        <div className="border-r-2 border-gray-400"></div>
                        <span className="text-sm border-2 border-gray-400">16+</span>
                        <div className="border-r-2 border-gray-400"></div>
                        <span className="text-sm">6 Stagioni</span>
                        <div className="border-r-2 border-gray-400"></div>
                        <span className="text-sm">Commedie TV</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-normal max-w-[480px]">
                        Il brillante scienziato ubriacone Rick va alla scoperta di altri mondi e dimensioni insieme a
                        Morty, il suo inquieto nipote adolescente.
                    </p>
                </div>
                <div className="flex flex-row items-center h-12 bg-green-500 w-full py-1 px-1.5 rounded-bl-[40px] rounded-br-[40px]">
                    {/*<div className="flex flex-row items-center h-12 bg-green-500 flex-none order-none self-stretch flex-grow-0">*/}
                    <div className="flex flex-row justify-center items-center p-0 h-4 max-w-[1344px] gap-6 w-full">
                        <button className="flex flex-row items-center p-0 h-4 gap-1.5" type="button">
                            <Image
                                src="/icons/receipt-tax.svg"
                                alt="Icona sconto"
                                width={16}
                                height={16}
                            />
                            <span className="font-medium">Get a promo Code</span>
                        </button>
                        <button className="flex flex-row items-center p-0 h-4 gap-1.5" type="button">
                            <span className="text-sm">Subscribe now</span>
                            <Image
                                src="/icons/arrow-narrow-right.svg"
                                alt="Icona freccia destra"
                                width={16}
                                height={16}
                            />
                        </button>
                    </div>
                    <button type="button">
                        <Image
                            src="/icons/x.svg"
                            alt="Icona chiudi"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerHome;