import "../globals.css";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next";

export default function Section1() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-5">
          <div className="w-full md:w-[60%] px-4">
            <h1 className="lg:text-xl text-black bg-white">
              Entre 1990 et 2018, les émissions de gaz à effet de serre ont
              baissé de 18% en France. Pour les pays d&apos;Europe sur la même
              période, c&apos;est une baisse de 25%. Cependant, les émissions de
              CO2 dans le monde ont augmenté de 64% (d&apos;après les chiffres
              du Ministère de la transition écologique).{" "}
            </h1>
          </div>
          <div className="w-full md:w-[40%]  px-4">
            {/* <Image
              className=""
              src="/assets/glace.png"
              alt="Mountain landscape"
              width={1080}
              height={600}
            /> */}
            
            <Spline className="rounded-3xl" scene="https://prod.spline.design/l7pQdBEcF8u6dboF/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}
