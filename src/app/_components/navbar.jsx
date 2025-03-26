"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import { AlignRight, ArrowUpRight, Bookmark, CalendarCheck, ChevronDown, CircleGauge, CircleUser, CreditCard, DollarSign, ExternalLink, Eye, HandPlatter, House, Menu, MessagesSquare, Settings, Unplug, UserCheck, UserPen, UserRoundCheck, UserRoundSearch, UsersRound, Wrench, X } from 'lucide-react';

const Navbar = () => {

    // Navbar state for client
    const [showSlider, setShowSlider] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [showHoverOption, setShowHoverOption] = useState(false);
    const [showProfileOptions, setshowProfileOptions] = useState(false);
    const handleCloseOptions = () => {
        setShowDropDown(false);
        setShowHoverOption(false);
        setshowProfileOptions(false);
    }

    return (

        <>
            {/* Client Navbar */}
            {
                false && <div className='flex relative top-0 md:px-8 items-center bg-[#f8f9fa] md:justify-between max-md:justify-between px-3 h-13 text-white shadow-sm shadow-gray-200'>
                    <Image
                        src="/logo.png"
                        width={65}
                        height={65}
                        alt='logo'
                    />

                    {/* navbar for greater then tablet screen */}
                    {/* First container for the Links and dropdown */}
                    <div className='max-md:hidden md:flex items-center justify between text-black/90 gap-3'>
                        <a href="#" className='p-2 hover:bg-black/5 duration-200 rounded-xl text-sm'>Home</a>
                        {/* div to show the services options */}
                        <div className='p-2 relative text-sm flex items-center gap-1 duration-200 hover:bg-black/5 rounded-xl cursor-pointer group' onClick={() => {
                            setShowHoverOption(!showHoverOption)
                        }} >
                            <span>
                                Find Services
                            </span>
                            <ChevronDown size={20} strokeWidth={1.5} className={`${showHoverOption && 'rotate-180'} duration-400`} />

                            {/* dropdown for larger screens */}
                            <div className={`absolute z-50 border border-black/20 shadow-sm flex flex-col ${showHoverOption ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 -left-4 z-50 rounded-xl overflow-hidden`}>
                                <div className='px-2 py-3 hover:text-black text-black/80 hover:bg-black/5 flex items-center gap-2 justify-between duration-200 text-nowrap text-sm border border-transparent border-b-gray-300/50'>
                                    <span>
                                        Browse Electricians
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                                <div className='px-2 py-3 hover:bg-black/5 hover:text-black text-black/80 duration-200 flex items-center justify-between gap-2 text-nowrap text-sm'>
                                    <span>
                                        Browse Plumbers
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                            </div>
                        </div>
                        <a href="#" className='p-2 py-[10px] hover:bg-black/5 rounded-xl duration-200 text-sm'>My Bookings</a>
                        <a href="#" className='p-2 hover:bg-black/5 rounded-xl duration-200 text-sm'>Chat</a>

                    </div>

                    {/* Login signup / profile */}
                    {
                        false ? <div className='max-md:hidden relative md:visible group opacity-95 z-50 cursor-pointer' onClick={() => { setshowProfileOptions(!showProfileOptions) }}>
                            <Image
                                className='rounded-full group-hover:opacity-100 duration-200'
                                src={'/profileimg.jfif'}
                                alt='profilePhoto'
                                width={38}
                                height={38}
                            />

                            {/* div to show the options */}
                            <div className={`absolute z-[999] bg-white border border-black/20 shadow-sm flex flex-col ${showProfileOptions ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 text-sm -left-20 cursor-pointer rounded-xl overflow-hidden text-nowrap`}>
                                <div className='flex items-center justify-between border border-transparent border-b-black/5 p-2 gap-1 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        View Profile
                                    </span>
                                    <Eye size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 justify-between border border-transparent border-b-black/5 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        Edit Profile
                                    </span>
                                    <UserPen size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 hover:bg-black/5 justify-between text-black/70 hover:text-black duration-300'>
                                    <span>
                                        Settings
                                    </span>
                                    <Settings size={17} strokeWidth={1.5} />
                                </div>
                            </div>
                        </div> :
                            <div className='border max-md:hidden md:visible text-black/70 hover:text-black/90 duration-200 cursor-pointer hover:bg-transparent outline-2 outline-gray-400/20 bg-white outline-offset-1 shadow-gray-900/5 p-2 rounded-xl border-black/20 flex items-center gap-2'>
                                <span className='text-sm font-medium'>
                                    Login
                                </span>
                                <UsersRound size={17} strokeWidth={1.5} />
                            </div>
                    }

                    <span className='max-md:block md:hidden' onClick={() => setShowSlider(!showSlider)}>
                        <AlignRight size={25} strokeWidth={1.5} className='text-black' />
                    </span>

                    {/* Slider to show the options only for smaller screens max tablet */}
                    <div className={`transition-all max-md:visible md:hidden duration-500 absolute z-50 flex flex-col justify-between items-start inset-0 shadow-sm h-svh w-screen text-black bg-white ${showSlider ? "translate-y-0 block" : "-translate-y-full"}`}>

                        <div className='w-full'>
                            {/* line on the top */}
                            <div className='h-px w-full bg-black/15 mt-12'></div>
                            <div className='flex items-center gap-2 border border-transparent border-b-gray-200/90 h-15 duration-200 px-2 active:bg-black/5 w-full'>
                                <House />
                                <span className='text-lg font-medium'>
                                    Home
                                </span>
                            </div>
                            <div className={`flex relative ${showDropDown ? 'h-fit flex-col mb-26 mt-[11px]' : 'flex-row h-15 mb-0'} items-center justify-between gap-2 active:bg-black/5 w-full px-2 transition-transform duration-300`} onClick={() => setShowDropDown(!showDropDown)}>
                                <div className='flex items-center justify-between py-3 gap-2 w-full border border-transparent border-b-gray-200/90'>
                                    <div className='flex items-center gap-2 w-full'>
                                        <HandPlatter />
                                        <span className='text-lg font-medium'>
                                            Find Services
                                        </span>
                                    </div>
                                    {/* drop down icon */}
                                    <ChevronDown size={25} strokeWidth={1.5} className={`${showDropDown ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} />
                                </div>

                                {/* show as a dropdown */}
                                <div className={`flex absolute z-50 top-15 left-0 flex-col items-start ${showDropDown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 mt-1 -translate-y-2 pointer-events-none"} gap-2 active:bg-black/5 duration-200 h-10 mb-6`}>
                                    <div className='flex items-center gap-2 p-2 border border-transparent border-b-gray-200/90 duration-200 active:bg-black/5 w-screen'>
                                        <Unplug size={25} strokeWidth={1.5} />
                                        <span className='text-lg font-medium'>
                                            Browse Electritions
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-2 p-2 border border-transparent border-b-gray-200/90 duration-200 active:bg-black/5 w-screen'>
                                        <Wrench size={25} strokeWidth={1.5} />
                                        <span className='text-lg font-medium'>
                                            Browse Plumbers
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex items-center gap-2 h-15 border border-transparent border-b-gray-200/90 duration-200 active:bg-black/5 w-full px-2'>
                                <Bookmark />
                                <span className='text-lg font-medium'>
                                    My Bookings
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 border border-transparent border-b-gray-200/90 duration-200 active:bg-black/5 w-full px-2'>
                                <MessagesSquare />
                                <span className='text-lg font-medium'>
                                    Chat
                                </span>
                            </div>

                            {/* diff on the basis of user login logout */}
                            <div className='flex relative hidden items-center gap-1 h-14 duration-200 active:bg-black/5 w-full px-2'>

                                <Image
                                    className='rounded-full'
                                    src={'/profileimg.jfif'}
                                    alt='profilePhoto'
                                    width={45}
                                    height={45}
                                />

                                {/* icon */}
                                <ArrowUpRight size={25} strokeWidth={1.6} className="absolute opacity-70 top-3 right-2" />
                                <span className='text-lg font-medium'>Farwa Jahil</span>
                            </div>
                            {/* <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2'>
                                    <CircleUser />
                                    <span className=' font-medium'>
                                        Account
                                    </span>
                                </div> */}

                            {/* close icon */}
                            <span className='p-1 rounded-full absolute top-2 right-2 bg-black/5 active:bg-black/10 duration-200' onClick={() => setShowSlider(!showSlider)}>
                                <X className='text-black text-sm' />
                            </span>
                            {/* logo */}
                            <span className='absolute top-2 left-2'>
                                <Image
                                    src={'/logo.png'}
                                    alt='logo'
                                    width={55}
                                    height={55}
                                />
                            </span>
                        </div>

                        {/* adding two more buttons for login signup */}
                        <div className="flex flex-col items-center gap-3 w-full max-md:visible md:hidden mb-3">
                            <button className='w-10/12 text-white font-medium rounded-xl h-12 outline-1 outline-white bg-[#131313] hover:bg-[#292929] duration-200 active:bg-[#000000]/80'>
                                Signup
                            </button>
                            <button className='h-12 w-10/12 font-medium border border-slate-400/70 rounded-xl hover:bg-[#000000]/5 duration-200 active:bg-[#000000]/5'>
                                Login
                            </button>
                        </div>
                    </div>

                    {/* container to show when something is opened */}
                    <div className={`absolute z-0 inset-0 h-screen w-screen ${showHoverOption || showDropDown || showProfileOptions ? 'visible bg-transparent' : 'hidden'}`} onClick={handleCloseOptions}></div>

                </div>
            }

            {/* Worker Navbar */}
            {
                false && <div className='flex relative md:px-8 items-center bg-[#f8f9fa] md:justify-between max-md:justify-between px-3 h-13 text-white shadow-sm shadow-gray-200'>
                    <Image
                        src="/logo.png"
                        width={65}
                        height={65}
                        alt='logo'
                    />

                    {/* navbar for greater then tablet screen */}

                    {/* First container for the Links and dropdown */}
                    <div className='max-md:hidden md:flex items-center justify between text-black/90 gap-3'>
                        <a href="#" className='p-2 hover:bg-black/5 duration-200 rounded-xl text-sm'>Dashboard</a>
                        {/* div to show the services options */}
                        <div className='p-2 relative text-sm flex items-center gap-1 duration-200 hover:bg-black/5 rounded-xl cursor-pointer group' onClick={() => {
                            setShowHoverOption(!showHoverOption)
                        }} >
                            <span>
                                Job
                            </span>
                            <ChevronDown size={20} strokeWidth={1.5} className={`${showHoverOption && 'rotate-180'} duration-400`} />

                            {/* dropdown for larger screens */}
                            <div className={`absolute z-50 border border-black/20 shadow-sm flex flex-col ${showHoverOption ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 -left-4 z-50 rounded-xl overflow-hidden`}>
                                <div className='px-2 py-3 hover:text-black text-black/80 hover:bg-black/5 flex items-center gap-2 justify-between duration-200 text-nowrap text-sm border border-transparent border-b-gray-300/50'>
                                    <span>
                                        Job Requests
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                                <div className='px-2 py-3 hover:bg-black/5 hover:text-black text-black/80 duration-200 flex items-center justify-between gap-2 text-nowrap text-sm'>
                                    <span>
                                        My Jobs
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                            </div>
                        </div>
                        <a href="#" className='p-2 py-[10px] hover:bg-black/5 rounded-xl duration-200 text-sm'>Earnings</a>
                        <a href="#" className='p-2 hover:bg-black/5 rounded-xl duration-200 text-sm'>Chat</a>

                    </div>

                    {/* Login signup / profile for tablet */}
                    {
                        false ? <div className='max-md:hidden relative md:visible group opacity-95 z-50 cursor-pointer' onClick={() => { setshowProfileOptions(!showProfileOptions) }}>
                            <Image
                                className='rounded-full group-hover:opacity-100 duration-200'
                                src={'/profileimg.jfif'}
                                alt='profilePhoto'
                                width={40}
                                height={40}
                            />

                            {/* div to show the options tablet */}
                            <div className={`absolute z-[999] bg-white border border-black/20 shadow-sm flex flex-col ${showProfileOptions ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 text-sm -left-20 cursor-pointer rounded-xl overflow-hidden text-nowrap`}>
                                <div className='flex items-center justify-between border border-transparent border-b-black/5 p-2 gap-1 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        View Profile
                                    </span>
                                    <Eye size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 justify-between border border-transparent border-b-black/5 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        Edit Profile
                                    </span>
                                    <UserPen size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 hover:bg-black/5 justify-between text-black/70 hover:text-black duration-300'>
                                    <span>
                                        Settings
                                    </span>
                                    <Settings size={17} strokeWidth={1.5} />
                                </div>
                            </div>
                        </div> :
                            <div className='border max-md:hidden md:visible text-black/70 hover:text-black/90 duration-200 cursor-pointer hover:bg-transparent outline-2 outline-gray-400/20 bg-white outline-offset-1 shadow-gray-900/5 p-2 rounded-xl border-black/20 flex items-center gap-2'>
                                <span className='text-sm font-medium'>
                                    Login
                                </span>
                                <UsersRound size={17} strokeWidth={1.5} />
                            </div>
                    }

                    <span className='max-md:block md:hidden' onClick={() => setShowSlider(!showSlider)}>
                        <AlignRight size={25} strokeWidth={1.5} className='text-black' />
                    </span>

                    {/* Slider to show the options only for smaller screens max tablet */}
                    <div className={`transition-all max-md:visible md:hidden justify-between duration-500 absolute z-50 flex flex-col items-start inset-0 shadow-sm h-svh w-screen text-black bg-white ${showSlider ? "translate-y-0 block" : "-translate-y-full"}`}>

                        <div className="w-full">
                            {/* line on the top */}
                            <div className='h-px w-full bg-black/15 mt-12'></div>
                            <div className='flex items-center gap-2 h-15 border border-transparent border-b-gray-200/90 duration-200 px-2 active:bg-black/5 w-full'>
                                <CircleGauge size={20} strokeWidth={2.4} />
                                <span className='text-lg font-medium'>
                                    Dashboard
                                </span>
                            </div>
                            <div className={`flex relative flex-row h-15 mb-0 items-center justify-between border border-transparent border-b-gray-200/90 gap-2 active:bg-black/5 w-full px-2 transition-transform duration-300`}>
                                <div className='flex items-center justify-between gap-2 w-full'>
                                    <div className='flex items-center gap-2 w-full'>
                                        <HandPlatter />
                                        <span className='text-lg font-medium'>
                                            Job Requests
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <Bookmark />
                                <span className='text-lg font-medium'>
                                    My Jobs
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <DollarSign size={20} strokeWidth={2.2} />
                                <span className='text-lg font-medium'>
                                    My Earnings
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <MessagesSquare />
                                <span className='text-lg font-medium'>
                                    Chat
                                </span>
                            </div>

                            {/* diff on the basis of user login logout */}
                            <div className='flex relative items-center hidden gap-1 h-14 duration-200 active:bg-black/5 w-full px-2'>

                                <Image
                                    className='rounded-full'
                                    src={'/profileimg.jfif'}
                                    alt='profilePhoto'
                                    width={45}
                                    height={45}
                                />

                                {/* icon */}
                                <ArrowUpRight size={25} strokeWidth={1.6} className="absolute opacity-70 top-3 right-2" />
                                <span className='text-lg font-medium'>Farwa Jahil</span>
                            </div>

                            {/* <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2'>
                                    <CircleUser />
                                    <span className='text-lg font-medium'>
                                        Login
                                    </span>
                                </div> */}

                            {/* close icon */}
                            <span className='p-1 rounded-full absolute top-2 right-2 bg-black/5 active:bg-black/10 duration-200' onClick={() => setShowSlider(!showSlider)}>
                                <X className='text-black text-sm' />
                            </span>
                            {/* logo */}
                            <span className='absolute top-2 left-2'>
                                <Image
                                    src={'/logo.png'}
                                    alt='logo'
                                    width={55}
                                    height={55}
                                />
                            </span>

                        </div>

                        {/* adding two more buttons for login signup */}
                        <div className="flex flex-col items-center gap-3 w-full max-md:visible md:hidden mb-3">
                            <button className='w-10/12 text-white font-medium rounded-xl h-12 outline-1 outline-white bg-[#131313] hover:bg-[#292929] duration-200 active:bg-[#000000]/80'>
                                Signup
                            </button>
                            <button className='h-12 w-10/12 font-medium border border-slate-400/70 rounded-xl hover:bg-[#000000]/5 duration-200 active:bg-[#000000]/5'>
                                Login
                            </button>
                        </div>

                    </div>

                    {/* container to show when something is opened */}
                    <div className={`absolute z-0 inset-0 h-screen w-screen ${showHoverOption || showDropDown || showProfileOptions ? 'visible bg-transparent' : 'hidden'}`} onClick={handleCloseOptions}></div>

                </div>
            }

            {/* Admin Navbar */}
            {
                true && <div className='flex relative md:px-8 items-center bg-[#f8f9fa] md:justify-between max-md:justify-between px-3 h-13 text-white shadow-sm shadow-gray-200'>
                    <Image
                        src="/logo.png"
                        width={65}
                        height={65}
                        alt='logo'
                    />

                    {/* navbar for greater then tablet screen */}

                    {/* First container for the Links and dropdown */}
                    <div className='max-md:hidden md:flex items-center justify between text-black/90 gap-3'>
                        <a href="#" className='p-2 hover:bg-black/5 duration-200 rounded-xl text-sm'>Dashboard</a>
                        {/* div to show the services options */}
                        <div className='p-2 relative text-sm flex items-center gap-1 duration-200 hover:bg-black/5 rounded-xl cursor-pointer group' onClick={() => {
                            setShowHoverOption(!showHoverOption)
                        }} >
                            <span>
                                Manage
                            </span>
                            <ChevronDown size={20} strokeWidth={1.5} className={`${showHoverOption && 'rotate-180'} duration-400`} />

                            {/* dropdown for larger screens */}
                            <div className={`absolute z-50 border border-black/20 shadow-sm flex flex-col ${showHoverOption ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 -left-4 z-50 rounded-xl overflow-hidden`}>
                                <div className='px-2 py-3 hover:text-black text-black/80 hover:bg-black/5 flex items-center gap-2 justify-between duration-200 text-nowrap text-sm border border-transparent border-b-gray-300/50'>
                                    <span>
                                        Manage Workers
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                                <div className='px-2 py-3 hover:bg-black/5 hover:text-black text-black/80 duration-200 flex items-center justify-between gap-2 text-nowrap text-sm'>
                                    <span>
                                        Manage Users
                                    </span>
                                    <ExternalLink size={17} strokeWidth={2} />
                                </div>
                            </div>
                        </div>
                        <a href="#" className='p-2 py-[10px] hover:bg-black/5 rounded-xl duration-200 text-sm'>Bookings & Disputes</a>
                        <a href="#" className='p-2 hover:bg-black/5 rounded-xl duration-200 text-sm'>Payments</a>

                    </div>

                    {/* Login signup / profile for tablet */}
                    {
                        false ? <div className='max-md:hidden relative md:visible group opacity-95 z-50 cursor-pointer' onClick={() => { setshowProfileOptions(!showProfileOptions) }}>
                            <Image
                                className='rounded-full group-hover:opacity-100 duration-200'
                                src={'/profileimg.jfif'}
                                alt='profilePhoto'
                                width={40}
                                height={40}
                            />

                            {/* div to show the options tablet */}
                            <div className={`absolute z-[999] bg-white border border-black/20 shadow-sm flex flex-col ${showProfileOptions ? 'opacity-100' : 'hidden opacity-0'} transition-all duration-300 top-12 text-sm -left-20 cursor-pointer rounded-xl overflow-hidden text-nowrap`}>
                                <div className='flex items-center justify-between border border-transparent border-b-black/5 p-2 gap-1 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        View Profile
                                    </span>
                                    <Eye size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 justify-between border border-transparent border-b-black/5 text-black/70 hover:text-black duration-300 hover:bg-black/5'>
                                    <span>
                                        Edit Profile
                                    </span>
                                    <UserPen size={17} strokeWidth={1.5} />
                                </div>
                                <div className='flex items-center p-2 gap-1 hover:bg-black/5 justify-between text-black/70 hover:text-black duration-300'>
                                    <span>
                                        Settings
                                    </span>
                                    <Settings size={17} strokeWidth={1.5} />
                                </div>
                            </div>
                        </div> :
                            <div className='border max-md:hidden md:visible text-black/70 hover:text-black/90 duration-200 cursor-pointer hover:bg-transparent outline-2 outline-gray-400/20 bg-white outline-offset-1 shadow-gray-900/5 p-2 rounded-xl border-black/20 flex items-center gap-2'>
                                <span className='text-sm font-medium'>
                                    Login
                                </span>
                                <UsersRound size={17} strokeWidth={1.5} />
                            </div>
                    }

                    <span className='max-md:block md:hidden' onClick={() => setShowSlider(!showSlider)}>
                        <AlignRight size={25} strokeWidth={1.5} className='text-black' />
                    </span>

                    {/* Slider to show the options only for smaller screens max tablet */}
                    <div className={`transition-all max-md:visible md:hidden duration-500 justify-between absolute z-50 flex flex-col items-start inset-0 shadow-sm h-svh w-screen text-black bg-white ${showSlider ? "translate-y-0 block" : "-translate-y-full"}`}>

                        <div className="w-full">
                            {/* line on the top */}
                            <div className='h-px w-full bg-black/15 mt-12'></div>
                            <div className='flex items-center gap-2 border border-transparent border-b-gray-200/90 h-15 duration-200 px-2 active:bg-black/5 w-full'>
                                <CircleGauge size={20} strokeWidth={2.4} />
                                <span className='text-lg font-medium'>
                                    Dashboard
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <UserCheck size={20} strokeWidth={2.4} />
                                <span className='text-lg font-medium'>
                                    Manage Workers
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <UserRoundSearch size={20} strokeWidth={2.2} />
                                <span className='text-lg font-medium'>
                                    Manage Users
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <CalendarCheck size={20} strokeWidth={2.2} />
                                <span className='text-lg font-medium'>
                                    Booking and Disputes
                                </span>
                            </div>
                            <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2 border border-transparent border-b-gray-200/90'>
                                <CreditCard size={20} strokeWidth={2.2} />
                                <span className='text-lg font-medium'>
                                    Payments
                                </span>
                            </div>

                            {/* diff on the basis of user login logout */}
                            <div className='flex relative hidden items-center gap-1 h-14 duration-200 active:bg-black/5 w-full px-2'>

                                <Image
                                    className='rounded-full'
                                    src={'/profileimg.jfif'}
                                    alt='profilePhoto'
                                    width={45}
                                    height={45}
                                />

                                {/* icon */}
                                <ArrowUpRight size={25} strokeWidth={1.6} className="absolute opacity-70 top-3 right-2" />
                                <span className='text-lg font-medium'>Farwa Jahil</span>
                            </div>
                            {/* <div className='flex items-center gap-2 h-15 duration-200 active:bg-black/5 w-full px-2'>
                                <CircleUser />
                                <span className=' font-medium'>
                                    Login
                                </span>
                            </div>
                         */}

                            {/* close icon */}
                            <span className='p-1 rounded-full absolute top-2 right-2 bg-black/5 active:bg-black/10 duration-200' onClick={() => setShowSlider(!showSlider)}>
                                <X className='text-black text-sm' />
                            </span>
                            {/* logo */}
                            <span className='absolute top-2 left-2'>
                                <Image
                                    src={'/logo.png'}
                                    alt='logo'
                                    width={55}
                                    height={55}
                                />
                            </span>
                        </div>

                        {/* adding two more buttons for login signup */}
                        <div className="flex flex-col items-center gap-3 w-full max-md:visible md:hidden mb-3">
                            <button className='w-10/12 text-white font-medium rounded-xl h-12 outline-1 outline-white bg-[#131313] hover:bg-[#292929] duration-200 active:bg-[#000000]/80'>
                                Signup
                            </button>
                            <button className='h-12 w-10/12 font-medium border border-slate-400/70 rounded-xl hover:bg-[#000000]/5 duration-200 active:bg-[#000000]/5'>
                                Login
                            </button>
                        </div>

                    </div>

                    {/* container to show when something is opened */}
                    <div className={`absolute z-0 inset-0 h-screen w-screen ${showHoverOption || showDropDown || showProfileOptions ? 'visible bg-transparent' : 'hidden'}`} onClick={handleCloseOptions}></div>

                </div>
            }

        </>
    )
}

export default Navbar;