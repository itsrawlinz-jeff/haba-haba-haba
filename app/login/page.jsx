import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { VscLock } from "react-icons/vsc";

export default function Login() {
  return (
    <section className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <Link
          href="/"
          class="flex items-center mb-6 text-2xl text-vivid-raspberry"
        >
         <img
            class="w-8 h-8 mr-2"
            src=""
            alt="logo"
          />
          Haba
          <h1 className="text-vivid-raspberry">Haba</h1>
        </Link> */}
        <div className="w-full bg-cultured rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-gray-900">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl  capitalize">
              Log in your account
            </h2>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  form="email"
                  className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                >
                  Your email
                </label>

                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    <TfiEmail size={20} className="w-4 h-4 text-gray-500" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  form="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    <VscLock size={20} className="w-4 h-4 text-gray-500" />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label form="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline "
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                title={"Log In"}
                className={
                  "w-full text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                }
              />
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  href={"/membership"}
                  class="font-medium text-primary-600 hover:underline capitalize"
                >
                  Apply for membership
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
