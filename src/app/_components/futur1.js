import StoryCards from "./story-cards";
import { futurGood } from "../data/fut1";

export default function GoodFutur() {
  return (
    <StoryCards
      anchorId="section3"
      titre="Que Nous Réserve l'Avenir ?"
      stories={futurGood}
      basePath="/badcase"
    />
  );
}
