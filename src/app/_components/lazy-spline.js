"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// Le runtime WebGL de Spline pese plusieurs Mo. On le sort du bundle initial et
// on ne le charge que lorsque la scene approche du viewport : la page d'accueil
// en contient quatre, les charger toutes au demarrage bloquait le rendu.
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function LazySpline({ scene }) {
  const holder = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Navigateur sans IntersectionObserver : on charge apres le premier
      // rendu plutot que de bloquer l'affichage.
      const timer = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // On anticipe d'un demi-ecran pour que la scene soit prete a l'arrivee.
      { rootMargin: "50% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={holder}
      // L'aspect fixe reserve la place de la scene et evite que la page saute
      // au moment ou le canvas apparait.
      className="bg-brand/5 relative aspect-square w-full overflow-hidden rounded-3xl"
    >
      {shouldLoad && (
        <Spline
          scene={scene}
          onLoad={() => setIsLoaded(true)}
          className="h-full w-full"
        />
      )}

      {!isLoaded && (
        <div
          className="absolute inset-0 grid place-items-center"
          aria-hidden="true"
        >
          <span className="border-brand/20 border-t-brand h-8 w-8 animate-spin rounded-full border-2" />
        </div>
      )}
    </div>
  );
}
