import type { Metadata } from "next";
import {
  Instrument_Serif,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/masthead";
import { Footer } from "@/components/footer";
import { EditionStrip } from "@/components/edition-strip";
import { getEditionDate, getTotalVisits } from "@/lib/edition";
import { ReactNode } from "react";
import { connection } from "next/server";

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

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  await connection();
  const date = getEditionDate(new Date());
  const visits = await getTotalVisits();
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <div className="mx-auto w-full max-w-newspaper">
          <Masthead />
          <EditionStrip date={date} visits={visits} />
          <div className="px-gutter md:px-0">{children}</div>
          <Footer year={date.year} />
        </div>
      </body>
    </html>
  );
}
