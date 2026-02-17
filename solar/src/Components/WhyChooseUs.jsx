
import React from 'react'
import AboutImg2 from '../assets/Image/AboutImg2.jpg';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

function WhyChooseUs() {

    const reasonPoints = [
        {
            title: "Client-First Approach",
            desc: "Every solution starts with your goals and operational realities."
        },
        {
            title: "Technical Expertise",
            desc: "Our engineers and project leaders bring hands-on industry experience."
        },
        {
            title: "Quality Assurance",
            desc: "We adhere to best practices and regulatory standards at every stage."
        },
        {
            title: "Sustainability Focus",
            desc: "We champion renewable energy adoption that benefits your bottom line and the planet."
        }
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6">
            <div className="max-w-280 mx-auto overflow-x-hidden">

                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-8 md:pt-15 md:pb-5'>
                    Why Choose Us
                </motion.h1>

                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 pt-5 md:py-8">

                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-1/2"
                    >
                        <img
                            src={AboutImg2}
                            alt="Solar Team"
                            className="rounded-4xl shadow-sm md:shadow-xl w-full md:h-125 object-cover"
                        />
                    </motion.div>

                    {/* Right Side: List */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">

                        <div className="space-y-6 md:space-y-8">
                            {reasonPoints.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 group"
                                >
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-orange-500 group-hover:scale-125 transition-transform" size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1F2933] mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;