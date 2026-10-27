import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cham'élo Couture | Retouches à Châlons-en-Champagne",
  description:
    "Retouches soignées et durables à Châlons-en-Champagne. Ourlets, fermetures, réparations et rideaux par Cham'élo Couture.",
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
