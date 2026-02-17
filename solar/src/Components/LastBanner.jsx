

import React from 'react'
import LastBannerImg from '../assets/Image/LastBannerImg.jpg';
import { FiEdit } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { motion } from 'framer-motion';

function LastBanner() {

    const cardSection = [
        {
            icon: <FiEdit className="text-[#FDB813]" size={32} />,
            heading: "From Order to Design",
            para: "Share your energy needs, and AP Power will design a custom solar system for your home. It’s tailored to meet your current and future energy demands efficiently."
        },

        {
            icon: <FiCheckCircle className="text-[#FDB813]" size={32} />,
            heading: "From Install to Power On",
            para: "Most AP Power solar installations are completed in just a few months. We handle all permitting and approvals, ensuring a hassle-free experience. Our expert team is available throughout the entire process to support you."
        },

        {
            icon: <GoShieldCheck className="text-[#FDB813]" size={32} />,
            heading: "From Day One Onward",
            para: "Enjoy peace of mind with a 25-year warranty on your solar panels. The AP Power support team is here for you throughout the entire lifetime of your system."
        },
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6 my-4 md:my-10">
            <div className="max-w-280 mx-auto">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className=''>
                    <img
                        src={LastBannerImg}
                        alt="MiddleBannerImage"
                        className='w-full h-full object-cover rounded-2xl '
                    />
                </motion.div>

                <div className='md:my-5'>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold py-2 md:py-3 lg:py-5'>
                        Getting to Power On
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-[16px] md:text-[18px] text-gray-600'>
                        With half a million solar installations to date, Ap Power or a Ap Power Certified Installer will work with you, from order to power on. Schedule a virtual consultation with a Ap Power Advisor or a Ap Power Certified Installer to learn more.
                    </motion.p>

                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:py-8 lg:py-10">
                        {cardSection.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-[#F5F5F5] p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
                                    className="mb-4 bg-yellow-50 w-16 h-16 flex items-center justify-center rounded-xl">
                                    {item.icon}
                                </motion.div>

                                <h3 className="text-xl font-bold text-[#1F2933] mb-3">
                                    {item.heading}
                                </h3>
                                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                                    {item.para}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastBanner;