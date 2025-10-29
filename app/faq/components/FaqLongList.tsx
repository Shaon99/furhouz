'use client';

import Link from 'next/link';
import { useState } from 'react';

type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: 'What is FurHouz?',
    a: `FurHouz is a real estate technology startup that offers fully furnished expat house
accommodation with comfort and full of amenities.`,
  },
  {
    q: 'Where are FurHouz apartments located?',
    a: `Our units are located in the prime areas of Dhaka city (Gulshan, Banani, Baridhara Diplomatic Zone,
Bashundhara & Uttara).`,
  },
  {
    q: 'What set FurHouz apart from traditional accommodation company, Quinto Andar and Airbnb?',
    a: `FurHouz is a fully furnished expat house accommodation company that offers you and your family
apartments for rent without the need to offer a guarantee, ready to live, with the assurance that
everything will be in perfect working order. In a FurHouz apartment you don't have to worry and spend
on moving furniture to your new residence. Unlike Airbnb, FurHouz does not do lodging in its
apartments, but only renting for residential purposes.`,
  },
  {
    q: 'Can I visit the apartment?',
    a: `Yes, of course. You can schedule a visit with our team.`,
  },
  {
    q: 'What documentation it is necessary to rent the apartment?',
    a: `The documentation required for booking your apartment is: Driver’s License or Passport.`,
  },
  {
    q: 'What is the minimum stay?',
    a: `1 year, based on availability.`,
  },
  {
    q: 'Can I rent today and move in tomorrow?',
    a: `Yes, if you choose an apartment that is available and already furnished, you can rent it on the day and
move in the next day.`,
  },
  {
    q: 'What is the type of contract that we are going to sign?',
    a: `Lease contract under the tenancy law of Bangladesh.`,
  },
  {
    q: 'How can I pay for a FurHouz apartment rental?',
    a: `We accept bank transfer (preferred) and other common methods agreed in the contract.`,
  },
  {
    q: 'Do I have to pay monthly or everything in full?',
    a: `At the time of signing you have to pay few months security deposit and then you can choose to pay
monthly or the full amount of your stay.`,
  },
  {
    q: 'What is included in the rent?',
    a: `Almost everything: fully furnishing, apartment rent, water, common electricity, building management fees,
property tax, TV cable fees, Internet, property tax, parking.`,
  },
  {
    q: 'How does the key receive process work?',
    a: `The building staff receive an authorization with your information, and we send to you the apartment
information.`,
  },
  {
    q: 'Can I extend my lease?',
    a: `Yes, according to the rules established in the lease contract (30/60 days before the end of the contract).`,
  },
  {
    q: 'Who should I talk to if there is any problem inside the apartment?',
    a: `The facilities team is ready to attend your requests.`,
  },
  {
    q: 'Need guarantor?',
    a: `Not necessary, with FurHouz is simple.`,
  },
  {
    q: 'What is the procedure for returning keys?',
    a: `The return of keys is done until 12:00 noon of the scheduled date.`,
  },
  {
    q: 'How the contract termination policy works?',
    a: `Termination requests must be made 60/90 days before the beginning or end of the contract, as the case
may be.`,
  },
  {
    q: 'What is excluded in the rent?',
    a: `Few things, like gas, apartment electricity, internet, TV (all personal consumption).`,
  },
  {
    q: 'How fast is the internet in the property?',
    a: `All of our apartments have a high-speed Wi-Fi network up to 50mbps.`,
  },
  {
    q: 'Can I bring my pet?',
    a: `Your pet is always welcome, as long as it is provided for and approved by the condominium’s convention.`,
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-6 w-6 transition-transform duration-200 ease-out ${open ? '-rotate-180' : ''}`}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FaqLongList() {
  // default open all (matches your last screenshot look)
  const [open, setOpen] = useState<boolean[]>(() => items.map(() => true));

  const toggle = (i: number) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section className="py-10 sm:py-14">
      {/* Centered narrow column, lots of whitespace like screenshot */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <h2 className="mb-8 text-center text-2xl font-extrabold tracking-wide sm:text-3xl md:text-4xl">
          YOU HAVE QUESTIONS? WE HAVE ANSWERS!
        </h2>

        <ul className="divide-y divide-neutral-200">
          {items.map((it, i) => (
            <li key={i} className="py-6">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-6 text-left"
                aria-expanded={open[i]}
                aria-controls={`faq-a-${i}`}
              >
                <h3 className="text-lg font-bold md:text-2xl text-black">{it.q}</h3>
                <span className="mt-2 text-neutral-600">
                  <Chevron open={open[i]} />
                </span>
              </button>

              <div
                id={`faq-a-${i}`}
                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                  open[i] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 text-neutral-600">
                    {it.a}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom CTA block like your final screenshot */}
        <div className="mt-20 flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold text-black">Do you have any doubts?</h3>
          <p className="mt-2 text-neutral-600">
            Fill up form to get in contact with a member of the Support Team
          </p>
          <Link href="/contact">
          <button className="mt-6 w-full max-w-sm rounded-md border border-neutral-300 px-12 py-2 text-lg font-medium shadow-sm transition hover:bg-neutral-50">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
