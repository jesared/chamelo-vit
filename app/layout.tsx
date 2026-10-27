import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cham'élo Couture | Cours & retouches à Châlons-en-Champagne",
  description:
    "Cours particuliers de couture à votre rythme et retouches soignées à Châlons-en-Champagne. Formule 3 heures à 45 € ou 20 € de l'heure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
