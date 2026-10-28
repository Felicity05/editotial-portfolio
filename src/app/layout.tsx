import type { Metadata } from "next";
import {
  Instrument_Serif,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const body = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arelys Alvarez — Interfaces & rhythm.",
  description:
    "Front end engineer in New York City. Thoughtful interfaces, built with care and made to move. " +
      "Selected work by Arelys Alvarez.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
