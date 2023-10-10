import Image from "next/image";
import React from "react";

export default function ClubFeatures() {
  return (
    <main className="w-full  min-h-screen bg-red-700 overflow-hidden" id="club">
     <div className="h-full w-full overflow-auto">
     <div className="bg-[#FFF0F0] py-20">
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-5xl font-normal leading-[50px] tracking-wide text-center">
              <span className="text-stone-950 ">The No.1 Trusted </span>
              <span className="text-vivid-raspberry">Dating</span>
              <span className="text-stone-950"> Club</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 ">
              <div className="space-y-2 text-center drop-shadow-xl">
                <Image
                  src={"/icons/community.svg"}
                  width={50}
                  height={50}
                  alt="community"
                  className="mx-auto"
                />
                <h2>Awesome Community</h2>
                <p>
                  Join our dating club and become part of an awesome community where meaningful connections are made.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/members.svg"}
                  width={50}
                  height={50}
                  alt="members"
                  className="mx-auto"
                />
                <h2>Affluent Members</h2>
                <p>
                  Our exclusive club boasts affluent members who are successful, motivated, and ready to meet their perfect match.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/event.svg"}
                  width={50}
                  height={50}
                  alt="events"
                  className="mx-auto"
                />
                <h2>Exquisite Events</h2>
                <p>
                  Experience exquisite events curated for our members, offering the perfect opportunity to socialize and find your special someone.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/chat.svg"}
                  width={50}
                  height={50}
                  alt="friendly forum"
                  className="mx-auto"
                />
                <h2>Friendly Forum</h2>
                <p>
                  Engage in our friendly forum, where you can share experiences, seek advice, and connect with like-minded individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     <div>
       <div className="bg-[#FFF5F5] py-20">
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-5xl font-normal leading-[50px] tracking-wide text-center capitalize">
              <span className="text-stone-950 ">Start your Search </span>
              <span className="text-vivid-raspberry">Here</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 ">
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/profile.svg"}
                  width={50}
                  height={50}
                  alt="community"
                  className="mx-auto"
                />
                <h2>Create a Profile</h2>
                <p>
                  Create your personalized dating profile to showcase your unique qualities and interests.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/love.svg"}
                  width={50}
                  height={50}
                  alt="find a match"
                  className="mx-auto"
                />
                <h2>Find a Match</h2>
                <p>
                  Use our advanced matchmaking services to find your ideal match among our carefully selected members.
                </p>
              </div>
              <div className="space-y-2 text-center">
                <Image
                  src={"/icons/date.svg"}
                  width={50}
                  height={50}
                  alt="start dating"
                  className="mx-auto"
                />
                <h2>Start Dating</h2>
                <p>
                  Take the first step towards a fulfilling relationship and start dating with confidence through our club's guidance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
    </main>
  );
}
