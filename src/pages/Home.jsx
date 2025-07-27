import React from 'react'
import LandingHero from '../components/LandingHero'
import CompanyIntro from '../components/CompanyIntro'
import OurServices from '../components/OurServices';
import TrustedBy from '../components/TrustedBy';
import ProjectHighlights from '../components/ProjectHighlights';
import WhyChooseUs from '../components/WhyChooseUs';


const Home = () => {

  return (
    <div className='pt-16'>
      
      <LandingHero />
      <CompanyIntro />
      <OurServices />
      <TrustedBy />
      <ProjectHighlights />
      <WhyChooseUs />
      
    </div>
  )
}

export default Home
