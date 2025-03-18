import React from "react";
import Image from "next/image";
import { Check, Facebook, Github, Twitter } from "lucide-react";

const footer = () => {
    return (
        <div className="max-md:w-full md:w-full max-md:py-3 max-md:px-2 md:px-4 md:pt-4 md:pb-1 w-screen overflow-x-hidden shadow-sm bg-[#0F161E] text-amber-50 md:rounded-tl-lg md:rounded-tr-lg h-fit">
            {/* First line show the logo */}
            <Image
                className="invert ml-2"
                src={'/logo.png'}
                alt='Logo'
                width={65}
                height={65}
            />
            <div className="h-px w-11/12 mx-auto my-3 bg-white/20"></div>
            {/* columns */}
            <div className="flex max-md:flex-col max-md:gap-1 md:flex-row md:justify-between">

                {/* column one */}
                <div className="px-2 flex flex-col gap-3">
                    <h3 className="font-semibold">
                        About & Links
                    </h3>
                    <a href="#" className="text-sm">About Us</a>
                    <a href="#" className="text-sm">How It Works</a>
                    <a href="#" className="text-sm">FAQs</a>
                    <a href="#" className="text-sm">Help Center</a>
                </div>
                <div className="h-px w-11/12 mx-auto my-3 bg-white/20 max-md:visible md:hidden"></div>
                {/* column two */}
                <div className="px-2 flex flex-col gap-3 max-md:mt-5">
                    <h3 className="font-semibold">
                        Support & Policies
                    </h3>
                    <a href="#" className="text-sm">Privacy Policy</a>
                    <a href="#" className="text-sm">Terms & Conditions</a>
                    <a href="#" className="text-sm">Refund Policy</a>
                    <a href="#" className="text-sm">Help Center</a>
                </div>
                <div className="h-px w-11/12 mx-auto my-3 bg-white/20 max-md:visible md:hidden"></div>
                {/* column three */}
                <div className="px-2 flex flex-col md:items-start gap-2 max-md:mt-5">
                    <h3 className="font-semibold">
                        Social & Payments
                    </h3>
                    <div className="flex gap-1 items-start justify-between max-md:visible md:hidden">
                        <span>
                            Follow Us
                        </span>
                        <div className="flex items-center gap-2 text-white">
                            <span>
                                <Facebook size={20} strokeWidth={1.5} className="hover:fill-white/90 fill-white active:fill-white/90 duration-200" />
                            </span>
                            <span>
                                <Github size={20} strokeWidth={1.5} className="hover:fill-white/90 fill-white active:fill-white/90 duration-200" />
                            </span>
                            <span>
                                <Twitter size={20} strokeWidth={1.5} className="hover:fill-white/90 fill-white active:fill-white/90duration-200" />
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-sm">
                            Payment Methods
                        </span>
                        <div className="flex flex-col items-start gap-3">
                            <div className="flex items-center gap-1">
                                <Check size={20} color="#ffffff" strokeWidth={1.5} />
                                <span className="text-sm">
                                    Google Pay
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check size={20} color="#ffffff" strokeWidth={1.5} />
                                <span className="text-sm">
                                    Apple Pay
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Check size={20} color="#ffffff" strokeWidth={1.5} />
                                <span className="text-sm">
                                    Credit/Debit Cards
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-px w-11/12 mx-auto my-3 bg-white/20 max-md:visible max-md:hidden md:visible"></div>
            <div className="flex items-start justify-between gap-2 md:pr-12 max-md:hidden">
                <span>
                    Follow Us
                </span>
                <div className="flex items-center gap-2 text-white">
                    <span>
                        <Facebook size={20} strokeWidth={1.5} className="hover:fill-white/70 cursor-pointer fill-white active:fill-white/90 duration-200" />
                    </span>
                    <span>
                        <Github size={20} strokeWidth={1.5} className="hover:fill-white/70 fill-white active:fill-white/90 duration-200 cursor-pointer" />
                    </span>
                    <span>
                        <Twitter size={20} strokeWidth={1.5} className="hover:fill-white/70 fill-white active:fill-white/90duration-200 cursor-pointer" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default footer;