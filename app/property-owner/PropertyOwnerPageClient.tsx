"use client";

import React from 'react'
import PropertyHero from './components/PropertyHero'
import BenefitsSection from './components/BenefitsSection'
import StepsTimeline from './components/StepsTimeline'
import PropertyBanner from './components/PropertyBanner'
import QASection from './components/QASection'

const PropertyOwnerPageClient = () => {
  return (
    <div>
      <PropertyHero />
      <BenefitsSection />
      <StepsTimeline />
      <PropertyBanner />
      <QASection />
    </div>
  )
}

export default PropertyOwnerPageClient
