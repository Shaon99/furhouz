"use client";

import React from "react";
import Image from "next/image";


export default function FurHouzQualitySection({

}) {
  return (
    <section className="w-full py-10 md:py-20 bg-white">
      <div className="container w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-12 -mt-2 lg:mt-12">
          <h3 className="font-semibold text-3xl md:text-3xl text-brand mb-4 tracking-tight">
            Award Winning Quality As Standard
          </h3>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed mb-6 text-justify md:text-start">
            Just because you’re renting your home, doesn’t mean you shouldn’t feel at home – which is why every one of our apartments comes fully furnished, with high-end furniture that maximizes space without compromising on comfort. Our commitment to sustainability also means that our properties come finished to a market-leading standard – with Amtico flooring, Samsung Appliances, and underfloor heating. With all utilities included, everything you need is covered in one single payment.
          </p>
        </div>

        {/* Right image (circle cropped) */}
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-[270px] md:min-h-[820px]">
          <div className="overflow-hidden rounded-tl-full rounded-bl-full w-full h-[300px] md:w-[720px] md:h-[820px] shadow-md flex items-center justify-center bg-soft">
            <Image
              src="/front.jpeg"
              width={420}
              height={420}
              alt="Dining room"
              className="object-fill w-full h-full block"

            />
          </div>
        </div>
      </div>
    </section>
  );
}
