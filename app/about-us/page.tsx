"use client";

import AboutHero from './components/AboutHero'
import WhyAndToday from './components/WhyAndToday'
import MoreAbout from './components/MoreAbout'
import { useAboutUsQuery } from '@/hooks/queries/useAboutUsQuery'

const AboutUsPage = () => {
  const { data, isLoading } = useAboutUsQuery();

  return (
    <div>
      <AboutHero 
        banner={data?.banner}
        isLoading={isLoading}
      />
      <WhyAndToday
        section1={data?.section1}
        section2={data?.section2}
        section3={data?.section3}
        isLoading={isLoading}
      />
      <MoreAbout
        finalDescription={data?.final_description}
        isLoading={isLoading}
      />
    </div>
  )
}

export default AboutUsPage