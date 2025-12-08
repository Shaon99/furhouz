"use client";

import { use } from "react";
import { usePropertyBySlugQuery } from "@/hooks/queries/usePropertyBySlugQuery";
import { mapApiPropertyToProperty } from "@/lib/propertyMapper";
import { notFound } from "next/navigation";
import PropertyDetailsComponent from "./PropertyDetails";
import PropertyDetailsSkeleton from "./components/PropertyDetailsSkeleton";

export default function PropertyPageClient({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: apiProperty, isLoading, isError, error } = usePropertyBySlugQuery(slug);

  if (isLoading) {
    return <PropertyDetailsSkeleton />;
  }

  if (isError) {
    console.error('Property fetch error:', error);
    notFound();
  }

  if (!apiProperty) {
    console.error('Property data is null or undefined');
    notFound();
  }

  try {
    const property = mapApiPropertyToProperty(apiProperty);
    return <PropertyDetailsComponent property={property} />;
  } catch (err) {
    console.error('Error mapping property:', err);
    notFound();
  }
}
