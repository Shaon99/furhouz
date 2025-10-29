'use client';

import Image from 'next/image';



const defaults = [
  {
    icon: '/account-manager.png',
    title: 'Account manager',
    desc: 'A fully-dedicated account manager to provide personalized support',
  },
  {
    icon: '/savew-money.png',
    title: 'Save money',
    desc: 'Save money and provide an exclusive home experience to your corporate employees',
  },
  {
    icon: '/interior.png',
    title: 'Rent with flexibility',
    desc: 'Rent our apartments from 1 month or more with flexibility and without guarantor',
  },
  {
    icon: '/central-neighborhood.png',
    title: 'Central neighbourhoods',
    desc: 'Our properties are located in central areas, close to the major corporate offices',
  },
  {
    icon: '/interior.png',
    title: 'Beautiful interior design',
    desc: 'Our apartments are highly-curated and beautifully-designed',
  },
  {
    icon: '/Equipped-to-work.png',
    title: 'Equipped to work',
    desc: 'Our apartments are fully-equipped for you to work from home',
  },
];

export default function CorporateBenefits({ items = defaults }) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="text-center">
          <p className="text-lg font-semibold tracking-[0.2em] text-[#1e4d72]">
            CORPORATE BENEFITS
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-5xl">
            <span className="text-[#0b5d94]">Benefits of renting</span> corporate apartments
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600 text-lg">
            Corporates save time and money and employees feel at home
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((b, i) => (
            <article key={i} className=" items-start gap-6 hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 p-5 rounded-lg hover:border-2 hover:border-gray-300">
              {/* Icon circle */}
              <div className="shrink-0 grid place-items-center rounded-full  w-[72px] h-[72px] -ml-2">
                <Image
                  src={b.icon}
                  alt=""
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <h3 className="text-2xl font-bold text-slate-800 mt-3">{b.title}</h3>
                <p className="mt-3 text-slate-600">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
