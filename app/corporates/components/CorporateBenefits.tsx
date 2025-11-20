'use client';

import Image from 'next/image';
import { useCorporateBenefitQuery } from '@/hooks/queries/useCorporateBenefitQuery';
import { SkeletonCard } from '@/components/ui/skeletons';

export default function CorporateBenefits() {
  const { data: benefits = [], isLoading } = useCorporateBenefitQuery();
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
          {isLoading ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard
                  key={i}
                  showImage={true}
                  showTitle={true}
                  showDescription={true}
                  lines={2}
                />
              ))}
            </>
          ) : benefits.length === 0 ? (
            <div className="col-span-full text-center py-8 text-slate-600">
              No benefits available at the moment.
            </div>
          ) : (
            benefits.map((benefit) => (
              <article key={benefit.id} className=" items-start gap-6 hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-gray-300 p-5 rounded-lg hover:border-2 hover:border-gray-300">
                {/* Icon circle */}
                <div className="shrink-0 grid place-items-center rounded-full  w-[72px] h-[72px] -ml-2">
                  <Image
                    src={benefit.image || "/placeholder.png"}
                    alt={benefit.title}
                    width={60}
                    height={40}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png";
                    }}
                  />
                </div>

                {/* Text */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold text-slate-800 mt-3">{benefit.title}</h3>
                  <p className="mt-3 text-slate-600">{benefit.description}</p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
