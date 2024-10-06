
import { midsections } from "../../data/mid";

export default function PageMidsection({ params }) {
  const midsection = midsections.find(
    (midsection) => midsection.id === parseInt(params.id)
  );
  return (
    <div className="bg-white pt-10 min-h-screen">
      <div className="">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <div className="px-10 w-full flex flex-col-reverse md:flex-col mx-auto">
            <iframe
              className="w-full h-[400px] rounded-3xl"
              src={midsection.href}
              width={700}
              height={700}
              style={{ border: 0 }}
              allow="fullscreen"
            ></iframe>

            <div className="w-full gap-5 flex flex-col py-8 items-center">
              <h1 class="text-2xl text-center text-black font-bold">
                {midsection.titre}
              </h1>
              <p class="text-black px-10">{midsection.description} </p>
            </div>
          </div>

          <div class="p-8 md:w-1/3 md:h-screen md:overflow-y-auto mx-auto">
            <p class="text-black">{midsection.explication}</p>
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
