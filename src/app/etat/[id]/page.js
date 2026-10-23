import { notFound } from "next/navigation";

import StoryDetail from "../../_components/story-detail";
import { midsections } from "../../data/mid";

function findStory(id) {
  // Comparaison en chaine : parseInt("abc") donnait NaN et la page plantait.
  return midsections.find((story) => String(story.id) === id);
}

// Les contenus sont statiques : on prerend les trois pages au build.
export function generateStaticParams() {
  return midsections.map((story) => ({ id: String(story.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const story = findStory(id);

  if (!story) return { title: "Contenu introuvable" };
  return { title: story.titre, description: story.description };
}

export default async function PageMidsection({ params }) {
  // Next 16 : params est une promesse, il faut l'attendre avant de lire l'id.
  const { id } = await params;
  const story = findStory(id);

  if (!story) notFound();

  return <StoryDetail story={story} />;
}
