import LazySpline from "./lazy-spline";

export default function Section1({ textStory, lien }) {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="w-full px-4 md:w-3/5">
          <p className="rounded-lg bg-white text-black lg:text-xl">
            {textStory}
          </p>
        </div>
        <div className="w-full px-4 md:w-2/5">
          <LazySpline scene={lien} />
        </div>
      </div>
    </section>
  );
}
