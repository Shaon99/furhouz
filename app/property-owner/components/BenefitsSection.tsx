'use client';

import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto">
        {/* On mobile, column (copy up, images down). On md+, grid 2-cols (copy left, images right) */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">
          {/* Left copy */}
          <div className="max-w-xl w-full order-1 mb-4 md:mb-0 md:order-1">
            <p className="text-xs font-medium tracking-widest text-slate-500">
              BENEFITS FOR PROPERTY OWNERS IN Gulshan, Banani, Baridhara and Basundhara
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-800 sm:text-4xl">
              <span className="text-brand font-bold">Hassle-free,</span>{' '}
              profitable and no middleman
            </h2>

            <p className="mt-6 text-slate-600">
              No need to worry anymore with finding and screening new tenants, property
              vacancy, renovation or damage hassles or dealing with brokers — leave it all to us!
            </p>

            <p className="mt-4 text-slate-600">
              Just relax, sit back and collect your rent!
            </p>
          </div>

          {/* Right image collage */}
          <div className="w-full order-2 md:order-2">
            {/* Mobile = 5 cols grid (2+3), Desktop = 6 cols */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {/* Top row: 2 images spanning 3 cols each on desktop */}
              <figure className="relative col-span-1 sm:col-span-1 md:col-span-3 aspect-[16/11] overflow-hidden rounded-xl">
                <Image
                  src="/1.png"
                  alt="Cozy morning coffee on bedding"
                  fill
                  className="object-cover"
                  priority
                />
              </figure>
              <figure className="relative col-span-1 sm:col-span-1 md:col-span-3 aspect-[16/11] overflow-hidden rounded-xl">
                <Image
                  src="/2.png"
                  alt="Minimal watches flat lay"
                  fill
                  className="object-cover"
                />
              </figure>

              {/* Bottom row: 3 small images side by side */}
              <div className="col-span-2 sm:col-span-3 md:col-span-6 flex gap-2">
                <figure className="relative flex-1 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/3.png"
                    alt="Headphones on yellow surface"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative flex-1 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/4.png"
                    alt="Wooden stool on blue"
                    fill
                    className="object-cover"
                  />
                </figure>
                <figure className="relative flex-1 aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/5.png"
                    alt="Pink cup on coral background"
                    fill
                    className="object-cover"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
