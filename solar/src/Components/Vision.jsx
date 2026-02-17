
import React from 'react'
import { motion } from 'framer-motion';
import { Target, Leaf, Handshake } from 'lucide-react';

function Vision() {

    const missionPoints = [
        {
            desc: "To design and deliver high-performance energy systems with precision and integrity.",
            icon: <Target size={30} />,
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600"
        },
        {
            desc: "To enable our clients to reduce energy costs and carbon footprint without sacrificing performance.",
            icon: <Leaf size={30} />,
            bgColor: "bg-green-100",
            iconColor: "text-green-600"
        },
        {
            desc: "To build long-term partnerships anchored in trust, transparency, and technical excellence.",
            icon: <Handshake size={30} />,
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600"
        }
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6">

            <div className="max-w-280 mx-auto">

                {/* vision */}
                <div className=''>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-8 md:mt-10 lg:mt-15 md:mb-5'>
                        Our Vision
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='max-w-2xl mx-auto text-[16px] md:text-[18px] text-gray-600 text-center pt-4 md:py-2 '>
                        To be a leading provider of innovative energy solutions that power growth, environmental stewardship, and economic value for every stakeholder.
                    </motion.p>
                </div>

                {/* mision */}
                <div className="">

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-8 md:pt-10 lg:pt-15 md:mb-5'>
                        Our Mision
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 md:py-4">
                        {missionPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                viewport={{ once: true }}
                                className="bg-[#F5F5F5] p-8 rounded-3xl border-b-4 border-[#FDB813] shadow-xl hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon Container */}
                                <div className={`w-14 h-14 ${item.bgColor} ${item.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                                    {item.icon}
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision