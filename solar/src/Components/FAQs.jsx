
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function FAQs() {

    const [openIndex, setOpenIndex] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);

    const costFaqs = [
        {
            question: "How much can a housing society save annually with a solar rooftop?",
            answer: (
                <div>
                    <p>A 50 kW system can save a society as high as ₹5,00,000 annually, depending on local electricity rates. Savings depend upon the amount a society spends in powering the common areas and lifts.</p>
                </div>
            )
        },

        {
            question: "What is the expected return on investment (ROI) for a solar rooftop?",
            answer: (
                <div>
                    <p>With a payback period of almost 5 years and an average life of about 25 years, a solar rooftop in housing society will reduce the monthly electricity bill essentially to zero for the remaining 20 years. That translates to above 300% ROI over 25 years at least.</p>
                </div>
            )
        },

        {
            question: "How do solar savings impact the society's budget over time?",
            answer: (
                <div>
                    <p>The savings can significantly reduce maintenance fees or increase the society's reserve funds, benefiting all residents.</p>
                </div>
            )
        },

        {
            question: "Is it worth investing in a solar rooftop given current electricity prices?",
            answer: (
                <div>
                    <p>Yes, with electricity rates rising and solar panel costs decreasing, investing in solar provides long-term financial benefits.</p>
                </div>
            )
        },
    ];

    const maintainanceFaqs = [
        {
            question: "How often do solar panels need maintenance?",
            answer: (
                <div>
                    <p>Solar panels generally require minimal maintenance. Solar panels are built to last up to 25 years and the efficiency remains constant throughout this period. Cleaning is recommended every ten days.</p>
                </div>
            )
        },

        {
            question: "What is the lifespan of a solar rooftop system?",
            answer: (
                <div>
                    <p>A well-maintained solar system can last 25-30 years, with most panels guaranteed to sustain at least 80% efficiency over 25 years.</p>
                </div>
            )
        },

        {
            question: "Are solar rooftops weather-resistant?",
            answer: (
                <div>
                    <p>Yes, Ap power's (previously Ap powers) installations are designed to withstand extreme weather conditions, including high speed winds, heavy rains, and intense heat.</p>
                </div>
            )
        },

        {
            question: "What happens if a panel or component fails?",
            answer: (
                <div>
                    <p>Ap powers (previously Ap powers) offers comprehensive warranties and maintenance service, ensuring that any failed components are promptly repaired or replaced.</p>
                </div>
            )
        },
    ];

    const installationFaqs = [
        {
            question: "How long does it take to complete a solar installation for a housing society?",
            answer: (
                <div>
                    <p>Third party delays can sometimes stretch the process but with Ap powers (previously Ap powers) you do not need to worry as we monitor the installation process each step of the way ensuring timely and hassle free solar rooftop installation in your housing society.</p>
                </div>
            )
        },

        {
            question: "What are the steps involved in the installation process?",
            answer: (
                <div>
                    <p>The process includes site assessment, design approval, procurement of materials, installation, and final testing.</p>
                </div>
            )
        },

        {
            question: "Does the installation disrupt daily activities in the society?",
            answer: (
                <div>
                    <p>We plan the installation to minimise disruption, working in phases and coordinating with society management.</p>
                </div>
            )
        },

        {
            question: "Can installation be done during the monsoon season?",
            answer: (
                <div>
                    <p>Yes, but certain weather conditions may cause minor delays. zunsolar (previously zunroof) schedules work to avoid major disruptions.</p>
                </div>
            )
        },

    ];

    const getCurrentFaqs = () => {
        if (activeIndex === 0) return costFaqs;
        if (activeIndex === 1) return maintainanceFaqs;
        if (activeIndex === 2) return installationFaqs;
    };

    const allFAQs = getCurrentFaqs();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="w-full bg-white px-4 lg:px-6">
            <div className="max-w-280 mx-auto mt-5 md:mt-8">

                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='text-3xl md:text-4xl text-[#1F2933] font-semibold text-center mb-6 md:mb-12'>
                    Frequently Asked Questions
                </motion.h1 >

                {/* Tabs Container - Mobile Friendly (Scrollable) */}
                <div className='flex overflow-x-auto no-scrollbar md:justify-center gap-4 mb-6 md:mb-10 py-3'>
                    {[
                        "Cost Vs Savings",
                        "Maintenance and Longevity",
                        "Installation Time"
                    ].map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setactiveIndex(index);
                                setOpenIndex(null);
                            }}
                            className={`px-4 py-3 md:px-8 md:py-4 whitespace-nowrap font-bold transition-all duration-300 rounded-full cursor-pointer text-sm md:text-base
                                       ${activeIndex === index
                                    ? "bg-[#1F2933] text-[#FDB813] scale-105 border-b border-[#FDB813]"
                                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
                        >
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0 bg-[#1F2933] rounded-full -z-10 border-b-4 border-[#FDB813]"
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>

                {/* FAQs */}
                <motion.div
                    key={activeIndex} // Key badalne se Framer Motion ko pata chalta hai ki naya content aaya hai
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className='md:my-8 md:space-y-4'>
                    {allFAQs.map((item, index) => (
                        <div key={index} className="border-b border-[#DFE0E1]">

                            {/* Questions Container */}
                            <div
                                onClick={() => toggleFAQ(index)}
                                className={`flex justify-between items-center px-3 md:px-5 py-4 md:py-6 cursor-pointer transition-all duration-300 group
                                            ${openIndex === index ? "bg-[#1F2933]/5" : "hover:bg-gray-50"}`}
                            >
                                <h1 className={`text-[16px] md:text-[19px] font-semibold transition-colors duration-300
                                            ${openIndex === index ? "text-[#FDB813]" : "text-[#1F2933]"}`}>
                                    {item.question}
                                </h1>

                                {/* Icon with Rotation Animation */}
                                <div className={`transform transition-transform duration-300 
                                                ${openIndex === index ? "rotate-180" : "rotate-0"}`}>

                                    {openIndex === index ? (
                                        <FaMinus className="text-lg text-[#FDB813]" />
                                    ) : (
                                        <FaPlus className="text-lg text-gray-400 group-hover:text-[#1F2933]" />
                                    )}
                                </div>
                            </div>

                            {/* Answer */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className='relative'
                                    >
                                        <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-[#FDB813] to-transparent " />
                                        <div className="text-[#555] text-[15px] md:text-[17px] px-6 py-5 bg-[#FAFAFA] leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default FAQs;