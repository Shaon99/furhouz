"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LOCATIONS = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Bashundhara",
  "Luxury Apartments",
];

type Props = {
  onSearch?: (place: string) => void;
};

export default function Search({ onSearch }: Props) {
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<string>("");
  const [error, setError] = useState<string>("");
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popRef.current && !popRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = () => {
    if (!LOCATIONS.includes(place)) {
      setError("");
      setOpen(true);
      return;
    }
    setError("");
    onSearch?.(place);
  };

  const handleSelect = (loc: string) => {
    setPlace(loc);
    setError("");
    setOpen(false);
  };

  return (
    <section className="pt-10 md:pt-36">
      <div className="flex flex-col items-center text-center py-16 sm:py-24 mt-10 lg:mt-40">
        <h1 className="text-2xl font-bold text-white md:text-4xl px-4 lg:px-0">
          Your furnished apartment ready to move
        </h1>
        <p className="lead text-white max-w-6xl mt-3 md:text-[18px] text-[16px] px-4 lg:px-0">
          Beautifully designed, fully furnished apartments in Gulshan, Banani,
          Baridhara and Bashundhara to make you feel at home
        </p>

        <div
          ref={popRef}
          className="
            mt-10 w-[90%]  max-w-4xl mx-auto
            rounded-full bg-brand-800 shadow-[var(--shadow-md)]
            ring-1 ring-[color:var(--warning)]
            px-2 py-2
            flex items-center gap-2
          "
          role="search"
        >
          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="
                inline-flex items-center gap-2
                rounded-full pl-6 pr-4 py-3
                font-semibold tracking-wide
                text-[color:var(--foreground)]
                bg-brand-800
                focus:outline-none focus-visible:ring-4
                focus-visible:ring-brand-200
              "
            >
              <span className="uppercase text-xs lg:text-base text-white font-semibold">
                {place || "Explore a place"}
              </span>
              <ChevronDown className="size-5 text-white font-bold ml-0 lg:ml-40" aria-hidden="true" />
            </button>

            {open && (
              <div
              role="listbox"
              tabIndex={-1}
              className="
                absolute left-3 top-full z-20 mt-2 w-[320px] max-w-[80vw]
                rounded-2xl bg-white border border-[color:var(--warning)]
                shadow-[var(--shadow-md)]
                p-2
              "
            >
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  role="option"
                  aria-selected={place === loc}
                  onClick={() => handleSelect(loc)}
                  className="
                    w-full text-left px-4 py-3 rounded-xl
                    hover:bg-[color:var(--brand-50)]
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-brand-200
                    text-[color:var(--foreground)]
                  "
                >
                  {loc}
                </button>
              ))}
            </div>
            )}
            {error && (
              <span className="absolute left-0 -bottom-5 text-xs text-red-500">
                {error}
              </span>
            )}
          </div>

          <div className="flex-1" />

          <button
            onClick={handleSearch}
            className="
              btn rounded-full lg:px-12 py-3 text-base
              bg-brand-700 hover:bg-brand-800 px-8
            "
            aria-label="Search"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
