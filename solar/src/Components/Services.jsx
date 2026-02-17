
import React from 'react'
import ServiceImg1 from '../assets/Image/ServiceImg1.jpg';
import ServiceImg2 from '../assets/Image/ServiceImg2.jpg';
import ServiceImg3 from '../assets/Image/ServiceImg3.jpg';
import ServiceImg4 from '../assets/Image/ServiceImg4.jpg';
import ServiceImg5 from '../assets/Image/ServiceImg5.jpg';
import ServiceImg6 from '../assets/Image/ServiceImg6.jpg';
import { motion } from 'framer-motion';

function Services() {

    const listContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            },
        },
    };

    const listItem = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "right" ? 50 : -50,
        }),
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full bg-white overflow-x-hidden">

            {/*1st section */}
            <div className='bg-blue-100 py-15 px-4 lg:px-6'>
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row gap-5 lg:gap-8 items-center'>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg1}
                                alt='ServiceImg1'
                                className='w-full object-cover rounded-3xl shadow-md'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Residential:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                At <strong>AP POWER ENERGY SOLUTIONS</strong>, we deliver reliable and cost-effective residential solar
                                solutions that help homeowners reduce electricity bills and achieve energy independence. Our
                                systems are carefully designed based on rooftop space, energy requirements, and long-term
                                performance, ensuring safety, durability, and efficiency.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="right">Reduced Electricity Bills</motion.li>
                                <motion.li variants={listItem} custom="right">Increased Property Value</motion.li>
                                <motion.li variants={listItem} custom="right">Low Maintenance Costs</motion.li>
                            </motion.ul>
                        </div>

                        <div className='hidden md:flex  w-1/2'>
                            <img
                                src={ServiceImg1}
                                alt='ServiceImg1'
                                className=' rounded-3xl shadow-md '
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*2nd section */}
            <div className='bg-white py-15 px-4 lg:px-6'>
                <div className='max-w-280 mx-auto '>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-5 lg:gap-8 items-center">

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={ServiceImg2}
                                alt="ServiceImg2"
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg2}
                                alt="ServiceImg2"
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Commercial:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                <strong>AP POWER ENERGY SOLUTIONS</strong> provides scalable and high-efficiency commercial solar
                                solutions that help businesses lower operational costs and improve energy sustainability. We
                                design systems that offer consistent power generation while supporting business growth and
                                environmental responsibility.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="left">Cost Savings</motion.li>
                                <motion.li variants={listItem} custom="left">Tax Incentives and Credits</motion.li>
                                <motion.li variants={listItem} custom="left">Energy Independence</motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*3rd section */}
            <div className='bg-blue-100 py-15 px-4 lg:px-6'>
                <div className="max-w-280 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row gap-5 lg:gap-8 items-center'>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg3}
                                alt='ServiceImg3'
                                className='w-full object-cover rounded-3xl shadow-md'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Industrial:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                At <strong>AP POWER ENERGY SOLUTIONS</strong>,we specialize in large-scale industrial solar power systems
                                engineered to handle high energy demands. Our solutions help factories and industrial units reduce
                                grid dependency, stabilize energy costs, and achieve strong long-term returns on investment.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="right">Reduced Operational Expenses</motion.li>
                                <motion.li variants={listItem} custom="right">Carbon Emission Reduction</motion.li>
                                <motion.li variants={listItem} custom="right">Long-Term Energy Security</motion.li>
                            </motion.ul>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={ServiceImg3}
                                alt='ServiceImg3'
                                className='w-full object-cover rounded-3xl shadow-md'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*4th section */}
            <div className='bg-white py-15 px-4 lg:px-6'>
                <div className='max-w-280 mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-5 lg:gap-8 items-center">

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={ServiceImg4}
                                alt="ServiceImg4"
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg4}
                                alt="ServiceImg4"
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Solar Water Pumps:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                <strong>AP POWER ENERGY SOLUTIONS</strong> offers advanced solar water pumping systems designed for
                                agricultural and remote applications. These eco-friendly solutions operate without grid electricity,
                                providing a dependable water supply for irrigation, livestock, and rural areas.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="left">Applications in Agriculture</motion.li>
                                <motion.li variants={listItem} custom="left">Government Incentives</motion.li>
                                <motion.li variants={listItem} custom="left">Off-Grid Operation</motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*5th section */}
            <div className='bg-blue-100 py-15 px-4 lg:px-6'>
                <div className="max-w-280 mx-auto ">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className='flex flex-col md:flex-row gap-5 lg:gap-8 items-center'>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg5}
                                alt='ServiceImg5'
                                className='w-full object-cover rounded-3xl shadow-md'
                            />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Solar Water heater:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                <strong>AP POWER ENERGY SOLUTIONS</strong>, supplies and installs high-performance solar water heating
                                systems that provide reliable hot water using renewable energy. Our solutions are ideal for
                                residential, commercial, and institutional use, delivering energy savings with minimal maintenance.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="right">Domestic Hot Water</motion.li>
                                <motion.li variants={listItem} custom="right">Storage Tank</motion.li>
                                <motion.li variants={listItem} custom="right">Long Lifespan</motion.li>
                            </motion.ul>
                        </div>

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={ServiceImg5}
                                alt='ServiceImg5'
                                className='w-full object-cover rounded-3xl shadow-md'
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/*6th section */}
            <div className='bg-white pt-15 md:py-15 px-4 lg:px-6'>
                <div className='max-w-280 mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row gap-5 lg:gap-8 items-center">

                        <div className='hidden md:flex w-1/2'>
                            <img
                                src={ServiceImg6}
                                alt="ServiceImg6" 
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='md:hidden w-full'>
                            <img
                                src={ServiceImg6}
                                alt="ServiceImg6"
                                className='w-full object-cover rounded-3xl shadow-md' />
                        </div>

                        <div className='w-full md:w-1/2'>

                            <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                                Operation & Maintenance:
                            </h1>

                            <p className='text-[18px] md:text-[20px] py-2'>
                                At <strong>AP POWER ENERGY SOLUTIONS</strong> our Operation & Maintenance services ensure your solar
                                system performs efficiently throughout its lifecycle. We offer structured maintenance, system
                                monitoring, and timely support to maximize energy output and protect your investment.
                            </p>

                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                                <motion.li variants={listItem} custom="left">Regular Inspections</motion.li>
                                <motion.li variants={listItem} custom="left">Deep Cleaning</motion.li>
                                <motion.li variants={listItem} custom="left">Performance Testing</motion.li>
                            </motion.ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services;