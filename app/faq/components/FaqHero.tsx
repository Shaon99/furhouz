
import Image from "next/image";

export default function FAQHero() {
  return (
    <div className="pt-28 pb-5 container">
        <section className="relative h-[70vh] sm:h-[100vh] w-full overflow-hidden max-w-[1350px] mx-auto">
      <Image
        src="/hero.jpeg"
        alt="FAQ background"
        fill
        priority
        className="object-cover object-center brightness-75 rounded-md"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-sm sm:text-lg font-medium text-gray-200 tracking-wider">
          Frequently asked questions
        </p>
        <h1 className="mt-3 text-3xl sm:text-5xl font-bold">
          What can we help you with?
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-2xl font-medium">
          Check out our FAQ; your answer might already be here for you!
        </p>
      </div>
    </section>
    </div>
  );
}
