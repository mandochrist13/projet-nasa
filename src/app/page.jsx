

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
        className="bg-cover bg-center flex flex-col container-app gap-[60px]"
        style={{ backgroundImage: "url(/assets/ligne.png)" }}
      >
        <div>
          <Section1 />
          <Midsection />
        </div>
        <div>
          <Section1 />
          < Present/>
        </div>
        <div>
          <Section1 />
          < GoodFutur/>
        </div>
        <div>
          <Section1 />
          < BadFutur/>
        </div>
      </div>
    </div>
  );
}
