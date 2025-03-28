import React from 'react'


import Team from '../components/OurTeam'
import Services from '../components/Services'
import AboutUs from '../components/About'
import FAQSection from '../components/Faq'

const page = () => {
  return (
    <div className='space-y-8 py-12'>
        <AboutUs />
        <Team />
        <FAQSection />

    
    </div>
  )
}

export default page