// pages/multistep-form.js
"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiDrink, BiSolidUserCircle } from "react-icons/bi";
import { BsCalendarDate, BsGenderAmbiguous, BsPhone } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import { MdOutlineSick, MdSmokeFree } from "react-icons/md";
import { TbCalendarPlus } from "react-icons/tb";
import { TfiEmail, TfiPackage } from "react-icons/tfi";
import Link from "next/link";
import BookAppointment from "@/components/BookAppointment";
import { useRouter, useSearchParams } from 'next/navigation';
import {query} from "@/lib/db";

const MultistepForm = ({}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize your form fields here
    personalInformation: {
      name: "",
      email: "",
      country: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "",
    },
    relationshipPreference: {
      preferredPartnerGender: "",
      relationshipStatus: "",
      smoke: false,
      drink: false,
      partnerDrinks: false,
      incomeBracket: "",
      ageBracket: "",
      chronicIllness: false,
    },
    preferredPackages: {
      habaService: "",
      habaPackagePlan: "",
      habaPackageInstallmentPlan: "",
    },
  });

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: newValue,
      },
    }));
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };



  const [selectedMembership, setSelectedMembership] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const membership = searchParams.get('membership');

    if (membership) {
      setSelectedMembership(decodeURIComponent(membership))
      console.log(membership);
    }
  }, [router])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [yourgender, setYourgender] = useState('')
  const [preferredPartnerGender, setPreferredPartnerGender] = useState('')
  const [relationshipStatus, setRelationshipStatus] = useState('')
  const [smoke, setSmoke] = useState('')
  const [drink, setDrink] = useState('')
  const [partnerDrinks, setPartnerDrinks] = useState('')
  const [incomeBracket, setIncomeBracket] = useState('')
  const [ageBracket, setAgeBracket] = useState('')
  const [chronicIllness, setChronicIllness] = useState('')
  let [prefferedPackagePlan, setPrefferedPackagePlan] = useState('')
  let [habaPackageInstallmentPlan, setHabaPackageInstallmentPlan] = useState('')
    const membership = selectedMembership;

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submitting... ")
        if (membership !== 'free' && (!name || !email || !country || !phoneNumber || !dateOfBirth || !yourgender || !preferredPartnerGender || !relationshipStatus || !smoke || !drink || !partnerDrinks || !incomeBracket || !ageBracket || !chronicIllness || !prefferedPackagePlan || !habaPackageInstallmentPlan)) {
            return alert("Please fill in all fields");
        } else if (membership === 'free' && (!name || !email || !country || !phoneNumber || !dateOfBirth || !yourgender || !preferredPartnerGender || !relationshipStatus || !smoke || !drink || !partnerDrinks || !incomeBracket || !ageBracket || !chronicIllness)) {
            return alert("Please fill in all fields");
        }

        const res = await fetch('/api/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, country, phoneNumber, dateOfBirth, yourgender, preferredPartnerGender, relationshipStatus, smoke, drink, partnerDrinks, incomeBracket, ageBracket, chronicIllness, prefferedPackagePlan, habaPackageInstallmentPlan, membership
            })
        })
        const data = await res.json()
        // console.log("data sent", data)
        if (res.status === 200){
            console.log("data sent", data)
        }else{
            console.log("error", data)
        }
    }



  return (
    <section>
      <Navbar/>
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:my-10">
      <div className="w-full bg-cultured rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-gray-900">
        <form >
          {step === 1 && (
            //  Personal information
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl  capitalize">
                Enter Your Personal information
              </h2>
              <div className="space-y-4 md:space-y-6">
                <label
                  htmlFor="client-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <BiSolidUserCircle
                      size={20}
                      className="w-4 h-4 text-gray-500"
                    />
                  </span>
                  <input
                    type="text"
                    id="client-name"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                    placeholder="Bonnie Green"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    Your Email
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
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Country
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      <FaGlobeAfrica
                        size={20}
                        className="w-4 h-4 text-gray-500"
                      />
                    </span>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      placeholder="Kenya"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Phone Number
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      <BsPhone size={20} className="w-4 h-4 text-gray-500" />
                    </span>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      placeholder="+254712345678"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="birthday"
                    className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                  >
                    Date of Birth
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      <BsCalendarDate
                        size={20}
                        className="w-4 h-4 text-gray-500"
                      />
                    </span>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      placeholder="01/01/1992"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <>
              {/* Relationship Preference */}
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 z-0 overflow-hidden">
              <div
                  className="scrollable-container overflow-y-auto"
                  style={{
                    maxHeight: "calc(100vh - 200px)", // Adjust the height as needed
                    padding: "20px", // Adjust the padding as needed
                  }}
                >
                   <h2 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl  capitalize ">
                  Relationship Preference
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Gender
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsGenderAmbiguous
                        size={20}
                        className="w-4 h-4 text-gray-500"
                      />
                    </span>
                    <select
                      id="gender"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      value={yourgender}
                      onChange= {(e) => setYourgender(e.target.value)}
                    >
                      <option  value={""}>Please select one…</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-binary">Non-Binary</option>
                      <option value="other">Other</option>
                      <option value="Prefer not to answer">
                        Perfer not to Answer
                      </option>
                    </select>
                  </div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Preferred partner Gender (Searching For)
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <BsGenderAmbiguous
                        size={20}
                        className="w-4 h-4 text-gray-500"
                      />
                    </span>
                    <select
                      id="gender"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={preferredPartnerGender}
                        onChange={(e) => setPreferredPartnerGender(e.target.value)}
                    >
                      <option  value={""}>Please select one…</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Relationship Status
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <GiLinkedRings
                        size={20}
                        className="w-4 h-4 text-gray-500"
                      />
                    </span>
                    <select
                      id="gender"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      value={relationshipStatus}
                        onChange={(e) => setRelationshipStatus(e.target.value)}
                    >
                      <option  value={""}>Please select one…</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="separated">Separated</option>
                      <option value="divorced">Divorced</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="smoke"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Do you Smoke?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <MdSmokeFree
                          size={20}
                          className="w-4 h-4 text-gray-500"
                        />
                      </span>
                      <select
                        id="smoke"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={smoke}
                        onChange={(e) => setSmoke(e.target.value)}
                      >
                        <option  value={""}>Please select one…</option>
                        <option value="Never">Never</option>
                        <option value="Moderately">Moderately</option>
                        <option value="Regularly">Regularly</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="Drink"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Do you Drink?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <BiDrink size={20} className="w-4 h-4 text-gray-500" />
                      </span>
                      <select
                        id="Drink"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={drink}
                        onChange={(e) => setDrink(e.target.value)}
                      >
                        <option  value={""}>Please select one…</option>
                        <option value="Never">Never</option>
                        <option value="Moderately">Moderately</option>
                        <option value="Regularly">Regularly</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="smoke"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Should Your Partner Drink?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <BiDrink size={20} className="w-4 h-4 text-gray-500" />
                      </span>
                      <select
                        id="smoke"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={partnerDrinks}
                        onChange={(e) => setPartnerDrinks(e.target.value)}
                        required
                      >
                        <option  value={""}>Please select one…</option>
                        <option value="Never">Never</option>
                        <option value="Moderately">Moderately</option>
                        <option value="Regularly">Regularly</option>
                        <option value="No Preference">No Preference</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="income"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Whats Your Income Bracket?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <AiOutlineDollarCircle
                          size={20}
                          className="w-4 h-4 text-gray-500"
                        />
                      </span>
                      <select
                        id="income"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={incomeBracket}
                        required
                        onChange={(e) => setIncomeBracket(e.target.value)}
                      >
                        <option value={""}>Please select one…</option>
                        <option value="Less than $5000">Less than $5000</option>
                        <option value="$5000 - $10000">$5000 - $10000</option>
                        <option value="$15001 - $20000">$15001 - $20000</option>
                        <option value="$20000 - $25000">$20000 - $25000</option>
                        <option value="Above $25000">Above $25000</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Required Partner Age Bracket?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <TbCalendarPlus
                          size={20}
                          className="w-4 h-4 text-gray-500"
                        />
                      </span>
                      <select
                        id="age"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={ageBracket}
                        onChange={(e) => setAgeBracket(e.target.value)}
                        required
                      >
                        <option value={""}>Please select one…</option>
                        <option value="18-25">18-25</option>
                        <option value="25 -35">25 -35</option>
                        <option value="35-45">35-45</option>
                        <option value="45-65">45-65</option>
                        <option value="65 - Above">65 - Above</option>
                        <option value="No Preference">No Preference</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="illness"
                      className="block mb-2 text-sm font-medium text-gray-900 capitalize"
                    >
                      Do You Have Any Chronic Illness?
                    </label>

                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <MdOutlineSick
                          size={20}
                          className="w-4 h-4 text-gray-500"
                        />
                      </span>
                      <select
                        id="illness"
                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={chronicIllness}
                        required
                        onChange={(e) => setChronicIllness(e.target.value)}
                      >
                        <option value={"first"}>Please select one…</option>
                        <option value="Yes, I do have a chronic illiness">
                          Yes, I do have a chronic illness
                        </option>
                        <option value="No, I don't have a chronic illness">
                          No, I don't have a chronic illness
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                </div>
               
              </div>
            </>
          )}
          {selectedMembership !== 'free' && step === 3 && (
            <>
              {/* Preferred Packages */}
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-xl leading-tight tracking-tight text-gray-900 md:text-2xl  capitalize">
                  Preferred Package Plan
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <label
                    htmlFor="client-name"
                    className="block mb-2 text-sm font-medium text-gray-900 capitalize "
                  >
                    Choose your preferred Package
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      <TfiPackage size={20} className="w-4 h-4 text-gray-500" />
                    </span>
                    <select
                      id="package"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                      value={prefferedPackagePlan}
                        onChange={(e) => setPrefferedPackagePlan(e.target.value)}
                    >
                      <option>Subscription Plan (Full Payment)</option>
                      <option value="Haba Gold Plan $684">
                        Haba Gold Plan $684
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <label
                    htmlFor="client-name"
                    className="block mb-2 text-sm font-medium text-gray-900 capitalize "
                  >
                    Your Haba Package Installment Plan
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      <TfiPackage size={20} className="w-4 h-4 text-gray-500" />
                    </span>
                    <select
                      id="package"
                      className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry block w-full p-2.5"
                        value={habaPackageInstallmentPlan}
                        onChange={(e) => setHabaPackageInstallmentPlan(e.target.value)}
                    >
                      <option>
                        Installment Subscription Plan ($342)
                      </option>
                      <option value="Haba Gold $342">Haba Gold $342</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          I agree to the Terms and Conditions
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Navigation Buttons */}
          <div className="flex items-center mb-4 justify-center space-x-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className={
                  "text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none  focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                }
              >
                Previous
              </button>
              // <button type="button" onClick={handlePrev}>
              //   Previous
              // </button>
            )}

            {step === 1 && (
                <button
                    type="button"
                    onClick={handleNext}
                    className={
                      "text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    }
                >
                  Next
                </button>
            )}

            {step === 2 && (
                selectedMembership === 'free' ? (
                    <Link href={"/payment"}>
                      <button onClick={handleSubmit}
                          type="submit"
                          className="text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Submit
                      </button>
                    </Link>
                ) : (
                    <button
                        type="button"
                        onClick={handleNext}
                        className="text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Next
                    </button>
                )
            )}

            

            {step === 3 && (
                <Link href={"/payment"}>
                  <button onClick={handleSubmit}
                      type="submit"
                      className={
                        "text-white bg-vivid-raspberry hover:border border-vivid-raspberry hover:bg-transparent hover:outline-none hover:text-gray-900 ring-vivid-raspberry focus:outline-none focus:ring-0 focus:ring-vivid-raspberry focus:border-vivid-raspberry font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      }
                  >
                    Submit
                  </button>
                </Link>
            )}
          </div>
        </form>
      </div>
    </div>
      {/*button for consultation/book an appointment*/}
      <div className="flex items-center justify-center space-x-4">
        <BookAppointment/>
        </div>


      <Footer/>
    </section>
    
  );
};

export default MultistepForm;
