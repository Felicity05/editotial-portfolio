import {About} from "@/components/about";
import {Introduction} from "@/components/introduction";
import {QuoteBand} from "@/components/quote-band";
import {SelectedWork} from "@/components/selected-work";
import {projects} from "@/data/projects";

export default async function Home() {
  return (
      <main id="main">
        <Introduction />
        <SelectedWork projects={projects} />
        <QuoteBand />
        <About />
      </main>
  );
}
