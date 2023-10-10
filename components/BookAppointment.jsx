import Link from "next/link";


function BookAppointment() {
    return (
        // <div id="book-appointment" className="bg-[#FFF0F0] min-h-screen">
        //     <div className="container mx-auto py-20">
        //         <h1 className="text-center">
        //   <span className="text-stone-950 text-5xl font-normal tracking-wide">
        //     Book an{" "}
        //   </span>
        //             <span className="text-vivid-raspberry text-5xl font-normal tracking-wide">
        //     Appointment
        //   </span>
        //         </h1>
        //
        //         <div className="max-w-3xl mx-auto mt-10 p-4 text-center">
        //             <form className="mt-8 space-y-6" action="#" method="POST">
        //                 <div className="rounded-md shadow-sm -space-y-px">
        //                     <div>
        //                         <label htmlFor="name" className="sr-only">
        //                             Name
        //                         </label>
        //                         <input
        //                             id="name"
        //                             name="name"
        //                             type="text"
        //                             required
        //                             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-vivid-raspberry focus:border-vivid-raspberry focus:z-10 sm:text-sm"
        //                             placeholder="Name"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="contact" className="sr-only">
        //                             Email or Phone
        //                         </label>
        //                         <input
        //                             id="contact"
        //                             name="contact"
        //                             type="text"
        //                             required
        //                             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-vivid-raspberry focus:border-vivid-raspberry focus:z-10 sm:text-sm"
        //                             placeholder="Email or Phone"
        //                         />
        //                     </div>
        //                     <div>
        //                         <label htmlFor="subject" className="sr-only">
        //                             Subject
        //                         </label>
        //                         <input
        //                             id="subject"
        //                             name="subject"
        //                             type="text"
        //                             required
        //                             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-vivid-raspberry focus:border-vivid-raspberry focus:z-10 sm:text-sm"
        //                             placeholder="Subject"
        //                         />
        //                     </div>
        //                 </div>
        //
        //                 <div>
        //                     <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        //                         Date and Time
        //                     </label>
        //                     <input
        //                         type="datetime-local"
        //                         defaultValue={new Date().toISOString().slice(0, 16)}
        //                         id="date"
        //                         name="date"
        //                         required
        //                         className="mt-1 p-2 block w-full focus:ring-vivid-raspberry focus:border-vivid-raspberry sm:text-sm border-gray-300 rounded-md"
        //                     />
        //                 </div>
        //
        //                 <div>
        //                     <button
        //                         type="submit"
        //                         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-vivid-raspberry hover:bg-vivid-raspberry focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vivid-raspberry"
        //                     >
        //                         Book Appointment
        //                     </button>
        //                 </div>
        //             </form>
        //             <br/>
        //             <h1>Or</h1>
        //             <br/>
        //             <h2 className="text-2xl">
        //                 Whatsapp or Call us on</h2>
        //                 <a href={"tel:+254789337748"} className="text-vivid-raspberry text-lg">+254789 33 77 48</a>
        //
        //             <p className="mt-4">
        //                 Note: We charge a consultation fee of Ksh 3500. This amount will be
        //                 used to put you in our database and also as a top-up for your annual
        //                 membership of Ksh 100,000 which has more benefits.
        //             </p>
        //
        //         </div>
        //     </div>
        // </div>
        <section className="mb-12 flex justify-center items-center">
            <Link href="https://forms.gle/8LNT6Bh7oFb35SVB8">
            <button className="px-6 py-3 text-white font-medium rounded-md shadow-sm bg-vivid-raspberry hover:bg-vivid-raspberry focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vivid-raspberry">
                BOOK CONSULTATION / APPOINTMENT
            </button>
            </Link>
        </section>
    );
}

export default  BookAppointment;