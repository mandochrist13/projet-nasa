export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-8">
      <p className="flex items-center gap-2 text-sm text-black">
        {/* Icone en SVG inline : l'ancienne version pointait vers
            nextjs.org via next/image, un domaine non autorise dans
            next.config.mjs, ce qui faisait echouer le rendu du layout. */}
        <svg
          className="h-4 w-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6.5" />
          <path d="M1.5 8h13M8 1.5c1.8 1.8 2.7 4 2.7 6.5S9.8 12.7 8 14.5C6.2 12.7 5.3 10.5 5.3 8S6.2 3.3 8 1.5Z" />
        </svg>
        Groupe EKANG
      </p>
    </footer>
  );
}
