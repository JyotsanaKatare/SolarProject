
import React from 'react';
import Logo from '../assets/Image/Logo.png';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

function Contact() {
    return (

        <section className="w-full bg-white px-4 lg:px-6">

            <div className="max-w-280 mx-auto pt-10 md:pt-15 flex flex-col">
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold pb-5 md:pb-6'>
                    Contact Us
                </h1>

                <p className='text-[18px] md:text-[20px] py-2'>
                    Get in touch with <strong>AP POWER ENERGY SOLUTIONS</strong> to discuss your solar energy needs. Whether
                    you are planning a residential installation, a commercial project, or an industrial solar solution, our
                    team is ready to assist you with expert guidance and reliable support.
                </p>

                <p className='text-[18px] md:text-[20px] py-2'>
                    We believe in clear communication, quick response times, and transparent consultation — from the
                    first enquiry to project completion and beyond.
                </p>

                <div>
                    <h1 className='text-2xl md:text-3xl text-[#1F2933] font-semibold pt-2 md:py-3'>
                        Get in Touch
                    </h1>
                    <p className='text-[18px] md:text-[20px] py-3 md:py-2'>
                        Have questions about solar systems, pricing, installation, or maintenance? Our experienced team is
                        here to help you make informed decisions and find the right energy solution for your requirements.
                    </p>
                </div>

                <div>
                    <h1 className='text-2xl md:text-3xl text-[#1F2933] font-semibold pt-2 md:py-3'>
                        Why Contact AP POWER ENERGY SOLUTIONS ?
                    </h1>

                    <ul className='list-disc pl-6 py-2'>
                        <li className='text-[18px] md:text-[20px] pt-3 md:py-2'>
                            Professional solar consultation
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-3 md:py-2'>
                            Customized energy solutions
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-3 md:py-2'>
                            Transparent pricing and guidance
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-3 md:py-2'>
                            Experienced technical team
                        </li>

                        <li className='text-[18px] md:text-[20px] pt-3 md:py-2'>
                            Reliable after-sales support
                        </li>
                    </ul>
                </div>
            </div>

            {/* contact + map */}
            <div className="max-w-280 mx-auto py-10 md:py- flex flex-col md:flex-row">

                {/* contact */}
                <div className='w-full md:w-1/2 py-4 md:py-2 px-2 flex flex-col items-center justify-center bg-[#1F2933] rounded-t-lg  md:rounded-l-lg md:rounded-r-none'>
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-40 md:w-50 object-cover rounded-full "
                    />

                    <div className='flex items-center gap-2 text-[18px] md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <MdEmail className='text-[25px] md:text-[28px]' />
                        <p>appowers39@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-2 text-[18px] md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <FaPhone className='text-[25px] md:text-[28px]' />
                        <p className=''>+91 9479777607</p>
                    </div>

                    <div className='flex items-center gap-2 text-[18px]  md:text-[20px] lg:text-[25px] text-white py-2 md:pt-4 font-semibold'>
                        <FaAddressCard className='text-[25px] md:text-[28px]' />
                        <p>147, Gumasta Nagar Indore (MP)</p>
                    </div>

                </div>

                {/* Map Side */}
                <div className='w-full md:w-1/2 h-112.5'>
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6662247812337!2d75.82720897435735!3d22.70346592816303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc9fbd6cef5%3A0x840848853d083e2c!2s147%2C%20Gumasta%20Nagar%20Main%20Rd%2C%20Sector%20A%2C%20Gumasta%20Nagar%2C%20Scheme%2071%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1769762102520!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-lg md:rounded-r-lg md:rounded-l-none"
                    ></iframe>
                </div>

            </div>

            {/* below section */}
            <div className="max-w-280 mx-auto flex flex-col ">
                <h1 className='text-2xl md:text-3xl text-[#1F2933] font-semibold pt-2 md:py-3'>
                    Request a Free Consultation
                </h1>
                <p className='text-[18px] md:text-[20px] py-3 md:py-2'>
                    Fill out the contact form, and one of our representatives will connect with you shortly. At <strong>AP POWER ENERGY SOLUTIONS</strong>, we are committed to helping you transition to clean, efficient, and
                    sustainable solar energy
                </p>
            </div>
        </section>
    );
}

export default Contact;