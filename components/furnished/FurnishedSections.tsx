import FAQ from "./FAQ";

type Props = {
  name: string;
  sections?: Array<{ title: string; description?: string; content?: string }>;
  facilities?: Array<{ title: string; items: Array<{ title: string; description: string }> }>;
  why_should_rent?: Array<{ title: string; items: Array<{ title: string; description: string }> }>;
  placetovisit?: Array<{ title: string; content_items: Array<{ title: string; description?: string }> }>;
  restaurants?: Array<{ title: string; content_items: Array<{ title: string; description?: string }> }>;
  hotels?: Array<{ title: string; content_items: Array<{ title: string; description?: string }> }>;
  embassies?: Array<{ title: string; content_items: Array<{ title: string; link?: string | null }> }>;
  academic_institutions?: Array<{ title: string; content_items: Array<{ title: string; link?: string | null }> }>;
  hospitals?: Array<{ title: string; content_items: Array<{ title: string; link?: string | null }> }>;
  commercial_towers?: Array<{ title: string; content_items: Array<{ title: string; link?: string | null }> }>;
  faqs?: Array<{ question: string; answer: string }>;
  final_words?: string;
};

export default function FurnishedSections({
  name,
  sections = [],
  facilities = [],
  why_should_rent = [],
  placetovisit = [],
  restaurants = [],
  hotels = [],
  embassies = [],
  academic_institutions = [],
  hospitals = [],
  commercial_towers = [],
  faqs = [],
  final_words,
}: Props) {

  // Extract "Final Words" section and filter it out from regular sections
  const finalWordsSection = sections.find(section => 
    section.title.toLowerCase().includes('final words')
  );
  const regularSections = sections.filter(section => 
    !section.title.toLowerCase().includes('final words')
  );
  
  // Get first section as hero/intro (from regular sections)
  const heroSection = regularSections[0];
  
  // Get facilities items (flatten all facility groups)
  const allFacilities = facilities.flatMap((f) => f.items);
  
  // Get why_should_rent items
  const whyRentItems = why_should_rent.flatMap((w) => w.items);
  
  // Get recreation section (usually second section from regular sections)
  const recreationSection = regularSections[1];

  // Helper function to get content from section (supports both description and content fields)
  const getSectionContent = (section: { title: string; description?: string; content?: string }) => {
    return section.description || section.content || '';
  };

  // Don't return null if we have any data to show
  const hasAnyData = heroSection || 
    facilities.length > 0 || 
    why_should_rent.length > 0 || 
    faqs.length > 0 || 
    sections.length > 0 ||
    placetovisit.length > 0 ||
    restaurants.length > 0 ||
    hotels.length > 0 ||
    embassies.length > 0 ||
    academic_institutions.length > 0 ||
    hospitals.length > 0 ||
    commercial_towers.length > 0 ||
    final_words;

  if (!hasAnyData) {
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
              {getSectionContent(heroSection)}
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
                  {getSectionContent(recreationSection)}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ====== ALL OTHER REGULAR SECTIONS (after first 2) ====== */}
      {regularSections.slice(2).map((section, index) => (
        <section key={index} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand">
              {section.title}
            </h2>
            <p className="mt-5 text-black leading-relaxed text-lg whitespace-pre-line">
              {getSectionContent(section)}
            </p>
          </div>
        </section>
      ))}

      {/* ====== PLACES TO VISIT ====== */}
      {placetovisit && placetovisit.length > 0 && placetovisit.map((section, idx) => (
        <section key={`placetovisit-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-6">
                  <h3 className="font-semibold text-lg text-brand mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-slate-700 leading-7">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== RESTAURANTS ====== */}
      {restaurants && restaurants.length > 0 && restaurants.map((section, idx) => (
        <section key={`restaurants-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-6">
                  <h3 className="font-semibold text-lg text-brand mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-slate-700 leading-7">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== HOTELS ====== */}
      {hotels && hotels.length > 0 && hotels.map((section, idx) => (
        <section key={`hotels-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-6">
                  <h3 className="font-semibold text-lg text-brand mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-slate-700 leading-7">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== EMBASSIES ====== */}
      {embassies && embassies.length > 0 && embassies.map((section, idx) => (
        <section key={`embassies-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-4 text-center">
                  <h3 className="font-semibold text-lg text-brand">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== ACADEMIC INSTITUTIONS ====== */}
      {academic_institutions && academic_institutions.length > 0 && academic_institutions.map((section, idx) => (
        <section key={`academic-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items && section.content_items.length > 0 && section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-4 text-center">
                  <h3 className="font-semibold text-lg text-brand">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== HOSPITALS ====== */}
      {hospitals && hospitals.length > 0 && hospitals.map((section, idx) => (
        <section key={`hospitals-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items && section.content_items.length > 0 && section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-4 text-center">
                  <h3 className="font-semibold text-lg text-brand">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== COMMERCIAL TOWERS ====== */}
      {commercial_towers && commercial_towers.length > 0 && commercial_towers.map((section, idx) => (
        <section key={`towers-${idx}`} className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand mb-8">
              {section.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.content_items && section.content_items.length > 0 && section.content_items.map((item, i) => (
                <div key={i} className="rounded-md bg-white shadow p-4 text-center">
                  <h3 className="font-semibold text-lg text-brand">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ====== FINAL WORDS ====== */}
      {(finalWordsSection || final_words) && (
        <section className="py-10 sm:py-12">
          <div className="max-w-[1350px] mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-brand">
              {finalWordsSection?.title || "Final Words"}
            </h2>
            {final_words && typeof final_words === 'string' && final_words.trim() !== '' ? (
              <div 
                className="mt-5 text-black leading-relaxed text-lg text-center [&_p]:text-center [&_p]:text-black [&_p]:leading-relaxed [&_p]:mb-0"
                dangerouslySetInnerHTML={{ __html: final_words }}
              />
            ) : finalWordsSection ? (
              <p className="mt-5 text-black leading-relaxed text-lg whitespace-pre-line text-center">
                {getSectionContent(finalWordsSection)}
              </p>
            ) : null}
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
