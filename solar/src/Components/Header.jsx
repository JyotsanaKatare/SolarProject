
import React, { useState } from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import Logo from '../assets/Image/Logo.png'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full bg-white border-b-2 border-[#FDB813] px-4 lg:px-6">
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

                <div className="hidden md:flex lg:gap-8 md:gap-5 text-[#1F2933] lg:text-lg md:text-sm font-semibold">

                    <NavLink to="/">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    Home
                                </span>

                                {/* Animated Underline */}
                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                    <NavLink to="/why_solar">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    Why Solar
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                    <NavLink to="/services">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    Services
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                    <NavLink to="/testimonials">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    Testimonials
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                     <NavLink to="/faq">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    FAQs
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                    <NavLink to="/about">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    About
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
                    </NavLink>

                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <motion.div
                                className="relative cursor-pointer"
                                initial="rest"
                                whileHover="hover"
                                animate={isActive ? "hover" : "rest"}
                            >
                                <span className={`inline-block transition-colors duration-300
                                    ${isActive ? "text-[#FDB813]" : "hover:text-[#FDB813]"}`}
                                >
                                    Contact
                                </span>

                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-0.5 w-full bg-[#FDB813] origin-center"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        )}
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

                    <div className="flex flex-col gap-4 p-6 text-[15px] font-medium">

                        <NavLink to="/"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >Home
                        </NavLink>

                        <NavLink to='/why_solar'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >Why Solar
                        </NavLink>

                        <NavLink to='/services'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >Services
                        </NavLink>

                        <NavLink to='/testimonials'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >Testimonials
                        </NavLink>

                        <NavLink to='/faq'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >FAQs
                        </NavLink>

                        <NavLink to='/about'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813]  hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >About
                        </NavLink>

                        <NavLink to='/contact'
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) => isActive ? "text-[#FDB813] hover:text-[#FDB813] cursor-pointer transition-all duration-300 ease-in-out" : "hover:text-[#FDB813]"}
                        >Contact
                        </NavLink>

                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Header;