import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Process from '../components/Process/Process'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <About/>
        <Services/>
        <WhyUs/>
        <Process/>
        <FAQ/>
        <CTA/>
        <Footer />
    </div>
  )
}

export default Home