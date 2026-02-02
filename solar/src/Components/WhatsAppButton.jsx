
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

function WhatsAppButton() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 700); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href="https://wa.me/918770783262"
            target="_blank"
            className={`group fixed bottom-6 right-6 z-10 transition-all duration-700 ease-out
            ${show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-0 translate-y-10"}`}
        >

            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#FDB813] rounded-full
                flex items-center justify-center shadow-xl animate-pulse">
                <FaWhatsapp className="text-[#1F2933] text-3xl md:text-4xl" />
            </div>

            {/* Tooltip */}
            <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#1F2933]
                text-[13px] px-5 py-2 rounded-full
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                opacity-0 translate-x-2
                group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-300 ease-out
                whitespace-nowrap text-[#FDB813]">
                Chat with us
            </span>

        </a>
    );
}

export default WhatsAppButton;