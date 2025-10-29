// lib/areaData.ts
export type Section =
  | { heading: string; items: { name: string; description: string }[]; body?: undefined }
  | { heading: string; items: string[]; body?: undefined }
  | { heading: string; body: string; items?: undefined };

export type Faq = { q: string; a: string };

export interface AreaData {
  title: string;
  sections: Section[];
  faqs: Faq[];
}

export const DATA: Record<string, AreaData> = {
  /* ========================= GULSHAN (kept as you provided) ========================= */
  gulshan: {
    title: "Gulshan – Everything You Need To Know",
    sections: [
      {
        heading: "Gulshan – Everything You Need To Know",
        body:
          "Gulshan is a vibrant and cosmopolitan neighbourhood located in the heart of the capital city Dhaka. In Gulshan, you are going to find the perfect blend of modernity and tradition. It makes it a dream destination for both residents and travelers.\n\nIf you are thinking about moving to Gulshan, this article is going to assist you a lot. Through this post, we are going to provide you with a complete tour guide about Gulshan. We will highlight everything from its comfortable living environment to the best places to visit.",
      },
      {
        heading: "Gulshan – The Exact Location",
        body:
          "Gulshan is located in North Dhaka. It is located beside Banani and Baridhara. The area is divided into Gulshan Model Town, Gulshan Circle 1 and Gulshan Circle 2. The area has 19 wards and 10 sectors in total. 50% of the total area is dedicated to residential areas.\n\nThe rest of the area is used for commercial and diplomatic purposes. If you are looking for a luxurious environment to live in Dhaka city, Gulshan will be the best place for you. It has all the facilities to be considered a true posh area to live in.",
      },
      {
        heading: "How Much Secured Gulshan Is For Spectators And Residents?",
        body:
          "Safety is a key aspect to think about when you are willing to get settled in an area. Gulshan is considered one of the most highly secured areas not only in Dhaka but also within the entire Bangladesh. This is the living place of expat, elite-class people, celebrities, VIPs, businessmen, and tourists. That’s why the government has set up tight security for this area. Most of the areas are covered by CCTV cameras and observed by police.\n\nIf you want to stay here with your family, you can work freely without worrying about their safety. Other security options like fire services are also available 24/7. Whether you are a tourist or a resident, you can enjoy a secure environment. The rate of criminal activity is lowest in Gulshan compared to other areas of Dhaka. Overall, we can rate it 10 out of 10 when it comes to security in Gulshan.",
      },
      {
        heading: "Top 3 Places To Visit In Gulshan For Travelers",
        items: [
          {
            name: "Gulshan Lake Park",
            description:
              "First on our list is Gulshan Lake Park. This is a calm place in the middle of the bustling city. If you are seeking a breath of fresh air, it will be the perfect place for you to enjoy nature. Literally, you're going to get a chance to connect with nature. The park features lush greenery, well-manicured lawns, and some beautiful neutral sights. That creates a soothing ambience.\nThe highlight of the park is the lake. It is adorned with charming wooden bridges. Visitors can take strolls along the walking paths. Also, you can find a cozy spot for relaxing. The park also attracts joggers and exercise enthusiasts. In the early mornings and evenings, they come here to spend time. After a busy day, Gulshan Lake Park is the perfect place to get rid of all tiredness.",
          },
          {
            name: "Hatirjheel",
            description:
              "Hatirjheel is the perfect blend of natural beauty with recreational facilities. The area offers a range of activities for visitors to enjoy. You can go boating on the lake. It will provide a refreshing experience to make you feel good. Also, it will allow you to enjoy the surrounding scenery from a different perspective.\nNowadays, bicycle rentals are also available here. You can explore the area on two wheels. Surprisingly, there are dedicated bike paths to ensure a safe ride. Additionally, the lake complex features well-maintained walking paths. Hatirjheel is an excellent spot for families and friends to spend quality time together. There are some restaurants nearby Hatirjheel to enjoy your favourite cuisine in a peaceful environment.",
          },
          {
            name: "Justice Shahabuddin Ahmed Park",
            description:
              "Justice Shahabuddin Ahmed Park is a soothing place that will make you feel peaceful with its divine environment. If you love to enjoy your leisure in nature, you are going to love this park. You can come here with your friends and family. Facilities for disabled persons are also available. You can sit, have a walk or do cycling.\nThe park is surrounded by large trees. You will feel like you have gone outside the busy city. The place is highly secured. It has two entrance points observed by security guards. Residents, embassy officials, ambassadors, and travelers come to this park to spend their leisure. Beggars and street hawkers are not allowed here. Even pets are not allowed here.",
          },
        ],
      },
      {
        heading: "5 Top-Rated Restaurants in Gulshan For Foodies",
        items: [
          {
            name: "Izumi Japanese Kitchen",
            description:
              "You will get here popular Japanese dishes like Sushi, Maki Rolls, Wagyu, Kobe, Snow fish, and Halibut. On different occasions, they offer a special menu for their customers. If you love to eat Japanese cuisine, Shabu Shabu and salmon avocado sushi rolls are highly recommended for you. You can visit this restaurant to taste authentic Japan’s food.",
          },
          {
            name: "Bella Italia",
            description:
              "As you can guess by its name, Bella Italia is a popular restaurant for serving Italian cuisine. This is the place where you can taste the best Italian foods in Dhaka. Do you love pizza? You can try their Pizza Margherita. You can also try Funghi Trifolati as a side dish. Penne Valadier is their signature item.",
          },
          {
            name: "Secret Recipe",
            description:
              "You can enjoy quality food in a beautiful environment in Secret Recipe. They serve fast food, beef, chicken items, cheesecakes and cream cakes. If you want to try a beef item, Fried Nori Beef Taco is recommended for you. Also, their Chicken Teriyaki and Wasabi Chicken taste excellent. They are also popular for making delicious cakes.",
          },
          {
            name: "Bunka",
            description:
              "If you are looking for a restaurant where you can find several different cuisines, Bunka is the place that you are searching for. You will get here 100+ items of Japanese, Korean, Thai, Chinese and Indian cuisines. The environment is pretty beautiful too. You should also try their delicious dessert.",
          },
          {
            name: "Thai Emerald",
            description:
              "Last, but not least, the Thai Emerald Gulshan is highly recommended for having lunch and dinner. Seafood coconut milk soup, fish cake, seafood salad, vermicelli salad, chicken green curry, and beef basil leaf are some of their special items. Their staffs are very friendly. This is one of the best restaurants in Dhaka for Thai food.",
          },
        ],
      },
      {
        heading: "3 Luxurious Hotels In Gulshan: Highly-Rated",
        items: [
          {
            name: "Doreen Hotels & Resorts",
            description:
              "This is one of the best luxurious hotels in Gulshan for tourists and visitors. You will get facilities like Swimming Pool, Gym, Smoke Detector, Air Conditioning, Elevator/Lift, CCTV, Fire Extinguishers, Electronic Keycard and some other facilities as well. The standard room for 2 persons costs BDT 12,495 per night.",
          },
          {
            name: "The Westin Dhaka",
            description:
              "The Westin Dhaka is a popular choice for tourists and foreigners to stay in Gulshan. It offers 88+ facilities including Swimming Pool, Spa, Steam and Sauna, Gym, Dry Cleaning Service, Smoking Rooms, Intercom, Dining Area, Barbeque, Bar and Bakery. A Deluxe Twin Room costs approximately 17000 BDT per night. Airport and Railway services both are easily accessible from this hotel.",
          },
          {
            name: "Renaissance Dhaka Gulshan Hotel",
            description:
              "Are you looking for a hotel with a Swimming Pool, Spa, and Gym? You will get all of those 3 facilities in the Renaissance Dhaka Gulshan Hotel. Alongside this, they also offer Dry Cleaning Service, Free Wifi and Free Parking. A Deluxe Room having 1 King Bed will cost you around 18000 BDT per night. Considering the services they provide, they're worth the price.",
          },
        ],
      },
      {
        heading: "Best Academic Institutes In Gulshan, Dhaka",
        items: [
          "Manarat Dhaka International School & College",
          "Islamic International School & College",
          "Cambrian School & College",
          "Crescendo Educational Institution CEI",
          "London School of Commerce, Dhaka",
          "Gulshan Model School & College",
        ],
      },
      {
        heading: "Top Hospitals In Gulshan",
        items: [
          "United Hospital Limited",
          "Cure Medical Centre",
          "Fairways Medical Centre",
          "Gulshan Shasthoseba Kendra",
          "Biedem (Bihs) Gulshan",
          "Gulshan Medicare",
          "Parkway Health Dmrc",
          "Bgmea Health Center",
        ],
      },
      {
        heading: "Embassies Located in Gulshan, Dhaka",
        items: [
          "Embassy of the United States of America",
          "High Commission of India",
          "High Commission of the United Kingdom",
          "Embassy of Japan",
          "Embassy of Germany",
          "Embassy of France",
          "Embassy of China",
          "Embassy of Italy",
          "Embassy of Saudi Arabia",
          "Embassy of Russia",
          "Embassy of Australia",
          "Embassy of Canada",
          "Embassy of Turkey",
          "Embassy of South Korea",
          "Embassy of the United Arab Emirates",
          "Embassy of Sweden",
          "Embassy of the Netherlands",
          "Embassy of Switzerland",
          "Embassy of Norway",
          "Embassy of Denmark",
          "Embassy of Belgium",
          "Embassy of Spain",
          "Embassy of Brazil",
          "Embassy of Egypt",
          "Embassy of Qatar",
        ],
      },
      {
        heading: "Top 11 Commercial Tower Projects in Gulshan",
        items: [
          "BTI Landmark",
          "Crystal Palace",
          "Shanta Glass House",
          "Khandakar Tower",
          "SimpleTree Anarlaki",
          "Navana Pristine Pavillion",
          "Lotus Kamal Tower",
          "Palmal Tower",
          "Bay Edge Water",
          "Rangs FC Square",
          "Laila Tower",
        ],
      },
      {
        heading: "Final Words",
        body:
          "At this point, you should have an in-depth knowledge of every essential information about Gulshan. Now, you can visit Gulshan conveniently without missing any popular places. Also, it will be easier for you to decide where to live and where to visit in Gulshan.",
      },
    ],
    faqs: [
      {
        q: "Which are the best places to dine in Gulshan?",
        a: "Some popular dining spots in Gulshan include Café Dine Divine, Le Petit Paris, and Amma’s Kitchen.",
      },
      {
        q: "Is Gulshan a safe area for expats?",
        a: "Surely, Gulshan is considered the safest area in Dhaka. This is a favourable choice for tourists and expats.",
      },
      {
        q: "What shopping options are available in Gulshan?",
        a: "A wide range of shopping malls and boutique stores are available in Gulshan. You can go to the “Jamuna Future Park”. This is the biggest shopping mall in South Asia.",
      },
      {
        q: "Are there any cultural landmarks in Gulshan?",
        a: "The Gulshan Lake Park and Gulshan Central Mosque are significant cultural landmarks that are definitely worth a visit.",
      },
    ],
  },

  /* ========================= BANANI (FULL) ========================= */
  banani: {
    title: "Banani – Everything You Need To Know",
    sections: [
      {
        heading: "Banani – Everything You Need To Know",
        body:
          "Banani is one of Dhaka’s most lively neighbourhoods—famous for its café culture, boutique shopping, and youthful vibe. It borders Gulshan on the east and Tejgaon on the west, making it extremely central for commuters and professionals.\n\nThis guide covers everything about Banani—from exact location and safety to the best places to visit, restaurants, hotels, schools, hospitals and more.",
      },
      {
        heading: "Banani – The Exact Location",
        body:
          "Banani sits along the airport corridor of North Dhaka. It is connected by the Airport Road (Mymensingh Highway), Kemal Ataturk Avenue and the Banani–Gulshan link roads. Banani DOHS and Mahakhali are adjacent, while Gulshan 1 is within a few minutes’ drive.\n\nThe heart of the area is Road 11, known as the restaurant lane, and Road 12/19 for cafés and lifestyle stores.",
      },
      {
        heading: "How Much Secured Banani Is For Spectators And Residents?",
        body:
          "Banani maintains round-the-clock security patrols with CCTV in key corners, especially around commercial roads and the lake. The locality hosts numerous corporate houses, banks, and embassies nearby, so police response is fast and organized.\n\nFamilies choose Banani for its balanced mix of residential blocks and amenities. Fire and medical services are reachable within minutes; crime rate is comparatively low in the commercial belts.",
      },
      {
        heading: "Top 3 Places To Visit In Banani For Travelers",
        items: [
          {
            name: "Banani Lake & Walkway",
            description:
              "A refreshing waterside walkway popular for morning jogs and evening strolls. The tree-lined path, benches and small bridges make it a cosy escape in the middle of the city.",
          },
          {
            name: "Banani Road 11 (Food Street)",
            description:
              "The most happening food strip in North Dhaka—stacked with casual eateries, dessert bars and international cuisine. Evenings get vibrant with friends and families.",
          },
          {
            name: "Chairman Bari Circle",
            description:
              "Historic intersection connecting Old AirPort Road, Mohakhali and Banani. It’s a convenient hub to head toward Tejgaon, Gulshan or the airport.",
          },
        ],
      },
      {
        heading: "5 Top-Rated Restaurants in Banani For Foodies",
        items: [
          {
            name: "Spaghetti Jazz",
            description:
              "A long-time favourite for Italian food—handmade pastas, thin-crust pizzas and cosy ambience.",
          },
          {
            name: "Tarka",
            description:
              "Modern Indian and pan-Asian plates; popular for kebabs, biriyani twists and family dinners.",
          },
          {
            name: "Gloria Jean’s Coffees (Banani)",
            description:
              "Classic coffeehouse vibe on Kemal Ataturk Avenue—great for meetups, quick bites and remote work.",
          },
          {
            name: "Cheez",
            description:
              "Cheesy fast food, burgers and loaded fries—crowd-puller for groups and students.",
          },
          {
            name: "Tastebud / Butlers Chocolate Café (area)",
            description:
              "Dessert and chocolate drinks spot—perfect for a sweet finish after dinner on Road 11.",
          },
        ],
      },
      {
        heading: "3 Recommended Hotels In/near Banani",
        items: [
          {
            name: "Hotel Sarina",
            description:
              "Business-friendly hotel at Banani 27 with pool, gym, multiple restaurants and easy airport access.",
          },
          {
            name: "Lakeshore Banani",
            description:
              "Boutique-style comfort near the lake; known for courteous service, clean rooms and a quiet feel.",
          },
          {
            name: "After Hours Residence / Tropical Daisy (nearby)",
            description:
              "Good value options around Banani/Gulshan belt—handy for longer stays and expat guests.",
          },
        ],
      },
      {
        heading: "Best Academic Institutes In Banani, Dhaka",
        items: [
          "HURDCO International School",
          "Banani Bidyaniketan School & College",
          "Sunnydale School (Banani Branch)",
          "Oxford International School (nearby)",
          "Primeasia University (Banani campus)",
        ],
      },
      {
        heading: "Top Hospitals & Clinics In Banani",
        items: [
          "Praava Health (near Banani)",
          "Labaid Specialized / Diagnostic (nearby)",
          "Banani Clinic Limited",
          "Smart Medical Center",
          "Resolution Medical Services",
        ],
      },
      {
        heading: "Popular Commercial Towers In Banani",
        items: [
          "Bashati Horizon",
          "Bulu Ocean Tower",
          "Green Grandeur",
          "BRAC Centre (nearby Mohakhali)",
          "NBL Tower (Kemal Ataturk Ave.)",
        ],
      },
      {
        heading: "Final Words",
        body:
          "Banani blends a youthful lifestyle with excellent connectivity. Whether you work in Tejgaon, Mohakhali or Gulshan—the commute is short, the food scene is rich, and daily amenities are within walking distance.",
      },
    ],
    faqs: [
      { q: "Is Banani good for nightlife?", a: "Yes—Road 11 and nearby lanes are lively in the evenings with cafés and eateries." },
      { q: "How far is Banani from the Airport?", a: "Around 15–25 minutes in regular traffic via the Airport Road corridor." },
      { q: "Is Banani family-friendly?", a: "Yes. Banani has schools, clinics, parks and community facilities around most residential blocks." },
    ],
  },

  /* ========================= BARIDHARA (FULL) ========================= */
  baridhara: {
    title: "Baridhara – Everything You Need To Know",
    sections: [
      {
        heading: "Baridhara – Everything You Need To Know",
        body:
          "Baridhara is Dhaka’s premier diplomatic enclave—calm, green and highly regulated. It is home to numerous embassies, international organizations and high-end residences, including the planned community of Baridhara DOHS.",
      },
      {
        heading: "Baridhara – The Exact Location",
        body:
          "Baridhara lies to the east of Gulshan and north of Bashundhara. The area connects to Pragati Sarani and the Gulshan–Baridhara Link Road. Baridhara DOHS sits on the eastern side with easy access to Bashundhara and the airport route.",
      },
      {
        heading: "How Much Secured Baridhara Is For Spectators And Residents?",
        body:
          "As a diplomatic zone, Baridhara implements strict access control with multiple police check-posts, embassy security and CCTV coverage. Streets are well-planned, speed is controlled and pedestrian safety is prioritized.\n\nFor families, the environment feels quiet and orderly. Parks, lakes and community clubs make it a serene residential pocket in the middle of the city.",
      },
      {
        heading: "Top 3 Places To Visit In Baridhara For Travelers",
        items: [
          {
            name: "Baridhara Park & Lake",
            description:
              "A peaceful patch of green with waterside paths—ideal for jogs, strolling with kids or reading on a bench.",
          },
          {
            name: "Baridhara DOHS Community",
            description:
              "Tree-lined residential blocks, kids’ play areas and community fields. The lanes are wide and comparatively traffic-free.",
          },
          {
            name: "United Nations & Embassy Quarter",
            description:
              "Drive through the embassy roads for impressive architecture and spotless streets—distinct from the city’s usual bustle.",
          },
        ],
      },
      {
        heading: "5 Top-Rated Restaurants/Cafés around Baridhara",
        items: [
          {
            name: "Ambrosia / Lake Terrace (nearby Gulshan)",
            description:
              "Continental and local menus with gentle ambience—popular for family dinners and small gatherings.",
          },
          {
            name: "Izumi (nearby Gulshan 2)",
            description:
              "Fine Japanese dining with sushi, sashimi and grill favourites—worth the short drive.",
          },
          {
            name: "The Pit Grill / Meat Theory (belt)",
            description:
              "For steak and barbecue lovers—modern rustic vibe with hearty portions.",
          },
          {
            name: "North End Coffee / Crimson Cup (axis)",
            description:
              "Coffee chains for quick meetups, laptop work and bakery bites.",
          },
          {
            name: "Gloria Jean’s / Butlers (corridor)",
            description:
              "Dessert and coffee stops within 10–12 minutes’ reach via the link roads.",
          },
        ],
      },
      {
        heading: "3 Recommended Hotels near Baridhara",
        items: [
          {
            name: "Six Seasons Hotel (Gulshan)",
            description:
              "Lakeside views, pool, gym and premium rooms—one of the closest five-star options to Baridhara.",
          },
          {
            name: "Renaissance Dhaka Gulshan",
            description:
              "International-brand comfort with pool, spa and multiple dining outlets; quick access via link road.",
          },
          {
            name: "The Westin Dhaka",
            description:
              "Five-star stay with spa, steam/sauna and fine dining; easy to reach from Baridhara.",
          },
        ],
      },
      {
        heading: "Best Academic Institutes In/around Baridhara",
        items: [
          "American International School Dhaka (AISD)",
          "Baridhara Scholars’ Institution",
          "Baridhara British School",
          "Scholastica (nearby) / DPS STS (nearby)",
        ],
      },
      {
        heading: "Top Hospitals & Clinics near Baridhara",
        items: [
          "Evercare Hospital (Bashundhara)",
          "United Hospital (Gulshan)",
          "Labaid Diagnostic (Notun Bazar/nearby)",
          "Praava Health (Banani side)",
        ],
      },
      {
        heading: "Major Embassies Located in Baridhara",
        items: [
          "Embassy of the United States (complex)",
          "Embassy of Japan",
          "Embassy of China",
          "Embassy of Saudi Arabia",
          "Embassy of Korea",
          "Embassy of Norway",
          "Embassy of Thailand",
          "High Commission of Canada",
          "High Commission of India (nearby)",
        ],
      },
      {
        heading: "Final Words",
        body:
          "For those who value serenity, greenery and world-class security, Baridhara is hard to beat. It is perfectly placed between Gulshan’s business zone and Bashundhara’s universities and shopping malls.",
      },
    ],
    faqs: [
      { q: "Is Baridhara good for families?", a: "Yes. Low traffic, parks, community fields and high security make it ideal for families." },
      { q: "What’s the difference between Baridhara and Baridhara DOHS?", a: "Baridhara is the diplomatic zone; DOHS is a planned residential area adjacent to it with its own community facilities." },
      { q: "Are there supermarkets nearby?", a: "Yes—multiple superstores are within a short drive across the Baridhara–Gulshan–Bashundhara triangle." },
    ],
  },

  /* ========================= BASHUNDHARA (FULL) ========================= */
  bashundhara: {
    title: "Bashundhara – Everything You Need To Know",
    sections: [
      {
        heading: "Bashundhara – Everything You Need To Know",
        body:
          "Bashundhara Residential Area is a large, master-planned neighbourhood known for wide roads, gated blocks and a calmer suburban feel. It is home to top universities, hospitals and Bangladesh’s largest shopping mall.",
      },
      {
        heading: "Bashundhara – The Exact Location",
        body:
          "Located to the east of Baridhara and north-east of Notun Bazar, Bashundhara connects through Pragati Sarani and Kuril flyover to the airport corridor. Internal avenues (A–J blocks) keep traffic more organized than many old city areas.",
      },
      {
        heading: "How Much Secured Bashundhara Is For Spectators And Residents?",
        body:
          "Entry points are monitored with gates and security staff; many blocks run their own community patrols. Roads are well-lit and comparatively less congested at night. With universities and hospitals inside the area, emergency help is quick to access.",
      },
      {
        heading: "Top 3 Places To Visit In Bashundhara For Travelers",
        items: [
          {
            name: "Jamuna Future Park",
            description:
              "One of South Asia’s biggest malls—cinemas, arcade, fashion floors and a massive food court. A go-to weekend spot for families.",
          },
          {
            name: "Evercare Campus Zone",
            description:
              "Modern international hospital complex area—clean surroundings, cafés and pharmacy strips around the campus.",
          },
          {
            name: "PEB Field & Community Parks",
            description:
              "Open fields and pocket parks across blocks where residents jog, play and hold community events.",
          },
        ],
      },
      {
        heading: "5 Top-Rated Restaurants in/around Bashundhara",
        items: [
          {
            name: "Herfy / American Burger (JFP strip)",
            description:
              "Quick bites for families and hangouts inside Jamuna Future Park and the outer ring.",
          },
          {
            name: "Woodhouse Grill",
            description:
              "Steak and continental dishes with warm interiors—popular for group dinners.",
          },
          {
            name: "Barcode Café / TakeOut (belt)",
            description:
              "Casual foods—burgers, pizzas, snacks—good price-to-portion and late hours.",
          },
          {
            name: "Cuppa Coffee / North End (cluster)",
            description:
              "Coffee and bakery chains ideal for study sessions and meetings.",
          },
          {
            name: "Madchef / Chillox (cluster)",
            description:
              "Trendy fast-casual spots famous for fusion burgers and loaded fries.",
          },
        ],
      },
      {
        heading: "3 Recommended Hotels/Residence near Bashundhara",
        items: [
          {
            name: "Doreen / Lakeshore (Gulshan access)",
            description:
              "If you want five-star comforts, Gulshan’s belt is 10–15 minutes away via link roads.",
          },
          {
            name: "The Way Dhaka (nearby)",
            description:
              "Upscale boutique stay reachable through Notun Bazar–Gulshan axis.",
          },
          {
            name: "White Palace / Contemporary Serviced Apartments",
            description:
              "Value and long-stay friendly options within the Bashundhara–Notun Bazar corridor.",
          },
        ],
      },
      {
        heading: "Best Academic Institutes In Bashundhara",
        items: [
          "North South University (NSU)",
          "Independent University Bangladesh (IUB)",
          "International School Dhaka (ISD)",
          "Viqarunnisa Noon School (Branch)",
          "Scholastica (Junior Campus)",
        ],
      },
      {
        heading: "Top Hospitals & Diagnostics In Bashundhara",
        items: [
          "Evercare Hospital Dhaka",
          "United Hospital (reachable via link)",
          "Popular Diagnostic Centre (Notun Bazar side)",
          "LabAid Diagnostics (corridor)",
        ],
      },
      {
        heading: "Growing Commercial & Tower Projects",
        items: [
          "Bashundhara City Development (JFP business wing)",
          "Bashundhara Convention Center",
          "Future Park Corporate Offices",
          "Block-wise High-rise Apartments",
        ],
      },
      {
        heading: "Final Words",
        body:
          "Bashundhara is ideal for families who prefer wider roads, planned blocks and proximity to top universities and a mega-mall—without leaving the city limits.",
      },
    ],
    faqs: [
      { q: "Is Bashundhara suitable for families?", a: "Yes—planned blocks, playgrounds and universities/hospitals nearby make it a family favourite." },
      { q: "How far is Bashundhara from the airport?", a: "Around 15–25 minutes via Kuril flyover depending on traffic." },
      { q: "Are there good schools inside Bashundhara?", a: "Yes—ISD, NSU, IUB and multiple reputed school branches operate within or beside the area." },
    ],
  },
};

export default DATA;
