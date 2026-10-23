import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-white px-6 text-center">
      <p className="text-brand text-5xl font-bold">404</p>
      <h1 className="text-2xl font-bold text-black">Ce contenu n&apos;existe pas</h1>
      <p className="max-w-prose text-black">
        Le récit que vous cherchez a peut-être été déplacé, ou le lien est
        incomplet.
      </p>
      <Link
        href="/"
        className="hover:bg-accent-hover mt-2 rounded-lg bg-cyan-800 px-5 py-2.5 font-medium text-white transition-colors"
      >
        Revenir à l&apos;accueil
      </Link>
    </div>
  );
}
