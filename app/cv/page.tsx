/* eslint-disable react/jsx-key */
"use client"

import { CV } from "../../components/templates/CV";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Input } from "../../components/ui/input";
import { CVData } from "../../dataModels/CVData";
import { toast } from "sonner";
import Details from "./details";
import Education from "./education";
import Work from "./work";
import Academic from "./academic";
import Coursework from "./coursework";
import AdditionalInfo from "./additionalInfo";
import ThemeToggler from "../../components/landing/Header/ThemeToggler";
import Particles from "../../components/landing/magicui/particles";
import { cvInitialData } from "./initialData";
import GenerateButton from "../../components/landing/syntaxui/GenerateButton";
import { useTheme } from "next-themes";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";

export default function Home() {
  // const initialData:CVData = {
  //   name: "ROBERT DORGE",
  //   phoneNumber1: "(+41) 90 123 65 00",
  //   phoneNumber2: "(+33) 89 34 12 77 89",
  //   addressLine1: "somewheregreat 54",
  //   addressLine2: "Zürich, Switzerland",
  //   email1: "robertdorge@student.hello.com",
  //   email2: "robertDorge@hellopartners.com",
  //   education: [{
  //       university:"EIDGENOSSISCHE TECHNISCHE HOCHSCHULE ZURICH, ETHZ",
  //       universityLocation: "Zurich, ZH ,Switzerland",
  //       timeline: "2021-",
  //       stream: "Master of Science in Computer Science ",
  //       major:"Machine Intelligence, minor in Information Security"
  //   },
  //   {
  //       university:"ÉCOLE POLYTECHNIQUE FÉDÉRALE DE LAUSANNE, EPFL",
  //       universityLocation: "Lausanne, VD, Switzerland",
  //       timeline: "2017-2020",
  //       stream: "Bachelor of Science in Commmunication Systems",
  //       major:"Computer Architecture and Databases"
  //       }
  //   ],
  //   work: [{
  //       company: "LLEED AND PARTNERS, Digital Consulting",
  //       location: "Geneva, GE, Switzerland",
  //       position:"Co-Founder / Technology",
  //       timeline: "06/2020-",
  //       task:`Co-founded a digital consulting firm, working with large multinational companies contributing to their digital transforma-
  //       tion, with references such as Louis Dreyfus Company and Rio Tinto. Our projects involved optimizing metals sales and processing
  //       unstructured data for OTC trading. www.lleedpartners.com`
  //   },
  //   {
  //       company: "Louis Dreyfus Company",
  //       location: "Singapore",
  //       position:"Junior Data Scientist Engineer",
  //       timeline: "06/2019-03/2020",
  //       task:`Developed internal web applications involving data aggregation, natural language processing and more. My work in the
  //       field of FFA trading led to starting my company in which LDC and Rio Tinto are clients`
  //       },
  //       {
  //           company: "ECCO2 Solutions AG, Energy Optimization Startup",
  //           location: "Givisiez, FR, Switzerland",
  //           position:"Junior Software Engineer",
  //           timeline: "08/2019-09/2020",
  //           task:`Contributed to designing the architecture of a complex software solution involving IoT in C# using the
  //           .Net Framework.`
  //       },
  //       {
  //           company: "Junior Entreprise EPFL",
  //           location: "Lausanne, VD, Switzerland",
  //           position:"IT Consultant ",
  //           timeline: "06/2019-09/2020",
  //           task:`Worked on 2 projects, designed the NO SQL database architecture and developed web applications using React JS and
  //           Node JS.`
  //       },
  //       {
  //           company: "Energisme, Energy Optimization Startup",
  //           location: "Bourlogne-Billancourt 92, France",
  //           position:"Summer Software Developer Intern",
  //           timeline: "08/2018-09/2018",
  //           task:`Developed a web tool to generate Finite State Machines for graphics animations`
  //       }],
  //   academic: [{
  //       company: "Align Technologies, Dental Med-tech Company",
  //       location: "Zurich, ZH, Switzerland",
  //       position: "Computer Vision Research Intern - Masters Semester Project at ETHZ",
  //       timeline: "03/2022 - 07/2022",
  //       task:`Using computer vision techniques and machine learning to analyze 3D scans of teeth in order to identify dental illnesses`
  //   },
  //   {
  //       company: "Miraex, Quantum Technology Startup",
  //       location: "Lausanne, VD, Switzerland",
  //       position: "AI research Intern - Bachelor Thesis Project at EPFL",
  //       timeline: "02/2020 - 07/20200",
  //       task:`Performed pattern detection on acoustic signals using signal processing methods such as Wavelet Transform
  //       analysis and machine learning models such as SVMs, auto encoders and convolutional encoders.`
  //       }],
  //   coursework: [{
  //       subject: "Mathematics",
  //       topics:`Calculus, Linear Algebra, Information Theory, Signal Processing, Discrete Mathematics, Set Theory, Algebra, Algo-
  //       rithms, Statistics, Probability Theory, Stochastic Processes, Computational Statistics, Computational Intelligence Lab`
  //   },
  //       {
  //           subject: "Computer Science",
  //           topics:`Advanced Machine Learning, Probabilistic Artificial Intelligence, Parallelism and Concurrency, OO Program-
  //           ming, Functional Programming, Database Systems, Computer Architecture, Network Security, Theory of Computation, Visual
  //           Computing, Digital Signatures`
  //       },
  //       {
  //           subject: "Programming",
  //           topics:`C, R, Python (Django and data science libraries), Java, SQL, Scala (and Spark), C# (.NET), Javascript (React Js,
  //               Node Js), SQL, Assembly, LaTex`
  //       }],
  //   additionalInfo: [{
  //       subject: "Personal Interests",
  //       description:"Blockchain, Politics, Music, Study of Latin and Ancient Greek."
  //   },
  //   {
  //       subject: "Activites",
  //       description:`Classical Guitar and Solfeggio in regional conservatory with DEM and CEM state certificates (9 years of practice and
  //           ability to teach), Tennis, Soccer, Hiking, Chess`
  //       },
  //       {
  //           subject: "Languages (speaking and writing)",
  //           description:"French (Native), English (Native), Spanish (B1)"
  //       }]
  // }
  
  const [data, setData] = useState<CVData>(cvInitialData);

  const router = useRouter();

  const previewRef = useRef(null);

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

  const handleErrorToast = () => {
    toast.error("You need to have minimum one entry here", {
      className: 'text-base  w-[400px] flex justify-center',
      duration: 5000,
    });
  }

  const handleWarningToast = (entries:string) => {
    toast.warning(`Exceeding ${entries} entries here is not advised.The content might not fit in one page and would require 2 pages.`,
      {
        className: 'text-base  w-[400px] flex justify-center',
        duration: 5000,
      })
  }

  const handleRemove = (category, index) => {
    if (category === "education") {
      if (data.education.length === 1) {
        // If there's only one education entry, prevent deletion
        handleErrorToast();
        return;
      }
      
      const updatedEducation = [...data.education];
      updatedEducation.splice(index, 1); // Remove the item at the given index
      setData({ ...data, education: updatedEducation });
    }

    if (category === "work") {
      if (data.work.length === 1) {
        // If there's only one work entry, prevent deletion
        handleErrorToast();
        return;
      }
      
      const updatedWork = [...data.work];
      updatedWork.splice(index, 1); // Remove the item at the given index
      setData({ ...data, work: updatedWork });
    }

    if (category === "academic") {
      if (data.academic.length === 1) {
        // If there's only one academic entry, prevent deletion
        handleErrorToast();
        return;
      }
      
      const updatedAcademic = [...data.academic];
      updatedAcademic.splice(index, 1); // Remove the item at the given index
      setData({ ...data, academic: updatedAcademic });
    }

    if (category === "coursework") {
      if (data.coursework.length === 1) {
        // If there's only one coursework entry, prevent deletion
        handleErrorToast();
        return;
      }
      
      const updatedCoursework = [...data.coursework];
      updatedCoursework.splice(index, 1); // Remove the item at the given index
      setData({ ...data, coursework: updatedCoursework });
    }

    if (category === "additionalInfo") {
      if (data.additionalInfo.length === 1) {
        // If there's only one additionalInfo entry, prevent deletion
        handleErrorToast();
        return;
      }
      
      const updatedAdditionalInfo = [...data.additionalInfo];
      updatedAdditionalInfo.splice(index, 1); // Remove the item at the given index
      setData({ ...data, additionalInfo: updatedAdditionalInfo });
    }
    // Add more conditions for other categories if needed
  };

  const handleAdd = (category) => {
    if (category === "education") {  
      if (data.education.length === 2)
        handleWarningToast("two")
      const updatedEducation = [...data.education];
      const previousElement = updatedEducation[updatedEducation.length - 1];
      updatedEducation.push({ ...previousElement });//even by chance dont directly put previousElement, they
      //will share common reference
      setData({ ...data, education: updatedEducation });
    }

    if (category === "work") {    
      if (data.work.length === 5)
      handleWarningToast("five")
      const updatedWork = [...data.work];
      const previousElement = updatedWork[updatedWork.length - 1];
      updatedWork.push({ ...previousElement });
      setData({ ...data, work: updatedWork });
    }

    if (category === "academic") {
      if (data.academic.length === 2)
      handleWarningToast("two")
      const updatedAcademic = [...data.academic];
      const previousElement = updatedAcademic[updatedAcademic.length - 1];
      updatedAcademic.push({ ...previousElement });
      setData({ ...data, academic: updatedAcademic });
    }

    if (category === "coursework") {
      if (data.coursework.length === 3)
      handleWarningToast("three")
      const updatedCoursework = [...data.coursework];
      const previousElement = updatedCoursework[updatedCoursework.length - 1];
      updatedCoursework.push({ ...previousElement });
      setData({ ...data, coursework: updatedCoursework });
    }

    if (category === "additionalInfo") {
      if (data.additionalInfo.length === 3)
      handleWarningToast("three")
      const updatedAdditionalInfo = [...data.additionalInfo];
      const previousElement = updatedAdditionalInfo[updatedAdditionalInfo.length - 1];
      updatedAdditionalInfo.push({ ...previousElement });
      setData({ ...data, additionalInfo: updatedAdditionalInfo });
    }
  }

  const handleGeneratePdf = () => {
      localStorage.setItem("data", JSON.stringify(data));
      localStorage.setItem("template", "cv");
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
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        button{
          color:white;
          border-radius:4px;
          padding:5px;
        }

        input{
          background-color:black;
          color:white;
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
      <CV data={data}/>
        </div>
        </div>
        <div className="change-things font-[Merriweather] w-full bg-white border-slate-300 dark:border-slate-700 border-l-2 dark:bg-black lg:w-[50%] px-[20px]  relative flex justify-center items-start h-screen overflow-y-auto scrollbar-none">
        <div className="w-[550px] shadow-input p-4 rounded font-[Roboto] min-h-screen gap-y-4 flex flex-col pt-20">
<Details data={data} setData={setData}/>
<Education data={data} setData={setData} handleAdd={handleAdd} handleRemove={handleRemove}/>
<Work data={data} setData={setData} handleAdd={handleAdd} handleRemove={handleRemove}/>
<Academic data={data} setData={setData} handleAdd={handleAdd} handleRemove={handleRemove}/>
<Coursework data={data} setData={setData} handleAdd={handleAdd} handleRemove={handleRemove}/>       
<AdditionalInfo data={data} setData={setData} handleAdd={handleAdd} handleRemove={handleRemove}/> 
                  </div>
      </div>
      <GenerateButton
      onClick={handleGeneratePdf}
    />
    </div>
  );
}
