import { connection } from "next/server";
import { About } from "@/components/about";
import { EditionStrip } from "@/components/edition-strip";
import { Footer } from "@/components/footer";
import { Introduction } from "@/components/introduction";
import { Masthead } from "@/components/masthead";
import { QuoteBand } from "@/components/quote-band";
import { SelectedWork } from "@/components/selected-work";
import { projects } from "@/data/projects";
import { getEditionDate, getTotalVisits } from "@/lib/edition";

export default async function Home() {
  await connection();
  const date = getEditionDate(new Date());
  const visits = await getTotalVisits();
  return (
    <div className="mx-auto w-full max-w-newspaper border">
      <Masthead />
      <EditionStrip date={date} visits={visits} />
      <main id="main">
        <Introduction />
        <SelectedWork projects={projects} />
        <QuoteBand />
        <About />
      </main>
      <Footer year={date.year} />
    </div>
  );
}
