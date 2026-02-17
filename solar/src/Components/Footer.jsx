
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from '../assets/Image/Logo.png';
import { motion } from 'framer-motion';

function Footer() {

    const [quickLinksOpen, setquickLinksOpen] = useState(false);
    const [policiesOpen, setpoliciesOpen] = useState(false);

    const icons = [
        {
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/appowersenergysolution8/'
        },

        {
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/company/appowers/?viewAsMember=true'
        },

        {
            icon: <FaFacebook />,

        },

        {
            icon: <FaTwitter />,

        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}

            className="w-full shadow-md bg-[#1F2933] mt-10">

            <div className="max-w-280 mx-auto  px-4 lg:px-6 py-10 md:py-15 flex flex-col gap-12 items-center text-center
                md:flex-row md:justify-between md:items-start md:text-left">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-45 lg:w-50 object-cover rounded-full"
                    />

                    <p className="text-[16px] lg:text-[18px] pt-5 md:py-3 text-gray-50 tracking-wider">
                        AP POWER ENERGY SOLUTIONS
                    </p>
                </motion.div>

                {/* Quick link - menu */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}

                    className="flex flex-col w-full md:w-auto text-white">
                    <div
                        onClick={() =>
                            setquickLinksOpen(!quickLinksOpen)
                        }
                        className="flex justify-between items-center cursor-pointer md:cursor-default"
                    >
                        <h1 className="text-[20px] md:text-[24px] font-bold text-[#FDB813] mb-2 uppercase tracking-tight">
                            Quick Links
                        </h1>
                        <div className="text-[#FDB813] md:hidden">
                            {quickLinksOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>

                    <div
                        className={`flex flex-col space-y-2 md:space-y-4 items-start transition-all duration-300 ease-in-out 
                                    ${quickLinksOpen ? "flex" : "hidden"} md:flex`}>

                        {[
                            { name: "Home", path: "/" },
                            { name: "Why Solar", path: "/why_solar" },
                            { name: "Services", path: "/services" },
                            { name: "Testimonials", path: "/testimonials" },
                            { name: "About", path: "/about" },
                            { name: "Contact", path: "/contact" }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setquickLinksOpen(false)}
                                className={({ isActive }) => `text-[17px] transition-all duration-300 ${isActive ? "text-[#FDB813] font-medium" : "text-gray-300 hover:text-white"}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>

                {/* ploicies - menu */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}

                    className="flex flex-col w-full md:w-auto text-white md:mt-0">
                    <div
                        onClick={() => setpoliciesOpen(!policiesOpen)}
                        className="flex justify-between items-center cursor-pointer md:cursor-default"
                    >
                        <h1 className="text-[20px] md:text-[24px] font-bold text-[#FDB813] mb-2 uppercase tracking-tight">
                            Policies
                        </h1>
                        <div className="text-[#FDB813] md:hidden">
                            {policiesOpen ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>

                    <div className={`flex flex-col space-y-2 md:space-y-4 items-start transition-all duration-300 ease-in-out 
                                    ${policiesOpen ? "flex" : "hidden"} md:flex`}>

                        {[
                            { name: "FAQ's", path: "/faq" },
                            { name: "Privacy Policy", path: "/privacy_policy" },
                            { name: "Terms & Conditions", path: "/terms" }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setpoliciesOpen(false)}
                                className={({ isActive }) => `text-[17px] transition-all duration-300 ${isActive ? "text-[#FDB813] font-medium" : "text-gray-300 hover:text-white"}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </motion.div>

                {/* contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}

                    className="text-white space-y-4 md:space-y-6 flex flex-col items-start text-left self-start md:self-auto md:items-start">
                    <h1 className="text-[20px] md:text-[24px] font-bold text-[#FDB813] mb-4 uppercase tracking-tight">Contact Us</h1>

                    <div className="flex pt-5 md:pt-0 gap-4 text-[20px] order-4 md:order-0">
                        {icons.map((item, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                                href={item.link}
                                target='_blank'
                                rel="noopener noreferrer"
                                className="group px-2 py-2 bg-[#FDB813] rounded-full cursor-pointer hover:bg-[#1F2933] transition-all duration-300 hover:scale-110"
                            >
                                <span
                                    className="text-[#1F2933] group-hover:text-[#FDB813] transition-all duration-300">
                                    {item.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex gap-2 text-gray-50 text-[16px] md:text-[18px] items-center order-2 md:order-0">
                        <MdEmail className="text-[24px] md:text-[26px]" />
                        <p>appowers39@gmail.com</p>
                    </div>

                    <div className="flex gap-2 text-gray-50 text-[16px] md:text-[18px] items-center order-3 md:order-0">
                        <FaPhone className="text-[24px] md:text-[26px]" />
                        <p>+91 9479777607</p>
                    </div>
                </motion.div>

            </div>

            <hr className="border-t border-white/20" />

            <div className="text-center text-[16px]">
                <p className="text-gray-300 py-4 px-2">
                    Copyright © 2026 Ap Power Energy Solutions
                </p>
            </div>

        </motion.section>
    )
}

export default Footer;