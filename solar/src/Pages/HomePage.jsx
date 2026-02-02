
import React, { useEffect, useState } from 'react'
import MiddleSolarVideo from '../Components/MiddleSolarVideo'
import Slider from '../Components/Slider'
import TeamWork from '../Components/TeamWork'
import FreeQuoteForm from '../Components/FreeQuoteForm'
import ProcessTimeline from '../Components/ProcessTimeLine'

function HomePage() {

    const [isOpen, setIsOpen] = useState(false)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setIsOpen(true)
        setTimeout(() => setAnimate(true), 100)
    }, [])

    const closeModal = () => {
        setAnimate(false)
        setTimeout(() => setIsOpen(false), 300)
    }

    return (
        <>
            <MiddleSolarVideo />
            <ProcessTimeline />
            <Slider />
            <TeamWork />

            {/* Quote Popup */}
            {isOpen && (
                <div
                    className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300
          ${animate ? "opacity-100" : "opacity-0"}`}
                >
                    <FreeQuoteForm animate={animate} closeModal={closeModal} />
                </div>
            )}
        </>
    )
}

export default HomePage;