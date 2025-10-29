
export type AreaSlug = "gulshan" | "banani" | "baridhara" | "bashundhara";

type Bullet = { title: string; body: string };
type ReasonCard = { title: string; body: string };

export type FurnishedCopy = {
  hero: {
    title: string; 
    intro1: string; 
    intro2: string; 
  };
  facilities: {
    bullets: Bullet[]; 
  };
  reasons: {
    heading: string;
    cards: ReasonCard[]; 
    recreationTitle: string;
    recreationBody: string; 
    closing: string; 
  };
  faq: {
    items: { q: string; a: string }[];
  };
};

const t = (area: string) => ({
  hero: {
    title: `Furnished Apartment Rent In ${area}`,
    intro1:
      `${area} is well known for its modern amenities, upscale shopping centers, luxurious lifestyle, and numerous restaurants. As demand is high, it often becomes difficult to find apartments for rent in ${area}. Thankfully, you don’t have to face any difficulties.`,
    intro2:
      `“FurHouz” is a dedicated furnished accommodation rental platform that assists tenants to find fully furnished and affordable or luxurious apartments for rent in Dhaka — including ${area}.`,
  },
  facilities: {
    bullets: [
      {
        title: "Convenience",
        body:
          "Convenience is the most vital facility you are going to enjoy in a furnished apartment. No need to spend time buying furniture or home appliances — just move in and start living.",
      },
      {
        title: "Flexibility",
        body:
          "Different furniture, designs, and colors give you the flexibility to choose an apartment without compromising your requirements.",
      },
      {
        title: "Primary Cost savings",
        body:
          "Buying new furniture is expensive. Choosing a furnished apartment often saves you money in the long run.",
      },
      {
        title: "Maintenance",
        body:
          "Landlords are typically responsible for appliance repairs. You stay free from most maintenance worries.",
      },
      {
        title: "Short-term living",
        body:
          "Perfect for tourists, travelers, embassy people, and foreigners on short stays — move in quickly and live comfortably.",
      },
      {
        title: "Peace of mind",
        body:
          "Ready-to-live units reduce setup hassle so you can focus on work and life from day one.",
      },
    ],
  },
  reasons: {
    heading: `Why Should You Rent A Furnished Apartment in ${area}?`,
    cards: [
      {
        title: "Luxurious Lifestyle",
        body:
          `${area} hosts high-end properties with modern architecture, education centers, healthcare facilities, and recreation hubs for a peaceful environment.`,
      },
      {
        title: "Strong Security",
        body:
          "The neighborhood is properly guarded with strong community management — enjoy a sense of safety and peace of mind.",
      },
      {
        title: "Abundance Of Embassies",
        body:
          "Easy access to visa/consular services and international communities adds an exclusive flavor to the neighborhood.",
      },
    ],
    recreationTitle: "Recreation Center",
    recreationBody:
      `Love spending time outdoors? ${area} offers scenic retreats and clubs to enjoy leisure away from the city's hustle and bustle.`,
    closing:
      "If you’re thinking about renting an apartment, a furnished apartment in this area can make your living experience more enjoyable. Browse FurHouz to find your dream apartment.",
  },
});
        
export const FURNISHED_COPY: Record<AreaSlug, FurnishedCopy> = {
  gulshan: {
    ...t("Gulshan"),
    faq: {
      items: [
        {
          q: "How much should I pay for a furnished apartment in Gulshan?",
          a: "It usually ranges between BDT 80,000 to BDT 450,000 per month depending on size, building, and facilities.",
        },
        {
          q: "Which type of furniture is available?",
          a: "Typically: bed, sofa, dining table, chairs; many listings also include TV, fridge, microwave, and washing machine.",
        },
        {
          q: "Are there any additional fees?",
          a: "Some landlords ask for a security deposit (1–2 months’ rent). It depends on the rental agreement.",
        },
      ],
    },
  },
  banani: {
    ...t("Banani"),
    faq: {
      items: [
        {
          q: "How much should I pay in Banani?",
          a: "Commonly BDT 70,000 to BDT 300,000+ per month, based on building quality and apartment size.",
        },
        {
          q: "Is housekeeping included?",
          a: "Some buildings offer paid housekeeping or building maintenance; availability varies by listing.",
        },
        {
          q: "Parking availability?",
          a: "Most premium units include one parking slot; confirm in the agreement.",
        },
      ],
    },
  },
  baridhara: {
    ...t("Baridhara"),
    faq: {
      items: [
        {
          q: "Typical rent in Baridhara?",
          a: "Around BDT 100,000 to BDT 500,000+ per month for fully furnished units in diplomatic zones.",
        },
        {
          q: "Diplomatic area rules?",
          a: "Some roads have controlled access and extra security checks; coordinate move-in timing with building management.",
        },
        {
          q: "Short-term lease?",
          a: "Short-term furnished leases are available on select listings; terms vary by landlord.",
        },
      ],
    },
  },
  bashundhara: {
    ...t("Bashundhara"),
    faq: {
      items: [
        {
          q: "How much should I pay in Bashundhara?",
          a: "Roughly BDT 50,000 to BDT 250,000 per month depending on block, building, and amenities.",
        },
        {
          q: "Near universities & malls?",
          a: "Yes—many listings are close to universities, hospitals, and shopping malls; great for families and students.",
        },
        {
          q: "Utility bills included?",
          a: "Usually not; utilities (electricity, gas, water, internet) are billed separately unless stated otherwise.",
        },
      ],
    },
  },
};
