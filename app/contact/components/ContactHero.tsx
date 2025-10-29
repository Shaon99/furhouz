
import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="pt-28 pb-5 container mx-auto">
      <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
        <Image
          src="/hero.jpeg"
          alt="Contact us background"
          fill
          priority
          className="object-cover object-center brightness-75 rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-12 text-center items-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-1 text-white">
          Get in touch with us
          </h1>
          
        </div>
      </section>
    </div>
  );
}

