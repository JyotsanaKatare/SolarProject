
import { MdConnectWithoutContact } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { MdVerifiedUser } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { MdElectricMeter } from "react-icons/md";
import { FaWrench } from "react-icons/fa";
import { motion } from "framer-motion";

const ProcessTimeline = () => {

    return (
        <div className="my-5 md:my-8 lg:my-10">
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] font-semibold text-center pt-4'>
                Our Process
            </h1>

            <div className="w-full flex justify-center py-2 md:py-5 overflow-visible">

                <svg
                    viewBox="-16 0 360 500"
                    className=" 
                    w-full
                    max-w-65
                    sm:max-w-[320px]
                    md:max-w-105
                    lg:max-w-130
                    xl:max-w-155
                    h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    {/* steps */}
                    {[
                        { y: 60, x: 180, side: "right", icon: <MdConnectWithoutContact />, title: "CONNECT WITH OUR TEAM", num: "1" },
                        { y: 115, x: 140, side: "left", icon: <MdFactCheck />, title: "SITE INSPECTION AND FEASIBILITY", num: "2" },
                        { y: 170, x: 180, side: "right", icon: <FaFileAlt />, title: "DOCUMENTATION AND PAPERWORK", num: "3" },
                        { y: 225, x: 140, side: "left", icon: <MdEngineering />, title: "DETAILED ENGINEERING VISIT", num: "4" },
                        { y: 280, x: 180, side: "right", icon: <MdVerifiedUser />, title: "APPROVAL FROM YOUR END", num: "5" },
                        { y: 335, x: 140, side: "left", icon: <FaTools />, title: "INSTALLATION", num: "6" },
                        { y: 390, x: 180, side: "right", icon: <MdElectricMeter />, title: "NET METERING", num: "7" },
                        { y: 445, x: 140, side: "left", icon: <FaWrench />, title: "CLEANING AND MAINTENANCE", num: "8" },
                    ].map((step, i) => (

                        <motion.g
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            transform={`translate(${step.x} ${step.y})`}
                            transformTemplate={(_, generated) =>
                                `translate(${step.x}px, ${step.y}px) ${generated}`}>

                            {/* Diamond */}
                            <g transform="rotate(45)">
                                <rect x="-30" y="-30" width="60" height="60" fill="#1F2933" />
                            </g>

                            {/* Icon */}
                            <foreignObject x="-22" y="-22" width="44" height="44">
                                <div className="w-full h-full flex items-center justify-center">
                                    {step.icon && (
                                        <step.icon.type size={26} color="#FDB813" />
                                    )}
                                </div>
                            </foreignObject>

                            {/* Text */}
                            {step.side === "right" ? (
                                <>
                                    <text x="45" y="10" fontSize="30" fontWeight="700" fill="#1F2933">{step.num}</text>
                                    <text x="40" y="25" fontSize="10" fontWeight="600" fill="#1F2933" xmlSpace="preserve" dominantBaseline="middle">
                                        <tspan x="45" dy="0">
                                            {step.title.split(" ").slice(0, Math.ceil(step.title.split(" ").length / 2)).join(" ")}
                                        </tspan>
                                        <tspan x="45" dy="12">
                                            {step.title.split(" ").slice(Math.ceil(step.title.split(" ").length / 2)).join(" ")}
                                        </tspan>
                                    </text>
                                </>
                            ) : (
                                <>
                                    <text x="-45" y="10" textAnchor="end" fontSize="30" fontWeight="700" fill="#1F2933">{step.num}</text>
                                    <text x="-40" y="25" textAnchor="end" fontSize="10" fontWeight="600" fill="#1F2933">
                                        <tspan x="-45" dy="0">
                                            {step.title.split(" ").slice(0, Math.ceil(step.title.split(" ").length / 2)).join(" ")}
                                        </tspan>
                                        <tspan x="-45" dy="12">
                                            {step.title.split(" ").slice(Math.ceil(step.title.split(" ").length / 2)).join(" ")}
                                        </tspan>
                                    </text>
                                </>
                            )}

                        </motion.g>
                    ))}

                </svg>
            </div>
        </div>
    );
};

export default ProcessTimeline;