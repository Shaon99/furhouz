import React from "react";

type Card = {
  title: string;
  body: string;
};

const cards: Card[] = [
  {
    title: "Furnished Apartment for Rent in Gulshan",
    body:
      "Gulshan is the most luxurious place to choose when looking for a place to stay in Dhaka. Roads, buildings, and infrastructures are highly developed here. It’s a highly secure place. 29 resident embassies are located in Gulshan. If you are working in an embassy, Gulshan will be the most suitable place for you. Recreation facilities are also available here. Parks and clubs are available to make your leisure moment enjoyable.",
  },
  {
    title: "Furnished Apartment for Rent in Banani",
    body:
      "Are you looking for a luxurious apartment rent in Dhaka at a comparably lower price than in Gulshan? Banani will be the ideal option for you. You can get all the facilities of living in an elite area. It’s connected with Gulshan. It’s only a matter of a short time to move from Banani to Gulshan. Proper security, planned roads, and convenient transportation have made Banani a demandable place for the tenant.",
  },
  {
    title:
      "Furnished Apartment for Rent in Baridhara Diplomatic Zone",
    body:
      "Being a dedicated diplomatic zone, Baridhara is the most secure place to live in Dhaka. If you want to stay in a secure environment, you can choose this place without any hesitation. Moreover, the area is totally free from noise and vehicle horns. The green zone has made it a sustainable area. Parks and clubs are available for recreation. Overall, you can fulfill all of your expectations. It will be best for tourists and foreigners.",
  },
];

export default function PrimeLocations() {
  return (
    <section className="mb-10 text-gray-800">
      <div className="container mx-auto text-gray-800">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brand">
          Prime Location to Rent Furnished Apartment in Dhaka
        </h2>

        {/* Intro */}
        <p className="mt-4 leading-relaxed md:text-start text-black text-start">
          Fully Furnished apartments are often located in desirable areas. It will be convenient for tourists and foreigners to explore new surroundings.
          Here’s the list of the 3 most attractive places to rent an apartment in Dhaka city.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-xl bg-white p-6 md:p-8 text-black w-full h-full flex flex-col justify-between shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#0f4c81]">
                {c.title}
              </h3>
              <p className="mt-1 leading-relaxed text-black text-justify text-sm pb-2">
                {c.body}
              </p>
            </article>
          ))}
        </div>

        {/* Footer paragraph */}
        <p className="mt-10 leading-relaxed text-black text-sm text-justify md:text-start">
          At this stage, you should have got in-depth knowledge about Furnished Apartment Rent in Dhaka. Now, you know whether you should rent a furnished apartment or not.
          You can have a look at our rental listings to get the best apartments in your desired area. If you want to rent an apartment, contact our team to get rental assistance.
          It will be a win-win situation both for tenants and owners. Good luck to you!
        </p>
      </div>
    </section>
  );
}
