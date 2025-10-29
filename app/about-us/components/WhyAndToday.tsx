"use client";

import Image from "next/image";

type Props = {
  whyImage?: string;   // e.g. "/about/why.jpg"
  todayImage?: string; // e.g. "/about/today.jpg"
};

export default function WhyAndToday({
  whyImage = "/about.jpeg",
  todayImage = "/about.jpeg",
}: Props) {
  return (
    <section className="py-10 lg:py-20 container mx-auto">
      <div className="mx-auto w-full max-w-[1350px]">
        {/* ===== Block 1: Why we are here ===== */}
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Text */}
          <div className="md:col-span-6">
            <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
              Find out more
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
              Why we are here
            </h2>

            <div className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700">
              <p>
                Finding a place to live most of the time involves long process, lock-in
                clauses and a lot of bureaucracy. And you need to refurbish your
                apartment, dealing with internet and the cable guy.
              </p>
              <p>
                On the other hand, for landlords, managing properties is also stressful:
                dealing with brokers, screening tenants, resolving maintenance issues,
                bearing vacancy risks.
              </p>
              <p>
                That’s why we decided to offer a game-changing alternative: FurHouz
                manages properties, transforming them into beautiful living spaces,
                ready to live in, at the best places in town.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-6">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
              <Image
                src={whyImage}
                alt="Why we are here"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ===== Spacer ===== */}
        <div className="mt-16 sm:mt-24" />

        {/* ===== Block 2: FurHouz today ===== */}
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Text (left) */}
          <div className="md:col-span-6 order-2 md:order-1">
            <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
              We are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
              FurHouz today
            </h2>

            <div className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700">
              <p>
                We never stop growing! We are in Gulshan, Banani and Baridhara, everyday
                focused on building amazing living experiences for our tenants.
              </p>
              <p>
                A Few Numbers: 3 areas in Dhaka—Gulshan, Banani and Baridhara — More than
                300+ apartments — More than 5,000 days rented — More than 1300+ tenants &
                still growing.
              </p>
            </div>
          </div>

          {/* Image (right) */}
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
              <Image
                src={todayImage}
                alt="FurHouz today"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

         {/* ===== Spacer ===== */}
         <div className="mt-16 sm:mt-24" />
         {/* ===== Block 3: FurHouz going ===== */}
         <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Image (left) */}
          <div className="md:col-span-6 order-1 md:order-1">
            <div className="relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
              <Image
                src={todayImage}
                alt="FurHouz today"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          {/* Text (right) */} 
          <div className="md:col-span-6 order-2 md:order-2">
            <p className="text-sm md:text-base font-semibold tracking-widest text-red-400 uppercase">
              GOING HIGH
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl md:text-4xl">
              Where we’re going
            </h2>

            <div className="mt-4 space-y-4 text-sm md:text-base leading-relaxed text-neutral-700">
              <p>
                Our dream is to scale up and create living spaces all across Dhaka and other emerging cities of Bangladesh.
              </p>
              <p>
                With more and more people living as digital nomads, we want to be the go-to brand for the new generation of world travelers & expats that search for a sophisticated and seamless experience of living and working well.
              </p>
              <p>
                And we’re making this dream come true through data, technology, design and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
