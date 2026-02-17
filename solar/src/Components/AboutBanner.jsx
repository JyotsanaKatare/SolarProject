
import React from 'react';
import AboutBanner1 from '../assets/Image/AboutBanner1.jpg';
import AboutBanner2 from '../assets/Image/AboutBanner2.jfif';
import AboutBanner3 from '../assets/Image/AboutBanner3.jpg';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';

function AboutBanner() {

    const banner = [
        {
            img: AboutBanner1,
            heading: "Revolutionizing Energy with AP Powers",
            para: "We provide smart solar solutions for a sustainable future."
        },
        {
            img: AboutBanner2,
            heading: "Advanced Solar Technology, Trusted by Thousands",
            para: "High-efficiency panels designed to last for 25+ years."
        },
        {
            img: AboutBanner3,
            heading: "Reduce Your Bills, Not Your Comfort",
            para: "Join the green energy movement and start saving from day one."
        },
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6 mt-5 md:my-5">
            <div className="max-w-280 mx-auto">

                <Swiper
                    className='about-slider'
                    modules={[Navigation, EffectFade]}
                    effect={'fade'}
                    speed={500}
                    loop={true}
                    navigation
                    spaceBetween={30}>

                    {banner.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full flex h-70 md:h-100 lg:h-140 items-center justify-center'>

                                {/* Image */}
                                <motion.img
                                    src={item.img}
                                    alt='AboutBanner'
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                                {/* content */}
                                <div className='relative z-10 max-w-3xl md:max-w-4xl px-10 md:px-20 lg:px-6 text-center text-white '>
                                    <motion.h1
                                        initial={{ opacity: 0, y: -30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg'>
                                        {item.heading}
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className='text-sm md:text-lg lg:text-xl text-[#ffb70f] font-medium mt-4 opacity-90 drop-shadow-lg'>
                                        {item.para}
                                    </motion.p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default AboutBanner;