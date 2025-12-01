import FAQ from "./FAQ";

type Props = {
  name: string;
  sections?: Array<{ title: string; description: string }>;
  facilities?: Array<{ title: string; items: Array<{ title: string; description: string }> }>;
  why_should_rent?: Array<{ title: string; items: Array<{ title: string; description: string }> }>;
  faqs?: Array<{ question: string; answer: string }>;
};

export default function FurnishedSections({
  name,
  sections = [],
  facilities = [],
  why_should_rent = [],
  faqs = [],
}: Props) {
  // Get first section as hero/intro
  const heroSection = sections[0];
  
  // Get facilities items (flatten all facility groups)
  const allFacilities = facilities.flatMap((f) => f.items);
  
  // Get why_should_rent items
  const whyRentItems = why_should_rent.flatMap((w) => w.items);
  
  // Get recreation section (usually second section)
  const recreationSection = sections[1];

  if (!heroSection && facilities.length === 0 && why_should_rent.length === 0 && faqs.length === 0) {
    return null;
  }

  return (
    <div className="">
      {/* ====== HERO / INTRO ====== */}
      {heroSection && (
        <section className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-brand">
              {heroSection.title}
            </h1>
            <p className="mt-5 text-black leading-relaxed text-lg whitespace-pre-line">
              {heroSection.description}
            </p>
          </div>
        </section>
      )}
        
      {/* ====== FACILITIES GRID ====== */}
      {facilities.length > 0 && (
        <section className="py-8 sm:py-10">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-brand">
              {facilities[0].title || `Facilities of Furnished Apartment Rent in ${name}`}
            </h2>

            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {allFacilities.map((facility, i) => (
                <article key={i} className="space-y-2">
                  <h3 className="font-bold text-lg text-black">{facility.title}</h3>
                  <p className="text-black leading-relaxed">{facility.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== WHY SHOULD RENT (cards) + Recreation ====== */}
      {why_should_rent.length > 0 && (
        <section className="py-12 sm:py-14">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-brand">
              {why_should_rent[0].title}
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {whyRentItems.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-6">
                  <h3 className="font-semibold text-lg text-brand">{item.title}</h3>
                  <p className="mt-2 text-slate-700 leading-7">{item.description}</p>
                </div>
              ))}
            </div>

            {recreationSection && (
              <div className="mt-10">
                <h3 className="text-center text-3xl font-extrabold text-brand">
                  {recreationSection.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-7 whitespace-pre-line">
                  {recreationSection.description}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ====== FAQ ====== */}
      {faqs.length > 0 && (
        <FAQ items={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))} />
      )}
    </div>
  );
}
