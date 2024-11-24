import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function KontaktPage() {
  return (
    <main className="min-h-screen">
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900">
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <span className="text-blue-400 font-medium mb-2 block">
              Firda Revisjon & Rådgivning
            </span>
            <h1 className="text-5xl font-bold mb-4">Kontakt Oss</h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              Hos Firda Revisjon & Rådgivning setter vi pris på din henvendelse. Enten du har 
              spørsmål om våre tjenester, ønsker en uforpliktende konsultasjon eller bare vil si 
              hei, er vårt dedikerte team her for å hjelpe deg.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Ta kontakt med oss</h2>
              <p className="text-gray-600 mb-8">
                Vi er her for å hjelpe deg med alle dine spørsmål om regnskap, revisjon og 
                rådgivning. Kontakt oss i dag for en uforpliktende samtale.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Besøksadresse</h3>
                    <p className="text-gray-600">Naustdalsvegen 18, 6800 Førde</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Telefon</h3>
                    <p className="text-gray-600">41 78 54 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">E-post</h3>
                    <p className="text-gray-600">post@firdarevisjon.no</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Åpningstider</h3>
                    <p className="text-gray-600">Mandag - Fredag: 08:00 - 16:00</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.0037512321498!2d5.850955!3d61.450843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616333c092569d3%3A0x9f34c23e4e4b5f0e!2sNaustdalsvegen%2018%2C%206800%20F%C3%B8rde!5e0!3m2!1sno!2sno!4v1710347161099!5m2!1sno!2sno"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <h2 className="text-2xl font-bold mb-6">Send oss en melding</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}