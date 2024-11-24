"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Navn må være minst 2 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z.string().min(8, "Telefonnummer må være minst 8 tegn"),
  message: z.string().min(10, "Meldingen må være minst 10 tegn"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn*</FormLabel>
              <FormControl>
                <Input placeholder="Ditt navn" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-post*</FormLabel>
              <FormControl>
                <Input placeholder="din@epost.no" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefonnummer</FormLabel>
              <FormControl>
                <Input placeholder="Ditt telefonnummer" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Din melding*</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Skriv din melding her..." 
                  className="min-h-[150px] resize-none" 
                  {...field} 
                />
              </FormControl>
            </FormItem>
          )}
        />
        <p className="text-sm text-gray-500">
          Vi behandler alle personopplysninger fortrolig og i tråd med alle personvernregler.
        </p>
        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
          SEND MELDING
        </Button>
      </form>
    </Form>
  );
}