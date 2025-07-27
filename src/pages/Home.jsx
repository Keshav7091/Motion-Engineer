import React from 'react'
import SectionWrapper from "../components/SectionWrapper";
import LandingHero from '../components/LandingHero'
import CompanyIntro from '../components/CompanyIntro'
import OurServices from '../components/OurServices';
import TrustedBy from '../components/TrustedBy';
import ProjectHighlights from '../components/ProjectHighlights';
import WhyChooseUs from '../components/WhyChooseUs';


const Home = () => {

  return (
    <div className='pt-16'>
      <SectionWrapper index={-1}>
        <LandingHero />
      </SectionWrapper>
      

      <SectionWrapper index={0}>
        <CompanyIntro />
      </SectionWrapper>

      <SectionWrapper index={1}>
        <OurServices />
      </SectionWrapper>

      <SectionWrapper index={2}>
        <TrustedBy />
      </SectionWrapper>

      <ProjectHighlights />

      <SectionWrapper index={3}>
        <WhyChooseUs />
      </SectionWrapper>
    </div>
  )
}

export default Home
