import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Freshly made buss up shut on a plate at Singhs Roti Shop"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-text/90 via-text/60 to-text/40" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-white/80">
          West Indian Food, Trinidad and Tobago
        </p>
        <h1 className="font-serif text-5xl leading-tight text-white sm:text-6xl">
          Trinidad, wrapped in roti
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-white/90">
          Real Trinidadian roti, doubles, and curry, made fresh by the Singh family for thirty years.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#menu"
            className="rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-warm"
          >
            See the menu
          </a>
          <a
            href="#order"
            className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Order now
          </a>
        </div>
      </div>
    </section>
  );
}