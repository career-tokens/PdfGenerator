/* eslint-disable react/jsx-key */
"use client"

import { CV } from "../../components/CV";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";

export default function Home() {
  const initialData = {
    name: "ROBERT DORGE",
    phoneNumber1: "(+41) 90 123 65 00",
    phoneNumber2: "(+33) 89 34 12 77 89",
    addressLine1: "somewheregreat 54",
    addressLine2: "Zürich, Switzerland",
    email1: "robertdorge@student.hello.com",
    email2: "robertDorge@hellopartners.com",
    education: [{
        university:"EIDGENOSSISCHE TECHNISCHE HOCHSCHULE ZURICH, ETHZ",
        universityLocation: "Zurich, ZH ,Switzerland",
        timeline: "2021-",
        stream: "Master of Science in Computer Science ",
        major:"Machine Intelligence, minor in Information Security"
    },
    {
        university:"ÉCOLE POLYTECHNIQUE FÉDÉRALE DE LAUSANNE, EPFL",
        universityLocation: "Lausanne, VD, Switzerland",
        timeline: "2017-2020",
        stream: "Bachelor of Science in Commmunication Systems",
        major:"Computer Architecture and Databases"
        }
    ],
    work: [{
        company: "LLEED AND PARTNERS, Digital Consulting",
        location: "Geneva, GE, Switzerland",
        position:"Co-Founder / Technology",
        timeline: "06/2020-",
        task:`Co-founded a digital consulting firm, working with large multinational companies contributing to their digital transforma-
        tion, with references such as Louis Dreyfus Company and Rio Tinto. Our projects involved optimizing metals sales and processing
        unstructured data for OTC trading. www.lleedpartners.com`
    },
    {
        company: "Louis Dreyfus Company",
        location: "Singapore",
        position:"Junior Data Scientist Engineer",
        timeline: "06/2019-03/2020",
        task:`Developed internal web applications involving data aggregation, natural language processing and more. My work in the
        field of FFA trading led to starting my company in which LDC and Rio Tinto are clients`
        },
        {
            company: "ECCO2 Solutions AG, Energy Optimization Startup",
            location: "Givisiez, FR, Switzerland",
            position:"Junior Software Engineer",
            timeline: "08/2019-09/2020",
            task:`Contributed to designing the architecture of a complex software solution involving IoT in C# using the
            .Net Framework.`
        },
        {
            company: "Junior Entreprise EPFL",
            location: "Lausanne, VD, Switzerland",
            position:"IT Consultant ",
            timeline: "06/2019-09/2020",
            task:`Worked on 2 projects, designed the NO SQL database architecture and developed web applications using React JS and
            Node JS.`
        },
        {
            company: "Energisme, Energy Optimization Startup",
            location: "Bourlogne-Billancourt 92, France",
            position:"Summer Software Developer Intern",
            timeline: "08/2018-09/2018",
            task:`Developed a web tool to generate Finite State Machines for graphics animations`
        }],
    academic: [{
        company: "Align Technologies, Dental Med-tech Company",
        location: "Zurich, ZH, Switzerland",
        position: "Computer Vision Research Intern - Masters Semester Project at ETHZ",
        timeline: "03/2022 - 07/2022",
        task:`Using computer vision techniques and machine learning to analyze 3D scans of teeth in order to identify dental illnesses`
    },
    {
        company: "Miraex, Quantum Technology Startup",
        location: "Lausanne, VD, Switzerland",
        position: "AI research Intern - Bachelor Thesis Project at EPFL",
        timeline: "02/2020 - 07/20200",
        task:`Performed pattern detection on acoustic signals using signal processing methods such as Wavelet Transform
        analysis and machine learning models such as SVMs, auto encoders and convolutional encoders.`
        }],
    coursework: [{
        subject: "Mathematics",
        topics:`Calculus, Linear Algebra, Information Theory, Signal Processing, Discrete Mathematics, Set Theory, Algebra, Algo-
        rithms, Statistics, Probability Theory, Stochastic Processes, Computational Statistics, Computational Intelligence Lab`
    },
        {
            subject: "Computer Science",
            topics:`Advanced Machine Learning, Probabilistic Artificial Intelligence, Parallelism and Concurrency, OO Program-
            ming, Functional Programming, Database Systems, Computer Architecture, Network Security, Theory of Computation, Visual
            Computing, Digital Signatures`
        },
        {
            subject: "Programming",
            topics:`C, R, Python (Django and data science libraries), Java, SQL, Scala (and Spark), C# (.NET), Javascript (React Js,
                Node Js), SQL, Assembly, LaTex`
        }],
    additionalInfo: [{
        subject: "Personal Interests",
        description:"Blockchain, Politics, Music, Study of Latin and Ancient Greek."
    },
    {
        subject: "Activites",
        description:`Classical Guitar and Solfeggio in regional conservatory with DEM and CEM state certificates (9 years of practice and
            ability to teach), Tennis, Soccer, Hiking, Chess`
        },
        {
            subject: "Languages (speaking and writing)",
            description:"French (Native), English (Native), Spanish (B1)"
        }]
  }
  
  const [data, setData] = useState(initialData);

  const router = useRouter();

  const handleRemove = (category, index) => {
    if (category === "education") {
      if (data.education.length === 1) {
        // If there's only one education entry, prevent deletion
        alert("At least one education entry must be present.");
        return;
      }
      
      const updatedEducation = [...data.education];
      updatedEducation.splice(index, 1); // Remove the item at the given index
      setData({ ...data, education: updatedEducation });
    }

    if (category === "work") {
      if (data.work.length === 1) {
        // If there's only one work entry, prevent deletion
        alert("At least one work entry must be present.");
        return;
      }
      
      const updatedWork = [...data.work];
      updatedWork.splice(index, 1); // Remove the item at the given index
      setData({ ...data, work: updatedWork });
    }

    if (category === "academic") {
      if (data.academic.length === 1) {
        // If there's only one academic entry, prevent deletion
        alert("At least one academic entry must be present.");
        return;
      }
      
      const updatedAcademic = [...data.academic];
      updatedAcademic.splice(index, 1); // Remove the item at the given index
      setData({ ...data, academic: updatedAcademic });
    }

    if (category === "coursework") {
      if (data.coursework.length === 1) {
        // If there's only one coursework entry, prevent deletion
        alert("At least one coursework entry must be present.");
        return;
      }
      
      const updatedCoursework = [...data.coursework];
      updatedCoursework.splice(index, 1); // Remove the item at the given index
      setData({ ...data, coursework: updatedCoursework });
    }

    if (category === "additionalInfo") {
      if (data.additionalInfo.length === 1) {
        // If there's only one additionalInfo entry, prevent deletion
        alert("At least one additionalInfo entry must be present.");
        return;
      }
      
      const updatedAdditionalInfo = [...data.additionalInfo];
      updatedAdditionalInfo.splice(index, 1); // Remove the item at the given index
      setData({ ...data, additionalInfo: updatedAdditionalInfo });
    }
    // Add more conditions for other categories if needed
  };
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...data.education];
    updatedEducation[index][field] = value;
    setData({ ...data, education: updatedEducation });
  };
  const handleWorkChange = (index, field, value) => {
    const updatedWork = [...data.work];
    updatedWork[index][field] = value;
    setData({ ...data, work: updatedWork });
  };
  const handleAcademicChange = (index, field, value) => {
    const updatedAcademic = [...data.academic];
    updatedAcademic[index][field] = value;
    setData({ ...data, academic: updatedAcademic });
  };

  const handleCourseworkChange = (index, field, value) => {
    const updatedCoursework = [...data.coursework];
    updatedCoursework[index][field] = value;
    setData({ ...data, coursework: updatedCoursework });
  };

  const handleAdditionalInfoChange = (index, field, value) => {
    const updatedAdditionalInfo = [...data.additionalInfo];
    updatedAdditionalInfo[index][field] = value;
    setData({ ...data, additionalInfo: updatedAdditionalInfo });
  };

  const handleAdd = (category) => {
    if (category === "education") {      
      const updatedEducation = [...data.education];
      const previousElement = updatedEducation[updatedEducation.length - 1];
      updatedEducation.push({ ...previousElement });//even by chance dont directly put previousElement, they
      //will share common reference
      setData({ ...data, education: updatedEducation });
    }

    if (category === "work") {     
      const updatedWork = [...data.work];
      const previousElement = updatedWork[updatedWork.length - 1];
      updatedWork.push({ ...previousElement });
      setData({ ...data, work: updatedWork });
    }

    if (category === "academic") {
      const updatedAcademic = [...data.academic];
      const previousElement = updatedAcademic[updatedAcademic.length - 1];
      updatedAcademic.push({ ...previousElement });
      setData({ ...data, academic: updatedAcademic });
    }

    if (category === "coursework") {
      const updatedCoursework = [...data.coursework];
      const previousElement = updatedCoursework[updatedCoursework.length - 1];
      updatedCoursework.push({ ...previousElement });
      setData({ ...data, coursework: updatedCoursework });
    }

    if (category === "additionalInfo") {
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
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start">
      <style jsx global>
              {`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        button{
          background-color:red;
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
      <div className="preview w-[700px] scale-50  mt-[-470px] mb-[-500px] lg:w-[50%] lg:scale-100 lg:mt-[0px] lg:mb-[0px]">
        <CV data={data} />
      </div>
          <div className="change-things  w-full lg:w-[50%] p-[20px] dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center items-center">
          <div className="w-[450px] shadow-input bg-white dark:bg-black p-4 rounded font-[Roboto]">
        <div className="details flex flex-col p-[10px] border-black border-b-2">
          <h1 className="text-center font-bold text-2xl">Details</h1>
          <div className="name ">
          <Input  type="text" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
        </div>
        <div className="phoneNumbers flex justify-between">
          <Input  type="text" value={data.phoneNumber1} onChange={(e)=>{setData({...data,phoneNumber1:e.target.value})}}/>
          <Input  type="text" value={data.phoneNumber2} onChange={(e)=>{setData({...data,phoneNumber2:e.target.value})}}/>
        </div>
        <div className="address flex justify-between">
          <Input  type="text" value={data.addressLine1} onChange={(e)=>{setData({...data,addressLine1:e.target.value})}}/>
          <Input  type="text" value={data.addressLine2} onChange={(e)=>{setData({...data,addressLine2:e.target.value})}}/>
        </div>
        <div className="emails flex justify-between">
          <Input  type="text" value={data.email1} onChange={(e)=>{setData({...data,email1:e.target.value})}}/>
          <Input  type="text" value={data.email2} onChange={(e)=>{setData({...data,email2:e.target.value})}}/>
        </div>
        </div>
        <div className="education flex flex-col p-[10px] border-black border-b-2">
          <h1 className="text-center font-bold text-2xl">Education</h1>
          <div className="add text-center p-[5px]">
          <button className="bg-[green]" onClick={()=>{handleAdd("education")}}>Add More</button>
          </div>
          {
            data.education.map((item, i) => (
              <div className={`edu ${i + 1} flex flex-col`}>
                <div className="flex justify-between mb-[10px]">
                <h2>Education {i + 1}</h2>
                  <button onClick={() => { handleRemove("education", i) }}>Remove</button>
                </div>
                <div className="line1 flex justify-between">
                  <Input  type="text" value={item.university}  onChange={(e) => handleEducationChange(i, "university", e.target.value)}/>
                  <Input  type="text" value={item.universityLocation} onChange={(e) => handleEducationChange(i, "universityLocation", e.target.value)}  />
                </div>
                <div className="line2 flex justify-between">
                  <Input  type="text" value={item.timeline}  onChange={(e) => handleEducationChange(i, "timeline", e.target.value)} />
                  <Input  type="text" value={item.stream} onChange={(e) => handleEducationChange(i, "stream", e.target.value)}  />
                </div>
                <div className="line3">
                  <Input className="w-full rounded mb-[10px]" type="text" value={item.major} onChange={(e) => handleEducationChange(i, "major", e.target.value)}  />
                </div>
              </div>
            ))
          }
        </div>
        <div className="work flex flex-col p-[10px] border-black border-b-2">
          <h1 className="text-center font-bold text-2xl">Work Experience</h1>
          <div className="add text-center p-[5px]">
          <button className="bg-[green]" onClick={()=>{handleAdd("work")}}>Add More</button>
          </div>
          {
            data.work.map((item, i) => (
              <div className={`work ${i + 1} flex flex-col mb-[10px]`}>
                <div className="flex justify-between mb-[10px]">
                <h2>Work {i + 1}</h2>
                  <button onClick={() => { handleRemove("work", i) }}>Remove</button>
                </div>
                <div className="line1 flex justify-between">
                  <Input  type="text" value={item.company}  onChange={(e) => handleWorkChange(i, "company", e.target.value)}/>
                  <Input  type="text" value={item.location}  onChange={(e) => handleWorkChange(i, "location", e.target.value)}/>
                </div>
                <div className="line2 flex justify-between">
                  <Input  type="text" value={item.timeline}  onChange={(e) => handleWorkChange(i, "timeline", e.target.value)}/>
                  <Input  type="text" value={item.position}  onChange={(e) => handleWorkChange(i, "position", e.target.value)}/>
                </div>
                <div className="line3">
                  <Input  type="text" value={item.task}  onChange={(e) => handleWorkChange(i, "task", e.target.value)}/>
                </div>
              </div>
            ))
          }
        </div>
        <div className="academic flex flex-col p-[10px] border-black border-b-2">
          <h1 className="text-center font-bold text-2xl">Academic Experience</h1>
          <div className="add text-center p-[5px]">
          <button className="bg-[green]" onClick={()=>{handleAdd("academic")}}>Add More</button>
          </div>
          {
            data.academic.map((item, i) => (
              <div className={`academic ${i + 1} flex flex-col mb-[10px]`}>
                <div className="flex justify-between mb-[10px]">
                <h2>Academic {i + 1}</h2>
                  <button onClick={() => { handleRemove("academic", i) }}>Remove</button>
                </div>
                <div className="line1 flex justify-between">
                  <Input  type="text" value={item.company}  onChange={(e) => handleAcademicChange(i, "company", e.target.value)}/>
                  <Input  type="text" value={item.location}  onChange={(e) => handleAcademicChange(i, "location", e.target.value)}/>
                </div>
                <div className="line2 flex justify-between">
                  <Input  type="text" value={item.timeline}  onChange={(e) => handleAcademicChange(i, "timeline", e.target.value)}/>
                  <Input  type="text" value={item.position}  onChange={(e) => handleAcademicChange(i, "position", e.target.value)}/>
                </div>
                <div className="line3">
                  <Input  type="text" value={item.task}  onChange={(e) => handleAcademicChange(i, "task", e.target.value)}/>
                </div>
              </div>
            ))
          }
        </div>
        <div className="coursework flex flex-col p-[10px] border-black border-b-2">
          <h1 className="text-center font-bold text-2xl">Coursework Experience</h1>
          <div className="add text-center p-[5px]">
          <button className="bg-[green]" onClick={()=>{handleAdd("coursework")}}>Add More</button>
          </div>
          {
            data.coursework.map((item, i) => (
              <div className={`coursework ${i + 1} flex flex-col mb-[10px]`}>
                <div className="flex justify-between mb-[10px]">
                <h2>Coursework {i + 1}</h2>
                  <button onClick={() => { handleRemove("coursework", i) }}>Remove</button>
                </div>
                <div className="line1">
                  <Input  type="text" value={item.subject}  onChange={(e) => handleCourseworkChange(i, "subject", e.target.value)}/>
                  <Input  type="text" value={item.topics}  onChange={(e) => handleCourseworkChange(i, "topics", e.target.value)}/>
                </div>
              </div>
            ))
          }
        </div>
        <div className="additionalInfo flex flex-col p-[10px]">
          <h1 className="text-center font-bold text-2xl">Additional Information</h1>
          <div className="add text-center p-[5px]">
          <button className="bg-[green]" onClick={()=>{handleAdd("additionalInfo")}}>Add More</button>
          </div>
          {
            data.additionalInfo.map((item, i) => (
              <div className={`additionalInfo ${i + 1} flex flex-col mb-[10px]`}>
                <div className="flex justify-between mb-[10px]">
                <h2>Additional Information {i + 1}</h2>
                  <button onClick={() => { handleRemove("additionalInfo", i) }}>Remove</button>
                </div>
                <div className="line1">
                  <Input  type="text" value={item.subject}  onChange={(e) => handleAdditionalInfoChange(i, "subject", e.target.value)}/>
                  <Input  type="text" value={item.description}  onChange={(e) => handleAdditionalInfoChange(i, "description", e.target.value)}/>
                </div>
              </div>
            ))
          }
        </div>
                  </div>
      </div>
      <button className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]" onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
}
