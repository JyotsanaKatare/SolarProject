
import React from 'react';
import Logo from '../assets/Image/Logo.png';
import ContactBannerImg1 from '../assets/Image/ContactBannerImg1.jpg';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { motion } from 'framer-motion';

function Contact() {

    const points = [
        {
            desc: " Professional solar consultation",
        },
        {
            desc: "Customized energy solutions",
        },
        {
            desc: "Transparent pricing and guidance",
        },
        {
            desc: "Experienced technical team",
        },
        {
            desc: "Reliable after-sales support",
        },
    ];

    const bannerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, 
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
        <section className="w-full bg-white relative overflow-hidden">

            {/* contact banner image */}
            <div className='relative h-130'>
                <motion.img
                    src={ContactBannerImg1}
                    alt='ContactBannerImage'
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
                    className="absolute inset-0 bg-linear-to-r from-black/90 to-transparent">
                </motion.div>

                <motion.div
                    variants={bannerContainer}
                    initial="hidden"
                    animate="visible"
                    className='absolute top-1/2 -translate-y-1/2 px-4 md:px-6 flex flex-col justify-center'>

                    <motion.h1
                        variants={textFadeLeft}
                        className='text-3xl md:text-4xl font-medium text-[#FDB813] pb-5 drop-shadow-lg'>
                        Contact Us
                    </motion.h1>

                    <motion.p
                        variants={textFadeLeft}
                        className='w-75 md:w-150 text-white text-md md:text-xl leading-8 md:leading-10 drop-shadow-lg'>
                        Get in touch with <strong>AP POWER ENERGY SOLUTIONS</strong> to discuss your solar energy needs. Whether you are planning a residential installation, a commercial project, or an industrial solar solution, our team is ready to assist you with expert guidance and reliable support.
                    </motion.p>

                    <motion.p
                        variants={textFadeLeft}
                        className='w-75 md:w-150 text-white text-md md:text-xl leading-8 md:leading-10 drop-shadow-lg'>
                        We believe in clear communication, quick response times, and transparent consultation — from the
                        first enquiry to project completion and beyond.
                    </motion.p>

                </motion.div>
            </div>

            <div className='max-w-280 mx-auto px-4 lg:px-6'>

                {/* get in touch */}
                <div className=''>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-8 md:pt-15 md:pb-5'>
                        Get in Touch
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='max-w-2xl mx-auto text-[16px] md:text-[18px] text-gray-600 text-center pt-4 md:py-2 '>
                        Have questions about solar systems, pricing, installation, or maintenance? Our experienced team is
                        here to help you make informed decisions and find the right energy solution for your requirements.
                    </motion.p>
                </div>

                {/* Why Contact */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-15 my-10 md:my-14 lg:my-20 items-start overflow-x-hidden">

                    {/* Left Side: Heading (Sticky on Desktop) */}
                    <div className='w-full lg:w-1/2'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="border-l-8 border-[#FDB813] pl-8"
                        >
                            <h2 className="text-sm uppercase tracking-widest text-[#FDB813] font-bold mb-2">
                                Expertise You Can Trust
                            </h2>
                            <h1 className='text-3xl md:text-5xl lg:text-6xl text-[#1F2933] font-bold leading-tight'>
                                Why Contact <span className="text-[#FDB813]">AP POWER</span> ?
                            </h1>
                            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                                Empowering your home and business with sustainable energy solutions tailored to your unique needs.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side : List */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        {points.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex items-center gap-6 py-4 md:py-6 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors px-4 rounded-xl"
                            >
                                {/* Index Number with Animated Underline */}
                                <div className="relative shrink-0">
                                    <span className="text-2xl font-bold text-gray-300 group-hover:text-[#FDB813] transition-colors duration-300">
                                        0{index + 1}
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-[#FDB813] w-0 group-hover:w-full transition-all duration-300"
                                    />
                                </div>

                                {/* Description Text */}
                                <p className="text-[#1F2933] text-lg md:text-xl font-medium leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                    {item.desc}
                                </p>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* contact + map */}
            <div className="max-w-280 mx-auto py-2 md:py-0 flex flex-col md:flex-row px-4 lg:px-6">

                {/* contact */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='w-full md:w-1/2 py-4 md:py-2 px-2 flex flex-col items-center justify-center bg-[#1F2933] rounded-t-lg  md:rounded-l-lg md:rounded-r-none'>

                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-40 md:w-50 object-cover rounded-full "
                    />

                    <div className='flex items-center gap-2 text-[16px] md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <MdEmail className='text-[22px] md:text-[28px]' />
                        <p>appowers39@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-2 text-[16px] md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <FaPhone className='text-[22px] md:text-[28px]' />
                        <p className=''>+91 9479777607</p>
                    </div>

                    <div className='flex items-center gap-2 text-[16px]  md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <FaAddressCard className='text-[22px] md:text-[28px]' />
                        <p>147, Gumasta Nagar Indore (MP)</p>
                    </div>

                </motion.div>

                {/* Map Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='w-full md:w-1/2 h-112.5'>
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6662247812337!2d75.82720897435735!3d22.70346592816303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc9fbd6cef5%3A0x840848853d083e2c!2s147%2C%20Gumasta%20Nagar%20Main%20Rd%2C%20Sector%20A%2C%20Gumasta%20Nagar%2C%20Scheme%2071%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1769762102520!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-lg md:rounded-r-lg md:rounded-l-none"
                    ></iframe>
                </motion.div>
            </div>

            {/* below section - free consultation */}
            <div className="max-w-280 mx-auto flex flex-col px-4 lg:px-6">

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-8 md:pt-15 md:pb-5'>
                    Request a Free Consultation
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='max-w-2xl mx-auto text-[16px] md:text-[18px] text-gray-600 text-center pt-4 md:py-2 '>
                    Fill out the contact form, and one of our representatives will connect with you shortly. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we are committed to helping you transition to clean, efficient, and sustainable solar energy.
                </motion.p>

            </div>
        </section>
    );
}

export default Contact;