
import { FURNISHED_COPY, AreaSlug } from "./data";
import FAQ from "./FAQ";

type Props = { slug: AreaSlug };

export default function FurnishedSections({ slug }: Props) {
  const c = FURNISHED_COPY[slug];

  return (
    <div className="">
      {/* ====== HERO / INTRO ====== */}
      <section className="py-10 sm:py-12">
        <div className="max-w-[1350px] mx-auto">
          <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-brand">
            {c.hero.title}
          </h1>
          <p className="mt-5 text-black leading-relaxed text-lg">{c.hero.intro1}</p>
          <p className="mt-4 text-black leading-7 text-lg">
            <strong>“FurHouz”</strong> {c.hero.intro2.replace("“FurHouz” ", "")}
          </p>
        </div>
      </section>
        
      {/* ====== FACILITIES GRID (6 bullets like screenshot) ====== */}
      <section className="py-8 sm:py-10">
        <div className="max-w-[1350px] mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-brand">
            Facilities of Furnished Apartment Rent in {capitalize(slug)}
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {c.facilities.bullets.map((b, i) => (
              <article key={i} className="space-y-2">
                <h3 className="font-bold text-lg text-black">{b.title}</h3>
                <p className="text-black leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====== REASONS (3 cards) + Recreation paragraph ====== */}
      <section className="py-12 sm:py-14">
        <div className="max-w-[1350px] mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-brand">
            {c.reasons.heading}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {c.reasons.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-md bg-white shadow p-6"
              >
                <h3 className="font-semibold text-lg text-brand">{card.title}</h3>
                <p className="mt-2 text-slate-700 leading-7">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-center text-3xl font-extrabold text-brand">
              {c.reasons.recreationTitle}
            </h3>
            <p className="mt-3 text-slate-700 leading-7">{c.reasons.recreationBody}</p>
            <p className="mt-3 text-slate-700 leading-7">{c.reasons.closing}</p>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <FAQ items={c.faq.items} />
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
