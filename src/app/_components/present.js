import StoryCards from "./story-cards";
import { presents } from "../data/actu";

export default function Present() {
  return (
    <StoryCards
      anchorId="section2"
      titre="L'ombre des Gaz à Effet de Serre : Quel Impact sur notre Climat ?"
      stories={presents}
      basePath="/now"
    />
  );
}
