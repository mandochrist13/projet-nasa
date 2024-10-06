
import { futurBad } from "../../data/fut2";

export default function PageNow({ params }) {
  const bad = futurBad.find(
    (bad) => bad.id === parseInt(params.id)
  );
  return (
    <div className="bg-white pt-10 min-h-screen">
      <div class="">
        <div class="flex flex-col md:flex-row justify-around w-full">
          <div class="px-10 w-full flex flex-col-reverse md:flex-col mx-auto">
            <iframe
              className="w-full h-[400px] rounded-3xl"
              src={bad.href}
              width={700}
              height={700}
              style={{ border: 0 }}
              allow="fullscreen"
            ></iframe>

            <div className="w-full gap-5 flex flex-col py-8 items-center">
              <h1 class="text-2xl text-center text-black font-bold">
                {bad.titre}
              </h1>
              <p class="text-black px-10">{bad.description} </p>
            </div>
          </div>

          <div class="p-8 md:w-1/3 md:h-screen md:overflow-y-auto mx-auto">
            <p class="text-black text-justify">{bad.explication}</p>
          </div>
        </div>
      </div>
      {/* <Image
              src={midsections.image}
              alt="image"
              width={300}
              height={100}
              className="object-cover w-[50%] mx-auto"
            ></Image> */}
    </div>
  );
}
