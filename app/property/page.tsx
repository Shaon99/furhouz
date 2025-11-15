import React from 'react'
import PropertySearch from './components/PropertySearch'
import RecentProperties from './components/RecentProperties'
import { PropertyFilterProvider } from './context/PropertyFilterContext'

const PropertyPage = () => {
  return (
    <PropertyFilterProvider>
      <div className=''>
        <PropertySearch />
        <RecentProperties />
      </div>
    </PropertyFilterProvider>
  )
}

export default PropertyPage