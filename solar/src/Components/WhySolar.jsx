
import React from 'react'
import SolarMainImg from '../assets/Image/SolarMainImg.jpg';
import SolarImg1 from '../assets/Image/SolarImg1.jpg';
import SolarImg2 from '../assets/Image/SolarImg2.png';
import SolarImg3 from '../assets/Image/SolarImg3.jpg';
import SolarImg4 from '../assets/Image/SolarImg4.png';
import SolarImg5 from '../assets/Image/SolarImg5.jpg';
import SolarImg6 from '../assets/Image/SolarImg6.png';
import SolarImg7 from '../assets/Image/SolarImg7.jpg';

function WhySolar() {
    return (
        <section className="w-full bg-white overflow-x-hidden">

            {/* image */}
            <div className='relative'>
                <img
                    src={SolarMainImg}
                    alt='MainSolarImage'
                    className='w-full h-120'
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>

                <div className='absolute top-20 px-4 md:px-6 flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-4xl font-medium text-[#FDB813] pb-5'>
                        WHY SOLAR?
                    </h1>
                    <p className='w-80 md:w-150 text-white text-md md:text-xl leading-8 md:leading-10'>
                        Solar energy is more than just an alternative power source — it is a smart, long-term investment in
                        sustainability, savings, and energy independence. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we help you unlock the full potential of solar power with reliable and future-ready solutions.
                    </p>
                </div>
            </div>

            {/* 1st section */}
            <div className="max-w-280 mx-auto py-6 md:py-20 px-4 lg:px-6">
                <div className='flex flex-col md:flex-row md:gap-5'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Save On Electricity Bills:
                    </h1>

                    <div className='md:hidden'>
                        <img
                            src={SolarImg1}
                            alt='SolarImg1'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Save On Electricity Bills:
                        </h1>

                        <p className='text-[18px] md:text-[23px] '>
                            By generating your own electricity, solar power significantly reduces your dependence on the grid. With a professionally designed system from <strong>AP POWER ENERGY SOLUTIONS</strong>, you can lower monthly electricity expenses and protect yourself from rising power tariffs.
                        </p>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={SolarImg1}
                            alt='SolarImg1'
                            className='w-full object-cover'
                        />
                    </div>
                </div>
            </div>

            {/* 2nd section */}
            <div className="bg-blue-50 md:py-10 overflow-x-hidden">
                <div className='max-w-280 mx-auto flex flex-col md:flex-row md:gap-5 my-10 px-4 lg:px-6'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Increase property value:
                    </h1>

                    <div className='w-full md:w-1/2 pt-3 md:pt-0'>
                        <img
                            src={SolarImg2}
                            alt='SolarImg2'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Increase property value:
                        </h1>

                        <p className='text-[18px] md:text-[23px]'>
                            Solar-powered homes and commercial properties are more attractive in the real estate market.
                            Installing solar enhances property value by offering long-term energy savings, sustainability
                            benefits, and improved energy efficiency.
                        </p>
                    </div>

                </div>
            </div>

            {/* 3rd section */}
            <div className="max-w-280 mx-auto py-6 md:py-20 px-4 lg:px-6">
                <div className='flex flex-col md:flex-row md:gap-5'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Reduce your carbon footprint:
                    </h1>

                    <div className='md:hidden'>
                        <img
                            src={SolarImg3}
                            alt='SolarImg3'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Reduce your carbon footprint:
                        </h1>

                        <p className='text-[18px] md:text-[23px] '>
                            Solar energy is clean, renewable, and environmentally responsible. By switching to solar, you
                            actively reduce greenhouse gas emissions and help create a cleaner, healthier environment for
                            future generations.
                        </p>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={SolarImg3}
                            alt='SolarImg3'
                            className='w-full object-cover'
                        />
                    </div>
                </div>
            </div>


            {/* 4th section */}
            <div className="bg-blue-50 md:py-10 overflow-x-hidden">
                <div className='max-w-280 mx-auto flex flex-col md:flex-row md:gap-5 my-10 px-4 lg:px-6'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Long life cycle and low maintenance:
                    </h1>

                    <div className='w-full md:w-1/2 pt-3 md:pt-0'>
                        <img
                            src={SolarImg4}
                            alt='SolarImg4'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Long life cycle and low maintenance:
                        </h1>

                        <p className='text-[18px] md:text-[23px]'>
                            Modern solar systems are built to last 25 years or more with minimal maintenance. With no moving
                            parts, solar panels offer reliable performance and durability, making them a low-risk, long-term
                            energy solution.
                        </p>
                    </div>

                </div>
            </div>

            {/* 5th section */}
            <div className="max-w-280 mx-auto py-6 md:py-20 px-4 lg:px-6">
                <div className='flex flex-col md:flex-row md:gap-5'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Financial Benefits:
                    </h1>

                    <div className='md:hidden'>
                        <img
                            src={SolarImg5}
                            alt='SolarImg5'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Financial Benefits:
                        </h1>

                        <p className='text-[18px] md:text-[23px] '>
                            Solar power delivers strong financial returns through reduced electricity bills, government
                            incentives, and long-term savings. AP POWER ENERGY SOLUTIONS helps you maximize return
                            on investment with efficient system design and expert guidance.
                        </p>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={SolarImg5}
                            alt='SolarImg5'
                            className='w-full object-cover'
                        />
                    </div>
                </div>
            </div>

            {/* 6th section */}
            <div className="bg-blue-50 md:py-10 overflow-x-hidden">
                <div className='max-w-280 mx-auto flex flex-col md:flex-row md:gap-5 my-10 px-4 lg:px-6'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium'>
                        Pollution-free environment:
                    </h1>

                    <div className='w-full md:w-1/2 pt-3 md:pt-0'>
                        <img
                            src={SolarImg6}
                            alt='SolarImg6'
                            className='w-full object-cover'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Pollution-free environment:
                        </h1>

                        <p className='text-[18px] md:text-[23px]'>
                            Unlike conventional energy sources, solar power produces no air, noise, or water pollution.
                            Adopting solar contributes to cleaner surroundings and supports a healthier ecosystem.
                        </p>
                    </div>

                </div>
            </div>

            {/* 7th section */}
            <div className="max-w-280 mx-auto py-6 md:py-20 px-4 lg:px-6">
                <div className='flex flex-col md:flex-row md:gap-5'>

                    <h1 className='md:hidden text-[#1F2933] text-2xl font-medium pb-8'>
                        Electric vehicles and solar:
                    </h1>

                    <div className='md:hidden'>
                        <img
                            src={SolarImg7}
                            alt='SolarImg7'
                            className='w-full object-cover rounded-4xl'
                        />
                    </div>

                    <div className='w-full md:w-1/2'>
                        <h1 className='hidden md:flex text-[#1F2933] md:text-4xl font-medium pb-6'>
                            Electric vehicles and solar:
                        </h1>

                        <p className='text-[18px] md:text-[23px] pt-5'>
                            Solar energy and electric vehicles work perfectly together. Charging EVs using solar power reduces operating costs and creates a fully sustainable energy ecosystem for homes and businesses
                        </p>
                    </div>

                    <div className='hidden md:flex w-1/2'>
                        <img
                            src={SolarImg7}
                            alt='SolarImg7'
                            className='w-full object-cover rounded-4xl'
                        />
                    </div>
                </div>
            </div>

        </section >
    )
}

export default WhySolar;