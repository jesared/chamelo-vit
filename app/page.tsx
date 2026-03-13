import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12">
      <main className="mx-auto w-full max-w-6xl rounded-3xl border border-violet-300/20 bg-[#1a1030]/80 p-6 shadow-[0_20px_60px_rgba(6,2,18,0.5)] backdrop-blur-xl sm:p-10">
        <section className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full bg-violet-400/20 px-4 py-2 text-sm font-semibold tracking-wide text-violet-100">
              Retouches & créations
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-violet-50 sm:text-6xl">
              Cours de couture
              <span className="block text-violet-200">individuels</span>
            </h1>

            <p className="mt-4 text-lg text-violet-200 sm:text-2xl">à Mourmelon-le-Petit</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+33677210886"
                className="rounded-2xl border border-violet-200/30 bg-violet-100/95 px-5 py-4 text-base font-semibold text-violet-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                📞 06 77 21 08 86
              </a>
              <a
                href="mailto:elodie51@chamelocouture.fr"
                className="rounded-2xl border border-violet-200/30 bg-violet-100/95 px-5 py-4 text-base font-semibold text-violet-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                ✉️ Contacter par email
              </a>
            </div>

            <div className="mt-6 space-y-2 text-violet-200">
              <p className="text-base sm:text-lg">Suivez-moi : @chamelocouture</p>
              <p className="text-base sm:text-lg">www.chamelocouture.fr</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex justify-center rounded-3xl border border-violet-200/30 bg-white p-4 shadow-sm">
              <Image
                src="/logo.png"
                alt="Logo Cham'élo Couture"
                width={320}
                height={320}
                priority
                className="h-auto w-[220px] sm:w-[260px]"
              />
            </div>

            <div className="rounded-3xl bg-violet-950/90 p-6 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Tarifs</p>
              <p className="mt-3 text-3xl font-semibold">25€ / heure</p>
              <p className="mt-2 text-xl text-white/90">150€ pour 10 heures</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-violet-200/20 bg-violet-50/10 p-5 text-sm text-violet-200 sm:text-base">
          <p className="font-semibold text-violet-50">Élodie Barcelo</p>
          <p>Entrepreneur individuel (n° siret : 90781562500013)</p>
          <p>Diplômée CAP métier de la mode couture flou</p>
        </section>
      </main>
    </div>
  );
}
