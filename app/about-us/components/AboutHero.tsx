
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="pt-28 pb-5 container mx-auto">
      <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
        <Image
          src="/hero.jpeg"
          alt="About us background"
          fill
          priority
          className="object-cover object-center brightness-75 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-white">
          Designing the future of living and renting
          </h1>
          <p className="text-xs sm:text-base md:text-lg font-medium text-white mt-2 mb-4">
          Our mission is to design - through technology - incredible spaces where people are at home, anywhere in the world.
          </p>
        </div>
      </section>
    </div>
  );
}

