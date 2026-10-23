import StoryCards from "./story-cards";
import { futurBad } from "../data/fut2";

export default function BadFutur() {
  return (
    <StoryCards
      anchorId="section4"
      titre="Une Prévision Qui Pourrait Tout Changer"
      stories={futurBad}
      basePath="/goodcase"
    />
  );
}
