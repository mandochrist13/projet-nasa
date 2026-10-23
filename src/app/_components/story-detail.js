/**
 * Mise en page commune aux quatre pages de detail
 * (/etat, /now, /goodcase, /badcase).
 */
export default function StoryDetail({ story }) {
  return (
    <article className="min-h-screen bg-white pt-10">
      <div className="flex w-full flex-col justify-around md:flex-row">
        <div className="mx-auto flex w-full flex-col-reverse px-10 md:flex-col">
          {story.href && (
            <iframe
              className="h-[400px] w-full rounded-3xl"
              src={story.href}
              title={`Vue immersive : ${story.titre}`}
              // Ces panoramas sont lourds : on evite de les charger avant
              // qu'ils soient visibles.
              loading="lazy"
              style={{ border: 0 }}
              allow="fullscreen"
            />
          )}

          <div className="flex w-full flex-col items-center gap-5 py-8">
            <h1 className="text-center text-2xl font-bold text-black">
              {story.titre}
            </h1>
            <p className="px-10 text-black">{story.description}</p>
          </div>
        </div>

        {/* La colonne defile sur sa propre hauteur, navbar collante deduite. */}
        <div className="mx-auto p-8 md:h-[calc(100vh-var(--nav-height))] md:w-1/3 md:overflow-y-auto">
          <p className="text-justify text-black">{story.explication}</p>
        </div>
      </div>
    </article>
  );
}
