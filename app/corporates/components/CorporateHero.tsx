
import Image from "next/image";
import Link from "next/link";

export default function CorporateHero() {
  return (
    <div className="pt-32 pb-5">
      <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
        <Image
          src="/hero.jpeg"
          alt="Corporate background"
          fill
          priority
          className="object-cover object-center brightness-75 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-12">
            <div className="bg-[#c4bcbcd1] p-4 rounded-lg">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-[#09649c]">
            Rent corporate apartments{" "}
            <span className="text-white font-bold">
              saving time and 
              <br className="hidden sm:block" /> money
            </span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-medium text-white mt-2 mb-4 opacity-80">
            Your business travellers will love them. Because there is nothing better than living in a FurHouz.
          </p>
          <Link
            href="/get-request"
            className="bg-[#09649c] hover:bg-[#085585] text-white font-semibold rounded px-5 py-2 text-sm shadow mt-1 mb-2 transition-colors inline-block"
          >
            Request a quote
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

