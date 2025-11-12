"use client";

import { KeyRound } from "lucide-react";
import Link from "next/link";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";

type Card = {
  title: string;
  desc: string;
  phone?: string;
  email?: string;
  slug: string;
  highlight?: boolean;
};

export default function ContactOptions() {
  const { data: settings } = useSettingsQuery();
  
  const phone = settings?.phone_number;
  const email = settings?.email_address;

  const CARDS: Card[] = [
    {
      title: "I'm an Owner",
      desc:
        "Curious about FurHouz? Have a question about your lease? Call or e-mail us.",
      phone: phone,
      email: email,
      slug: "owner",
    },
    {
      title: "I'm a Corporate",
      desc:
        "Questions about your stay? Need anything in your home? Call or e-mail us.",
      phone: phone,
      email: email,
      slug: "corporate",
      highlight: true,
    },
    {
      title: "I'm a Tenant",
      desc:
        "Do you have any questions about the apartment, need help or would you like to know more about our services? Call us through the channels below.",
      phone: phone,
      email: email,
      slug: "tenant",
    },
    {
      title: "I want to know more",
      desc:
        "Contact us with any questions about how to rent an apartment with us, deadlines, payments, contracts and much more.",
      phone: phone,
      email: email,
      slug: "want-know",
    },
  ];
  return (
    <section className="py-10 lg:py-20 container mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100 transition-all">
      <div className="mx-auto w-full max-w-[1350px]">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 leading-snug shadow-sm">
            What would you like to <span className="text-brand">contact us</span> about?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-medium drop-shadow">
            Fill out the form to get in touch with a member of our Support Team
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className={`relative group h-full rounded-3xl border-2 bg-white transition-all overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                c.highlight
                  ? "bg-gradient-to-br from-blue-100 via-sky-100 to-white border-blue-300 ring-2 ring-sky-200"
                  : "border-slate-200"
              }`}
            >
              <div className="absolute top-0 right-0 z-0 w-32 h-32 pointer-events-none rounded-bl-full bg-gradient-to-br from-sky-100 to-transparent opacity-60" />
              <div className="flex h-full flex-col p-7  relative">
                {/* Icon */}
                <div className="flex items-center justify-center">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full shadow-md border-4 ${
                    c.highlight
                      ? "bg-gradient-to-br from-sky-400 to-blue-500 border-white scale-105"
                      : "bg-blue-100 border-blue-200"
                  } transition-all`}>
                    <KeyRound className={`${c.highlight ? "text-white" : "text-blue-700"} h-8 w-8`} />
                  </div>
                </div>

                {/* Texts */}
                <h3 className="mt-6 text-xl font-bold text-slate-800 group-hover:text-blue-700 text-center transition-colors duration-150">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 text-center">{c.desc}</p>

                {/* Divider + contacts */}
                {(c.phone || c.email) && (
                  <div className="mt-6 border-t border-blue-100 pt-4 text-center">
                    {c.phone && (
                      <p className="text-base font-semibold text-blue-700 flex justify-center items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 15h10l4-8H5.4M7 15l-1.5 7H5M7 15l1.5-7H19M18.5 19a2.5 2.5 0 11-5 0"/></svg>
                        {c.phone}
                      </p>
                    )}
                    {c.email && (
                      <p className="mt-2 text-sm text-blue-500 underline underline-offset-2 break-all cursor-pointer">{c.email}</p>
                    )}
                  </div>
                )}

                {/* Button pinned bottom */}
                <div className="mt-auto pt-6 flex justify-center">
                  <Link
                    href={`/contact/${c.slug}`}
                    className={`px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all focus:outline-none
                      ${
                        c.highlight
                          ? "bg-gradient-to-r from-blue-600 to-sky-400 text-white hover:from-sky-500 hover:to-blue-600"
                          : "bg-blue-50 text-blue-700 hover:bg-sky-100 hover:text-blue-900"
                      }
                      focus:ring-2 focus:ring-sky-400/40 active:scale-95 flex items-center gap-2`}
                  >
                    Read more
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
