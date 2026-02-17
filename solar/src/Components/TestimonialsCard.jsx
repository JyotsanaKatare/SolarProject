
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TempVideo1 from '../assets/Video/TempVideo1.mp4';
import TempVideo2 from '../assets/Video/TempVideo2.mp4';
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { IoVolumeMedium } from "react-icons/io5";
import { LuMaximize } from "react-icons/lu";
import { motion } from 'framer-motion';

//child function
const SingleVideoCard = ({ videoSrc, isPlaying, onPlayToggle }) => {

    const videoRef = useRef(null);
    const containerRef = useRef(null); //for fullscreen
    const [volume, setVolume] = useState(1);
    const [prevVolume, setPrevVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    //handle video
    useEffect(() => {
        if (!isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    }, [isPlaying]);

    //handle play or pause
    const handlePlayPause = (e) => {

        e.stopPropagation();

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };

    //handle volume slider
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
            setPrevVolume(newVolume);
        }
    };

    //toggle - mute or unmute
    const toggleMute = () => {
        if (isMuted) {
            videoRef.current.volume = prevVolume;
            setVolume(prevVolume);
            setIsMuted(false);
        } else {
            setPrevVolume(volume);
            videoRef.current.volume = 0;
            setVolume(0);
            setIsMuted(true);
        }
    };

    //handle screen
    const handleFullScreen = (e) => {
        e.stopPropagation();
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
            videoRef.current.msRequestFullscreen();
        }
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-full overflow-hidden rounded-xl shadow-[0_0_0_rgba(0,0,0,0.25)]">
            <video
                ref={videoRef}
                src={videoSrc}
                loop
                muted={isMuted}
                onPlay={() => onPlayToggle(true)}
                onPause={() => onPlayToggle(false)}
                className="w-full h-full object-cover cursor-pointer"
            />

            {/* Play/Pause Icon */}
            <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={(e) => handlePlayPause(e)}
            >
                {!isPlaying ? (
                    <FaRegCirclePlay className="text-white text-5xl opacity-90 transition-transform group-hover:scale-110" />
                ) : (
                    <FaRegCirclePause className="text-white text-5xl opacity-0 group-hover:opacity-90 transition-opacity" />
                )}
            </div>

            {/* volume control */}
            <div className={`absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 
                            ${isPlaying ? "opacity-100" : ""} transition-opacity`}>
                <button
                    onClick={toggleMute}
                    className="text-white text-xl hover:text-[#FDB813] transition-colors cursor-pointer">

                    {isMuted || volume === 0 ? (
                        <IoVolumeMute />
                    ) : volume < 0.5 ? (
                        <IoVolumeMedium />
                    ) : (
                        <IoVolumeHigh />
                    )}
                </button>

                {/* Horizontal Volume Slider */}
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1 bg-white rounded-lg appearance-none cursor-pointer accent-[#FDB813]"
                />
            </div>

            {/* full screen icon */}
            <div className={`absolute bottom-4 right-4 flex items-center bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 
                            ${isPlaying ? "opacity-100" : ""} transition-opacity`}>
                <button
                    onClick={handleFullScreen}
                    className="text-white text-xl hover:text-[#FDB813] transition-colors cursor-pointer"
                >
                    <LuMaximize />
                </button>
            </div>
        </motion.div>
    )
};

//parent function
function TestimonialsCard() {

    const navigate = useNavigate();
    const [isPlayingId, setIsPlayingId] = useState(null);

    const testimonialsFeedback = [
        {
            id: 1,
            video: TempVideo1,
            customerName: "Mr. Sam",
            para: "“Solar energy has completely transformed our lives.”"
        },

        {
            id: 2,
            video: TempVideo2,
            customerName: "Mr. Denny",
            para: "“Electricity usage was a concern for us, but after installing solar, our bill is almost zero.”"
        },

        {
            id: 3,
            video: TempVideo2,
            customerName: "Miss. Merry",
            para: "“Customer Radiates Happiness over Savings and Speedy Support.”"
        },

        {
            id: 4,
            video: TempVideo1,
            customerName: "Mr. Vicky",
            para: "“A step towards greener future and Savings.”"
        },
    ];

    // video's id handler
    const handleToggle = (id, shouldPlay) => {
        if (shouldPlay) {
            setIsPlayingId(id);
        } else
            if (isPlayingId === id) {
                setIsPlayingId(null);
            }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full bg-white px-4 lg:px-6 md:my-8 lg:mt-10">

            <div className="max-w-280 mx-auto">

                <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#1F2933] text-center font-semibold pt-6 md:pt-5 md:pb-4'>
                    Our Success Stories
                </h1>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid md:grid-cols-2 gap-5 md:pt-5'>

                    {testimonialsFeedback.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='flex flex-col pt-6 md:pt-1'>
                            <SingleVideoCard
                                videoSrc={item.video}
                                isPlaying={isPlayingId === item.id}
                                onPlayToggle={(shouldPlay) => handleToggle(item.id, shouldPlay)}
                            />
                            <div className=''>
                                <p className="text-black text-lg md:text-xl font-semibold pt-2">{item.customerName}</p>
                                <p className="text-gray-600">{item.para}</p>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>

            {/* below section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-10 mb-10 lg:my-15">
                <div className="max-w-280 mx-auto bg-[#1F2933] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden group">

                    <div className="text-center md:text-left z-10">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                            Ready to Bring Your <span className="text-[#FDB813]">Electricity Bill to Zero?</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Join 1,000+ happy families and start your solar journey today.
                        </p>
                    </div>

                    <motion.div
                        variants={itemVariants}
                        className='flex justify-start my-8'>
                        <motion.button
                            onClick={() => navigate('/')}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "white",
                                color: "#1F2933"
                            }}
                            whileTap={{ scale: 0.95 }}
                            // Pulse effect
                            animate={{
                                boxShadow: ["0px 0px 0px rgba(253, 184, 19, 0)", "0px 0px 20px rgba(253, 184, 19, 0.5)", "0px 0px 0px rgba(253, 184, 19, 0)"]
                            }}
                            transition={{
                                boxShadow: { duration: 2, repeat: Infinity }
                            }}
                            className='px-4 py-2 md:px-6 md:py-4 bg-[#FDB813] text-[#1F2933] rounded-full text-sm lg:text-lg font-bold transition-colors cursor-pointer shadow-2xl overflow-hidden relative'
                        >
                            Get a Free Quote
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default TestimonialsCard;