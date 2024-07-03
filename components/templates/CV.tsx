/* eslint-disable react/jsx-key */
import React from 'react'
import { CVData } from "../../dataModels/CVData";
import { CSS } from '@onedoc/react-print';

interface CVDataProps {
    data: CVData;
}

 export const CV:React.FC<CVDataProps> = ({data}) => {
    // const data = {
    //     name: "PIERRE DORGE",
    //     phoneNumber1: "(+41) 78 235 16 00",
    //     phoneNumber2: "(+33) 06 07 63 99 87",
    //     addressLine1: "Kaferhölzstrasse 54",
    //     addressLine2: "Zürich, Switzerland",
    //     email1: "pdorge@student.ethz.com",
    //     email2: "pierre.dorge@lleedpartners.com",
    //     education: [{
    //         university:"EIDGENOSSISCHE TECHNISCHE HOCHSCHULE ZURICH, ETHZ",
    //         universityLocation: "Zurich, ZH ,Switzerland",
    //         timeline: "2021-",
    //         stream: "Master of Science in Computer Science ",
    //         major:"Machine Intelligence, minor in Information Security"
    //     },
    //     {
    //         university:"ÉCOLE POLYTECHNIQUE FÉDÉRALE DE LAUSANNE, EPFL",
    //         universityLocation: "Lausanne, VD, Switzerland",
    //         timeline: "2017-2020",
    //         stream: "Bachelor of Science in Commmunication Systems",
    //         major:"Computer Architecture and Databases"
    //         }
    //     ],
    //     work: [{
    //         company: "LLEED AND PARTNERS, Digital Consulting",
    //         location: "Geneva, GE, Switzerland",
    //         position:"Co-Founder / Technology",
    //         timeline: "06/2020-",
    //         task:`Co-founded a digital consulting firm, working with large multinational companies contributing to their digital transforma-
    //         tion, with references such as Louis Dreyfus Company and Rio Tinto. Our projects involved optimizing metals sales and processing
    //         unstructured data for OTC trading. www.lleedpartners.com`
    //     },
    //     {
    //         company: "Louis Dreyfus Company",
    //         location: "Singapore",
    //         position:"Junior Data Scientist Engineer",
    //         timeline: "06/2019-03/2020",
    //         task:`Developed internal web applications involving data aggregation, natural language processing and more. My work in the
    //         field of FFA trading led to starting my company in which LDC and Rio Tinto are clients`
    //         },
    //         {
    //             company: "ECCO2 Solutions AG, Energy Optimization Startup",
    //             location: "Givisiez, FR, Switzerland",
    //             position:"Junior Software Engineer",
    //             timeline: "08/2019-09/2020",
    //             task:`Contributed to designing the architecture of a complex software solution involving IoT in C# using the
    //             .Net Framework.`
    //         },
    //         {
    //             company: "Junior Entreprise EPFL",
    //             location: "Lausanne, VD, Switzerland",
    //             position:"IT Consultant ",
    //             timeline: "06/2019-09/2020",
    //             task:`Worked on 2 projects, designed the NO SQL database architecture and developed web applications using React JS and
    //             Node JS.`
    //         },
    //         {
    //             company: "Energisme, Energy Optimization Startup",
    //             location: "Bourlogne-Billancourt 92, France",
    //             position:"Summer Software Developer Intern",
    //             timeline: "08/2018-09/2018",
    //             task:`Developed a web tool to generate Finite State Machines for graphics animations`
    //         }],
    //     academic: [{
    //         company: "Align Technologies, Dental Med-tech Company",
    //         location: "Zurich, ZH, Switzerland",
    //         position: "Computer Vision Research Intern - Masters Semester Project at ETHZ",
    //         timeline: "03/2022 - 07/2022",
    //         task:`Using computer vision techniques and machine learning to analyze 3D scans of teeth in order to identify dental illnesses`
    //     },
    //     {
    //         company: "Miraex, Quantum Technology Startup",
    //         location: "Lausanne, VD, Switzerland",
    //         position: "AI research Intern - Bachelor Thesis Project at EPFL",
    //         timeline: "02/2020 - 07/20200",
    //         task:`Performed pattern detection on acoustic signals using signal processing methods such as Wavelet Transform
    //         analysis and machine learning models such as SVMs, auto encoders and convolutional encoders.`
    //         }],
    //     coursework: [{
    //         subject: "Mathematics",
    //         topics:`Calculus, Linear Algebra, Information Theory, Signal Processing, Discrete Mathematics, Set Theory, Algebra, Algo-
    //         rithms, Statistics, Probability Theory, Stochastic Processes, Computational Statistics, Computational Intelligence Lab`
    //     },
    //         {
    //             subject: "Computer Science",
    //             topics:`Advanced Machine Learning, Probabilistic Artificial Intelligence, Parallelism and Concurrency, OO Program-
    //             ming, Functional Programming, Database Systems, Computer Architecture, Network Security, Theory of Computation, Visual
    //             Computing, Digital Signatures`
    //         },
    //         {
    //             subject: "Programming",
    //             topics:`C, R, Python (Django and data science libraries), Java, SQL, Scala (and Spark), C# (.NET), Javascript (React Js,
    //                 Node Js), SQL, Assembly, LaTex`
    //         }],
    //     additionalInfo: [{
    //         subject: "Personal Interests",
    //         description:"Blockchain, Politics, Music, Study of Latin and Ancient Greek."
    //     },
    //     {
    //         subject: "Activites",
    //         description:`Classical Guitar and Solfeggio in regional conservatory with DEM and CEM state certificates (9 years of practice and
    //             ability to teach), Tennis, Soccer, Hiking, Chess`
    //         },
    //         {
    //             subject: "Languages (speaking and writing)",
    //             description:"French (Native), English (Native), Spanish (B1)"
    //         }]
    // }
     return (
         <>
             <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:10in 19in;
          margin:0;
        }`
      }
    </CSS>
    <div className="cv bg-white  font-[Merriweather] font-[500] min-h-screen px-6 py-4 text-left dark:bg-black dark:text-white">
          <div className="font-bold mb-2 text-3xl text-center">{data.name}</div>
          <div className="details flex flex-col mb-4 dark:text-slate-400 ">
          <div className="flex justify-between mb-2">
              <span>{data.phoneNumber1} / {data.phoneNumber2}  </span>
               <span>{data.addressLine1}</span>
          </div>
          <div className="flex justify-between mb-2">
              <span>{data.email1} , {data.email2}</span>
              <span>{data.addressLine2}</span>
          </div>
          </div>
          <div className="education flex flex-col mb-4">
                    <span className="text-center text-xl p-1 border-b-2 border-black mb-2">EDUCATION</span>
                    {
                        data.education.map((item, i) => (
                            <div className={`education ${i+1}`}>
                            <div className="flex justify-between mb-2">
                          <span className="font-[600] w-[400px]">{item.university} </span>
                          <span>{item.universityLocation}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                          <i>{item.stream}</i>
                          <span>{item.timeline}</span>
                      </div>
                      <div className="flex justify-between mb-2 dark:text-slate-400 ">
                          <span className="flex"><span className="font-bold dark:text-white mr-2">• Major:</span><span dangerouslySetInnerHTML={{__html: item.major}}></span></span>
                      </div>
                            </div>
                        ))
                    }
          </div>
          <div className="work-exp  flex flex-col mb-4">
                    <span className="text-xl text-center p-1 border-b-2 border-black mb-2">WORK EXPERIENCE</span>
                    {
                        data.work.map((item, i) => (
                            <div className={`work-exp${i+1} flex flex-col mb-4`}>
                            <div className="flex justify-between mb-1">
                                <span className="font-[600]">{item.company} </span>
                                <span>{item.location}</span>
                            </div>
                            <div className="flex justify-between mb-1">
                                <i>{item.position}</i>
                                <span>{item.timeline}</span>
                            </div>
                            <div className="flex justify-between mb-1 dark:text-slate-400 ">
                                <span className="flex"><span dangerouslySetInnerHTML={{__html: item.task}}></span></span>
                            </div>
                            </div>
                        ))
                    }
          </div>
          <div className="academic flex flex-col mb-4">
                    <span className="text-xl text-center p-1 border-b-2 border-black mb-2">ACADEMIC PROJECTS</span>
                    {
                        data.academic.map((item, i) => (
                            <div className="work-exp1 flex flex-col mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-[600]">{item.company} </span>
                                <span>{item.location}</span>
                            </div>
                            <div className="flex justify-between mb-1">
                                <i>{item.position}</i>
                                <span>{item.timeline}</span>
                            </div>
                            <div className="flex justify-between mb-1 dark:text-slate-400 ">
                                <span className="flex"><span dangerouslySetInnerHTML={{__html: item.task}}></span></span>
                            </div>
                            </div>
                        ))
                    }
          </div>
          <div className="coursework flex flex-col mb-4">
                    <span className="text-xl text-center p-1 border-b-2 border-black mb-2">COURSEWORK/SKILLS</span>
                    {
                        data.coursework.map((item, i) => (
                            <span className="flex flex-col  mb-4 dark:text-slate-400">
                                <span className="font-bold dark:text-white mr-2">{item.subject}:</span>
                                <span dangerouslySetInnerHTML={{ __html: item.topics }}></span>
                            </span>
                        ))
                    }
          </div>
          <div className="additional-info flex flex-col">
                    <span className="text-xl text-center p-1 border-b-2 border-black mb-2">ADDITIONAL INFO</span>
                    {
                        data.additionalInfo.map((item, i) => (
                            <span className="flex flex-col mb-3 dark:text-slate-400">
                                <span className="font-bold dark:text-white mr-2">{item.subject}:</span>
                                <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
                            </span>   
                        ))
                    }
          </div>
             </div>
             </>
  )
}
