import Image from "next/image";
import { Users2, Calculator, Clock } from "lucide-react";

const reasons = [
  {
    icon: Users2,
    title: "Kompetanse i toppklasse",
    description: "Våre autoriserte regnskapsførere og revisorer har høyest kvalifikasjon for deres virksomhet. Vi har lang erfaring med regnskap, revisjon og rådgivning i bransjen i Sunnfjord."
  },
  {
    icon: Calculator,
    title: "Moderne verktøy",
    description: "Vi bruker de nyeste digitale løsningene, som PowerOffice GO, for å effektivisere arbeidsprosessene og gi deg innsikt i virksomheten."
  },
  {
    icon: Clock,
    title: "Personlig oppfølging",
    description: "Hos oss får du alle fordelene som kompetanse kan tilby deg samtidig som vi er tilgjengelige og gir deg rask og effektiv oppfølging."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Hvorfor velge oss?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-lg h-fit">
                  <reason.icon className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://firdarevisjon.xyz/wp-content/uploads/2024/04/Hovedillustrasjon-07-07-07-07-07.png"
              alt="Why Choose Us Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}