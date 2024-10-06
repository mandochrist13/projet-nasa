import "../globals.css";
import Image from "next/image";

export default function Footer() {
  return (
  <footer className="flex h-10 flex-col items-center justify-center">
       
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        aria-hidden
        src="https://nextjs.org/icons/globe.svg"
        alt="Globe icon"
        width={16}
        height={16}
      />
      Groupe EKANG →
    </a>
  </footer>
  );
}
