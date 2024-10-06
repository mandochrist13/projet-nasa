import HeroSection from "./_components/hero";
import Section1 from "./_components/section1";
import Midsection from "./_components/passe";
import Present from "./_components/present";
import GoodFutur from "./_components/futur1";
import BadFutur from "./_components/futur2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div
        className="bg-cover bg-center flex flex-col py-20 container-app gap-[100px]"
        style={{ backgroundImage: "url(/assets/ligne.png)" }}
      >
        <div className="flex flex-col-reverse">
          <Section1
            textStory="Il y a quelques décennies, la Terre était un havre de paix. Des forêts luxuriantes couvraient les continents, les océans étaient riches de vie, et l'air était pur. Nos parents nous parlaient de rivières où l'on pouvait nager sans crainte et de paysages qui semblaient infinis."
            lien="https://prod.spline.design/l7pQdBEcF8u6dboF/scene.splinecode"
          />
          <Midsection />
        </div>
        <div className="flex flex-col-reverse">
          <Section1
            textStory="Aujourd’hui, la réalité est bien différente. Les forêts disparaissent sous les tronçonneuses, laissant place à des terres stériles. Les océans, envahis par les déchets plastiques, étouffent la vie marine. Les gaz à effet de serre, produits par notre consommation effrénée, réchauffent la planète, entraînant des catastrophes naturelles de plus en plus fréquentes. Des incendies ravagent les forêts, des tempêtes dévastent des villes, et des millions de personnes se retrouvent déplacées."
            lien="https://prod.spline.design/gAX2mmOSxGcxyzeR/scene.splinecode"
          />
          <Present />
        </div>
        <div className="flex flex-col-reverse">
          <Section1
            textStory="Le futur, s’il continue sur cette voie, sera sombre. Des générations à venir pourraient hériter d’un monde où l’eau potable est rare, où les récoltes échouent et où la biodiversité a disparu."
            lien="https://prod.spline.design/grJkVC6yzfImMk80/scene.splinecode"
          />
          <GoodFutur />
        </div>
        <div className="flex flex-col-reverse">
          <Section1
            textStory="Mais tout n’est pas perdu. Chaque geste compte. En réduisant notre consommation, en choisissant des produits durables et en protégeant notre environnement, nous pouvons redonner une chance à notre planète. Nous avons le pouvoir de transformer cette histoire. Ensemble, construisons un avenir où les enfants pourront de nouveau jouer dans des forêts verdoyantes et nager dans des océans propres."
            lien="https://prod.spline.design/l7pQdBEcF8u6dboF/scene.splinecode"
          />
          <BadFutur />
        </div>
      </div>
    </div>
  );
}
