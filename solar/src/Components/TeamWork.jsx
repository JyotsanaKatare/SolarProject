
import React from 'react'
import TeamImg1 from '../assets/Image/TeamImg1.jpg';
import TeamImg2 from '../assets/Image/TeamImg2.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

function TeamWork() {

    const team = [
        {
            img: TeamImg1,
            para1: (<div>
                At <strong>AP POWER ENERGY SOLUTIONS</strong>, our strength lies in our people. We are a dedicated team of
                engineers, technicians, project managers, and energy experts who work together with a shared
                commitment to quality, safety, and innovation. Every project we undertake is powered by
                collaboration, technical expertise, and attention to detail.
            </div>),

            para2: (<div>
                From initial site assessment to final commissioning and long-term support, our team works closely
                with clients to deliver reliable and efficient solar energy solutions. We believe strong teamwork
                ensures better planning, smoother execution, and long-lasting results.
            </div>),
        },

        {
            img: TeamImg2,
            heading: "Our Team Culture",
            para1: (<div>
                The success of <strong>AP POWER ENERGY SOLUTIONS</strong> is driven by a skilled and passionate team
                focused on delivering excellence in every project. Our professionals bring hands-on experience,
                industry knowledge, and a problem-solving mindset to every installation, ensuring dependable
                performance and customer satisfaction.
            </div>),

            para2: (<div>
                By fostering teamwork, continuous learning, and clear communication, we ensure that every solar
                solution is executed efficiently, safely, and on time. Our collaborative approach allows us to build
                long-term relationships with our clients and contribute meaningfully to a sustainable energy future.
            </div>)
        },
    ];

    return (
        <section className="w-full md:my-8 lg:my-15 px-4 lg:px-6">
            <h1 className='text-3xl md:text-5xl text-[#1F2933] font-semibold text-center pb-5 md:pb-10 lg:pb-15'>
                Team Work
            </h1>

            <Swiper
                className=''
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 4000 }}
                loop={true}
                navigation
                spaceBetween={30}>

                {team.map((item, index) => (
                    <SwiperSlide
                        key={index}>
                        <div className="max-w-280 mx-auto rounded-xl flex justify-between bg-blue-50">

                            {/* left side */}
                            <div className='w-full lg:w-1/2 lg:p-4'>
                                <img
                                    src={item.img}
                                    alt="TeamImage"
                                    className='w-full rounded-xl border-gray-300 border shadow-lg'
                                />
                            </div>

                            {/* right side */}
                            <div className='hidden lg:flex flex-col w-full lg:w-1/2 p-4 rounded-xl'>
                                <h1 className='text-2xl py-2 font-medium'>
                                    {item.heading}
                                </h1>

                                <div className='lg:text-[18px] leading-7'>
                                    {item.para1}
                                </div>

                                <div className='lg:text-[18px] leading-7 pt-2'>
                                    {item.para2}
                                </div>
                            </div>

                        </div>
                        <div className='lg:hidden w-full lg:w-1/2 py-4 text-center rounded-xl'>
                            <div className='text-[15px] md:text-[22px] md:leading-8'>
                                {item.para1}
                            </div>
                            
                            <div className='text-[15px] md:text-[22px] md:leading-8 pt-3'>
                                {item.para2}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default TeamWork;