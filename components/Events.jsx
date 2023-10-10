import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Events() {
  return (
    <main className="w-full min-h-screen">
      <div className="container mx-auto py-20">
        <h1 className="text-center ">
          <span className="text-stone-950 text-[50px] font-normal tracking-wide">
            Bespoke{" "}
          </span>
          <span className="text-vivid-raspberry text-[50px] font-normal tracking-wide">
            Events
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="flex flex-col">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg">
                <Image
                width={600}
                height={600}
                  src="/images/breakfast.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize ">
                    <p className="text-2xl">breakfast event</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg">
                <Image
                width={600}
                height={600}
                  src="/images/speed-dating.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize">
                    <p className="text-2xl">Speed Dating</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg">
                <Image
                width={600}
                height={600}
                  src="/images/wine-tasting.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize">
                    <p className="text-2xl">Wine Tasting</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg">
                <Image
                width={600}
                height={600}
                  src="/images/lunch.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize">
                    <p className="text-2xl">dinner event</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg">
                <Image
                width={600}
                height={600}
                  src="/images/single-event.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize">
                    <p className="text-2xl">Singles Event</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col ">
            <Link href={"/events"}>
              <div className="group relative drop-shadow-lg  ">
                <Image
                width={600}
                height={600}
                  src="/images/dinner.webp"
                  alt="Avatar"
                  className="block w-full h-auto md:h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-vivid-raspberry opacity-95 overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full rounded-lg">
                  <div className="whitespace-nowrap text-cultured text-lg absolute overflow-hidden top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 capitalize">
                    <p className="text-2xl">Dinner event</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Link
          href={"/events"}
          className="flex justify-center items-center mt-10"
        >
          <Button title="See More" />
        </Link>
      </div>
    </main>
  );
}
