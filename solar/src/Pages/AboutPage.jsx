
import React from 'react'
import About from '../Components/About'
import AboutCard from '../Components/AboutCard'
import AboutBanner from '../Components/AboutBanner'
import WhyChooseUs from '../Components/WhyChooseUs'
import Vision from '../Components/Vision'

function AboutPage() {
    return (
        <>
            <AboutBanner />
            <About />
            <Vision />
            <WhyChooseUs />
            <AboutCard />
        </>
    )
}

export default AboutPage