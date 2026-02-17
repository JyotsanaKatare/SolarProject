
import React from 'react'
import {motion} from 'framer-motion';

function TermsConditions() {

    const fadeIn = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="w-full bg-white px-4 lg:px-6 py-4 md:py-10">
            <div className="max-w-280 mx-auto mt-5">
                <motion.h1
                    {...fadeIn}
                    className="text-3xl md:text-4xl font-semibold mb-5 md:mb-8 text-[#1F2933]">
                    Terms And Conditions
                </motion.h1>
                <motion.p
                    {...fadeIn}
                    className="mb-4 text-gray-700">
                    Effective Date: February 13, 2026
                </motion.p>

                <div className="mt-6 md:mt-10 space-y-8">
                    <motion.section
                        {...fadeIn}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-[#FDB813] mb-3">
                            1. Information Collection
                        </h2>
                        <p className="leading-relaxed text-gray-700">
                            We may collect three main types of information related to you or your use of our products and services:
                        </p>

                        <ul className='py-2 md:py-4 space-y-2 list-disc pl-6 lg:pl-4 text-gray-700'>
                            <li>Information from or about you</li>
                            <li>Information from or about your Ap powers products</li>
                            <li>Information from or about your Ap powers</li>
                        </ul>

                        <p className="leading-relaxed text-gray-700">
                            Depending on the Tesla products and services you request, own, or use, not all of these types of information may be applicable to you.
                        </p>
                    </motion.section>
                </div>

                <div className="mt-6 md:mt-10 space-y-8">
                    <motion.section
                        {...fadeIn}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-[#FDB813] mb-3">
                            2. How We May Use Your Information
                        </h2>
                        <p className="leading-relaxed text-gray-700">
                            We may use the information we collect to:
                        </p>

                        <ul className='py-2 md:py-4 space-y-2 list-disc pl-6 lg:pl-4 text-gray-700'>
                            <li>Communicate with you</li>
                            <li>Fulfill our products and services</li>
                            <li>Improve and enhance development of our products and services</li>
                        </ul>

                        <p className="leading-relaxed text-gray-700">
                            This includes contacting you to advise you of important safety-related information, to notify first responders in the event of an accident involving your vehicle, present products and offers tailored to you, or to respond to your inquiries and fulfill your requests for product information, Tesla Updates, and other events.
                        </p>
                    </motion.section>
                </div>
            </div>
        </section>
    )
}

export default TermsConditions;