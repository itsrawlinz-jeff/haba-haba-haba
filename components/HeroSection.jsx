import { TfiFacebook, TfiInstagram, TfiTwitterAlt } from "react-icons/tfi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import Button from "@/components/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="h-screen ">
      <div className="flex justify-center items-center h-[80vh] flex-col space-y-6">
        <div className="text-cultured flex space-x-6">
          <Link href={"/"}>
            <TfiFacebook
              size={20}
              className="hover:text-vivid-raspberry hover:animate-bounce cursor-pointer transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link href={"/"}>
            <TfiInstagram
              size={20}
              className="hover:text-vivid-raspberry hover:animate-bounce cursor-pointer transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link href={"/"}>
            <TfiTwitterAlt
              size={20}
              className="hover:text-vivid-raspberry hover:animate-bounce cursor-pointer transition-all duration-300 ease-in-out"
            />
          </Link>
          <Link href={"/"}>
            <AiOutlineYoutube
              size={24}
              className="hover:text-vivid-raspberry hover:animate-bounce cursor-pointer transition-all duration-300 ease-in-out"
            />
          </Link>
        </div>
        <div>
          <h1 className="text-center text-6xl font-normal leading-[86.40px] tracking-widest">
            <span className="text-cultured">For the </span>
            <span className="text-vivid-raspberry">Smart</span>
            <span className="text-cultured">, the </span>
            <span className="text-vivid-raspberry">Affluent</span>
            <span className="text-cultured">, and </span>
            <span className="text-vivid-raspberry">the Wealthy</span>
          </h1>
        </div>
        <div>
          <h2 className="capitalize text-cultured text-2xl font-medium">
            Today, Take the first step towards love
          </h2>
        </div>
        <div>
          <Link href={"/package"}>
            <Button className="mt-3" title="Apply for your membership today!" />
          </Link>
        </div>
        <div>
          <Link href={"https://forms.gle/8LNT6Bh7oFb35SVB8"}>
            <Button className="mt-3" title="BOOK CONSULTATION / APPOINTMENT!" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <Link href={"/#club"}>
        <BsArrowDownCircle
          size={32}
          className="text-vivid-raspberry animate-bounce cursor-pointer "
        />
        </Link>
       
      </div>
    </main>
  );
}
