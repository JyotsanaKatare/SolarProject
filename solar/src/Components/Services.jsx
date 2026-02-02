
import React from 'react'
import ServiceImg1 from '../assets/Image/ServiceImg1.jpg';
import ServiceImg2 from '../assets/Image/ServiceImg2.jpg';
import ServiceImg3 from '../assets/Image/ServiceImg3.jpg';
import ServiceImg4 from '../assets/Image/ServiceImg4.jpg';
import ServiceImg5 from '../assets/Image/ServiceImg5.jpg';
import ServiceImg6 from '../assets/Image/ServiceImg6.jpg';

function Services() {
    return (
        <section className="w-full bg-white ">

            {/*1st section */}
            <div className="bg-blue-100 py-3 md:py-4 px-4 lg:px-6">
                <div className=' max-w-280 mx-auto flex flex-col md:flex-row gap-5 lg:gap-8 items-center my-10'>

                    <div className='md:hidden'>
                        <img
                            src={ServiceImg1}
                            alt='ServiceImg1'
                            className='w-full object-cover rounded-3xl'
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

                        <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                            <li>Reduced Electricity Bills</li>
                            <li>Increased Property Value</li>
                            <li>Low Maintenance Costs</li>
                        </ul>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={ServiceImg1}
                            alt='ServiceImg1'
                            className='w-full object-cover rounded-3xl'
                        />
                    </div>
                </div>
            </div>

            {/*2nd section */}
            <div className="max-w-280 mx-auto py-10 md:py-15 flex flex-col md:flex-row gap-5 lg:gap-8 items-center px-4 lg:px-6">

                <div className='hidden md:flex w-1/2'>
                    <img
                        src={ServiceImg2}
                        alt="ServiceImg2"
                        className='w-full object-cover rounded-3xl' />
                </div>

                <div className='md:hidden'>
                    <img
                        src={ServiceImg2}
                        alt="ServiceImg2"
                        className='w-full object-cover rounded-3xl' />
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

                    <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                        <li>Cost Savings</li>
                        <li>Tax Incentives and Credits</li>
                        <li>Energy Independence</li>
                    </ul>
                </div>
            </div>

            {/*3rd section */}
            <div className="bg-blue-100 py-3 md:py-4 px-4 lg:px-6">
                <div className=' max-w-280 mx-auto flex flex-col md:flex-row gap-5 lg:gap-8 items-center my-10'>

                    <div className='md:hidden'>
                        <img
                            src={ServiceImg3}
                            alt='ServiceImg3'
                            className='w-full object-cover rounded-3xl'
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

                        <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                            <li>Reduced Operational Expenses</li>
                            <li>Carbon Emission Reduction</li>
                            <li>Long-Term Energy Security</li>
                        </ul>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={ServiceImg3}
                            alt='ServiceImg3'
                            className='w-full object-cover rounded-3xl'
                        />
                    </div>
                </div>
            </div>

            {/* 4th section */}
            <div className="max-w-280 mx-auto py-10 md:py-15 flex flex-col md:flex-row gap-5 lg:gap-8 items-center px-4 lg:px-6">

                <div className='hidden md:flex w-1/2'>
                    <img
                        src={ServiceImg4}
                        alt="ServiceImg4"
                        className='w-full object-cover rounded-3xl' />
                </div>

                <div className='md:hidden'>
                    <img
                        src={ServiceImg4}
                        alt="ServiceImg4"
                        className='w-full object-cover rounded-3xl' />
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

                    <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                        <li>Applications in Agriculture</li>
                        <li>Government Incentives</li>
                        <li>Off-Grid Operation</li>
                    </ul>
                </div>

            </div>

            {/*5th section */}
            <div className="bg-blue-100 py-3 md:py-4 px-4 lg:px-6">
                <div className=' max-w-280 mx-auto flex flex-col md:flex-row gap-5 lg:gap-8 items-center my-10'>

                    <div className='md:hidden'>
                        <img
                            src={ServiceImg5}
                            alt='ServiceImg5'
                            className='w-full object-cover rounded-3xl'
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

                        <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                            <li>Domestic Hot Water</li>
                            <li>Storage Tank</li>
                            <li>Long Lifespan</li>
                        </ul>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={ServiceImg5}
                            alt='ServiceImg5'
                            className='w-full object-cover rounded-3xl'
                        />
                    </div>
                </div>
            </div>

            {/* 6th section */}
            <div className="max-w-280 mx-auto py-10 md:py-15 flex flex-col md:flex-row gap-5 lg:gap-8 items-center px-4 lg:px-6">

                <div className='hidden md:flex w-1/2'>
                    <img
                        src={ServiceImg6}
                        alt="ServiceImg6"
                        className='w-full object-cover rounded-3xl' />
                </div>

                <div className='md:hidden'>
                    <img
                        src={ServiceImg6}
                        alt="ServiceImg6"
                        className='w-full object-cover rounded-3xl' />
                </div>

                <div className='w-full md:w-1/2'>

                    <h1 className='text-[#1F2933] text-3xl md:text-4xl lg:text-5xl font-semibold py-2 md:pb-6'>
                        Operation & Maintenance:
                    </h1>

                    <p className='text-[18px] md:text-[20px] py-2'>
                        At <strong>AP POWER ENERGY SOLUTIONS</strong> our Operation & Maintenance services ensure your solar
                        system performs efficiently throughout its lifecycle. We offer structured maintenance, system
                        monitoring, and timely support to maximize energy output and protect your investment
                    </p>

                    <ul className='text-[18px] md:text-[20px] list-disc pl-5 pt-2'>
                        <li>Regular Inspections</li>
                        <li>Deep Cleaning</li>
                        <li>Performance Testing</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;