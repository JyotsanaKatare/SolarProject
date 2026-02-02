
import React from 'react'
import HomeVideo from '../assets/Video/HomeVideo.mp4'
import SolarVideo from '../assets/Video/SolarVideo.mp4';

function MiddleSolarVideo() {
    return (
        <section className="w-full bg-[#F9FAFB]">

            {/* 1st video */}
            <div className="relative">
                <video
                    src={HomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-140 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            Empowering the Future
                        </h1>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FDB813] mt-4">
                            Let the Sun Fund Your Electricity Bill!
                        </h2>
                    </div>
                </div>
            </div>

            {/* 2nd video */}
            <div className='my-5 w-full'>
                <video
                    src={SolarVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full "
                >
                </video>
            </div>
        </section>

    )
}

export default MiddleSolarVideo;