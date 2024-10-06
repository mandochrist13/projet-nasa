import "../globals.css";
// import Image from "next/image";
import Spline from "@splinetool/react-spline/next";

export default function Section1({textStory, lien}) {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-[60%] px-4">
            <h1 className="lg:text-xl rounded-lg text-black bg-white">
              {textStory}
            </h1>
          </div>
          <div className="w-full md:w-[40%]  px-4">
            <Spline className="rounded-3xl" scene={lien} />
          </div>
        </div>
      </div>
    </div>
  );
}
