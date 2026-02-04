
import React, { useState } from 'react'
import Logo from '../assets/Image/Logo.png'
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';
import axios from 'axios';
import { __formapiurl } from '../../API_URL';

function FreeQuoteForm({ animate, closeModal }) {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [bill, setBill] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async () => {

        const formDetails = {
            name: name,
            phone: phone,
            email: email,
            bill: bill,
            city: city,
        }

        if (!name || !phone || !email || !bill || !city) {
            toast.error("Please fill all fields");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            toast.error("Please enter valid phone number");
            return;
        }

        try {
            console.log(`${__formapiurl}`);
            console.log("try Success");
            console.log("name", name);

            await axios.post(`${__formapiurl}/form/free_quote`, formDetails, {timeout: 60000 // 60 seconds ka wait karein
            });
            console.log(`${__formapiurl}/free_quote`);
            toast.success("Quote request sent successfully");
            setName("");
            setPhone("");
            setEmail("");
            setBill("");
            setCity("");
            closeModal();

        } catch (err) {
            // Backend se jo message humne bheja hai (like "All fields are required") wo dikhane ke liye:
            const errorMsg = err.response?.data?.message || "Something went wrong";
            console.log("AXIOS ERROR:", errorMsg);
            toast.error(errorMsg);
        }
    }

    return (
        <div
            className={`w-full md:w-225 mx-auto flex flex-col md:flex-row shadow-2xl transform transition-all duration-500 ease-out px-4 md:px-6 lg:px-0
                ${animate ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"}`}
        >

            {/* Left Side */}
            <div className='w-full md:w-1/2 px-2 md:px-4 bg-[#1F2933] rounded-t-2xl md:rounded-tr-none md:rounded-tl-2xl md:rounded-bl-2xl'>

                <div className="my-4 md:my-10 px-2 md:px-10 lg:px-7 text-center">

                    <div className='md:hidden flex justify-end text-xl text-white cursor-pointer'>
                        <RxCross2 onClick={closeModal} />
                    </div>

                    <img
                        src={Logo}
                        alt="Solar"
                        className="mx-auto w-24 md:w-auto object-cover rounded-full"
                    />

                    <p className="text-[12px] md:text-[18px] pt-4 text-white tracking-wider md:font-medium">
                        AP POWER ENERGY SOLUTIONS
                    </p>

                </div>
            </div>

            {/* Right Side */}
            <div className='w-full md:w-1/2 px-3 md:px-4 bg-white space-y-2 md:space-y-4 rounded-b-2xl md:rounded-bl-none
                    md:rounded-tr-2xl md:rounded-br-2xl'>

                <div className='hidden md:flex pt-4  justify-end text-xl md:text-2xl cursor-pointer'>
                    <RxCross2 onClick={closeModal} />
                </div>

                <h1 className='text-[18px] pt-2 md:pt-0 md:text-[30px] text-[#1F2933] font-bold text-center md:text-left'>
                    Get A Free Quote
                </h1>

                {/* Inputs */}
                <div className='grid grid-cols-1 gap-2 md:flex md:flex-col md:gap-4 px-4 md:px-0'>
                    <input
                        type="text"
                        value={name}
                        placeholder="Full Name *"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white py-1 px-2 md:p-2 rounded-4xl border-[#1F2933] border outline-none"
                    />

                    <input
                        type="text"
                        value={phone}
                        placeholder="Phone *"
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white py-1 px-2 md:p-2 rounded-4xl border-[#1F2933] border outline-none"
                    />

                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white py-1 px-2 md:p-2 rounded-4xl border-[#1F2933] border outline-none"
                    />

                    <input
                        type="text"
                        value={bill}
                        placeholder="Monthly Electricity Bill *"
                        onChange={(e) => setBill(e.target.value)}
                        className="w-full bg-white py-1 px-2 md:p-2 rounded-4xl border-[#1F2933] border outline-none"
                    />

                    <input
                        type="text"
                        value={city}
                        placeholder="City *"
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full bg-white py-1 px-2 md:p-2 rounded-4xl border-[#1F2933] border outline-none md:col-span-2"
                    />
                </div>

                <div
                    onClick={handleSubmit}
                    className='flex justify-center items-center my-4'>
                    <button className='px-4 py-2 md:px-5 md:py-2 bg-[#1F2933] text-white text-sm md:text-lg rounded-lg hover:bg-[#FDB813] hover:text-[#1F2933] font-semibold transition-all duration-300 cursor-pointer'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FreeQuoteForm;