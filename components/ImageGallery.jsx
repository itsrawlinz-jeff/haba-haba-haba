import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function ImageGallery() {
  return (
    <main className="bg-[#FFF5F5]">
      <div className="container mx-auto py-20">
        <h1 className="text-center">
          <span className="text-black text-5xl font-normal tracking-wide">
            User{" "}
          </span>
          <span className="text-vivid-raspberry text-5xl font-normal tracking-wide">
            Stories
          </span>
        </h1>
        <div className="overflow-hidden h-96 mt-10">
          <div className="bg-scroll">
            <div
              class="w-full h-full flex  justify-center items-center 
             bg-vivid-raspberry/30 backdrop-brightness-75"
            >
              <div className="flex flex-col text-center">
                <h1>
                  <span className="text-zinc-100 text-5xl font-normal tracking-wide">
                    They Met on
                  </span>
                  <span className="text-white text-5xl font-normal tracking-wide">
                    {" "}
                  </span>
                  <span className="text-rose-600 text-5xl font-normal tracking-wide">
                    Haba
                  </span>
                </h1>
                <p className="text-center text-white text-base font-normal tracking-tight">
                  We’re incredibly happy & proud to have sparked thousands
                  <br />
                  of encounters & beautiful love stories. So please share <br />
                  your story with us! We need our a daily love fix.
                </p>

                <div className="pt-5">
                  <Link href={"/blog"}>
                    <Button title="Coming soon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
