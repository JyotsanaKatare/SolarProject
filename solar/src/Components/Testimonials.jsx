
import React from 'react'
import TestimonialBannerImg from '../assets/Image/TestimonialBannerImg.jpg'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Testimonials() {

    const navigate = useNavigate();

    const contentVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="w-full bg-white overflow-hidden">
            <div className='relative h-110 md:h-auto lg:h-140'>

                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={TestimonialBannerImg}
                    alt='MainSolarImage'
                    className='w-full h-full object-cover'
                />

                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"
                ></motion.div>

                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className='absolute top-1/2 -translate-y-1/2 px-4 md:px-10 flex flex-col justify-center w-full max-w-lg md:max-w-4xl py-10'
                >
                    <motion.h1
                        variants={itemVariants}
                        className='text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#FDB813] pb-5 drop-shadow-md'
                    >
                        Empowering 1,000+ Families With Smarter Savings!
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className='w-full max-w-xl text-white text-md md:text-xl lg:text-2xl leading-relaxed opacity-90 drop-shadow-sm'
                    >
                        Let <strong>Appowers</strong> turn your roof into a powerhouse and bring your electricity bills down to zero.
                    </motion.p>

                    {/* Button */}
                    <motion.div
                        variants={itemVariants}
                        className='flex justify-start my-8'>
                        <motion.button
                            onClick={() => navigate('/')}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#1F2933",
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.95 }}
                            // Pulse effect
                            animate={{
                                boxShadow: ["0px 0px 0px rgba(253, 184, 19, 0)", "0px 0px 20px rgba(253, 184, 19, 0.5)", "0px 0px 0px rgba(253, 184, 19, 0)"]
                            }}
                            transition={{
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className='p-2 md:px-5 md:py-2 text-sm md:text-lg rounded-full bg-[#FDB813] text-[#1F2933] font-bold transition-colors cursor-pointer shadow-2xl overflow-hidden relative'
                        >
                            Get Free Quote Today
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials;