"use client";

import { useState, useRef } from "react";
import { Search } from "lucide-react";

export default function ResponsiveSearch({
  placeholder = "Search your products",
  onSubmit,
  className = "",
}) {
  const [q, setQ] = useState("");
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(q);
  };

  const handleIconClick = () => {
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleBlur = () => {
    // Hide input on blur only for small screens
    if (window.innerWidth < 768) {
      setShowInput(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`block md:block lg:hidden relative ${className} md:ml-16 ml-2`}
      aria-label="Search"
    >
      <div className="flex items-center justify-end w-full">
        {/* Input field — visible on md+ always, toggle on mobile */}
        <div
          className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
            showInput ? "w-44" : "w-0"
          } md:w-[22rem]`}
        >
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            className="
              w-full text-sm px-4 py-2 rounded-full border border-[#f4a321]
              outline-none focus:ring-0 focus:border-gray-300
              placeholder-gray-500 text-gray-800
            "
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
        {/* Search icon button (always visible on mobile, at right side) */}
        {showInput ? null : (
          <button
            type="button"
            onClick={handleIconClick}
            className="p-2 rounded-full bg-white text-gray-600 hover:text-gray-800 focus:outline-none md:hidden ml-2"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}
