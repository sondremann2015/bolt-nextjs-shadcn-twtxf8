import { ServiceCard } from "@/components/ServiceCard";
import { FileText, Calculator, Users } from "lucide-react";

const services = [
  {
    title: "Revisjon",
    description: "Hos Firda Revisjon & Rådgivning kombinerer vi grundig gjennomgang og dyp innsikt med moderne revisjonsstrategier. Vi sikrer at regnskapet oppfyller alle lovkrav og standarder.",
    icon: FileText,
    imageSrc: "https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b3790e24f22ffdca4f7c4_close-up-busy-businesswoman-2-1024x683-1.jpg"
  },
  {
    title: "Regnskap",
    description: "Vi er din pålitelige partner for alle dine regnskaps- og økonomibehov. Med vår dype forståelse av regionens næringsliv, håndterer vi alle utfordringer.",
    icon: Calculator,
    imageSrc: "https://firdarevisjon.xyz/wp-content/uploads/2024/03/6512b70dd27506a6fcd7a45e_cooperation-analyst-chart-professional-paper-economics-1-1024x683-1.jpg"
  },
  {
    title: "Rådgivning",
    description: "Som din betrodde rådgivningspartner tilbyr vi skreddersydde løsninger som optimaliserer og styrker din virksomhet, med fokus på langsiktig vekst og suksess.",
    icon: Users,
    imageSrc: "https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b37cc77cd535b41a7eb32_member-human-resource-team-having-job-interview-with-candidate-office-1-1024x683-1.jpg"
  }
];

export function Services() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Våre tjenester</h2>
        <p className="text-gray-600 text-center mb-12">
          Trykk på tjenesten for å lese mer om våre ulike tjenester
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}