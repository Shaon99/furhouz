'use client';

import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(6, "Enter a valid phone number")
    .max(20, "Too long"),
  message: z.string().min(2, "Please write a short message"),
});

type FormValues = z.infer<typeof schema>;

export default function EnquiryPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    // TODO: hook up to your API (send email / store DB)
    console.log("Enquiry:", values);
    form.reset();
    alert("Thank you! We received your enquiry.");
  }

  return (
    <main className="min-h-screen w-full bg-[#f7f8fa] grid place-items-center p-4 mt-3">
      <Card className="w-full max-w-3xl rounded-[10px] border-0 shadow-[0_10px_40px_rgba(8,15,52,.06)] bg-white/90">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-start sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
            <div className="w-[180px] sm:self-start">
              <Image
                src="/logo.png" 
                alt="Logo"
                width={360}
                height={80}
                priority
              />
            </div>
            <p className="mt-2 text-sm text-[#0A0D12]/70 sm:self-start">
              Enquiry About this Property.
            </p>
          </div>

          {/* Form */}
          <div className="mt-6 sm:mt-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="sr-only">Full Name</Label>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Full Name"
                          className="h-11 rounded-md border-gray-300 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-sky-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="sr-only">Email</Label>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter Your Email"
                          className="h-11 rounded-md border-gray-300 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-sky-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="sr-only">Phone</Label>
                      <FormControl>
                        <Input
                          {...field}
                          inputMode="tel"
                          placeholder="Enter Your Phone Number"
                          className="h-11 rounded-md border-gray-300 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-sky-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="sr-only">Message</Label>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Message"
                          className="min-h-[180px] rounded-md border-gray-300 bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-sky-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="h-11 px-6 rounded-md bg-[#122033] hover:bg-[#0f1b2b] shadow-[0_10px_20px_rgba(18,32,51,.2)]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
