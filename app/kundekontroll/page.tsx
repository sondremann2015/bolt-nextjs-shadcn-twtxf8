import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, FileText } from "lucide-react";

const steps = [
  {
    icon: Shield,
    title: "Legitimering med elektronisk ID",
    description: "For å gjennomføre kundekontrollen må du legitimere deg med BankID eller annen elektronisk ID."
  },
  {
    icon: Users,
    title: "Reelle rettighetshavere",
    description: "Du må oppgi informasjon om selskapets reelle rettighetshavere og deres eierandeler."
  },
  {
    icon: FileText,
    title: "Dokumentasjon",
    description: "Last opp nødvendig dokumentasjon som bekrefter selskapets struktur og eierforhold."
  }
];

export default function KundekontrollPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b37cc77cd535b41a7eb32_member-human-resource-team-having-job-interview-with-candidate-office-1-1024x683-1.jpg"
            alt="Kundekontroll Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span className="text-blue-400 font-medium mb-2 block">
              Firda Revisjon & Rådgivning AS
            </span>
            <h1 className="text-5xl font-bold mb-4">
              Kundekontroll
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Velkommen til kundekontroll-siden for Firda Revisjon og 
              Rådgivning AS. Som et autorisert revisjons- og 
              regnskapsførerforetak er vi pålagt å gjennomføre 
              kundekontroll i henhold til hvitvaskingsloven før vi påtar oss 
              oppdrag for nye kunder eller ved endringer i roller hos 
              eksisterende kunder.
            </p>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2">Gjennomfør kundekontroll</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="bg-gray-100 p-3 rounded-full h-fit">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}

              <a 
                href="https://signant.no/Forms/(S(ek3axqx4ubw4s5pwayjxazct))/Form/start/?c=FIRD-XIFX&f=FORM-OJKB" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-black text-white hover:bg-gray-800 mt-4">
                  Start kundekontroll
                </Button>
              </a>
            </div>

            {/* Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b37cc77cd535b41a7eb32_member-human-resource-team-having-job-interview-with-candidate-office-1-1024x683-1.jpg"
                alt="Kundekontroll Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}