"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

/**
 * @param {Object} props
 * @param {string} [props.placeholder="Search your products"]
 * @param {Function} [props.onSubmit]
 * @param {string} [props.className=""]
 * @param {boolean} [props.isScrolled=false]
 */
export default function ResponsiveSearch({
  placeholder = "Search your products",
  onSubmit,
  className = "",
  isScrolled = false,
}) {
  const [q, setQ] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(q);
  };

  const openInput = () => {
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 60);
  };

  const handleBlur = () => {
    if (window.innerWidth < 768) setShowInput(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && window.innerWidth < 768) setShowInput(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close search input when scrolling back to top on mobile
  useEffect(() => {
    if (!isScrolled && window.innerWidth < 768) {
      setShowInput(false);
    }
  }, [isScrolled]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`block md:block lg:hidden relative w-full ${className} md:ml-16 ml-2`}
      aria-label="Search"
    >
      <div className="relative w-full flex items-center justify-end">
        {!showInput && (
          <button
            type="button"
            onClick={openInput}
            className={`p-2 rounded-full bg-brand text-brand md:hidden transition-opacity duration-300 ${
              isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Open search"
            style={{ position: "absolute", right: 0 }}
          >
            <Search className="w-5 h-5 text-brand" />
          </button>
        )}

        <div
          className={[
            "fixed top-3 left-0 w-full h-[56px] z-40 flex items-center  md:static md:block md:w-[22rem] md:shadow-none md:h-auto transition-all duration-300 ease-out",
            showInput
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "translate-x-full opacity-100 pointer-events-none md:translate-x-0 md:opacity-100 md:pointer-events-auto",
          ].join(" ")}
          style={{
            // only slide on mobile
            transitionProperty: 'transform, opacity',
          }}
        >
          <div className="relative w-full flex items-center px-3 md:px-0">
            <input
              ref={inputRef}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onBlur={handleBlur}
              placeholder={placeholder}
              className="
                w-full text-sm pl-4 pr-10 py-2.5 rounded-full border border-brand-700
                outline-none focus:ring-0 focus:border-brand-700
                placeholder-brand text-brand bg-white
              "
            />
            <button
              type="submit"
              className="absolute right-6 md:right-3 top-1/2 -translate-y-1/2 text-brand"
              aria-label="Submit search"
            >
              <Search className="w-4 h-4 text-brand" />
            </button>
            {/* Close button for mobile */}
            {showInput && (
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 md:hidden"
                onClick={() => setShowInput(false)}
                aria-label="Close search"
                style={{ background: "transparent" }}
              >
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
