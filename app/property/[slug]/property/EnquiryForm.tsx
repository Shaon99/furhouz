"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery";
import { usePropertyRequestMutation } from "@/hooks/queries/usePropertyRequestMutation";
import { SkeletonLogo } from "@/components/ui/skeletons";

const FormSchema = z.object({
  name: z.string().min(2, "Enter full name"),
  email: z.string().email("Enter valid email"),
  phone: z
    .string()
    .min(6, "Enter valid phone")
    .regex(/^[0-9+\-()\s]*$/, "Digits and + - ( ) only"),
  message: z.string().min(5, "Write a short message"),
  property_id: z.string().min(1, "Property ID is required")
});

type FormValues = z.infer<typeof FormSchema>;

export default function EnquiryForm({
  defaultMessage,
  whatsappNumber,
  propertyId
}: {
  defaultMessage: string;
  whatsappNumber?: string;
  propertyId: string;
}) {
  const { data: settings, isLoading: isLoadingSettings } = useSettingsQuery();
  const propertyRequestMutation = usePropertyRequestMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: defaultMessage,
      property_id: propertyId
    }
  });

  const waNumber = whatsappNumber || settings?.whatsapp_number;
  const isSubmitting = propertyRequestMutation.isPending;

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await propertyRequestMutation.mutateAsync(data);
      if (result.success) {
        alert("Thank you! Your enquiry has been sent successfully.");
        reset({ name: "", email: "", phone: "", message: defaultMessage, property_id: propertyId });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
      const errors = err?.body?.errors;
      if (errors) {
        const msg = Object.entries(errors).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n");
        alert(`Validation Error:\n${msg}`);
      } else {
        alert(err?.message || "Failed to send enquiry. Please try again.");
      }
    }
  };

  const waLink = waNumber 
    ? `https://api.whatsapp.com/send?phone=${encodeURIComponent(waNumber)}&text=${encodeURIComponent(defaultMessage)}`
    : "#";

  return (
     <div className="w-full max-w-[1350px] mx-auto bg-slate-50 rounded-xl p-5 md:p-6 shadow-sm">
     <aside className="p-5 md:p-6  sticky top-24 w-full max-w-5xl mx-auto">
      <div className="items-center gap-2">
        {isLoadingSettings ? (
          <SkeletonLogo width={120} height={40} />
        ) : settings?.logo ? (
          <Image src={settings.logo} alt={settings.site_name || "furhouz"} width={120} height={40} />
        ) : null}
        <div className="font-medium text-sm text-slate-500 mt-2">
          Enquiry About this Property.
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <input type="hidden" {...register("property_id")} />
        <div>
          <Input placeholder="Full Name" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Enter Your Email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Enter Your Phone Number" {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <Textarea rows={5} {...register("message")} />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Button type="submit" disabled={isSubmitting} className="px-6">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {waNumber && (
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <a href={waLink} target="_blank" rel="noopener">
                <MessageCircle className="mr-2 h-4 w-4" />
                Whatsapp
              </a>
            </Button>
          )}
        </div>
      </form>
    </aside> 
   </div>
  );
}
