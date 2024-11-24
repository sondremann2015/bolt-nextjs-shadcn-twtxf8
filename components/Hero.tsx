import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
          alt="Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <span className="text-blue-400 font-medium mb-2 block">
            Firda Revisjon & Rådgivning
          </span>
          <h1 className="text-5xl font-bold mb-4 max-w-3xl">
            Din pålitelige partner innen revisjon og regnskap
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl font-light">
            Vi er et velrenommert revisjons- og regnskapsfirma med base i Førde, 
            Sunnfjord. Med vår brede kompetanse og personlige tilnærming, tilbyr vi 
            skreddersydde løsninger til små og mellomstore bedrifter.
          </p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}