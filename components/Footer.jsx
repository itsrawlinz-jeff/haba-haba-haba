// import { Divider } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import {
  TfiFacebook,
  TfiInstagram,
  TfiTwitter,
  TfiHeadphoneAlt,
  TfiEmail,
  TfiLocationPin,
} from "react-icons/tfi";
import { TbHeartFilled } from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().toISOString().substr(0, 4);
  return (
    <footer className="bg-black z-50 ">
      <div className="container mx-auto py-2 lg:pt-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center pl-2 lg:pl-0">
          <div>
            <div className="py-2.5 justify-center items-center gap-2.5 inline-flex">
              <Link href="/">
                <h1 className="text-vivid-raspberry">Haba</h1>
              </Link>
            </div>
            <p>
              <span className="text-zinc-100 text-sm font-normal leading-none tracking-wide">
                Connecting{" "}
              </span>
              <span className="text-vivid-raspberry text-sm font-normal leading-none tracking-wide">
                Hearts
              </span>
              <span className="text-zinc-100 text-sm font-normal leading-none tracking-wide">
                , Building Bonds!
              </span>
            </p>
            <div className="flex gap-6 py-6">
              <TfiFacebook className="text-vivid-raspberry" />
              <TfiInstagram className="text-vivid-raspberry" />
              <TfiTwitter className="text-vivid-raspberry" />
            </div>
          </div>
          <div className="text-[#FFF5F5]">
            <p className="text-vivid-raspberry text-[15px] font-normal leading-snug tracking-[5px] py-2.5 justify-center items-center pt-4 lg:pt-0">
              GET IN TOUCH
            </p>
            <div className="w-[295px] border border-zinc-800"></div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiHeadphoneAlt className="text-vivid-raspberry" />
              <p>+254 789 33 77 48</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiEmail className="text-vivid-raspberry" />
              <p>support@online.com</p>
            </div>
            <div className="flex gap-6 mt-6 items-center">
              <TfiLocationPin className="text-vivid-raspberry" />
              <p>
                Nairobi Westalnds,Parklands Road
              </p>
            </div>
          </div>
          <div className="text-[#FFF5F5]  ">
            <p className="text-vivid-raspberry text-[15px] font-normal leading-snug tracking-[5px]  py-2.5 justify-center items-center pt-4 lg:pt-0">
              OPENING HOURS
            </p>
            <div className="w-[295px] border border-zinc-800"></div>
            <div className="flex gap-8 mt-6">
              <p> Mon - Fri:</p>
              <p> 9am - 7pm</p>
            </div>
            <div className="flex gap-[32px] mt-6">
              <p> Saturday: </p>
              <p> 10am - 5pm</p>
            </div>
            <div className="flex gap-[44px] mt-6">
              <p className="font-didact"> Sunday: </p>
              <Link href="tel:+254 789 33 77 48">
                <p className="hover:text-vivid-raspberry"> By Call </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-t-vivid-raspberry mt-5"></div>
      </div>
      <p className="text-[#FFF5F5] font-didact text-center text-xs py-[20px] flex align-middle justify-center gap-1 ">
        &#169; <span className="font-semibold">{currentYear}. </span>
        All rights Reserved by Haba Dating Club
        <TbHeartFilled className="text-red-800 text-lg" />
      </p>
    </footer>
  );
}
