
import React, { useState } from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Logo from '../assets/Image/Logo.png'
import { NavLink } from 'react-router-dom';

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full bg-white border-b-2 border-[#FDB813] shadow-2xl px-4 lg:px-6">
            <div className="max-w-280 mx-auto py-1 flex justify-between items-center ">

                {/* Logo */}
                <div className=''>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-20 h-20 md:w-32 md:h-28 object-cover ml-10 rounded-full"
                    />

                    <p className="text-[10px] md:text-[12px] md:px-2 text-[#1F2933] tracking-wider font-medium">
                        AP POWER ENERGY SOLUTIONS
                    </p>
                </div>

                {/* Menu */}
                <div className="flex items-center gap-1 sm:gap-4">

                    <button
                        className="block md:hidden text-[25px] sm:text-[28px] cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiMiniBars3BottomRight /> : <HiMiniBars3CenterLeft />}
                    </button>
                </div>

                <div className="hidden md:flex lg:gap-10 md:gap-6 text-[#1F2933] lg:text-lg md:text-sm font-semibold">

                    <NavLink to="/"
                        className={({ isActive }) => isActive ? "text-[#FDB813] border-b-2 border-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                    >HOME
                    </NavLink>

                    <NavLink to='/why_solar'
                        className={({ isActive }) => isActive ? "text-[#FDB813] border-b-2 border-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                    >WHY SOLAR
                    </NavLink>

                    <NavLink to='/services'
                        className={({ isActive }) => isActive ? "text-[#FDB813] border-b-2 border-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                    >SERVICES
                    </NavLink>

                    <NavLink to='/about'
                        className={({ isActive }) => isActive ? "text-[#FDB813] border-b-2 border-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                    >ABOUT
                    </NavLink>

                    <NavLink to='/contact'
                        className={({ isActive }) => isActive ? "text-[#FDB813] border-b-2 border-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                    >CONTACT
                    </NavLink>
                </div>

                {/* side menu for mobile */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                <aside
                    className={`lg:hidden fixed top-0 left-0 h-full w-62 bg-white shadow-lg z-50 transform transition-transform duration-300 
                        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="px-4 py-9.5 flex justify-between items-center border-b border-[#FDB813]">
                        <IoClose
                            className="text-[28px] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>

                    <div className="flex flex-col gap-4 p-6 text-[15px] font-semibold">

                        <NavLink to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >HOME
                        </NavLink>

                        <NavLink to='/why_solar'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >WHY SOLAR
                        </NavLink>

                        <NavLink to='/services'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >SERVICES
                        </NavLink>

                        <NavLink to='/about'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813]  hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >ABOUT
                        </NavLink>

                        <NavLink to='/contact'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >CONTACT
                        </NavLink>

                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Header;