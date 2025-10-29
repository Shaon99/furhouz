"use client";

import { useMemo, useState } from "react";
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

type Props = { variant: Variant };


function schemaForField(f: Field) {
  const n = f.name.toLowerCase();
  if (n.includes("email")) return z.string().email("Enter a valid email");
  if (n.includes("phone")) return z.string().min(6, "Enter a valid phone");
  if (
    n.includes("zip") ||
    n.includes("sqm") ||
    n.includes("room") ||
    n.includes("value")
  )
    return z.coerce.number({ error: "Must be a number" });

  if ("textarea" in f && f.textarea) {
    if (["remark", "message", "comment"].includes(n)) {
      return z.string().optional();
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
  const [loading, setLoading] = useState(false);

  const schema = useMemo(() => buildSchema(variant), [variant]);
  const defaultValues = useMemo(() => buildDefaults(variant), [variant]);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  async function onSubmit(values: FieldValues) {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variant: variant.title, ...values }),
      });

      if (!res.ok) throw new Error("Network error");

      form.reset(defaultValues);
      toast.success("Submitted!");
    } catch {
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

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
