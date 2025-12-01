"use client";

import { useMemo } from "react";
import type { Variant, Field } from "./config";
import { useForm, FieldValues, Path } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useOwnerRequestMutation } from "@/hooks/queries/useOwnerRequestMutation";
import { useCorporateRequestMutation } from "@/hooks/queries/useCorporateRequestMutation";
import { useTenantRequestMutation } from "@/hooks/queries/useTenantRequestMutation";
import { useContactRequestMutation } from "@/hooks/queries/useContactRequestMutation"; 

type Props = { variant: Variant };


function schemaForField(f: Field) {
  const n = f.name.toLowerCase();
  if (n.includes("email")) return z.string().email("Enter a valid email");
  if (n.includes("phone")) return z.string().min(6, "Enter a valid phone");
  if (
    n.includes("zip") ||
    n.includes("sqm") ||
    n.includes("room") ||
    n.includes("value") ||
    n.includes("parking")
  )
    return z.coerce.number({ error: "Must be a number" });

  if ("textarea" in f && f.textarea) {
    if (["message", "comment", "remark"].includes(n)) {
      return z.string().min(1, "This field is required");
    }
    return z.string().min(3, "Please write a little more");
  }
  return z.string().min(1, "This field is required");
}

function buildSchema(variant: Variant) {
  return z.object(
    Object.fromEntries(
      variant.fields.map((f) => [f.name, schemaForField(f)])
    )
  );
}

function buildDefaults<T extends Variant>(variant: T) {
  const defs: Record<string, string | undefined> = {};
  for (const f of variant.fields) {
    if ("textarea" in f && f.textarea) {
      defs[f.name] = "";
    } else if ("type" in f && f.type === "number") {
      defs[f.name] = undefined;
    } else {
      defs[f.name] = "";
    }
  }
  return defs as FieldValues;
}

export default function ContactForm({ variant }: Props) {
  const ownerRequestMutation = useOwnerRequestMutation();
  const corporateRequestMutation = useCorporateRequestMutation();
  const tenantRequestMutation = useTenantRequestMutation();
  const contactRequestMutation = useContactRequestMutation();
  const isOwnerForm = variant.title === "Partner with us";
  const isCorporateForm = variant.title === "Request a quote";
  const isTenantForm = variant.title === "Tenant Form";
  const isContactForm = variant.title === "Send us a message!";

  const schema = useMemo(() => buildSchema(variant), [variant]);
  const defaultValues = useMemo(() => buildDefaults(variant), [variant]);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  async function onSubmit(values: FieldValues) {
    if (isOwnerForm) {
      try {
        const result = await ownerRequestMutation.mutateAsync({
          name: values.full_name as string,
          email: values.email as string,
          phone: values.phone as string,
          city: values.city as string,
          area: values.area as string,
          address: values.address as string,
          total_sqm: Number(values.total_sqm),
          bed: Number(values.bed_rooms),
          bath: Number(values.bath_rooms),
          parking: Number(values.parking) || 0,
          rental_value: Number(values.rental_value) || 0,
          remarks: (values.remark as string) || "",
        });

        if (result.success) {
          form.reset(defaultValues);
          toast.success("Thank you! Your request has been submitted successfully.");
        } else {
          toast.error(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
        const errors = err?.body?.errors;
        if (errors) {
          const msg = Object.entries(errors)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
          toast.error(`Validation Error:\n${msg}`);
        } else {
          toast.error(err?.message || "Failed to submit. Please try again.");
        }
      }
    } else if (isCorporateForm) {
      try {
        const result = await corporateRequestMutation.mutateAsync({
          name: values.full_name as string,
          email: values.work_mail as string,
          phone: values.phone as string,
          company: values.company as string,
          message: (values.message as string) || "",
        });

        if (result.success) {
          form.reset(defaultValues);
          toast.success("Thank you! Your request has been submitted successfully.");
        } else {
          toast.error(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
        const errors = err?.body?.errors;
        if (errors) {
          const msg = Object.entries(errors)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
          toast.error(`Validation Error:\n${msg}`);
        } else {
          toast.error(err?.message || "Failed to submit. Please try again.");
        }
      }
    } else if (isTenantForm) {
      try {
        const result = await tenantRequestMutation.mutateAsync({
          name: values.full_name as string,
          email: values.email as string,
          phone: values.phone as string,
          apartment: values.apartment as string,
          message: (values.comment as string) || "",
        });

        if (result.success) {
          form.reset(defaultValues);
          toast.success("Thank you! Your request has been submitted successfully.");
        } else {
          toast.error(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
        const errors = err?.body?.errors;
        if (errors) {
          const msg = Object.entries(errors)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
          toast.error(`Validation Error:\n${msg}`);
        } else {
          toast.error(err?.message || "Failed to submit. Please try again.");
        }
      }
    } else if (isContactForm) {
      try {
        const result = await contactRequestMutation.mutateAsync({
          name: values.full_name as string,
          email: values.email as string,
          phone: values.phone as string,
          message: (values.comment as string) || "",
        });

        if (result.success) {
          form.reset(defaultValues);
          toast.success("Thank you! Your request has been submitted successfully.");
        } else {
          toast.error(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
        const errors = err?.body?.errors;
        if (errors) {
          const msg = Object.entries(errors)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
          toast.error(`Validation Error:\n${msg}`);
        } else {
          toast.error(err?.message || "Failed to submit. Please try again.");
        }
      }
    } else {
      // Fallback: use contact-request endpoint for any unmatched variant
      try {
        const result = await contactRequestMutation.mutateAsync({
          name: values.full_name as string,
          email: values.email as string,
          phone: values.phone as string,
          message: (values.comment as string) || (values.message as string) || "",
        });

        if (result.success) {
          form.reset(defaultValues);
          toast.success("Thank you! Your request has been submitted successfully.");
        } else {
          toast.error(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        const err = error as { body?: { errors?: Record<string, string[]> }; message?: string };
        const errors = err?.body?.errors;
        if (errors) {
          const msg = Object.entries(errors)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
          toast.error(`Validation Error:\n${msg}`);
        } else {
          toast.error(err?.message || "Failed to submit. Please try again.");
        }
      }
    }
  }

  const loading = isOwnerForm ? ownerRequestMutation.isPending : isCorporateForm ? corporateRequestMutation.isPending : isTenantForm ? tenantRequestMutation.isPending : isContactForm ? contactRequestMutation.isPending : false;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {variant.fields.map((f) => {
          const colSpan = f.span === 2 ? "md:col-span-2" : "";
          return (
            <FormField
              key={f.name}
              control={form.control}
              name={f.name as Path<FieldValues>}
              render={({ field }) => (
                <FormItem className={colSpan}>
                  <FormLabel className="text-sm text-gray-700">
                    {f.placeholder}
                  </FormLabel>
                  <FormControl>
                    {"textarea" in f && f.textarea ? (
                      <Textarea
                        placeholder={f.placeholder}
                        rows={f.rows ?? 3}
                        {...field}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    ) : (
                      <Input
                        type={"type" in f ? f.type ?? "text" : "text"}
                        placeholder={f.placeholder}
                        {...field}
                        value={field.value ?? ""}
                        onChange={field.onChange}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          );
        })}

        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#0b4c7a]"
          >
            {loading ? "Please wait…" : variant.submitText ?? "Get in Touch"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
