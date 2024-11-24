import Image from "next/image";

export function AboutUs() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Om oss</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Firda Revisjon & Rådgivning er et velrenommert revisjons- og regnskapskontor 
                med base i Førde. Vi er et team av dedikerte fagpersoner i hjertet av 
                Firda-regionen, som målrettet tar Ditt selskap Bærekraftig inn i fremtiden.
              </p>
              <p className="text-gray-600">
                Vår visjon handler om være best i vår bransje, serviceinnstilt, nøyaktig og 
                kundeorientert med utgangspunkt i vår markedsnisje. Med vår brede 
                kompetanse og personlige tilnærming, tilbyr vi skreddersydde løsninger til 
                små og mellomstore bedrifter.
              </p>
              <p className="text-gray-600">
                Målet vårt er å være din beste rådgiver. Ta kontakt i dag for å fortelle mer 
                om hva dere driver med og samarbeide – vi er her for deg!
              </p>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://firdarevisjon.xyz/wp-content/uploads/2024/03/659c67cc07d4c80ad0404715_mjmj-p-1080.jpeg"
              alt="About Us Image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}