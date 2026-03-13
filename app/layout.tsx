import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cham'élo Couture | Cours de couture individuels",
  description:
    "Retouches, créations et cours de couture individuels à Mourmelon-le-Petit.",
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
