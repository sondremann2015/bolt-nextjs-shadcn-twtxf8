import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Cloud, Users, Clock, BookOpen, FileSpreadsheet, Users2, Receipt, FileText, PiggyBank } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Digital Regnskapsføring",
    description: "Vi bruker moderne, skybaserte løsninger som gir deg full oversikt over økonomien i sanntid, uansett hvor du befinner deg."
  },
  {
    icon: Users,
    title: "Personlig Oppfølging",
    description: "Du får en dedikert regnskapsfører som kjenner din bedrift og kan gi deg skreddersydd rådgivning og støtte."
  },
  {
    icon: Clock,
    title: "Effektiv Rapportering",
    description: "Vi leverer oversiktlige rapporter og analyser som gir deg verdifull innsikt i bedriftens økonomiske situasjon."
  }
];

const services = [
  {
    icon: BookOpen,
    title: "Løpende Bokføring",
    description: "Vi tar hånd om den daglige bokføringen og holder orden i regnskapet ditt, slik at du kan fokusere på driften av virksomheten."
  },
  {
    icon: FileSpreadsheet,
    title: "Årsoppgjør",
    description: "Vi utarbeider årsregnskap og ligningspapirer i henhold til gjeldende lover og regler, og sikrer at alt er korrekt og rettidig innlevert."
  },
  {
    icon: Users2,
    title: "Lønn og Personal",
    description: "Vi håndterer lønnskjøring, arbeidsgiveravgift, skattetrekk og innberetning av lønn og andre ytelser til ansatte."
  },
  {
    icon: Receipt,
    title: "MVA-håndtering",
    description: "Vi sørger for korrekt behandling og innrapportering av merverdiavgift, og holder deg oppdatert på endringer i regelverket."
  },
  {
    icon: FileText,
    title: "Fakturering",
    description: "Vi kan ta hånd om fakturering og oppfølging av kundefordringer, og hjelper deg med å holde kontroll på kontantstrømmen."
  },
  {
    icon: PiggyBank,
    title: "Økonomisk Rådgivning",
    description: "Vi tilbyr rådgivning innen budsjett, likviditetsstyring, og andre økonomiske spørsmål for å styrke din virksomhet."
  }
];

export default function RegnskapPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/6512b70dd27506a6fcd7a45e_cooperation-analyst-chart-professional-paper-economics-1-1024x683-1.jpg"
            alt="Regnskap Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span className="text-blue-400 font-medium mb-2 block">
              Firda Revisjon & Rådgivning
            </span>
            <h1 className="text-5xl font-bold mb-4">Regnskap</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Hos Firda Revisjon & Rådgivning er vi din pålitelige partner for alle dine 
              regnskaps- og økonomibehov. Med vår dype forståelse av regionens næringsliv 
              og vår omfattende ekspertise, er vi rustet til å håndtere de unike utfordringene 
              din bedrift står overfor.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vår tilnærming til regnskap
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-gray-100 p-3 rounded-full h-fit">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-black rounded-2xl p-8">
              <div className="relative h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simon-lee-jZPwgcIbaNk-unsplash%20(1)%20(1)-ELFq1QHg87mZc1u7dRziGBVUBUaY6q.png"
                  alt="Regnskap Approach"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wider mb-2">Tjenester</p>
            <h2 className="text-3xl font-bold mb-2">
              Våre Regnskapstjenester
            </h2>
            <p className="text-gray-600">
              Vi tilbyr et bredt spekter av regnskapstjenester tilpasset din virksomhet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100 p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}