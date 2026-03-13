import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12">
      <main className="mx-auto w-full max-w-6xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(36,42,66,0.15)] backdrop-blur-xl sm:p-10">
        <section className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full bg-[#4b5563]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#374151]">
              Retouches & créations
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#111827] sm:text-6xl">
              Cours de couture
              <span className="block text-[#4b5563]">individuels</span>
            </h1>

            <p className="mt-4 text-lg text-[#4b5563] sm:text-2xl">à Mourmelon-le-Petit</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+33677210886"
                className="rounded-2xl border border-[#d7dce7] bg-white px-5 py-4 text-base font-semibold text-[#111827] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                📞 06 77 21 08 86
              </a>
              <a
                href="mailto:elodie51@chamelocouture.fr"
                className="rounded-2xl border border-[#d7dce7] bg-white px-5 py-4 text-base font-semibold text-[#111827] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                ✉️ Contacter par email
              </a>
            </div>

            <div className="mt-6 space-y-2 text-[#4b5563]">
              <p className="text-base sm:text-lg">Suivez-moi : @chamelocouture</p>
              <p className="text-base sm:text-lg">www.chamelocouture.fr</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex justify-center rounded-3xl border border-[#d7dce7] bg-white p-4 shadow-sm">
              <Image
                src="/logo.png"
                alt="Logo Cham'élo Couture"
                width={320}
                height={320}
                priority
                className="h-auto w-[220px] sm:w-[260px]"
              />
            </div>

            <div className="rounded-3xl bg-[#111827] p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Tarifs</p>
              <p className="mt-3 text-3xl font-semibold">25€ / heure</p>
              <p className="mt-2 text-xl text-white/90">150€ pour 10 heures</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5 text-sm text-[#4b5563] sm:text-base">
          <p className="font-semibold text-[#1f2937]">Élodie Barcelo</p>
          <p>Entrepreneur individuel (n° siret : 90781562500013)</p>
          <p>Diplômée CAP métier de la mode couture flou</p>
        </section>
      </main>
    </div>
  );
}
