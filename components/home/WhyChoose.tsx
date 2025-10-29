import Image from "next/image";

type Feature = {
  title: string;
  desc: string;
  icon: string; 
  iconAlt?: string;
};

type Props = {
  heading?: string;
  brandWord?: string; 
  className?: string;
};

/* WHY CHOOSE SECTION (FurHouz style) */
export default function WhyChooseSection({
  heading = "Why people choose",
  brandWord = "FurHouz",
  className = "",
}: Props) {
  const FEATURES: Feature[] = [
    {
      icon: "/cities.png",
      title: "Multiple Cities",
      desc: "With luxury apartments available across several areas, and more in the pipeline, you can be sure you'll find an apartment close to where you want to be.",
    },
    {
      icon: "/experties.png",
      title: "Local Experts",
      desc: "Our teams know the cities we operate in like the back of their hand. On hand to help you feel at home.",
    },
    {
      icon: "/furnished.png",
      title: "Fully Furnished",
      desc: "Our range of apartment types means you can live with us through University and beyond into professional life – always guaranteed of the same quality and service.",
    },
    {
      icon: "/apartment.png",
      title: "Apartments for Life",
      desc: "Our range of apartment types means you can live with us through University and beyond into professional life – always guaranteed of the same quality and service.",
    },
    {
      icon: "/utility.png",
      title: "All Utilities Included",
      desc: "All our apartments come fully furnished to the highest standard, from cozy living furniture to comfy beds and top-brand appliances.",
    },
    {
      icon: "/PManager.png",
      title: "Dedicated Property Manager",
      desc: "Every tenant has access to a dedicated property manager for help with any issues or questions.",
    },
    {
      icon: "/award.png",
      title: "Award-winning",
      desc: "We’ve won a ton of awards for customer service and dedication to sustainability.",
    },
    {
    icon: "/Qguaranteed.png",
      title: "Quality guaranteed",
      desc: "From studios to two-beds, all apartments meet the same high standards throughout.",
    },
    {
      icon: "/design.png",
      title: "Designed by Us",
      desc: "Designed and built by our in-house teams with feedback from tenants on how they want to live.",
    },
  ];

  return (
    <section className={`container py-10 lg:py-24 ${className}`}>
      <div className="">
        {/* Title */}
        <div className="text-center">
          <h2 className="h2">           
            <span className="block text-2xl uppercase sm:text-3xl lg:text-4xl font-semibold leading-tight">
              {heading}
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800">
              {brandWord}
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article key={i} className="text-center mx-auto">
              <div className="mx-auto size-14 sm:size-20 mb-4 sm:mb-5">
                <Image
                  src={f.icon}
                  alt={f.iconAlt ?? f.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                  priority={i < 3}
                />
              </div>
              <h5 className="font-bold text-sm sm:text-lg capitalize">{f.title}</h5>
              <p
                className="
                  muted mt-2 text-xs sm:text-sm leading-relaxed
                  line-clamp-2
                  max-h-[3.3em] overflow-hidden
                  "
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}
              >
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
