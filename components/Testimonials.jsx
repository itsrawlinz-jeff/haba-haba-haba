import Image from "next/image";
import Link from "next/link";
import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <main className="bg-[#FFF0F0] min-h-screen">
      <div className="container mx-auto py-20">
        <h1 className="text-center">
          <span className="text-stone-950 text-[50px] font-normal tracking-wide">
            Glowing{" "}
          </span>
          <span className="text-vivid-raspberry text-[50px] font-normal tracking-wide">
            Testimonials
          </span>
        </h1>
        <div className=" masonry mt-10">
          <TestimonialCard
            img={"/images/man-avatar.webp"}
            name={"Bruce J. Babineau"}
            occupation={"Microbiologist"}
            testimonial={
              "I can't thank Haba Dating Club enough! They matched me with someone who shares my passion for adventure, and we've been exploring the world together ever since."
            }
          />
          <TestimonialCard
            img={"/images/woman-avatar.webp"}
            name={"Charlene Banks"}
            occupation={"Banker"}
            testimonial={
              "I was skeptical about online dating, but Haba Dating Club changed my perception. I found my soulmate here, and we're planning our dream wedding. Thank you for making my dreams come true!"
            }
          />
          <TestimonialCard
            img={"/images/t5.jpeg"}S
            name={"Michael"}
            occupation={"Sociologist"}
            testimonial={
              "Haba Dating Club's personalized matchmaking services are worth every penny. They understood my preferences and introduced me to the love of my life. I couldn't be happier."
            }
          />
          <TestimonialCard
            img={"/images/t6.jpeg"}
            name={"Emily"}
            occupation={"Teacher"}
            testimonial={
              "Being a busy professional, I didn't have time for traditional dating. Haba Dating Club made it easy for me to find someone who fits into my life seamlessly. I'm forever grateful."
            }
          />
          <TestimonialCard
            img={"/images/t4.jpeg"}
            name={"Daniel R."}
            occupation={"Software Engineer"}
            testimonial={
              "After years of searching for 'the one,' I finally met her through Haba Dating Club. We have so much in common, and every day feels like an adventure together."
            }
          />
          <TestimonialCard
            img={"/images/t3.jpeg"}
            name={"Sophia H."}
            occupation={"Financial Analyst"}
            testimonial={
              "Haba Dating Club's events brought us together, and the chemistry was instant. I've never met anyone who understands me so well. I'm incredibly lucky."
            }
          />
          <TestimonialCard
            img={"/images/t1.jpeg"}
            name={"Robert M."}
            occupation={"Banker"}
            testimonial={
              "I was hesitant to get back into dating after a divorce, but Haba Dating Club provided a safe and supportive environment. Now, I'm in a loving and fulfilling relationship."
            }
          />
          <TestimonialCard
            img={"/images/t2.jpeg"}
            name={"Laura J."}
            occupation={"Microbiologist"}
            testimonial={
              "I've made lifelong friends through Haba Dating Club's forum, and I even found my boyfriend there! It's not just about romance; it's about building meaningful connections."
            }
          />
        </div>
      </div>
    </main>
  );
}
