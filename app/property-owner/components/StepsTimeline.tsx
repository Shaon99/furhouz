import React from "react";

export default function StepsTimeline() {
  return (
    <div className="lg:py-16 py-5 container mx-auto">
    <section className="bg-gray-200 rounded-lg mx-auto max-w-[1350px] w-full py-24 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center pb-10">
        <p className="text-xl tracking-[0.25em] text-gray-600">STEP-BY-STEP</p>
        <h2 className="text-3xl md:text-5xl mt-1">
          <span className="text-[#064d83] font-semibold">How to rent </span>
          your apartment to FurHouz?
        </h2>
      </div>

      <div className="relative wrap overflow-hidden py-6 hidden md:block">
        {/* center spine */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full border-l border-gray-300/70"></div>

        {/* 1 Right (Gray) */}
        <div className="mb-10 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
            <span className="font-semibold text-sm text-white">1</span>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-2 font-bold text-gray-800 text-lg">
              Analysis &amp; Screening
            </h3>
            <p className="text-sm leading-snug text-gray-900/90">
              After our team receives the information about your apartment, we
              will analyze it and contact you.
            </p>
          </div>
        </div>

        {/* 2 Left (Brand) */}
        <div className="mb-10 flex justify-between flex-row-reverse items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center justify-center order-1 bg-brand-700 shadow-xl w-8 h-8 rounded-full">
            <span className="font-semibold text-sm text-white">2</span>
          </div>
          <div className="order-1 bg-brand-700 rounded-lg shadow-xl w-5/12 px-6 py-4 text-white">
            <h3 className="mb-2 font-bold text-white text-lg">
              Visit in the apartment
            </h3>
            <p className="text-sm leading-snug text-white/95">
              Our team will visit the apartment and collect the necessary
              information for our architecture and renovation team.
            </p>
          </div>
        </div>

        {/* 3 Right (Gray) */}
        <div className="mb-10 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
            <span className="font-semibold text-sm text-white">3</span>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-2 font-bold text-gray-800 text-lg">
              Lease contract
            </h3>
            <p className="text-sm leading-snug text-gray-900/90">
              After analysis and a visit to the apartment, we offer a contract
              for 60 to 72 months.
            </p>
          </div>
        </div>

        {/* 4 Left (Brand) */}
        <div className="mb-10 flex justify-between flex-row-reverse items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center justify-center order-1 bg-brand-700 shadow-xl w-8 h-8 rounded-full">
            <span className="font-semibold text-sm text-white">4</span>
          </div>
          <div className="order-1 bg-brand-700 rounded-lg shadow-xl w-5/12 px-6 py-4 text-white">
            <h3 className="mb-2 font-bold text-white text-lg">
              Renovation &amp; Decor
            </h3>
            <p className="text-sm leading-snug text-white/95">
              Our renovation team and designers will turn your property into the
              perfect fit for our selected renters.
            </p>
          </div>
        </div>

        {/* 5 Right (Gray) */}
        <div className="mb-2 flex justify-between items-center w-full">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center justify-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full">
            <span className="font-semibold text-sm text-white">5</span>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-2 font-bold text-gray-800 text-lg">
              Guaranteed Payment
            </h3>
            <p className="text-sm leading-snug text-gray-900/90">
              With or without a tenant in the apartment, you will receive simply
              and securely the agreed rent every month.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden grid grid-cols-1 text-center">
        <div className="px-6 py-6">
          <span className="bg-gray-400 text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold">
            1
          </span>
          <h3 className="text-2xl py-3 font-semibold">
            Analysis &amp; Screening
          </h3>
          <p className="text-gray-700">
            After our team receives the information about your apartment, we
            will analyze it and contact you.
          </p>
        </div>
        <div className="px-6 py-6">
          <span className="bg-brand-700 text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold">
            2
          </span>
          <h3 className="text-2xl py-3 font-semibold">
            Visit in the apartment
          </h3>
          <p className="text-gray-700">
            Our team will visit the apartment and collect the necessary
            information for our architecture and renovation team.
          </p>
        </div>
        <div className="px-6 py-6">
          <span className="bg-gray-400 text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold">
            3
          </span>
          <h3 className="text-2xl py-3 font-semibold">Lease contract</h3>
          <p className="text-gray-700">
            After analysis and a visit to the apartment, we offer a contract for
            60 to 72 months.
          </p>
        </div>
        <div className="px-6 py-6">
          <span className="bg-brand-700 text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold">
            4
          </span>
          <h3 className="text-2xl py-3 font-semibold">
            Renovation &amp; Decor
          </h3>
          <p className="text-gray-700">
            Our renovation team and designers will turn your property into the
            perfect fit for our selected renters.
          </p>
        </div>
        <div className="px-6 py-6">
          <span className="bg-gray-400 text-white inline-flex items-center justify-center w-10 h-10 rounded-full font-semibold">
            5
          </span>
          <h3 className="text-2xl py-3 font-semibold">Guaranteed Payment</h3>
          <p className="text-gray-700">
            With or without a tenant in the apartment, you will receive simply
            and securely the agreed rent every month.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
