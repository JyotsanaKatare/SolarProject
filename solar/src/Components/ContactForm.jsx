
import axios from 'axios';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { __formapiurl } from '../../API_URL';
import toast from 'react-hot-toast';

function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    <div className='text-gray-700/80'>
      Select Subject
    </div>
  );

  const subjectOptions = ["Customer Service", "Job Enquiry", "Feedback", "Other"];

  const handleSubmit = async () => {

    const formDetails = {
      name: name,
      email: email,
      phone: phone,
      city: city,
      message: message,
      subject: selected
    }

    if (!name || !email || !phone || !city || !message || selected === "Select Subject") {
      toast.error("Please fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      toast.error("Please enter valid phone number");
      return;
    }

    try {
      await axios.post(`${__formapiurl}/contact_us`, formDetails)
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setMessage("");
      setSelected("Select Subject");

    } catch (err) {
      console.log("AXIOS ERROR:", err.response || err.message);
      toast.error('Something went wrong');
    }
  }

  return (
    <section className="w-full bg-white px-4 lg:px-6">

      {/* heading */}
      <div className='max-w-280 mx-auto flex flex-col items-center py-2 md:py-6'>
        <h1 className='text-[#FDB813] text-[30px] md:text-[40px] font-semibold py-4'>
          Contact Us
        </h1>
        <p className='text-[#1F2933]/70 text-[14px] md:text-[20px] px-10 text-center  md:px-0 pb-5'>
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="max-w-280 mx-auto ">

        {/* contact section */}
        <div className='w-full md:w-[80%] mx-auto shadow-[0_0_8px_rgba(0,0,0,0.15)] px-10 py-3 md:py-5'>
          <div className="mt-4 w-full flex flex-col md:flex md:gap-6">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 py-3 outline-none" />

            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 py-3 outline-none" />
          </div>

          <div className="mt-4 w-full flex">
            <input
              type="text"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 py-3 outline-none" />
          </div>

          <div className="mt-4 w-full flex">
            <input
              type="text"
              value={city}
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 py-3 outline-none" />
          </div>

          <div className="mt-4 w-full flex">
            <textarea
              type="text"
              value={message}
              id="description"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border-b border-gray-400 px-2 py-3 h-32.5 outline-none resize-none">
            </textarea>
          </div>

          <div className='my-5 cursor-pointer flex-1 border-b border-gray-400 px-2 py-3'>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='flex justify-between cursor-pointer '>
              <span>{selected}</span>
              {isOpen ? <IoIosArrowDown className='text-xl text-gray-400' /> : <IoIosArrowUp className='text-xl text-gray-400' />}
            </div>

            {/* Dropdown */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out 
                              ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}>

              <div className='bg-gray-50 rounded-md my-2 '>
                {subjectOptions.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => { setSelected(item), setIsOpen(false) }}
                    className='hover:text-[#FDB813] flex justify-start items-center py-2 px-2 hover:bg-gray-100'>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="my-2 md:my-4 px-3 py-2 md:py-3 text-center md:w-25 bg-[#FDB813] rounded-lg
             active:scale-95 transition-transform duration-150 cursor-pointer
             text-[16px] md:text-[18px] text-[#1F2933]/80 font-semibold"
          >
            Send
          </button>
        </div>

        {/* bottom content */}
        <div className='w-full md:w-[80%] mx-auto bg-[#FDB813] px-2 rounded-bl-lg rounded-br-lg py-3 md:py-5 shadow-[0_12px_12px_rgba(0,0,0,0.15)] '>
          <div className='text-center py-2'>
            <h1 className='text-[16px] md:text-[30px] text-[#1F2933] font-semibold'>Career And
              Customer Service</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;