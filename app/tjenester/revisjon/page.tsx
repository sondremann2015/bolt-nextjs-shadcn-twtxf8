import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Users, Laptop, Clock, Scale, FileCheck, Search, Shield, Building2, BarChart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Medlem av Revisorforeningen",
    description: "Som stolte medlemmer av Revisorforeningen har vi tilgang til et bredt nettverk av landets fremste revisjonsfaglige eksperter og ressurser."
  },
  {
    icon: Laptop,
    title: "Moderne verktøy",
    description: "Vi holder oss i forkant av bransjeutviklingen ved å investere i avanserte revisjonsverktøy for smartere dataanalyse og automatisering."
  },
  {
    icon: Clock,
    title: "Din revisjonspartner",
    description: "Som en lokal aktør i Førde har vi spesialisert oss på revisjon av små og mellomstore virksomheter, med personlig oppfølging."
  }
];

const services = [
  {
    icon: Scale,
    title: "Lovpålagt revisjon",
    description: "Vi utfører grundig revisjon av årsregnskap i henhold til gjeldende lover og standarder, og sikrer at din virksomhet oppfyller alle krav."
  },
  {
    icon: FileCheck,
    title: "Attestasjonstjenester",
    description: "Vi tilbyr attestasjon av ulike rapporter og oppgaver, og gir deg trygghet på at informasjonen er korrekt og pålitelig."
  },
  {
    icon: Search,
    title: "Due diligence",
    description: "Grundig gjennomgang av selskaper i forbindelse med oppkjøp, salg eller fusjon, med fokus på finansielle og skattemessige forhold."
  },
  {
    icon: Shield,
    title: "Internkontroll",
    description: "Vi hjelper deg med å etablere og forbedre interne kontrollrutiner for å sikre effektiv drift og pålitelig finansiell rapportering."
  },
  {
    icon: Building2,
    title: "Selskapsgjennomgang",
    description: "Omfattende analyse av selskapets økonomiske stilling, med anbefalinger for forbedring og optimalisering."
  },
  {
    icon: BarChart,
    title: "Risikovurdering",
    description: "Vi identifiserer og vurderer finansielle og operasjonelle risikoer, og gir råd om hvordan disse best kan håndteres."
  }
];

export default function RevisjonPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b3790e24f22ffdca4f7c4_close-up-busy-businesswoman-2-1024x683-1.jpg"
            alt="Revisjon Background"
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
            <h1 className="text-5xl font-bold mb-4">Revisjon</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Hos Firda Revisjon & Rådgivning kombinerer vi grundig gjennomgang og dyp 
              innsikt med moderne revisjonsstrategier. Vårt mål er å gi deg et unikt perspektiv 
              på virksomhetens økonomiske helse og sikre at regnskapet oppfyller alle lovkrav 
              og standarder.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vår tilnærming til revisjon
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
                  alt="Revisjon Approach"
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
              Våre Revisjonstjenester
            </h2>
            <p className="text-gray-600">
              Vi tilbyr et bredt spekter av revisjonstjenester for å møte dine behov
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