/* eslint-disable react/jsx-key */
"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import Link from "next/link";
import { WavyBackground } from "../components/ui/wavy-background";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import MoveToCTAButton from "../components/ui/MoveToCTAButton";
import { Person } from "../dataModels/Person";
import { toast } from "sonner";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  useEffect(() => {
    setTimeout(()=>{document.getElementById("click").click();})
    
  },[])
  return (
    <>
      <MoveToCTAButton />
      <div className="absolute ml-auto mr-auto left-0 right-0 text-black top-[20px] z-[50] text-center">
        <p id="click" onClick={() => {
          toast.warning("Please make sure to disable any dark mode extension for better experience.The app is already in dark mode",
          {
            className: 'text-base absolute top-0  w-[400px] flex justify-center z-[20000]',
            duration: 5000,
          })
        }}>
          If you are seeing this then please make sure to turn off any dark
          mode extension.
        </p>
      </div>
      <div className="fixed z-[100] bottom-[0vh] flex flex-row items-center justify-start mb-10 w-full pl-[5vw]">
        <AnimatedTooltip items={people} />
      </div>
      <div
        className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          title="Build with PDFternity"
          description="Make your own PDFs using our amazing free templates!"
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <div className="templates text-center h-[100vh] flex flex-col justify-center items-center relative">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="flex flex-col items-center gap-y-[3vh] relative mt-[20vh]">
            <div className="text-2xl md:text-3xl text-white font-bold inter-var ">
              Currently available templates:
            </div>
            <div className="available-templates flex flex-wrap w-[300px] sm:w-[500px] justify-center gap-x-[2vw] gap-y-[2vh] text-center">
              <Link href="/tigercv" onClick={() => { 
                toast.warning("Currently this CV takes a lot of server time and hence during generation, it might get timed out.",
                {
                  className: 'text-base  w-[400px] flex justify-center',
                  duration: 5000,
                })
              }}>
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  Tiger Abrodi&apos;s CV
                </button>
              </Link>
              <Link href="/cv">
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  CV
                </button>
              </Link>
              <Link href="/newCV">
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  Journalist&apos;s CV
                </button>
              </Link>
              <Link href="/payment">
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  Payment-Invoice
                </button>
              </Link>
              <Link href="/airbnb">
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  Airbnb Receipt
                </button>
              </Link>
              <Link href="/jd">
                <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                  Job Posting
                </button>
              </Link>
            </div>
            <Link href="/pricing" className="mt-[25vh]">
              <button className="px-12 py-4 rounded-full bg-[#1ED760] z-20 font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                CUSTOM TEMPLATES
              </button>
            </Link>
          </div>
        </WavyBackground>
      </div>
    </>
  );
};

const people: Person[] = [
  {
    id: 1,
    name: "Mainak Mukherjee",
    designation: [
      <p>Full-Stack Developer.</p>,
      <p>I made this app on top of OneDoc API.</p>,
      <p>Click icon to checkout my github.</p>,
    ],
    image:
      "https://res.cloudinary.com/dxprcmmcz/image/upload/v1709922950/1709131580678_b6hnmm.jpg",
    link: "https://github.com/career-tokens",
  },
  {
    id: 2,
    name: "OneDoc Team",
    designation: [
      <p>OneDoc API sure is awesome!</p>,
      <p>Make sure to check out their website by clicking the icon.</p>,
    ],
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAwElEQVR4AZ3SIQyDMBCF4ecF3ot5g3dT+Nk5NGoGhSV4SVLvUIiZmSoUCT6Zr628LTcIry1Zlv3qmk+c6EG+9DP6xdrFH6LJoeUmwRHUGGKNoJqxQlS1o0GS2dBha3i8szo6xX3hyYmmj9uKq5UihPjgTFsIJ0Wj8ywRGsUOQO4lxk6x1e0Jtoo9BjnAXtEucoR3RY7QhTgzniXAomG0jM8MHeEl/mzCTAg7BJg5Rn9lLOMDmwo02ygBam7596jTXgktLRuhzuk6AAAAAElFTkSuQmCC",
    link: "https://www.onedoclabs.com/",
  },
];

export default Home;
