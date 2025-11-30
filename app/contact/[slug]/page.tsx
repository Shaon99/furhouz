import { notFound } from "next/navigation";
import ContactForm from "../components/contact/ContactForm";
import { CONTACT_VARIANTS } from "../components/contact/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const v = CONTACT_VARIANTS[slug as keyof typeof CONTACT_VARIANTS];
  return { title: v ? v.title : "Contact" };
}

export default async function ContactPage({ params }: Props) {
  const { slug } = await params;
  const variant = CONTACT_VARIANTS[slug as keyof typeof CONTACT_VARIANTS];
  if (!variant) notFound();

  return (
    <div className="min-h-screen bg-[rgb(181,128,255)] rounded-b-xl relative ">
         {/* soft gradient tint to match */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(255,255,255,.25),transparent)]" />

        {/* decorative blobs */}
        <div className="pointer-events-none absolute right-12 top-0 hidden h-40 w-40 rounded-full bg-purple-300 md:block" />
        <div className="pointer-events-none absolute bottom-20 left-10 hidden h-40 w-20 -rotate-45 rounded-[48px] bg-purple-300 md:block" />

      <div className="container mx-auto px-4 py-14">
        <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 shadow-xl mt-20">
          <h2 className="text-3xl font-bold text-[#064d83]">{variant.title}</h2>
          <p className="mt-2 text-sm text-gray-600">Enquire About This Property</p>

          <ContactForm variant={variant} />
        </div>
      </div>
    </div>
  );
}
