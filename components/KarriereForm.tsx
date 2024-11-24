"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
  name: z.string().min(2, "Navn må være minst 2 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z.string().min(8, "Telefonnummer må være minst 8 tegn"),
  position: z.string({
    required_error: "Vennligst velg ønsket stilling",
  }),
  message: z.string().min(10, "Meldingen må være minst 10 tegn"),
  cv: z
    .any()
    .refine((files) => files?.length === 1, "CV er påkrevd")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Maksimal filstørrelse er 5MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "Kun PDF-filer er tillatt"
    ),
});

interface KarriereFormProps {
  positions: string[];
}

export function KarriereForm({ positions }: KarriereFormProps) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Navn*</FormLabel>
              <FormControl>
                <Input placeholder="Ditt navn" {...field} />
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
              <FormLabel>E-post*</FormLabel>
              <FormControl>
                <Input placeholder="din@epost.no" {...field} />
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
              <FormLabel>Telefon*</FormLabel>
              <FormControl>
                <Input placeholder="Ditt telefonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ønsket stilling*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Velg stilling" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kort om deg selv*</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Fortell litt om deg selv og hvorfor du ønsker å jobbe hos oss" 
                  className="min-h-[150px] resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cv"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>Last opp CV (PDF)*</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => onChange(e.target.files)}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-sm text-gray-500">
          Vi behandler alle personopplysninger fortrolig og i tråd med alle personvernregler.
        </p>

        <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
          SEND SØKNAD
        </Button>
      </form>
    </Form>
  );
}