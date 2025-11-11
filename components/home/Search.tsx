"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LOCATIONS = [
  "Gulshan",
  "Banani",
  "Baridhara",
  "Bashundhara",
  "Luxury Apartments",
];

// Map location names to slugs
const LOCATION_TO_SLUG: Record<string, string> = {
  "Gulshan": "gulshan",
  "Banani": "banani",
  "Baridhara": "baridhara",
  "Bashundhara": "bashundhara",
  "Luxury Apartments": "luxury-apartments",
};

type Props = {
  onSearch?: (place: string) => void;
  compact?: boolean; // For use in Topbar
};

export default function Search({ onSearch, compact = false }: Props) {
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

  // If compact mode, return just the search bar
  if (compact) {
    return (
      <div
        ref={popRef}
        className="
          w-full max-w-full
          rounded-full bg-brand-800 shadow-[var(--shadow-md)]
          ring-1 ring-[color:var(--warning)]
          px-2 py-1.5
          flex items-center gap-2
          cursor-pointer
          relative
        "
        role="search"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest(".sf-search-btn")) return;
          setOpen(true);
        }}
      >
        <div className="relative flex-1 z-0">
          <div
            className="
              w-full
              inline-flex items-center gap-2
              rounded-full pl-4 pr-3 py-2
              font-semibold tracking-wide
              text-[color:var(--foreground)]
              bg-brand-800
              focus:outline-none focus-visible:ring-4
              focus-visible:ring-brand-200
              select-none
              cursor-pointer
              uppercase text-white
              text-left
              justify-start
              text-xs
            "
            tabIndex={0}
            aria-haspopup="listbox"
            aria-expanded={open}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") setOpen(v => !v);
            }}
            style={{ outline: "none", border: "none" }}
          >
            <span
              className={`
                truncate
                ${place ? "" : "opacity-80"}
                text-[11px] font-semibold uppercase
              `}
              style={{
                lineHeight: "1.1",
                whiteSpace: "nowrap",
              }}
            >
              {place || "EXPLORE A PLACE"}
            </span>
            <span className="flex items-center justify-center ml-1">
              <ChevronDown
                className="
                  w-3 h-3
                  text-white font-bold flex-shrink-0
                  relative top-0
                "
                aria-hidden="true"
              />
            </span>
          </div>

          {open && (
            <div
              role="listbox"
              tabIndex={-1}
              className="
                absolute left-3 top-full z-20 mt-2 w-[280px] max-w-[85vw]
                rounded-2xl bg-white border border-[color:var(--warning)]
                shadow-[var(--shadow-md)]
                p-2
              "
            >
              {LOCATIONS.map((loc) => {
                const slug = LOCATION_TO_SLUG[loc];
                const isAreaPage = slug && slug !== "luxury-apartments";
                if (isAreaPage) {
                  return (
                    <Link
                      key={loc}
                      href={`/area/${slug}`}
                      role="option"
                      aria-selected={place === loc}
                      onClick={() => handleSelect(loc)}
                      className="
                        block w-full text-left px-4 py-3 rounded-xl
                        hover:bg-[color:var(--brand-50)]
                        focus:outline-none focus-visible:ring-2
                        focus-visible:ring-brand-200
                        text-[color:var(--foreground)]
                      "
                    >
                      {loc}
                    </Link>
                  );
                }
                return (
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
                );
              })}
            </div>
          )}
          {error && (
            <span className="absolute left-0 -bottom-5 text-xs text-red-500">
              {error}
            </span>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="
            sf-search-btn btn rounded-full px-4 py-2 text-xs
            bg-brand-700 hover:bg-brand-800
            z-10
            whitespace-nowrap
          "
          aria-label="Search"
          type="button"
          tabIndex={0}
        >
          Search
        </button>
      </div>
    );
  }

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

        {/* Entire input/searchbar is clickable to open modal */}
        <div
          ref={popRef}
          className="
            mt-10 w-[90%] max-w-4xl mx-auto
            rounded-full bg-brand-800 shadow-[var(--shadow-md)]
            ring-1 ring-[color:var(--warning)]
            px-2 py-2
            flex items-center gap-2
            cursor-pointer
            relative
          "
          role="search"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest(".sf-search-btn")) return;
            setOpen(true);
          }}
        >
          <div className="relative flex-1 z-0">
            <div
              className="
                w-full
                inline-flex items-center gap-2
                rounded-full pl-6 pr-4 py-3
                font-semibold tracking-wide
                text-[color:var(--foreground)]
                bg-brand-800
                focus:outline-none focus-visible:ring-4
                focus-visible:ring-brand-200
                select-none
                cursor-pointer
                uppercase text-white
                text-left
                justify-start
                text-xs
                md:text-base
              "
              tabIndex={0}
              aria-haspopup="listbox"
              aria-expanded={open}
              onKeyDown={e => {
                if (e.key === "Enter" || e.key === " ") setOpen(v => !v);
              }}
              style={{ outline: "none", border: "none" }}
            >

              <span
                className={`
                  truncate
                  max-w-[110px]
                  md:max-w-none
                  ${place ? "" : "opacity-80"}
                  text-[12px] md:text-[16px] font-semibold uppercase
                  md:tracking-wide
                 `}
                style={{
                  lineHeight: "1.1",
                  whiteSpace: "nowrap",
                }}
              >
                {place || "EXPLORE A PLACE"}
              </span>
              <span className="flex items-center justify-center ml-1">
                <ChevronDown
                  className="
                    w-4 h-4 md:w-5 md:h-5
                    text-white font-bold flex-shrink-0
                    relative top-0
                  "
                  aria-hidden="true"
                />
              </span>
            </div>

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
                {LOCATIONS.map((loc) => {
                  const slug = LOCATION_TO_SLUG[loc];
                  const isAreaPage = slug && slug !== "luxury-apartments";
                  if (isAreaPage) {
                    return (
                      <Link
                        key={loc}
                        href={`/area/${slug}`}
                        role="option"
                        aria-selected={place === loc}
                        onClick={() => handleSelect(loc)}
                        className="
                          block w-full text-left px-4 py-3 rounded-xl
                          hover:bg-[color:var(--brand-50)]
                          focus:outline-none focus-visible:ring-2
                          focus-visible:ring-brand-200
                          text-[color:var(--foreground)]
                        "
                      >
                        {loc}
                      </Link>
                    );
                  }
                  return (
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
                  );
                })}
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
              sf-search-btn btn rounded-full lg:px-12 py-3 text-base
              bg-brand-700 hover:bg-brand-800 px-8
              z-10
            "
            aria-label="Search"
            type="button"
            tabIndex={0}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
