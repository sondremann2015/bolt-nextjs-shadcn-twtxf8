import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Cloud, Clock, FileText, CreditCard, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Skybasert løsning",
    description: "Tilgang til systemet hvor som helst, når som helst. Alt lagres trygt i skyen."
  },
  {
    icon: BarChart3,
    title: "Sanntids rapportering",
    description: "Få umiddelbar innsikt i virksomhetens økonomi med oppdaterte rapporter og analyser."
  },
  {
    icon: Clock,
    title: "Effektiv timeregistrering",
    description: "Enkel og nøyaktig registrering av timer for prosjekter og oppgaver."
  },
  {
    icon: FileText,
    title: "Automatisert fakturering",
    description: "Spar tid med automatisk fakturering og oppfølging av kundefordringer."
  },
  {
    icon: CreditCard,
    title: "Integrert betalingsløsning",
    description: "Håndter betalinger og bankavtemming direkte i systemet."
  },
  {
    icon: Users,
    title: "Brukervennlig grensesnitt",
    description: "Intuitiv design som gjør det enkelt for alle å bruke systemet."
  }
];

export default function PowerOfficeGoPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[500px] bg-[#2D2533]">
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span className="text-blue-400 font-medium mb-2 block">
              PowerOffice GO
            </span>
            <h1 className="text-5xl font-bold mb-4 max-w-2xl">
              PowerOffice Go - Alt du trenger for effektiv økonomistyring
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Med PowerOffice Go får du en brukervennlig og skybasert løsning som gir deg 
              full kontroll over virksomhetens økonomi. Vårt alt-i-ett-system dekker alle dine 
              behov innen regnskap, fakturering, tidtaking og mer, uavhengig av bedriftens 
              størrelse.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            Fordeler med PowerOffice Go
          </h2>
          <p className="text-gray-600 text-center mb-12">
            En komplett skybasert løsning for din virksomhet
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Få full oversikt med PowerOffice Go
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  PowerOffice Go er mer enn bare et regnskapssystem. Det er en komplett 
                  plattform som gir deg full kontroll over virksomhetens økonomi og 
                  administrasjon.
                </p>
                <p className="text-gray-600">
                  Med vårt intuitive dashboard får du umiddelbar tilgang til viktige nøkkeltall og 
                  rapporter. Du kan enkelt tilpasse visningen etter dine behov og få varsler om 
                  viktige hendelser og frister.
                </p>
                <p className="text-gray-600">
                  Systemet er skybasert, noe som betyr at du har tilgang til all informasjon 
                  hvor som helst, når som helst. Dette gir deg friheten til å jobbe effektivt, 
                  enten du er på kontoret eller på farten.
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="https://cdn.prod.website-files.com/64d227b868ea7f843d9ebf4c/65a67fe3fb4cb11d278a7eea_Poweroffice.png"
                alt="PowerOffice GO Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}