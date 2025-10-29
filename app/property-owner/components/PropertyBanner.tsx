import React from 'react'
import Image from 'next/image'

const PropertyBanner = () => {
  return (
    <div className="w-full min-h-[350px] max-h-[500px] flex justify-center items-center  lg:py-6  lg:mb-10 container mx-auto">
        <Image src="/propertyownerlast.jpg" alt="Property Banner" width={1350} height={500} className='object-cover rounded-lg h-[250px] md:h-full w-full '/>
    </div>
  )
}

export default PropertyBanner