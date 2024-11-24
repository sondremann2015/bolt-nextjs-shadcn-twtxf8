"use client";

import { MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
            <p className="text-gray-600 mb-8">
              Vi har base i å bli bedre hver eneste dag! Ring oss på telefon eller send oss en 
              e-post dersom du vil vite hvordan vi kan hjelpe bedriften deg.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Naustdalsvegen 18, 6800 Førde</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">47 96 26 00</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Send oss en melding</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}