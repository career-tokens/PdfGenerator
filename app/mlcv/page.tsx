"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation';
import MLCV from '../../components/templates/MLCV';
import Personal from './personal';
import Education from './education';
import ProfessionalExperience from './professional';
import Projects from './projects';
import Skills from './skills';
import Particles from '../../components/landing/magicui/particles';
import ThemeToggler from '../../components/landing/Header/ThemeToggler';
import { useTheme } from 'next-themes';
import GenerateButton from '../../components/landing/syntaxui/GenerateButton';
import { mLInitialData } from './initialData';
import Link from 'next/link';
import { CircleChevronLeft } from 'lucide-react';


const  MLCVGenerator= () => {
    // const initialData = {
    //     name: "Tina Huang",
    //     email: "hellotinah@gmail.com",
    //     phone: "123-456-7890",
    //     phoneNeeded:true,
    //     address: "1  BeepbeepBoop St. Philadelphia,PA 19104",
    //     addressNeeded:true,
    //     education: [
    //         {
    //         university: "University of Pennsylvania, School of Engineering and Applied Science,",
    //         universityLocation: "Philadelphia, PA",
    //             course: "Masters in Computer Science(MCIT)",
    //         period:"May 2020",
    //         details: ["Cumulative GPA:3.7/4.0", "Relevent Coursework:Machine Learning,Data Science,Statistics,Big Data Analytics,Probability and Discrete Mathematics"],
    //     },
    //     {
    //         university: "University of Toronto, Trinity College",
    //         universityLocation: "Toronto, ON",
    //         period:"May 2017",
    //         course: "Honors Bachelor of Science with High Distinction (Pharmacology Specialist)",
    //         details:["Cumulative GPA:3.8/4.0,Pharmacology GPA:3.9/4.0,Dean's List","St. Hildas's Scholarship,Trinity Chancellor's Scholarship($1000 awarded to top 2% of program"]
    //     }
    //     ],
    //     educationNeeded:true,
    //     professionalExperience: [
    //         {
    //             company: "Goldman Sachs Group ,Inc.",
    //             companyLocation: "New York, NY",
    //             period:"June 2019 - August 2019",
    //             role: "Data Science & Machine Learning Summer Analyst, Securities Division",
    //             tasks: ["Utilized python to implement unsupervised machine learning techniques for time series anomaly detection on 3TB of unstructured data, which reduced total process time by 20%",
    //                 "Wrangled 10TB of trading data stored in hadoop distributed file system using scala to remodel and visualize 16 previously inaccessible datasets to allow 500+ end clients to track impact of trades on liquidity",
    //                 "Presented results to team’s global head and wrote requested executive summary detailing value proposition and strategy to present to end clients and senior leadership",
    //             ]
    //         },
    //         {
    //             company: "Ontario Institute for Cancer Research",
    //             companyLocation: "Toronto, ON",
    //             period: "May 2017 - April 2018",
    //             role: "Junior Data Scientist",
    //             tasks: ["Utilized python and R on high performance computing Linux cluster to discover 3 new cancer mutations",
    //                 "Publication: Huang T, Reimand J. Network-rewiring mutation in kinase signaling networks are informative of cancer patient survival in preparation.",
    //             `Publication: Krassowski M, Paczkowska M, Cullion K, Huang T et al., ActiveDriverDB: human disease mutations and
    //             genome variation in post-translational modification sites of proteins. Nucleic Acids Res. 2017. doi:10.1093/nar/gkx973.`]
    //         }
    //     ],
    //     professionalExperienceNeeded: true,
    //     skills: [{
    //         topic: "Programming Languages:",
    //         description:"Python, R, Java, Scala, C, C++, JavaScript, HTML, CSS, Lua"
    //     },
    //         {
    //             topic: "Big Data and Machine Learning:",
    //             description:"Spark, Hadoop, MongoDB, Python (eg. scikit-learn, numpy, pandas, matplotlib"
    //         },
    //         {
    //             topic: "Data Science & Miscellaneous Technologies:",
    //             description:"A/B testing, ETL, Data science pipeline (cleansing, wrangling, visualization, modeling, interpretation), Statistics, Time series, Experimental design, Hypothesis testing, OOP, OOD, APIs, Excel, Git"
    //         }],
    //     skillsNeeded: true,
    //     projectsAndLeadership: [{
    //         role: "Teaching Assistant",
    //         location: "Toronto, ON",
    //         program: "Mathematical Foundations of Computer Science (University of Pennsylvania)",
    //         period: "April 2018 - September 2018",
    //         tasks:["Collaborated with instructor and 5 other TAs to lead recitations, grade coursework, and answer 60+ students’ questions"]
    //     },
    //         {
    //             role: "Cofounder & Business Lead",
    //             location: "Toronto, ON",
    //             program: "Tali (University of Toronto Hatchery Startup Accelerator)",
    //             period: "April 2018 - September 2018",
    //             tasks:[`Pitched to a private therapy provider to raise 5K for creation of subscription based web application that helps
    //             university students with autism and/or ADHD achieve academic goals`,
    //                 "Surveyed 20+ students and consulted with board certified therapists to create alpha prototype.",
    //                 "Pitched weekly throughout the accelerator program and ultimately chosen as top 10 of 50 teams"
    //             ]
    //         },
    //         {
    //             role: "President",
    //             location: "Toronto, ON",
    //             program: "TechXplore (University of Toronto) ",
    //             period: "March 2016 - May 2017",
    //             tasks:[`Led team of 5 students to collaborate with technology experts (eg. R, Python, AutoCAD) to create a total of 8 workshops,
    //             expositions, and hackathons that gathered a combined 1000+ attendees.`,
    //                 "Established and maintained 4 sponsorships with university faculties, companies, and other clubs",
    //             ]
    //         },
    //         {
    //             role: "Wet Lab Lead",
    //             location: "Toronto, ON",
    //             program: "International Genetically Engineered Machine (iGEM Toronto) ",
    //             period: "March 2016 - June 2017",
    //             tasks:[`Collaborated with 6 executive members to design and implement synthetic biology projects for 16 general members.`,
    //                 "Developed a light controlled genetic switch to control CRISPR/CAS9 gene editing (Bronze medal)",
    //                 "Created biologically reactive paper sensors for cheap and eco-friendly gold detection (Bronze medal)"
    //             ]
    //         }],
    //     projectsAndLeadershipNeeded:true
    // }

  const [data, setData] = useState(mLInitialData);

  const router = useRouter();
  
    const previewRef=useRef(null)
    
  const changeScaledViewHeight = () => {
    if (previewRef.current) {
      const rect = previewRef.current.getBoundingClientRect();
      if(window&&window.innerWidth<1024&&document)
      document.getElementById("preview").style.height = rect.height/2+"px";
    }
  };

  // Use useEffect to get the height after the component mounts
  useEffect(() => {
    changeScaledViewHeight();
  }, []);

    
  //for particles background theme
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#000000" : "#ffffff");
  }, [theme]);

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "mlcv");
    router.push("/viewPDF");
}
  return (
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start dark:bg-white bg-black  dark:bg-grid-small-black/[0.2] bg-grid-white/[0.2]">
                <div className="theme-toggler-for-phone items-center gap-x-3 flex absolute top-2 left-2 z-[1000] rounded-full bg-gray-300 p-1 dark:bg-gray-500">
        <Link href="/prototypes"><CircleChevronLeft/></Link>
        <ThemeToggler/>
      </div>
          <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap");
        button {
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
    <div className="preview-wrapper h-screen w-screen lg:w-[50%] pt-20 lg:pt-0  overflow-y-scroll scrollbar-none flex flex-col items-center">
      <Particles
        className="absolute inset-0 lg:hidden"
        quantity={1000}
          ease={80}
          size={theme==="dark"?1:2}
        color={color}
        refresh
      />
    <div ref={previewRef} id="preview" className="preview w-[700px] scale-50 md:w-full  md:scale-100 md:mt-[0px] md:mb-[0px]" style={{ transformOrigin: 'top' }}>
      <MLCV data={data}/>
        </div>
        </div>
    <div className="change-things font-[Merriweather] w-full bg-white border-slate-300 dark:border-slate-700 border-l-2 dark:bg-black lg:w-[50%] px-[20px]  relative flex justify-center items-start h-screen overflow-y-auto scrollbar-none">
        <div className="w-[550px] shadow-input p-4 rounded font-[Roboto] min-h-screen gap-y-4 flex flex-col pt-20">
                  <Personal data={data} setData={setData} />
                  <Education data={data} setData={setData} />
                  <ProfessionalExperience data={data} setData={setData} />
                  <Skills data={data} setData={setData}/>
                  <Projects data={data} setData={setData}/>
      </div>
    </div>
    <GenerateButton
      onClick={handleGeneratePdf}
    />
  </div>
  )
}

export default MLCVGenerator;