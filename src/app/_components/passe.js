import StoryCards from "./story-cards";
import { midsections } from "../data/mid";

export default function MidSection() {
  return (
    <StoryCards
      anchorId="section1"
      titre="La Vie Idéale au Commencement : Le Calme Avant la Tempête ?"
      stories={midsections}
      basePath="/etat"
    />
  );
}
