import HeroSection from "./_components/hero";
import Section1 from "./_components/section1";
import Midsection from "./_components/passe";
import Present from "./_components/present";
import GoodFutur from "./_components/futur1";
import BadFutur from "./_components/futur2";

// Chaque chapitre associe une grille de cartes au texte narratif et a la scene
// 3D qui le suit. L'ordre du tableau est l'ordre d'affichage.
const CHAPTERS = [
  {
    key: "passe",
    Cards: Midsection,
    scene: "https://prod.spline.design/l7pQdBEcF8u6dboF/scene.splinecode",
    textStory:
      "Il y a quelques décennies, la Terre était un havre de paix. Des forêts luxuriantes couvraient les continents, les océans étaient riches de vie, et l'air était pur. Nos parents nous parlaient de rivières où l'on pouvait nager sans crainte et de paysages qui semblaient infinis.",
  },
  {
    key: "present",
    Cards: Present,
    scene: "https://prod.spline.design/gAX2mmOSxGcxyzeR/scene.splinecode",
    textStory:
      "Aujourd'hui, la réalité est bien différente. Les forêts disparaissent sous les tronçonneuses, laissant place à des terres stériles. Les océans, envahis par les déchets plastiques, étouffent la vie marine. Les gaz à effet de serre, produits par notre consommation effrénée, réchauffent la planète, entraînant des catastrophes naturelles de plus en plus fréquentes. Des incendies ravagent les forêts, des tempêtes dévastent des villes, et des millions de personnes se retrouvent déplacées.",
  },
  {
    key: "futur",
    Cards: GoodFutur,
    scene: "https://prod.spline.design/grJkVC6yzfImMk80/scene.splinecode",
    textStory:
      "Le futur, s'il continue sur cette voie, sera sombre. Des générations à venir pourraient hériter d'un monde où l'eau potable est rare, où les récoltes échouent et où la biodiversité a disparu.",
  },
  {
    key: "solution",
    Cards: BadFutur,
    scene: "https://prod.spline.design/l7pQdBEcF8u6dboF/scene.splinecode",
    textStory:
      "Mais tout n'est pas perdu. Chaque geste compte. En réduisant notre consommation, en choisissant des produits durables et en protégeant notre environnement, nous pouvons redonner une chance à notre planète. Nous avons le pouvoir de transformer cette histoire. Ensemble, construisons un avenir où les enfants pourront de nouveau jouer dans des forêts verdoyantes et nager dans des océans propres.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <div
        className="container-app flex flex-col gap-[100px] bg-cover bg-center py-20"
        style={{ backgroundImage: "url(/assets/ligne.png)" }}
      >
        {CHAPTERS.map(({ key, Cards, scene, textStory }) => (
          <div key={key} className="flex flex-col">
            <Cards />
            <Section1 textStory={textStory} lien={scene} />
          </div>
        ))}
      </div>
    </div>
  );
}
