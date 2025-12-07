"use client";

import React from 'react'
import CorporateHero from './components/CorporateHero'
import CorporateBenefits from './components/CorporateBenefits'
import CorporateCustomerSlider from './components/CorporateCustomerSlider'

export default function CorporateRouteClient() {
  return (
    <div>
        <CorporateHero />
        <CorporateBenefits />
        <CorporateCustomerSlider />
    </div>
  )
}

