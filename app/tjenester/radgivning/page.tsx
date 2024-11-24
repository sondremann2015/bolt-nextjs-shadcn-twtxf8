import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Target, Puzzle, Clock, Calculator, Wallet, Building2, Users, ArrowRightLeft } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Strategisk Rådgivning",
    description: "Vi hjelper deg med å utvikle og implementere strategier som sikrer langsiktig vekst og suksess for din virksomhet."
  },
  {
    icon: Puzzle,
    title: "Skreddersydde Løsninger",
    description: "Våre råd og anbefalinger er alltid tilpasset din bedrifts unike situasjon og behov."
  },
  {
    icon: Clock,
    title: "Kontinuerlig Støtte",
    description: "Vi er en strategisk partner som følger opp og støtter deg gjennom hele prosessen."
  }
];

const services = [
  {
    icon: Calculator,
    title: "Skatt og avgift",
    description: "Rådgivning innen skatt, merverdiavgift og andre avgifter for å sikre optimal skatteposisjon og etterlevelse av regelverk."
  },
  {
    icon: Target,
    title: "Oppstart og vekst",
    description: "Strategisk rådgivning for bedrifter i oppstartsfasen eller som ønsker å vokse, inkludert forretningsplanlegging og finansiering."
  },
  {
    icon: Wallet,
    title: "Økonomistyring",
    description: "Hjelp med budsjettering, likviditetsstyring og økonomiske analyser for å optimalisere din virksomhets finansielle prestasjon."
  },
  {
    icon: Building2,
    title: "Virksomhetsutvikling",
    description: "Støtte ved omstrukturering, effektivisering og strategisk planlegging for å styrke din konkurranseposisjon."
  },
  {
    icon: Users,
    title: "Generasjonsskifte",
    description: "Rådgivning ved eierskifte og generasjonsskifte, med fokus på både juridiske og skattemessige aspekter."
  },
  {
    icon: ArrowRightLeft,
    title: "Transaksjonsrådgivning",
    description: "Bistand ved kjøp og salg av virksomheter, fusjoner og oppkjøp, inkludert due diligence og verdivurderinger."
  }
];

export default function RadgivningPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b37cc77cd535b41a7eb32_member-human-resource-team-having-job-interview-with-candidate-office-1-1024x683-1.jpg"
            alt="Rådgivning Background"
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
            <h1 className="text-5xl font-bold mb-4">Rådgivning</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Som din betrodde rådgivningspartner er Firda Revisjon & Rådgivning dedikert til å 
              tilby skreddersydde løsninger som optimaliserer og styrker din virksomhet. Vårt 
              erfarne team har en dyp forståelse av næringslivets kompleksitet og står klar til 
              å veilede deg gjennom utfordrende beslutninger og muligheter for vekst.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vår tilnærming til rådgivning
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
                  alt="Rådgivning Approach"
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
            <p className="text-sm uppercase tracking-wider mb-2">Kjerneområder</p>
            <h2 className="text-3xl font-bold mb-2">
              Våre rådgivningstjenester
            </h2>
            <p className="text-gray-600">
              Vi tilbyr omfattende rådgivning innen flere viktige områder
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