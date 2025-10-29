import Image from "next/image";
import React from "react";

const FurHouzAboutSlice = () => {
  return (
    <section className="w-full py-10 md:py-20 bg-white">
      <div className="container w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-[270px] md:min-h-[820px]">
          <div className="overflow-hidden rounded-tr-full rounded-br-full w-full h-[300px] md:w-[720px] md:h-[820px] shadow-md flex items-center justify-center bg-soft">
            <Image
              src="/front.jpeg"
              width={420}
              height={420}
              alt="Dining room"
              className="object-fill w-full h-full block"

            />
          </div>
        </div>
        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-0 md:px-12 -mt-2 lg:mt-12">
          <h3 className="font-semibold text-3xl md:text-3xl text-brand mb-4 tracking-tight">
            Trusted Local Specialists in Every City
          </h3>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed mb-6">
            Experience the difference with FurHouz — a dedicated team of local property professionals committed to matching you with exceptional apartments in the heart of the city. Every detail is meticulously curated, seamlessly managed, and entirely transparent for your peace of mind. <br /><br />
            We exclusively offer FurHouz-managed apartments: move-in ready, current, and available as seen. Enjoy elevated service with on-site support, comprehensive inspections, professional cleaning, and personalized move-in assistance. <br /><br />
            We believe in flexible move dates, fair value, and open communication — never pressure. Whether you&apos;re looking for a short- or long-term stay, our team is ready to assist. Reach us anytime via WhatsApp, web chat, or a friendly call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FurHouzAboutSlice;