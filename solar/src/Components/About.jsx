
import React from 'react'
import AboutImg from '../assets/Image/AboutImg.jpg';
import { motion } from 'framer-motion';
import { Settings, PencilRuler, Zap, Activity } from 'lucide-react';

function About() {

    const doingPoints = [
        {
            title: "Customized Solar Power Systems",
            desc: "Rooftop and ground-mounted solar installations tailored to your energy needs.",
            icon: <Settings className="text-[#FDB813]" size={32} />
        },
        {
            title: "Project Consultancy & Design",
            desc: "Detailed energy audits, site evaluations, and engineered system designs.",
            icon: <PencilRuler className="text-[#FDB813]" size={32} />
        },
        {
            title: "Turnkey Implementation & Installation",
            desc: "From civil works to electrical commissioning, we manage every aspect of your project delivery.",
            icon: <Zap className="text-[#FDB813]" size={32} />
        },
        {
            title: "Maintenance & Support",
            desc: "Reliable post-installation servicing and performance monitoring.",
            icon: <Activity className="text-[#FDB813]" size={32} />
        }
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6">

            <div className="max-w-280 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:pt-0 md:pb-10">

                <div className='w-full md:w-[60%]'>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-bold pb-2 md:pb-6 leading-tight'>
                        About <span className="text-[#FDB813]">AP Power</span>
                    </motion.h1>

                    <div className="relative">

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className='text-[17px] md:text-[19px] text-gray-700 mb-4 leading-relaxed'>
                            Welcome to <strong className="text-[#1F2933]">AP POWER ENERGY SOLUTIONS</strong>  — a forward-thinking energy company dedicated to accelerating India's transition to efficient, reliable, and sustainable power. We specialize in end-to-end energy solutions that help businesses, industries, and households harness the power of clean energy while optimizing operational performance and reducing electricity costs.
                        </motion.p>

                        {/* Mobile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className='w-full md:hidden mb-4 group'>
                            <div className="overflow-hidden rounded-3xl shadow-md">
                                <img
                                    src={AboutImg}
                                    alt="Solar Energy"
                                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className='text-[17px] md:text-[19px] text-gray-700 mb-6 leading-relaxed'>
                            Founded with a vision to deliver excellence in energy management and renewable technologies, AP POWER ENERGY SOLUTIONS has grown into a trusted partner for solar power system design, supply, installation, commissioning, and long-term project support. Our multidisciplinary team combines deep technical expertise with a commitment to quality, safety, and customer satisfaction.
                        </motion.p>
                    </div>
                </div>

                {/* Desktop Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='w-full md:w-[40%] hidden md:block relative'>
                    <img
                        src={AboutImg}
                        alt="AP Power Professional"
                        className='w-full h-full object-cover rounded-3xl shadow-xl'
                    />
                </motion.div>
            </div>

            {/* What We Do */}
            <div className="max-w-280 mx-auto mt-5 lg:mt-15">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold text-center mb-6 md:mb-12'
                    >
                        What We Do
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {doingPoints.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-[#F5F5F5] p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4 bg-yellow-50 w-16 h-16 flex items-center justify-center rounded-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1F2933] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
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

export default About;