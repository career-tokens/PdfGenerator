"use client"
import React, { useState } from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import {TigerCV} from '../../components/TigerCV';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import AddButton from '../../components/ui/AddButton';
import PersonalInfo from './personal';
import Profile from './profile';
import Skills from './skills';
import ProfessionalExperience from './professional';
import OpenSource from './opensource';
import Projects from './projects';
import { useRouter } from 'next/navigation';
import { Toaster } from 'sonner';

const TigerCVPdfGenerator = () => {
    const initialData:TigerCVData = {
        name: "Tiger Abrodi",
        position: "Full Stack Developer",
        imageUrl: "https://media.licdn.com/dms/image/D4E03AQFuTk5mpCvsFQ/profile-displayphoto-shrink_800_800/0/1696133927472?e=1718236800&v=beta&t=gCeIO9ZFKb7fHI7yrc8TAqaYgC_qpvCl-OBB1fAaigE",
        portfolio: {
        needed: true,
        link:""
        },
        twitter: {
            needed: true,
            link:""
        },
        github: {
            needed: true,
            link:""
        },
        linkedin: {
            needed: true,
            link:""
        },
        location: "Germany",
        blog: {
            needed: true,
            link:""
        },
        profile: ["I'm a passionate software develoepr who loves crafting products that people love", "I'm a huge lover of Open Source and also volunteer in many communities","I care about making the customers happy,testing,accessibility,teamwork and code quality."],
        skills: ["React,Typescript,GraphQL,Styled Components,Tailwind,Remix,Firebase , Prisma and NextJS.",
            "Cypress,Jest,Testing Library,Puppeteer and Storybook",
            "Extreme Programming, Clean code, TDD Interviewing and Accessibility."],
        professionalExperienceNeeded: true,
        professionalExperience: [{
            position: "Frontend Developer",
            company: "XYZ Company",
            period: "06/2021-present",
            tasks: [`Introduced team practices that helped us move faster, such as "Pair Reviews" and "Stop and Fix"`,
                `Made the site more accessible which is important since many of our users are elders such as grandparents `,
                `Actively worte tests,integration/unit with Jest and Testing Library and E2E Tests with Pentf and Puppeteer`,
                ],
        },
            {
                position: "Junior Frontend Developer",
                company: "ABC Company",
                period: "07/2020-06/2021",
                tasks: ["Worked on frontend with React , Javascript/Typescript,GraphQL(URQL Client),Styled Components,Stroybook and react-i18next,used by over 2 million users",
                    "Documented usgae of performance APIs in React which increased the code quality",
                "Helped with organizational tasks such as moderating our weekly Dev meetings"],
            }],
        openSourceNeeded: true,
        openSourceContributions: ["I have contributed to projects such as Mock Service Worker(used by thousands) and Testing Library(used by millions).",
            "I also volunteer in communities like KCD and Remix."],
        projects: [{
            title: "Madara",
            link: "",
            description: "A way for people to manage their tasks",
            features: ["Task manager I still use myself to manage my tasks amd has 80+ users",
                "Built with React,Typescript,Styled Components,DnD,React Firebase Hooks, and Firebase",
                "Focused on accessibility by implementing inclusive design patterns and tested with NVDA screen reader",
                "Implemented accessible Drag and Drop functionality"
            ],
        },
            {
                title: "Shisui",
                link: "",
                description: "An app to become better than your past by regularly assessing yourself and holding yourself accountable",
                features: ["Helps 100+ users become better than their past",
                    "Built with Remix , Tailwind , Planetscale and Prisma",
                    "Implemented optimistic UI"]
            },
            {
                title: "Vinland Saga",
                link: "",
                description: "A platform where chefs can write their recipes and connect with each other",
                features: ["Built with NextJS,Styled Components,Firebase,React Markdown and Zustand",
                    "Chefs can write their recipes in markdown , preview the recipes and comment when viewing others' recipes",
                    "Implemented image uplaoding (for the profile and recipe)",
                    "Handled the loading state globally"
                ]
            },
            {
                title: "Raveny",
                link: "",
                description: "A website where people can find recipes and find them based on different criteria",
                features: ["Built with React,Typescript, and Styled Components",
                    "Wrote tests using Jest,Testing Library,Cypress and Mock Service Worker",
                "Improvd the accesible state of the app after having learned more about accessbility"]
        }]
    }

  const [data, setData] = useState<TigerCVData>(initialData);

  const router = useRouter();
  
  const handleCheckboxChange = (topic) => {
    setData({ ...data, [topic]: { ...data[topic], needed: !data[topic].needed } })
    console.log({...data,[topic]:{...data[topic],needed:!data[topic].needed}})
  }

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "tigercv");
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
      <TigerCV data={data}/>
    </div>
    <div className="change-things font-[Merriweather] w-full lg:w-[50%] p-[20px]  relative flex justify-center items-center">
        <div className="w-[550px]  bg-[#0f172a] shadow-input  dark:bg-black p-4 rounded font-[Roboto] min-h-screen gap-y-4 flex flex-col">
           <PersonalInfo data={data} setData={setData}/>
          <Profile data={data} setData={setData} />
          <Skills data={data} setData={setData}/>
          <ProfessionalExperience data={data} setData={setData} />
          <OpenSource data={data} setData={setData} />
          <Projects data={data} setData={setData}/>
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

export default TigerCVPdfGenerator;