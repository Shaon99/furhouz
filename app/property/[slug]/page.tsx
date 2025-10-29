import { PROPERTIES } from "../data/properties";
import { notFound } from "next/navigation";
import PropertyDetailsComponent from "./PropertyDetails";

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = PROPERTIES.find(p => p.slug === params.slug);
  
  if (!property) {
    notFound();
  }

  return <PropertyDetailsComponent property={property} />;
}