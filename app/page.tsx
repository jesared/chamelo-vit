import Image from "next/image";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconClassName = "h-[1em] w-[1em]";

function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.63 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.2a2 2 0 0 1 2.11-.45c.85.3 1.74.51 2.64.63A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true" {...props}>
      <path d="m4 4 8 5 8-5" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 1 0 20 14.5 14.5 0 0 1 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function ScissorsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClassName} aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}

const contactLinks = [
  { href: "tel:+33677210886", label: "06 77 21 08 86", icon: PhoneIcon },
  { href: "mailto:elodie51@chamelocouture.fr", label: "Contacter par email", icon: MailIcon },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-10 sm:px-8">
      <section className="rounded-3xl border border-violet-200/30 bg-gradient-to-b from-[#1f1240] to-[#2e165f] p-6 text-violet-50 shadow-xl sm:p-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <Image src="/logo.png" alt="Logo Cham'élo Couture" width={220} height={220} priority className="h-auto w-40 sm:w-52" />

          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200/30 bg-violet-300/20 px-4 py-1 text-sm font-medium">
            <ScissorsIcon />
            Cours de couture individuels
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">Cham&apos;élo Couture</h1>
          <p className="text-violet-200">Mourmelon-le-Petit</p>

          <div className="grid w-full gap-3 sm:grid-cols-2">
            {contactLinks.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="flex items-center justify-center gap-2 rounded-xl bg-violet-50 px-4 py-3 font-semibold text-violet-950 transition hover:-translate-y-0.5">
                <Icon />
                {label}
              </a>
            ))}
          </div>

          <div className="w-full rounded-2xl border border-violet-200/20 bg-violet-900/40 p-4 text-sm text-violet-100">
            <p className="mb-2 text-base font-semibold text-violet-50">Tarifs</p>
            <p>25€ / heure</p>
            <p>150€ pour 10 heures</p>
          </div>

          <div className="space-y-2 text-sm text-violet-200">
            <p className="flex items-center justify-center gap-2">
              <InstagramIcon /> @chamelocouture
            </p>
            <p className="flex items-center justify-center gap-2">
              <GlobeIcon /> www.chamelocouture.fr
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
