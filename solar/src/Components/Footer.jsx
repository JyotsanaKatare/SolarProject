
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { FaLinkedin, FaPhone } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import Logo from '../assets/Image/Logo.png'

function Footer() {
    return (
        <section className="w-full shadow-md bg-[#1F2933] mt-10 ">

            <div className="max-w-280 mx-auto py-20 flex flex-col gap-12 items-center text-center
                md:flex-row md:justify-between md:items-start md:text-left px-4 lg:px-6">

                {/* Logo */}
                <div className="flex flex-col items-center text-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-50 object-cover rounded-full"
                    />

                    <p className="text-[18px] pt-5 md:py-3 text-white tracking-wider">
                        AP POWER ENERGY SOLUTIONS
                    </p>
                </div>

                {/* menu */}
                <div className="text-white flex flex-col space-y-4 items-center md:items-start">
                    <h1 className="text-[30px] font-semibold">Quick Links</h1>

                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-[#FDB813] text-[18px]" : "text-[18px] hover:text-[#FDB813]"}>
                        HOME
                    </NavLink>

                    <NavLink to="/why_solar" className={({ isActive }) =>
                        isActive ? "text-[#FDB813] text-[18px]" : "text-[18px] hover:text-[#FDB813]"}>
                        WHY SOLAR
                    </NavLink>

                    <NavLink to="/services" className={({ isActive }) =>
                        isActive ? "text-[#FDB813] text-[18px]" : "text-[18px] hover:text-[#FDB813]"}>
                        SERVICES
                    </NavLink>

                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-[#FDB813] text-[18px]" : "text-[18px] hover:text-[#FDB813]"}>
                        ABOUT
                    </NavLink>

                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "text-[#FDB813] text-[18px]" : "text-[18px] hover:text-[#FDB813]"}>
                        CONTACT
                    </NavLink>
                </div>

                {/* contact */}
                <div className="text-white space-y-6 flex flex-col items-center md:items-start">
                    <h1 className="text-[30px] font-semibold">Contact Us</h1>

                    <div className="flex gap-4 text-[20px]">
                        {[FaInstagram, FaLinkedin, FaFacebook, FaTwitter].map((Icon, i) => (
                            <div
                                key={i}
                                className="group px-2 py-2 bg-[#FDB813] rounded-full cursor-pointer hover:bg-[#1F2933] transition-all duration-300 hover:scale-110"
                            >
                                <Icon className="text-[#1F2933] group-hover:text-[#FDB813] transition-all duration-300" />
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 text-[18px] items-center">
                        <MdEmail className="text-[26px]" />
                        <p>appowers39@gmail.com</p>
                    </div>

                    <div className="flex gap-2 text-[18px] items-center">
                        <FaPhone className="text-[26px]" />
                        <p>+91 9479777607</p>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-gray-300" />
            
            <div className="text-center text-[16px]">
                <p className="text-gray-300 py-4">
                    Copyright © 2026 solar8 | Powered by solar8
                </p>
            </div>
            
        </section>
    )
}

export default Footer
