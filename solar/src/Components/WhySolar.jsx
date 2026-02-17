
import React from 'react'
import SolarMainImg from '../assets/Image/SolarMainImg.jpg';
import SolarImg1 from '../assets/Image/SolarImg1.jpg';
import SolarImg2 from '../assets/Image/SolarImg2.png';
import SolarImg3 from '../assets/Image/SolarImg3.jpg';
import SolarImg4 from '../assets/Image/SolarImg4.png';
import SolarImg5 from '../assets/Image/SolarImg5.jpg';
import SolarImg6 from '../assets/Image/SolarImg6.png';
import SolarImg7 from '../assets/Image/SolarImg7.jpg';
import { motion } from 'framer-motion';

function WhySolar() {

    // Parent container ke liye variants (Stagger effect ke liye)
    const bannerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Pehle Heading, fir 0.3s baad Paragraph
                delayChildren: 0.2
            }
        }
    };

    const textFadeLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full bg-white overflow-x-hidden">

            {/* Banner image */}
            <div className='relative overflow-hidden h-120'>
                <motion.img
                    src={SolarMainImg}
                    alt='MainSolarImage'
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className='w-full h-full object-cover'
                />

                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent">
                </motion.div>

                <motion.div
                    variants={bannerContainer}
                    initial="hidden"
                    animate="visible"
                    className='absolute top-20 px-4 md:px-6 flex flex-col justify-center'>

                    <motion.h1
                        variants={textFadeLeft}
                        className='text-3xl md:text-4xl font-medium text-[#FDB813] pb-5 drop-shadow-lg'>
                        WHY SOLAR?
                    </motion.h1>

                    <motion.p
                        variants={textFadeLeft}
                        className='w-75 md:w-150 text-white text-md md:text-xl leading-8 md:leading-10 drop-shadow-lg'>
                        Solar energy is more than just an alternative power source — it is a smart, long-term investment in
                        sustainability, savings, and energy independence. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we help you unlock the full potential of solar power with reliable and future-ready solutions.
                    </motion.p>

                </motion.div>
            </div>

            {/* 1st section */}
            <div className="bg-white py-8 md:py-16 px-4 lg:px-6">
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5'>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Save On Electricity Bills:
                        </h1>

                        <div className='md:hidden'>
                            <img
                                src={SolarImg1}
                                alt='SolarImg1'
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Save On Electricity Bills:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider md:py-2'>
                                By generating your own electricity, solar power significantly reduces your dependence on the grid. With a professionally designed system from <strong>AP POWER ENERGY SOLUTIONS</strong>, you can lower monthly electricity expenses and protect yourself from rising power tariffs.
                            </p>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={SolarImg1}
                                alt='SolarImg1'
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="bg-blue-50 py-8 md:py-16 px-4 lg:px-6">
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5'>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Increase property value:
                        </h1>

                        <div className='w-full md:w-1/2 py-3 md:pt-0'>
                            <img
                                src={SolarImg2}
                                alt='SolarImg2'
                                className='w-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Increase property value:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider py-2'>
                                Solar-powered homes and commercial properties are more attractive in the real estate market.
                                Installing solar enhances property value by offering long-term energy savings, sustainability
                                benefits, and improved energy efficiency.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3rd section */}
            <div className="bg-white py-8 md:py-16 px-4 lg:px-6">
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5'>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Reduce your carbon footprint:
                        </h1>

                        <div className='md:hidden'>
                            <img
                                src={SolarImg3}
                                alt='SolarImg3'
                                className='w-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Reduce your carbon footprint:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider md:py-2'>
                                Solar energy is clean, renewable, and environmentally responsible. By switching to solar, you
                                actively reduce greenhouse gas emissions and help create a cleaner, healthier environment for
                                future generations.
                            </p>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={SolarImg3}
                                alt='SolarImg3'
                                className='w-full object-cover'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 4th section */}
            <div className="bg-blue-50 py-8 md:py-16 px-4 lg:px-6">
                <div className=" max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5 '>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Long life cycle and low maintenance:
                        </h1>

                        <div className='w-full md:w-1/2 py-3 md:pt-0'>
                            <img
                                src={SolarImg4}
                                alt='SolarImg4'
                                className='w-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Long life cycle and low maintenance:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider py-2'>
                                Modern solar systems are built to last 25 years or more with minimal maintenance. With no moving
                                parts, solar panels offer reliable performance and durability, making them a low-risk, long-term
                                energy solution.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 5th section */}
            <div className="bg-white py-8 md:py-16 px-4 lg:px-6">
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5'>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Financial Benefits:
                        </h1>

                        <div className='md:hidden'>
                            <img
                                src={SolarImg5}
                                alt='SolarImg5'
                                className='w-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Financial Benefits:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider md:py-2'>
                                Solar power delivers strong financial returns through reduced electricity bills, government
                                incentives, and long-term savings. <strong>AP POWER ENERGY SOLUTIONS</strong> helps you maximize return
                                on investment with efficient system design and expert guidance.
                            </p>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={SolarImg5}
                                alt='SolarImg5'
                                className='w-full object-cover'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 6th section */}
            <div className="bg-blue-50 py-8 md:py-16 px-4 lg:px-6">
                <div className=" max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5 '>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                            Pollution-free environment:
                        </h1>

                        <div className='w-full md:w-1/2 py-3 md:pt-0'>
                            <img
                                src={SolarImg6}
                                alt='SolarImg6'
                                className='w-full object-cover'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Pollution-free environment:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider md:py-2'>
                                Unlike conventional energy sources, solar power produces no air, noise, or water pollution.
                                Adopting solar contributes to cleaner surroundings and supports a healthier ecosystem.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 7th section */}
            <div className="bg-white py-8 md:py-16 px-4 lg:px-6">
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row md:gap-5'>

                        <h1 className='md:hidden text-[#1F2933] text-2xl font-medium pb-8'>
                            Electric vehicles and solar:
                        </h1>

                        <div className='md:hidden'>
                            <img
                                src={SolarImg7}
                                alt='SolarImg7'
                                className='w-full object-cover rounded-4xl'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>
                            <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                                Electric vehicles and solar:
                            </h1>

                            <p className='text-[18px] md:text-[23px] leading-wider pt-8 pb-4 md:py-2'>
                                Solar energy and electric vehicles work perfectly together. Charging EVs using solar power reduces operating costs and creates a fully sustainable energy ecosystem for homes and businesses.
                            </p>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={SolarImg7}
                                alt='SolarImg7'
                                className='w-full object-cover rounded-4xl'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

export default WhySolar;