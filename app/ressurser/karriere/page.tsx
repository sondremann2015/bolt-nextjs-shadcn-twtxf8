import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { KarriereForm } from "@/components/KarriereForm";
import { Briefcase, GraduationCap, Users, Building2, Clock } from "lucide-react";

const positions = [
  {
    title: "Revisjonsmedarbeider",
    type: "Fulltid",
    location: "Førde",
    description: "Vi søker en engasjert revisjonsmedarbeider som ønsker å være med på vår videre vekst. Du vil få mulighet til å jobbe med varierte arbeidsoppgaver og spennende kunder.",
    requirements: [
      "Mastergrad i regnskap og revisjon eller tilsvarende",
      "Gode analytiske evner",
      "Strukturert og nøyaktig arbeidsmetodikk",
      "Gode kommunikasjonsevner"
    ]
  },
  {
    title: "Regnskapsmedarbeider",
    type: "Fulltid",
    location: "Førde",
    description: "Som regnskapsmedarbeider hos oss vil du få jobbe med et bredt spekter av kunder og få verdifull erfaring innen regnskap og økonomistyring.",
    requirements: [
      "Bachelor/Mastergrad innen økonomi og administrasjon",
      "Erfaring med regnskapsføring",
      "God systemforståelse",
      "Serviceinnstilt og løsningsorientert"
    ]
  },
  {
    title: "Rådgiver innen skatt og avgift",
    type: "Fulltid",
    location: "Førde",
    description: "Vi søker en erfaren rådgiver som kan bistå våre kunder med komplekse problemstillinger innen skatt og avgift.",
    requirements: [
      "Mastergrad innen økonomi eller jus",
      "Minimum 3 års erfaring med skatterådgivning",
      "God kjennskap til norsk skatte- og avgiftsrett",
      "Evne til å formidle kompleks informasjon på en forståelig måte"
    ]
  }
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Faglig utvikling",
    description: "Vi investerer i din kompetanseutvikling gjennom kurs, sertifiseringer og faglige samlinger."
  },
  {
    icon: Users,
    title: "Godt arbeidsmiljø",
    description: "Hos oss blir du en del av et inkluderende og hyggelig arbeidsmiljø med dyktige kollegaer."
  },
  {
    icon: Building2,
    title: "Moderne fasiliteter",
    description: "Vi holder til i moderne lokaler sentralt i Førde med gode fasiliteter."
  },
  {
    icon: Clock,
    title: "Fleksibel arbeidstid",
    description: "Vi tilbyr fleksibel arbeidstid og gode muligheter for balanse mellom jobb og fritid."
  }
];

export default function KarrierePage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0">
          <Image
            src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/650b37cc77cd535b41a7eb32_member-human-resource-team-having-job-interview-with-candidate-office-1-1024x683-1.jpg"
            alt="Karriere Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span className="text-blue-400 font-medium mb-2 block">
              Karriere hos Firda Revisjon & Rådgivning
            </span>
            <h1 className="text-5xl font-bold mb-4">Bli en del av vårt team</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Vi søker etter dyktige og engasjerte medarbeidere som ønsker å være med på å 
              skape verdi for våre kunder og bidra til vår fortsatte vekst og suksess.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Hvorfor jobbe hos oss?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-gray-100 p-3 rounded-full w-fit">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Ledige stillinger</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-lg">{position.title}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{position.type}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                  <div>
                    <h4 className="font-medium mb-2">Kvalifikasjoner:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Søk på stilling</h2>
            <p className="text-gray-600">
              Fyll ut skjemaet under for å søke på en stilling hos oss
            </p>
          </div>
          <KarriereForm positions={positions.map(p => p.title)} />
        </div>
      </section>

      <Footer />
    </main>
  );
}