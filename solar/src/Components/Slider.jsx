
import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';

function Slider() {

    const reviews = [
        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            para: "Installation process was very smooth. Team explained everything clearly and completed the work.",
            name: "Sameer",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            name: "Shree",
            para: "Installation process was very smooth. Team explained everything clearly and completed the work.",
        },

        {
            img: <FaRegUser />,
            iconTag: <FaSquareFacebook />,
            name: "Bruce",
            para: "Very professional service. The solar system is working perfectly and electricity bill has reduced a lot.",
        },

        {
            img: <FaRegUser />,
            iconTag: <BsWhatsapp />,
            name: "Ritche",
            para: "Excellent support from enquiry to installation. Highly recommended for residential solar solutions.",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            name: "Lucie",
            para: "Quality work and knowledgeable staff. They guided us properly about subsidy and maintenance.",
        },
        {
            img: <FaRegUser />,
            iconTag: <FaSquareFacebook />,
            name: "Sophia",
            para: "Very satisfied with the service. Clean installation and great after-sales support and maintenance.",
        },

        {
            img: <FaRegUser />,
            iconTag: <BsWhatsapp />,
            name: "Amelia",
            para: "Trustworthy company. Everything was transparent and completed within the promised timeline.",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            para: "Very professional service. Highly satisfied with the solar installation. Very good explaination...",
            name: "Denny",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            name: "Nova",
            para: "Team was very cooperative and professional. Installation was done neatly without any issues.",
        },

        {
            img: <FaRegUser />,
            iconTag: <FaSquareFacebook />,
            name: "Emily",
            para: "Good experience overall. Proper guidance was given about system usage and maintenance.",
        },

        {
            img: <FaRegUser />,
            iconTag: <BsWhatsapp />,
            name: "Daniel",
            para: "Solar panel quality is excellent and the performance is as promised. Very happy with the service.",
        },
        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            name: "Henry",
            para: "Installation completed on time and the team was very polite. Would definitely recommend them.",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            para: "Installation process was smooth and the team explained everything clearly and complete process.",
            name: "Alexander",
        },

        {
            img: <FaRegUser />,
            iconTag: <SiInstagram />,
            para: "Very professional service. Highly satisfied with the solar installation. Very good explaination...",
            name: "Ava",
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:my-8 lg:my-10 px-4 lg:px-6">

            <div className="max-w-280 mx-auto md:pb-5">
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold text-center pt-5 pb-6 md:pb-10 md:pt-0'>
                    Our Customer Reviews
                </h1>

                {/* Slider */}
                <div>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={4}
                        spaceBetween={16}
                        loop
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}>

                        {reviews.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="bg-linear-to-t to-[#1F2933] from-neutral-900/60 rounded-lg shrink-0 shadow-[0_6px_7px_rgba(0,0,0,0.15)] shadow-neutral-600">

                                {/* Customer */}
                                <div className="flex flex-col items-center gap-4 pt-6">
                                    <div className='w-30 h-30 bg-gray-200 rounded-full'>
                                        <p className='text-5xl text-[#FDB813] flex justify-center py-8'>
                                            {item.img}
                                        </p>
                                    </div>

                                    <p className="text-white text-[18px] md:text-[20px]">
                                        {item.name}
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="flex justify-center gap-2 py-4">
                                    <FaStar className="text-yellow-500 text-[18px]" />
                                    <FaStar className="text-yellow-500 text-[18px]" />
                                    <FaStar className="text-yellow-500 text-[18px]" />
                                    <FaStar className="text-yellow-500 text-[18px]" />
                                    <FaStarHalfAlt className="text-yellow-500 text-[18px]" />
                                </div>

                                {/* Paragraph */}
                                <p className="text-[15px] text-gray-200 text-center px-3 leading-relaxed">
                                    {item.para}
                                </p>

                                {/* Social Icon */}
                                <div className="flex justify-center py-4 text-[24px] text-[#FDB813]">
                                    {item.iconTag}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    )
}

export default Slider;