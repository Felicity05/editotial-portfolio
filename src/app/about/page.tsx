import type { Metadata } from "next";
import { connection } from "next/server";
import { AboutIntroduction } from "@/components/about-introduction";
import { AboutProfile } from "@/components/about-profile";
import { AboutApproach } from "@/components/about-approach";
import { AboutRhythm } from "@/components/about-rhythm";
import { NextChapter } from "@/components/next-chapter";

export const metadata: Metadata = {
  title: "About Arelys Alvarez — Cuban roots. New York rhythm.",
  description:
    "The person behind the pixels: a New York City based engineer with Cuban roots, building thoughtful interfaces " +
    "and community through music and dance.",
};

export default async function AboutPage() {
  await connection();
  return (
    <main id="main">
      <AboutIntroduction />
      <AboutProfile />
      <AboutApproach />
      <AboutRhythm />
      <NextChapter />
    </main>
  );
}
