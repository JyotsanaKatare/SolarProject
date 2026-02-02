
import React from 'react'
import AboutImg from '../assets/Image/AboutImg.jpg';

function About() {

    return (
        <section className="w-full bg-white px-4 lg:px-6">
            <div className="max-w-280 mx-auto flex justify-between py-10 md:pt-15 md:pb-2">

                <div className='w-full md:w-[60%] md:pr-6'>

                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold pb-5 md:pb-6'>
                        About Us
                    </h1>

                    <p className='text-[18px] md:text-[20px] py-2 tracking-wide'>
                        Welcome to <strong>AP POWER ENERGY SOLUTIONS</strong> — a forward-thinking energy company dedicated to accelerating India's transition to efficient, reliable, and sustainable power. We specialize in end-to-end energy solutions that help businesses, industries, and households harness the power of clean energy while optimizing operational performance and reducing electricity costs.
                    </p>

                    <div className='w-full md:hidden py-2'>
                        <img
                            src={AboutImg}
                            alt=""
                            className='w-full object-cover rounded-3xl'
                        />
                    </div>

                    <p className='text-[18px] md:text-[20px] pt-2 pb-5 md:py-2 tracking-wide'>
                        Founded with a vision to deliver excellence in energy management and renewable technologies,
                        AP POWER ENERGY SOLUTIONS has grown into a trusted partner for solar power system
                        design, supply, installation, commissioning, and long-term project support. Our multidisciplinary
                        team combines deep technical expertise with a commitment to quality, safety, and customer
                        satisfaction.
                    </p>

                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold md:py-6'>
                        What We Do
                    </h1>

                    <ul className='list-disc pl-6'>
                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Customized Solar Power Systems — Rooftop and ground-mounted solar installations tailored to
                            your energy needs.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Project Consultancy & Design — Detailed energy audits, site evaluations, and engineered system designs.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Turnkey Implementation & Installation — From civil works to electrical commissioning, we manage every aspect of your project delivery.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Maintenance & Support — Reliable post-installation servicing and performance monitoring.
                        </li>
                    </ul>

                </div>

                {/* image */}
                <div className='w-[40%] hidden md:flex items-center'>
                    <img
                        src={AboutImg}
                        alt=""
                        className='w-full h-150 object-cover rounded-3xl'
                    />
                </div>
            </div>

            <div className="max-w-280 mx-auto md:pb-15">

                {/* vision */}
                <div>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold md:py-5'>
                        Our Vision
                    </h1>

                    <p className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                        To be a leading provider of innovative energy solutions that power growth, environmental stewardship, and economic value for every stakeholder.
                    </p>
                </div>

                {/* mision */}
                <div>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold pt-5 md:py-5'>
                        Our Mission
                    </h1>

                    <ul className='list-disc pl-6'>
                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            To design and deliver high-performance energy systems with precision and integrity.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            To enable our clients to reduce energy costs and carbon footprint without sacrificing performance.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            To build long-term partnerships anchored in trust, transparency, and technical excellence.
                        </li>
                    </ul>
                </div>

                {/* why choose */}
                <div className='pb-8 md:pb-0'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold pt-5 md:py-5'>
                        Why Choose Us
                    </h1>

                    <ul className='list-disc pl-6'>
                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Client-First Approach — Every solution starts with your goals and operational realities.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Technical Expertise — Our engineers and project leaders bring hands-on industry experience.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Quality Assurance — We adhere to best practices and regulatory standards at every stage.
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-5 md:py-2'>
                            Sustainability Focus — We champion renewable energy adoption that benefits your bottom line and the planet.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About;