export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-24 px-8 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white mb-6">
          Cham&apos;élo Couture
        </h1>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Bienvenue chez{" "}
          <span className="font-semibold text-zinc-900 dark:text-white">
            Cham&apos;élo Couture
          </span>
          , un atelier dédié à la création et aux retouches de vêtements
          réalisés avec soin et passion. Chaque pièce est confectionnée avec
          attention pour offrir un travail de qualité, adapté à vos envies et à
          votre style.
        </p>

        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-4">
          Que ce soit pour des retouches, des créations sur mesure ou la
          transformation de vos vêtements, Cham&apos;élo Couture vous accompagne
          pour donner vie à vos idées.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            className="rounded-full bg-black text-white px-6 py-3 hover:bg-zinc-800 transition"
            href="#contact"
          >
            Nous contacter
          </a>

          <a
            className="rounded-full border border-zinc-300 px-6 py-3 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900 transition"
            href="#services"
          >
            Nos services
          </a>
        </div>
      </main>
    </div>
  );
}
