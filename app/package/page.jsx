import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link"

export default function Package() {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-md p-4 bg-cultured border border-gray-200 rounded-lg shadow sm:p-8">
          <h2 className="mb-4 text-xl font-medium text-gray-500 ">
            Free Membership
          </h2>
          <div className="flex items-baseline text-gray-900 ">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">0</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">
              /annually
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center decoration-rose-400">
              <svg
                  className="flex-shrink-0 w-4 h-4 text-rose-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ">
                You don't Have enough money to join our Club?Don't Worry! Be part of Our Database
              </span>
            </li>
            <li className="flex space-x-3 items-center decoration-rose-400">
              <svg
                  className="flex-shrink-0 w-4 h-4 text-rose-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ">
                100% Discreet and confidential service.
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ">
                12 months unlimited access & 2 months hold time to freeze
                membership.
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400 ">
                Find love in no time
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                Special access to our millionaires club
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                Dedicated relationship manager
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400 ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                VIP reservations for private parties
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                Irresistible dating profile
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400 ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                Complimentary personal styling and professional photography
              </span>
            </li>
            <li className="flex space-x-3 items-center line-through decoration-rose-400 ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-rose-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-400">
                Lifetime network membership
              </span>
            </li>
          </ul>
          <Link href={`/membership?membership=${encodeURIComponent('free')}`}>
          <Button
            type="submit"
            title={"Join Our Database List"}
            className={
              "w-full text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            }
          />
          </Link>
        </div>
      </div>


      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-md p-4 bg-cultured border border-gray-200 rounded-lg shadow sm:p-8">
          <h2 className="mb-4 text-xl font-medium text-gray-500 ">
            Silver Membership
          </h2>
          <div className="flex items-baseline text-gray-900 ">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">684</span>
            <span className="ml-1 text-xl font-normal text-gray-500 ">
              /annually
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">
                100% Discreet and confidential service.
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <svg
                  className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal line-through leading-tight text-gray-500 ">
                12 months unlimited access & 2 months hold time to freeze
                membership.
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 ">
                Find love in no time
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Special access to our millionaires club
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Dedicated relationship manager
              </span>
            </li>
            <li className="flex space-x-3 items-center ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                VIP reservations for private parties
              </span>
            </li>
            <li className="flex space-x-3 items-center ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Irresistible dating profile
              </span>
            </li>
            <li className="flex space-x-3 items-center ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Complimentary personal styling and professional photography
              </span>
            </li>
            <li className="flex space-x-3 items-center ">
              <svg
                className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500">
                Lifetime network membership
              </span>
            </li>
          </ul>
          <Link href={`/membership?membership=${encodeURIComponent('silver')}`}>
          <Button
            type="submit"
            title={"Apply For Membership"}
            className={
              "w-full text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            }
          />
          </Link>
        </div>
      </div>
        <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full max-w-md p-4 bg-cultured border border-gray-200 rounded-lg shadow sm:p-8">
            <h2 className="mb-4 text-xl font-medium text-gray-500 ">
              Gold Membership
            </h2>
            <div className="flex items-baseline text-gray-900 ">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">684</span>
              <span className="ml-1 text-xl font-normal text-gray-500 ">
              /annually
            </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3 items-center">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                100% Discreet and confidential service.
              </span>
              </li>
              <li className="flex space-x-3 items-center">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                12 months unlimited access & 2 months hold time to freeze
                membership.
              </span>
              </li>
              <li className="flex space-x-3 items-center">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 ">
                Find love in no time
              </span>
              </li>
              <li className="flex space-x-3 items-center">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                Special access to our millionaires club
              </span>
              </li>
              <li className="flex space-x-3 items-center">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                Dedicated relationship manager
              </span>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                VIP reservations for private parties
              </span>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                Irresistible dating profile
              </span>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                Complimentary personal styling and professional photography
              </span>
              </li>
              <li className="flex space-x-3 items-center ">
                <svg
                    className="flex-shrink-0 w-4 h-4 text-vivid-raspberry"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                Lifetime network membership
              </span>
              </li>
            </ul>
            <Link href={`/membership?membership=${encodeURIComponent('gold')}`}>
              <Button
                  type="submit"
                  title={"Apply For Membership"}
                  className={
                    "w-full text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  }
              />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
