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

const Prototypes = () => {

    // creating a ref to attach to the scaled-view container
  const scaledViewRef = useRef(null);
  const [scaledViewHeight, setScaledViewHeight] = useState(null);

  const [selected, setSelected] = useState(1);
  const templates = ["Full Stack Developer's CV", "Data Scientist's CV", "Software Engineer's CV", "Journalist's CV"];

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
  return (
    <div className="bg-white dark:bg-black w-screen h-screen flex">
      <div className="left-sidebar w-[300px] hidden md:flex flex-col pt-20 px-5 bg-gray-200/40 dark:bg-gray-600/20">
        <div className="for-mobile sm:hidden"></div>
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
      <div className="right-template-show h-screen flex flex-col gap-y-[5vh] items-center justify-end pt-[88px]">
        <div className="template-view scrollbar scrollbar-thin  overflow-y-scroll flex flex-col justify-start items-center overflow-x-hidden h-[80vh] w-full">
          <div id="scaled-view" ref={scaledViewRef} className="w-[700px] scale-[0.5] lg:scale-[1] mt-0 h-fit" style={{ transformOrigin: 'top' }}>
            {selected == 1 && <TigerCV data={tigerInitialData} />}
            {selected == 2 && <MLCV data={mLInitialData} />}
            {selected == 3 && <CV data={cvInitialData} />}
            {selected == 4 && <NewCV {...journalistInitialData} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prototypes