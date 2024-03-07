"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import Link from "next/link";
import { WavyBackground } from "../components/ui/wavy-background";

export default function Home() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
        <GoogleGeminiEffect
          title="Build with PDFternity"
          description="Scroll below to explore available templates!"
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
        <div className="flex flex-col gap-y-[3vh]">
        <div className="text-2xl md:text-3xl text-white font-bold inter-var ">Currently available templates:</div>
          <div className="flex justify-center gap-x-[2vw]">
            <Link href="/cv">
              <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                CV      
              </button>
            </Link>
            <Link href="/payment">
              <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black rounded-md font-semibold transition duration-200 ease-linear">
                Payment-Invoice      
              </button>
            </Link>
          </div>
          </div>
          </WavyBackground>
    </div>
    </>
  );
}
