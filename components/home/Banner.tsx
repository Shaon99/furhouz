import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <section
      className="w-full min-h-[350px] flex justify-center items-center px-4 py-2 lg:py-10 -mt-10 lg:-mt-0"
      style={{ position: "relative" }}
    >
      <div className="relative w-full max-w-[1350px] container min-h-[330px] h-[330px] md:h-[370px] lg:h-[500px] flex items-center mx-auto overflow-hidden">
        {/* Banner Background Image */}
        <Image
          src="/banner.jpeg"
          alt="Banner"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 1400px"
          className="object-cover object-center rounded-lg"
        />

        {/* Absolute textual content + button, left side */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            flex flex-col justify-center
            pl-8 pr-4 py-12 sm:py-16
            max-w-[520px] min-w-[320px] w-full
          "
        >
          <span className="font-bold text-xl text-black uppercase tracking-wide mb-2">
            BUSINESS
          </span>
          <h1
            className="text-[2rem] md:text-[2.5rem] font-semibold text-black leading-tight mb-2 tracking-tight"
            style={{ fontFamily: "var(--font-sans,inherit)" }}
          >
            Rent apartments for your company
          </h1>
          <p className="text-[1rem] mb-6 max-w-[700px] leading-snug text-black tracking-tight">
            Manage easily all your corporate apartments needs with flexibility and exclusive support. Save time and money. Ideal for you and your team.
          </p>
          <Link
            href="/corporates"
            className="inline-block px-8 py-4 rounded w-56 bg-[#064d83] text-white text-[15px] font-medium transition-colors"
            style={{
              minWidth: 120,
              textAlign: "center",
              boxShadow: '0 1px 8px 0 #ebf3ff'
            }}
          >
            Get to know us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner