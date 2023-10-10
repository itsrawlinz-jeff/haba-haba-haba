import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Payment(){
    return(
        <section>
            <Navbar/>

            <div>

                <header className="bg-gray-100 py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="font-bold text-gray-900">
                            Payment Details
                        </h1>
                    </div>
                </header>

                <main className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Mpesa Payment Option
                            </h2>

                            <p className="mt-2 text-gray-500">
                                Paybill No: 4073463
                                <br/>
                                Account: Your Name
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900">
                                BANK DETAILS
                            </h3>

                            <p className="mt-2 text-gray-500">
                                LONGONOT MEDIA GROUP LTD
                            </p>

                            <p className="mt-2 text-gray-500">
                                BANK NAME: EQUITY BANK
                            </p>

                            <p className="mt-2 text-gray-500">
                                ACC NO: 0170274378562
                            </p>

                            <p className="mt-2 text-gray-500">
                                Switch code EQBLKENA
                            </p>

                            <p className="mt-2 text-gray-500">
                                Branch code 017
                            </p>

                            <p className="mt-2 text-gray-500">
                                Bank code 68
                            </p>

                            <p className="mt-2 text-gray-500">
                                Branch: community
                            </p>
                        </section>

                    </div>
                </main>
            </div>

            <Footer/>
        </section>
    )
}