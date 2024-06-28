"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import JD from '../../components/templates/JD';
import { JDData } from '../../dataModels/JDData';
import Basic from './basic';
import Technical from './technical';
import BestFit from './bestfit';

const  JDGenerator= () => {
    const initialData:JDData = {
            jobCategory: "Web & Software Development",
            contractType: "Hourly Contract",
            hours: "Less than 30 hours",
            period: "3 to 6 months",
            experience: "Expert Level",
            extraTips: "I am willing to pay higher rates for the most experienced freelancer",
            jobTitle: "AngularJS and Kendo UI front end developer",
            jobDescription:`Looking for an experienced front end developer for a 3-6 month project. You will work
            with a team of international experts for this project. This contract includes multiple
            sub-projects. Must be experienced with Javascript, AngularJS, Bootstrap, and Kendo
            Ul. Please note we are creating a Rich Internet Application, not a website/blog/etc.
            We have specifications available for applicants to review upon request.`,
          goal: "The UX goal of our project is to take a highly technical and difficult topic and translate that into a beautiful, intuitive, and functional interface.",
          technicalAbilities:["Experience creating localized (many languages) interfaces with AngularJS and Kendo is preferred",
          ,"UI, UX, Interactivity design experience a huge plus"
          , "Graphic design experience a plus but not required for this project"
          , "Experience in making architectural recommendations (wireframes will be provided)"
          , "Prior experience with Scrum is a plus"
          , "JIRA knowledge is a plus"
          , "Prior experience with continuous integration is a plus"
          , "Experience with GIT source control"],
            bestfit:[" Ability to communicate clearly"
            , "Dedication to meet project deadlines in a timely manner"
            , "Knowledge of smart commits for our ticketing system"
            , "Write I am a human on top of your proposal"
            , "Attention to detail"
            , "Willingness to sign an NDA"]  
        }

  const [data, setData] = useState<JDData>(initialData);

  const router = useRouter();
  

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "jd");
    router.push("/viewPDF");
}
  return (
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start dark:bg-white bg-black  dark:bg-grid-small-black/[0.2] bg-grid-white/[0.2]">
    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap");
        button {
          background-color: red;
          color: white;
          border-radius: 4px;
          padding: 5px;
          padding-top: 3px;
          padding-bottom: 3px;
        }

        input {
          background-color: black;
          color: white;
        }
        p {
          padding-bottom: 4px;
        }
      `}
    </style>
    <div className="preview w-[700px] scale-50 lg:w-[50%] mt-[-250px] mb-[-250px] lg:scale-100 lg:mt-[0px] lg:mb-[0px]">
      <JD data={data}/>
    </div>
    <div className="change-things font-[Merriweather] w-full lg:w-[50%] p-[20px]  relative flex justify-center items-center">
        <div className="w-[550px]  bg-[#0f172a] shadow-input  dark:bg-black p-4 rounded font-[Roboto] min-h-screen gap-y-4 flex flex-col">
          <Basic data={data} setData={setData} /> 
          <Technical data={data} setData={setData} /> 
          <BestFit data={data} setData={setData}/>
      </div>
    </div>
    <button
      className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]"
      onClick={handleGeneratePdf}
    >
      Generate PDF
      </button>
  </div>
  )
}

export default JDGenerator;