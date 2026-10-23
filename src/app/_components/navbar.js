"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Les ancres sont prefixees par "/" : depuis une page de detail, un simple
// "#section1" ne menait nulle part puisque la section vit sur l'accueil.
const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/#section1", label: "Passé" },
  { href: "/#section2", label: "Présent" },
  { href: "/#section3", label: "Futur" },
  { href: "/#section4", label: "Solution" },
];

// Soulignement anime partant du centre vers les deux bords.
const LINK_CLASS = [
  "text-brand hover:text-accent relative block cursor-pointer py-2 transition-colors",
  "before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-0 before:bg-gray-400",
  "before:transition-[width] before:duration-500 before:ease-in-out hover:before:w-1/2",
  "after:absolute after:right-1/2 after:bottom-0 after:h-px after:w-0 after:bg-gray-400",
  "after:transition-[width] after:duration-500 after:ease-in-out hover:after:w-1/2",
].join(" ");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex w-full items-center justify-around">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Logo Ekang"
            className="h-[100px] w-[160px] object-contain"
            width={320}
            height={200}
            priority
          />
        </Link>

        {/* L'ancien bouton reposait sur data-collapse-toggle (Flowbite), absent
            du projet : il n'ouvrait donc rien sur mobile. */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">
            {isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M1 1l15 12M16 1L1 13" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>

        <div
          id="navbar-default"
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 rtl:space-x-reverse">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={LINK_CLASS}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
