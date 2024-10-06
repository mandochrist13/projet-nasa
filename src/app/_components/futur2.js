import "../globals.css";
import Image from "next/image";
import Link from "next/link";
// import Spline from "@splinetool/react-spline/next";
import { futurBad } from "../data/fut2";

export default function badFutur() {
  

  return (
    <div>
      <div className="container mx-auto py-4">
        <div className="w-full items-center justify-center flex flex-col gap-8">
          <div className="w-full items-center flex justify-center px-4">
            <h1 className="text-[26px] md:text-[36px] text-[#083849]">
              Vous devriez aussi aimer
            </h1>
          </div>
          <div className="w-full md:w-[80%] gap-5 grid grid-cols-1 md:grid-cols-3 px-4">
            {futurBad.map((histoire) => (
              
                <div
                  className="w-[90%] md:w-full mx-auto pb-5 bg-white rounded-lg shadow-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200"
                  key={histoire.id}
                >
                  <Image
                    src={histoire.photo}
                    alt="Image traitement"
                    className="object-cover h-[200px] w-full rounded-t-lg"
                    width={1000}
                    height={1000}
                  />
                  <div className="my-[20px] px-[40px] md:px-[15px]">
                    <h3 className="text-black font-bold text-[20px] text-left mb-[10px]">
                      {histoire.titre}
                    </h3>
                    <p className="text-black font-regular text-[15.5px] leading-[24px] pb-[10px]">
                      {histoire.description}
                    </p>
                  </div>
                  <div className="flex justify-end items-end mt-[20px] mx-3">
                    <button className="hover:animate-none text-[#377A00] text-[15px] bg-cyan-800 hover:bg-[#65973c] hover:text-white font-medium rounded-lg px-5 py-2.5 w-auto">
                      <Link href={`/etat/${histoire.id}`} class="pb-6 text-white ">
                        {" "}
                        Rejoignez-nous
                      </Link>
                    </button>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
