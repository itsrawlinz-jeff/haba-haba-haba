"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function About() {
    return (
        <section>
        <Navbar />
            <div className="bg-[#FFF5F5] py-5">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mx-4 md:mx-14 lg:mx-20">
                <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        We help find the best match for you
                    </h1>
                    <p className="w-full md:w-1/2">
                        Haba Dating Club is an exclusive elite daters club. We offer dating, matchmaking, personal introduction agency services by providing local and international connections.
                    </p>
                </div>

                <img src="/images/habalogo.jpg" alt="habalogo" className="w-full md:w-1/2 h-auto" />
            </div>
        </div>

            <div className="">
            <h1 className="text-center font-bold pt-5">About Us</h1>
            <div className="mx-4 md:mx-14 lg:mx-20 mb-6 flex flex-col md:flex-row pt-5">
                <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
                    <img src="/images/datenight.jpg" alt="date night" className="rounded-xl" />
                </div>
                <div className="md:w-1/2 md:ml-5">
                    <p className="text-xl font-thin mb-4">Haba Dating Club is an exclusive elite daters club. We offer dating, matchmaking, personal introduction agency services by providing local and international connections. We offer tailor-made matchmaking services to the most hard-working people who don't have time to scroll and chat through the various dating apps, those who don't know how to generate conversations on dating apps, and also those who get freaked out by their profiles appearing on dating apps.</p>
                    <p className="text-xl font-thin">
                        Our job is to weed out those imperfect matches for you in advance and offer you only those who you can have an adventure with and later on become 'the yours only'. As you know, a wonderful relationship begins with 2 wonderful people. Our team of professionals scrutinizes every aspect of our members to make sure they are intelligent, sincere, happy, motivated, financially stable, and also doing something good with their life, and the result being you meeting potential matches.
                    </p>
                </div>
            </div>
            </div>



            <div className="bg-[#FFF5F5] py-5">
                <div className="mx-4 md:mx-14 lg:mx-20 mb-5 drop-shadow">
                    <h1 className="text-center text-4xl md:text-6xl font-bold">Our services</h1>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-around mt-4">
                    <ServicesCard
                    title="Dating Apps Profile Management"
                    description="This is an exclusive matchmaking services for the most hard working people who don't have time to scroll and chat through the various dating apps, those who don't know how to generate conversations on dating apps and also those who get freaked out by there profiles appearing on dating apps. We create profiles for them in the top 3 dating Apps, chat on their behalf and organize dates on their behalf. Our member will just be required to dress and show up for the date. Everything else will have been organized."
                    image="/images/appmanagement.jpg"
                    alt="dating apps profile management"

                />
                <ServicesCard
                    title="Safari Dating Membership"
                    description="This is a service designed for our exclusive members only.p We organize gataways, camps, road trips, Parties, blacktie events, golf tournaments all over the world for our elite members. This offers our members an opportunity to meet potential matches with whom they can enjoy a lasting relationship, and a beautiful life. Our members include entrepreneurs, CEOs, celebrities, models, politicians and highly committed professionals from across the globe."
                    image="/images/safari.jpg"
                    alt="safari dating membership"
                />
                    <ServicesCard
                        title="Black and white Dating"
                        description="This is an Interracial Matchmaking service for the elite who wants to date a different race than their own. Whether you're black yourself or looking for a white or you're a white looking for a black. If you are looking for a unique experience we have plenty of members worldwide and it's a worthy try. Our members include entrepreneurs, CEOs, celebrities, models, dignitaries, global leaders and highly committed professionals from across the globe. "
                        image="/images/bw.jpg"
                        alt="black and white dating"
                        />
                    <ServicesCard
                        title="VIP, Luxury and Travel dating"
                        description="We do offer VIP escorts, high end travel companions and top model escort dating service for entrepreneurs, CEOs, celebrities, footballers, global leaders, dignitaries, highly committed professionals etc and we value privacy for our members. Our models are fresh, educated, beautiful, Charming, intelligent and well bred for ladies and gentlemen for luxury magical evenings and getaways. They are also exclusive, not available per-hour. "
                        image="/images/TRAVEL.webp"
                        alt="vip, luxury and travel dating"
                        />
                    <ServicesCard
                        title="Show Me Your Town"
                        description="We will make your business trip or safari adventurous and memorable by connecting you with a local who is Educated, beautiful, charming and intelligent.
We also offer one of a kind opportunities for Educated, beautiful, intelligent and successful, men and women who would like to supplement their income with a part-time luxurious position as a Show Me Your Town Escort to new interesting people who visit their town/city/Country. "
                        image="/images/smt.jpg"
                        alt="show me your town"
                        />
                    <ServicesCard
                        title="Membership For Men"
                        description="Our services are designed for the elite and our members include entrepreneurs, CEOs, celebrities, models, politicians and highly committed professionals from across the globe.
Once you become our member we take the initiative of knowing you on a personal level, to ensure we match you with commitment-minded singles who share similar interests, life goals and aspirations.We will then arrange exclusive introductions with prospects who are best suited for you. "
                        image="/images/man.jpg"
                        alt="Membership For Men"
                        />
                    <ServicesCard
                        title="Membership For Women"
                        description="Our services are designed for the elite and our members include entrepreneurs, CEOs, celebrities, models, politicians and highly committed professionals from across the globe.
Once you become our member we take the initiative of knowing you on a personal level, to ensure we match you with commitment-minded singles who share similar interests, life goals and aspirations.We will then arrange exclusive introductions with prospects who are best suited for you. We also organize monthly unique and luxury events for our members like gataways, camps, road trips, Parties, blackties, Red carpet events, golf tournaments. "
                        image="/images/woman1.jpg"
                        alt="membership for women"
                    />
                    <ServicesCard
                        title="Matchmaking Agency services"
                        description="We offer a full suite of matchmaking and dating services to help our clients find lasting love and meaningful relationships. By thoroughly reviewing your preferences and values, we identify ideal matches from our extensive private database of single professionals. Our screening process helps filter out those who aren't a good fit before any introductions are made."
                        image="/images/mma.jpg"
                        alt="Matchmaking Agency services"
                    />
                    <ServicesCard
                        title="Bespoke Events"
                        description="We organize a variety of exclusive bespoke events and activities exclusively for our dating club members. From intimate dinner parties to outdoor mixers and group excursions, our curated events are designed to bring like-minded singles together in a relaxed, fun environment where real connections can form organically. Members appreciate that all the planning and logistics are taken care of upfront, allowing them to effortlessly socialize and focus on meeting special someone. With each event catered to a limited number of attendees, members receive personalized attention from our staff and never feel lost in a crowd. It's an innovative approach to dating that has proven highly successful in leading to quality matches and relationships for our clients."
                        image="/images/be.png"
                        alt="Bespoke Events"
                    />
                </div>
            </div>
            </div>


        <Footer />
        </section>
    );
}

function ServicesCard ({title, description, image, alt}){
    return(
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-white lg:ml-2 mb-5">
            <img src={image} alt={alt} className="" />
            <h1 className="px-2">{title}</h1>
            <p className="p-2 mb-3">{description}</p>
            <hr className="ml-2 mr-2 items-center justify-center" />
            <a href="/membership" className="flex flex-row items-center hover:text-blue-700 hover:transition duration-500 ease-in-out cursor-pointer">
                <p className="p-4">Become a Member</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>

    )
}