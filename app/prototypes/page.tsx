/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { TigerCV } from '../../components/templates/TigerCV';
import { tigerInitialData } from '../tigercv/initialData';
import MLCV from '../../components/templates/MLCV';
import { mLInitialData } from '../mlcv/initialData';
import { CV } from '../../components/templates/CV';
import { cvInitialData } from '../cv/initialData';
import { NewCV } from '../../components/templates/NewCV';
import { journalistInitialData } from '../newCV/initialData';
import { useTheme } from 'next-themes';
import Particles from '../../components/landing/magicui/particles';
import { HoverBorderGradient } from '../../components/landing/aceternity/hover-border-gradient';
import { CircleChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from '../../components/landing/Header/ThemeToggler';


const Prototypes = () => {

    // creating a ref to attach to the scaled-view container
  const scaledViewRef = useRef(null);
  const [scaledViewHeight, setScaledViewHeight] = useState(null);

  const [selected, setSelected] = useState(1);
  const templates = ["Full Stack Developer's CV", "Data Scientist's CV", "Software Engineer's CV", "Journalist's CV"];
  const routes = ["/tigercv", "/mlcv", "/cv", "/newCV"];

  //we had a problem , we have a container with scroll on and fixed height and inside it we are going to display a
  //div whose when given width 700px , gets height according to its contents looks a certain way and we need to maintain the proportion
  // and make it smaller and so we scale it down by 0.5 but issue is the container still takes the width and height of its original size
  //using transform origin we made the scaled view to the top left of the original space but still theres a lot of empty scrolling space beneath it
  //so using ref we targetted the element , got its height (basically the original height only we get) and then using javascript made its height half times as it should
  //be since scaled down by 0.5
  //the problem could have been easily solved if we knew the height before hand, which is the case for width so the scaled down length is easily understood
  //btw all of this for smaller than "lg" screen
    // Function to get the height  of the scaled-view container and use half of it for the scaled container to remove trailing bottom space
    const logScaledViewHeight = () => {
      if (scaledViewRef.current) {
        const rect = scaledViewRef.current.getBoundingClientRect();
        console.log(rect)
        console.log(window.innerWidth)
        if(window.innerWidth<1024)
        document.getElementById("scaled-view").style.height = rect.height/2+"px";
      }
    };
  
    // Use useEffect to get the height after the component mounts
    useEffect(() => {
      logScaledViewHeight();
    }, []);
  
  //for particles background theme
    const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  //sidebar open logic for mobiles
  const [sidebaropen, setSidebarOpen] = useState(false);

  const sidebarToggleHandler = () => {
    setSidebarOpen(!sidebaropen);
  };

  //if the sidebar is open and the user clicks outside it, it should close
  useEffect(() => {
    document.getElementById("right-template-show").addEventListener("click", () => {
      console.log("hello")
      if (sidebaropen)
        setSidebarOpen(!sidebaropen);
    })
  }, [sidebaropen]);

  //getting the current route
  const usePathName = usePathname();

  return (
    <div className="bg-white dark:bg-black w-screen h-screen flex overflow-hidden">
      <div className="theme-toggler-for-phone absolute top-4 left-[310px] z-[1000] sm:hidden">
        <ThemeToggler/>
      </div>
                      <button
                  onClick={sidebarToggleHandler}
                  id="sidebarToggler"
                  aria-label="Side Menu"
                  className="absolute z-[10000] top-8 left-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 md:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      sidebaropen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      sidebaropen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      sidebaropen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
      <div className={`left-sidebar w-[0px] p-0 h-screen md:w-[300px] flex flex-col md:pt-20 md:px-5 bg-gray-200/40 dark:bg-gray-600/20 ${sidebaropen&&"absolute !w-[300px] z-[1000] top-0 left-0 transition-all bg-slate-200 dark:bg-gray-700 pt-20 px-5"}`}>
        {(sidebaropen || window.innerWidth >= 768) &&
          <>
          <div className="for-mobile flex flex-col gap-y-2 sm:hidden">
          <div className="flex items-center gap-x-1 -ml-1">
                  <img width="40" height="40" src="https://img.icons8.com/?size=100&id=23882&format=png&color=4a6cf7" alt="resume" />
                  <span className="text-2xl font-bold text-[#4a6cf7]">PDFternity</span>
            </div>
            <Link
                            href="/"
                            className={`flex mb-5 py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 font-semibold ${
                              usePathName === "/"
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            Home
            </Link>
        </div>
        <div className="templates flex flex-col gap-y-2">
          <span className="font-semibold text-gray-800 dark:text-white">Templates</span>
          {
            templates.map((template, index) => (
              <div key={index} onClick={ ()=>{setSelected(index+1)}} className={`w-[210px] cursor-pointer -ml-2 rounded-md py-2 px-3 hover:bg-gray-300/60 font-medium hover:dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:translate-x-[10px] transition-all ${selected==index+1&&"dark:bg-gray-800 bg-gray-300/60"}`}>
              {template}
            </div>
            ))
          }
          </div>
          </>}
      </div>
      <style>
        {
          `
            @media(max-width:767px){
            .right-template-show{
            width:100vw;
             }
        }

             @media(min-width:768px){
             .right-template-show{
            width:calc( 100vw - 300px);
             }
            }
          `
        }
      </style>
      <div id="right-template-show" className="right-template-show relative h-screen flex flex-col gap-y-4 items-center justify-between pt-[60px]">
        <div className="w-fit p-2 dark:bg-black">
      <Link href={routes[selected-1]}>
        <HoverBorderGradient
          containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
        <span>Get Started</span>
        <CircleChevronRight/>
          </HoverBorderGradient>
          </Link>
          </div>
        <div className="template-view z-10 rounded-md rounded-b-none  h-[80vh] w-[354px] lg:w-[704px] border-2 border-slate-400 dark:border-slate-800  border-b-none scrollbar scrollbar-thin scrollbar-none  overflow-y-scroll flex flex-col justify-start items-center overflow-x-hidden">
          <div id="scaled-view" ref={scaledViewRef} className="w-[700px] scale-[0.5] lg:scale-[1] mt-0 h-fit" style={{ transformOrigin: 'top' }}>
            {selected == 1 && <TigerCV data={tigerInitialData} />}
            {selected == 2 && <MLCV data={mLInitialData} />}
            {selected == 3 && <CV data={cvInitialData} />}
            {selected == 4 && <NewCV {...journalistInitialData} />}
          </div>
        </div>
        <Particles
        className="absolute inset-0"
        quantity={theme=="dark"?200:300}
          ease={80}
          size={theme==="dark"?1:2}
        color={color}
        refresh
      />
      </div>
    </div>
  )
}

export default Prototypes