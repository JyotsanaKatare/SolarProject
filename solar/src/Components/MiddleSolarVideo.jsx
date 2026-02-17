
import React from 'react'
import HomeVideo from '../assets/Video/HomeVideo.mp4';
import SolarVideo from '../assets/Video/SolarVideo.mp4';
import { PiSolarPanelDuotone } from "react-icons/pi";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { motion } from 'framer-motion';

function MiddleSolarVideo() {

    const cardSection = [
        {
            icon: <PiSolarPanelDuotone className="text-[#FDB813]" size={32} />,
            heading: "Sustainable Energy",
            para: "Power your home with emissions-free renewable energy directly from the sun."
        },

        {
            icon: <BsBookmarkStar className="text-[#FDB813]" size={32} />,
            heading: "Incentives",
            para: "You can qualify for local incentives that can help cut your installation costs."
        },

        {
            icon: <AiOutlineDollar className="text-[#FDB813]" size={32} />,
            heading: "Monthly Bill Savings",
            para: "Using solar energy to power your home can help protect you from rising electricity costs. Explore leasing options for the most affordable way to go solar."
        },
    ];

    return (
        <section className="w-full">

            {/* 1st video */}
            <div className="relative">
                <video
                    src={HomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[60vh] md:h-140 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            Empowering the Future
                        </h1>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FDB813] mt-4">
                            Let the Sun Fund Your Electricity Bill!
                        </h2>
                    </div>
                </div>
            </div>

            {/* 2nd video */}
            <div className='w-full my-8'>
                <video
                    src={SolarVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                >
                </video>
            </div>

            {/* content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-280 mx-auto px-4 lg:px-6 md:my-5">

                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold pb-2 md:py-3 lg:py-5'>
                    Save on Electricity Bills
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-[16px] md:text-[18px] text-gray-600'>
                    Generate your own clean energy from the sun with Ap Power Solar Panels. Add Powerwall to store your energy for use anytime you need it. Flexible financing and low monthly lease options can help you secure the best price for your solar system. By installing Solar Panels, you can also reduce your reliance on traditional energy sources.
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

            </motion.div >
        </section>

    )
}

export default MiddleSolarVideo;