import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import BookAppointment from "@/components/BookAppointment";

export default function Contact(){
    const network = [
        "Adelaide",
        "Capetown",
        "Cairo",
        "Dallas",
        "Dubai",
        "Hong Kong",
        "Lagos",
        "London",
        "Los Angelas",
        "Netherlands",
        "New York",
        "Paris",
        "Sydney",
        "Toronto",
        "Zurich",
    ]

    return(
        <section>
            <Navbar/>
            <div>
                <Head>
                    <title>Contact Us</title>
                </Head>

                <header className="bg-gray-100 py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="font-bold text-gray-900">Contact Us</h1>
                    </div>
                </header>

                <main className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <BookAppointment/>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900">
                                Visit our offices
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Nairobi, Westlands, Parklands Road
                                <br/>
                                Tell: +254 789 33 77 48
                            </p>
                        </section>

                        <section className="mt-12">
                            <h3 className="text-xl font-bold text-gray-900">
                                NETWORK
                            </h3>

                            <ul className="mt-4 grid grid-cols-3 gap-6">
                                {network.map((item, index) => (
                                    <li key={index} className="text-gray-500">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </main>
            </div>

            <Footer/>
        </section>
    )
}