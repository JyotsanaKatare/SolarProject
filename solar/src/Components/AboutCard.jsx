
import React from 'react'

function AboutCard() {

    const cardSection = [
        {
            heading: "Climate Crisis",
            para: (
                <div>
                    The climate crisis is one of the most critical challenges facing the world today. Rising energy
                    demand and dependence on fossil fuels continue to impact our environment and future
                    generations. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we are committed to supporting the global
                    transition toward clean, renewable energy. By making solar power accessible, reliable, and
                    cost-effective, we help businesses and communities reduce their carbon footprint while contributing
                    to a cleaner, more sustainable planet.
                </div>
            )
        },
        {
            heading: "Our Mission",
            para: (
                <div>
                    Our mission is to deliver high-quality, efficient, and future-ready energy solutions that create real
                    value for our clients. From system design and engineering to installation and long-term support, we
                    ensure every project is executed with precision and transparency. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we work closely with our clients at every stage to maximize performance, return on
                    investment, and long-term energy reliability.
                </div>
            )
        },
        {
            heading: "Our Core Values",
            para: (
                <div>
                    Sustainability, integrity, and technical excellence are at the heart of everything we do. We believe
                    responsible energy solutions must balance innovation, environmental care, and client trust. Our
                    decisions are guided by a commitment to quality, safety, and long-term impact — helping build a
                    more resilient and sustainable future for businesses, communities, and the planet.
                </div>
            )
        }
    ];

    return (
        <section className="w-full bg-white px-4 lg:px-6">

            <div className="max-w-280 mx-auto flex flex-col md:flex-row gap-7 md:py-10">

                {cardSection.map((item, index) => (
                    <div
                        key={index}
                        className="w-full md:w-1/3 p-8 bg-[#1F2933]/80 rounded-[50px] shadow-[0_0_12px_rgba(0,0,0,0.15)] shadow-neutral-500 hover:scale-102 transition-all duration-300">

                        <h1 className='text-white text-3xl lg:text-4xl font-medium pb-6 lg:pb-10 leading-10'>
                            {item.heading}
                        </h1>

                        <div className='text-white text-lg md:text-xl'>
                            {item.para}
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default AboutCard;