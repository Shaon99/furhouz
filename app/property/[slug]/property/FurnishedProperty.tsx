import PropertyTabs from "./PropertyTabs";
import EnquiryForm from "./EnquiryForm";
import { AreaSlug, findProperty } from "./area-data";
import { notFound } from "next/navigation";
import CardSlider from "@/app/property/components/CardSlider";
import Link from "next/link";

export default function FurnishedProperty({
  slug,
  id
}: {
  slug: AreaSlug;
  id?: string;
}) {
  // Ensure property exists, else show 404
  const p = findProperty(slug, id);

  if (!p) {
    notFound();
  }

  // Choose a slug for property link routing
  const propertySlug = p.id?.toString() || "";

  const defaultMsg = `Hello, I am interested in [${p?.id ?? ''}]`;
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1350px] mx-auto gap-6">
      {/* Left: Gallery + Tabs */}
      <div className="lg:col-span-2">
        <div className="mb-4 rounded-xl overflow-hidden shadow-xl">
          {/* CardSlider shows images with slug routing */}
          <CardSlider images={p.images} slug={propertySlug} />
        </div>
        <div className="w-full px-0 py-6">
          <PropertyTabs p={p} />
        </div>
      </div>

      {/* Right: Enquiry Form */}
      <div className="lg:col-span-1">
        <EnquiryForm defaultMessage={defaultMsg} propertyId={p?.id?.toString() || ""} />
        <div className="mt-6 text-center">
          <Link
            href={`/property/${propertySlug}`}
            className="inline-block rounded-lg text-blue-700 hover:underline font-medium"
          >
            View Property Page
          </Link>
        </div>
      </div>
    </section>
  );
}
