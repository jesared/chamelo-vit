import type { Metadata } from "next";
import { siteUrl } from "./site";
import "./globals.css";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Cham'élo Couture",
  url: siteUrl,
  telephone: "+33677210886",
  email: "elodie51@chamelocouture.fr",
  image: [`${siteUrl}/images/perfecto-cousu.jpg`],
  address: {
    "@type": "PostalAddress",
    streetAddress: "127 avenue de Paris, Centre Jacqueson",
    addressLocality: "Châlons-en-Champagne",
    addressRegion: "Grand Est",
    postalCode: "51000",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "City",
    name: "Châlons-en-Champagne",
  },
  sameAs: ["https://www.facebook.com/chamelocouture"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cham'élo Couture | Retouches & cours à Châlons-en-Champagne",
  description:
    "Retouches de vêtements, cours particuliers de couture et broderie personnalisée à Châlons-en-Champagne. Découvrez les prestations et tarifs de Cham'élo Couture.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Cham'élo Couture",
    title: "Retouches, cours de couture & broderie à Châlons-en-Champagne",
    description:
      "Un atelier de couture à Châlons-en-Champagne pour vos retouches, vos cours particuliers et vos broderies personnalisées.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cham'élo Couture | Retouches & cours à Châlons-en-Champagne",
    description:
      "Retouches soignées, cours particuliers de couture et broderie personnalisée à Châlons-en-Champagne.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
