import Image from "next/image";
import Link from "next/link";

function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  // On coupe au dernier espace pour ne pas coller les points de suspension
  // au milieu d'un mot.
  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}...`;
}

/**
 * Grille de cartes partagee par les quatre sections de l'accueil
 * (passe, present, futur, solution).
 *
 * @param anchorId  cible des liens de la navbar (#section1 a #section4)
 * @param stories   entrees issues de src/app/data
 * @param basePath  prefixe de route des pages de detail
 */
export default function StoryCards({ anchorId, titre, stories, basePath }) {
  return (
    <section className="container mx-auto py-4">
      <div className="flex w-full flex-col items-center justify-center gap-8">
        <div className="flex w-full items-center justify-center px-4 md:w-1/2">
          <h2
            id={anchorId}
            className="text-brand bg-white text-center text-[26px] md:text-[36px]"
          >
            {titre}
          </h2>
        </div>

        <ul className="grid w-full list-none grid-cols-1 gap-5 px-4 md:w-4/5 md:grid-cols-3">
          {stories.map((story) => (
            <li
              key={story.id}
              // scale-[1.03] au lieu de scale-110 : au-dela, les cartes se
              // chevauchaient et le survol devenait saccade.
              className="mx-auto flex w-[90%] flex-col rounded-lg bg-white pb-5 shadow-xl transition-transform duration-200 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.03] md:w-full"
            >
              <Image
                src={story.photo}
                alt={story.titre}
                className="h-[200px] w-full rounded-t-lg object-cover"
                width={640}
                height={400}
                sizes="(min-width: 768px) 25vw, 90vw"
              />

              <div className="my-5 grow px-10 md:px-4">
                <h3 className="mb-2.5 text-left text-[20px] font-bold text-black">
                  {story.titre}
                </h3>
                <p className="pb-2.5 text-[15.5px] leading-6 text-black">
                  {truncate(story.description, 100)}
                </p>
              </div>

              <div className="mx-3 flex justify-end">
                <Link
                  href={`${basePath}/${story.id}`}
                  className="hover:bg-accent-hover rounded-lg bg-cyan-800 px-5 py-2.5 text-[15px] font-medium text-white transition-colors"
                >
                  Lire la suite
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
