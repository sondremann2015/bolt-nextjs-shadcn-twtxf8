"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Calculator, Users } from "lucide-react";
import { NavDropdown } from "@/components/NavDropdown";

const services = [
  {
    title: "Revisjon",
    description: "Grundig og uavhengig revisjon av årsregnskap",
    href: "/tjenester/revisjon",
    icon: FileText
  },
  {
    title: "Regnskap",
    description: "Omfattende regnskapstjenester for din virksomhet",
    href: "/tjenester/regnskap",
    icon: Calculator
  },
  {
    title: "Rådgivning",
    description: "Strategisk økonomisk rådgivning for vekst",
    href: "/tjenester/radgivning",
    icon: Users
  }
];

const resources = [
  {
    title: "Karriere",
    href: "/ressurser/karriere"
  },
  {
    title: "Nyheter",
    href: "/ressurser/nyheter"
  }
];

export function MainNav() {
  return (
    <nav className="fixed w-full z-50 top-0 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/70 rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/659ee0aea8eccdb5aec53034_Design_1-cropped-1-3.svg"
                alt="Firda Revisjon Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Hjem
              </Link>
              <Link href="/kundekontroll" className="text-gray-700 hover:text-gray-900">
                Kundekontroll
              </Link>
              <Link href="/poweroffice-go" className="text-gray-700 hover:text-gray-900">
                PowerOffice GO
              </Link>
              <NavDropdown 
                title="Våre tjenester" 
                items={services}
                showDescriptions={true}
              />
              <NavDropdown 
                title="Ressurser" 
                items={resources}
              />
            </div>
          </div>
          <Link href="/kontakt">
            <Button variant="default" className="bg-black text-white rounded-full hover:bg-gray-800">
              Kontakt oss
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}