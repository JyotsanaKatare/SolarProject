
import React from 'react'
import MidBannerImg from '../assets/Image/MidBannerImg.jpg';
import { TbSunElectricity } from "react-icons/tb";
import { FaPlugCircleCheck } from "react-icons/fa6";
import { MdArchive } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { motion } from 'framer-motion';

function MiddleBanner() {

    const cardSection = [
        {
            icon: <TbSunElectricity className="text-[#FDB813]" size={32} />,
            heading: "Generate Energy",
            para: "Generate your own clean energy whenever the sun is shining with Solar Panels."
        },

        {
            icon: <FaPlugCircleCheck className="text-[#FDB813]" size={32} />,
            heading: "Use Energy",
            para: "Power everything from your TV to the internet with solar energy."
        },

        {
            icon: <MdArchive className="text-[#FDB813]" size={32} />,
            heading: "Store Any Extra",
            para: "Save excess solar energy in Powerwall for use during storms and outages, or when utility prices are high."
        },

        {
            icon: <FaCarSide className="text-[#FDB813]" size={32} />,
            heading: "Charge Your EV",
            para: "Charge your electric vehicle with clean energy at home using Mobile Connector or Wall Connector."
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
                        src={MidBannerImg}
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
                        Install Solar Panels, Power a Sustainable Home
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-[16px] md:text-[18px] text-gray-600'>
                        Generate, use, store and charge—all with one fully integrated clean energy ecosystem from Ap Power. All of our products work together seamlessly, optimizing your energy usage and savings while minimizing your impact on the environment.
                    </motion.p>

                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:py-8 lg:py-10">
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

export default MiddleBanner;