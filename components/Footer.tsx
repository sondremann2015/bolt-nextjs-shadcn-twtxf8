import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const services = [
  { name: "Revisjon", href: "/tjenester/revisjon" },
  { name: "Regnskap", href: "/tjenester/regnskap" },
  { name: "Rådgivning", href: "/tjenester/radgivning" },
];

const help = [
  { name: "Kundekontroll", href: "/hjelpesider/kundekontroll" },
  { name: "PowerOffice GO", href: "/hjelpesider/poweroffice-go" },
  { name: "Kontakt oss", href: "/hjelpesider/kontakt" },
];

const resources = [
  { name: "Nyheter", href: "/ressurser/nyheter" },
  { name: "Karriere", href: "/ressurser/karriere" },
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/659ee0aea8eccdb5aec53034_Design_1-cropped-1-3.svg"
              alt="Firda Revisjon Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <div className="space-y-2 text-gray-600">
              <p>post@firdarevisjon.no</p>
              <p>41 78 54 00</p>
              <p>Naustdalsvegen 18, 6800 Førde</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Våre tjenester</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Pages */}
          <div>
            <h3 className="font-semibold mb-4">Hjelpesider</h3>
            <ul className="space-y-2">
              {help.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Ressurser</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-600 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Firda Revisjon & Rådgivning AS. Alle rettigheter reservert.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}