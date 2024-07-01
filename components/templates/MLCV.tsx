import React from 'react'
import { MLCVData } from '../../dataModels/MLCVData'
import { CSS } from '@onedoc/react-print'

interface Props{
    data:MLCVData
}

const MLCV:React.FC<Props> = ({data}) => {
    return (
        <>
        <CSS>
        {
          String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
          @page{
            size:8in 21in;
            margin:0;
          }`
        }
      </CSS>
      <div className="flex flex-col main bg-white p-5 font-[Poppins] dark:bg-black dark:text-white">
          <div className="personal mb-6 text-center">
              <p className="text-4xl font-bold">{data.name}</p>
              <div className="flex justify-center dark:text-slate-400 text-[15px]">
                  <span className="px-2 border-black border-r-2">{data.email}</span>
                  {data.phoneNeeded&&<span className="px-2 border-black border-r-2">{data.phone}</span>}
                  {data.addressNeeded&&<span className="px-2">{data.address}</span>}
              </div>
          </div>
          {data.educationNeeded&&<div className="education mb-6">
              <p className="p-0 mb-4 text-left text-xl border-b-2 border-black font-semibold">
                  EDUCATION AND HONORS
              </p>
              {
                  data.education.map((edu, i) => (
                      <div className={`edu ${i + 1} mb-4`} key={i}>
                          <div className="flex justify-between tracking-wide">
                              <span className="font-semibold">{edu.university}</span>
                              <span className="text-right min-w-[200px]">{edu.universityLocation}</span>
                          </div>
                          <div className="flex justify-between gap-x-5 tracking-wide">
                              <span className="w-fit"><i>{edu.course}</i></span>
                              <span className="text-right min-w-[200px]">{edu.period}</span>
                          </div>
                          {
                              edu.details.map((detail, j) => (
                                  <p key={j} className='dark:text-slate-400 my-2'>•{detail}</p>
                              ))
                          }
                      </div>
                  ))
              }
          </div>}
          {data.professionalExperienceNeeded&&<div className="pro-exp mb-6">
              <p className="p-0 mb-4 text-left text-xl border-b-2 border-black font-semibold">
                  PROFESSIONAL EXPERIENCE
              </p>
              {
                  data.professionalExperience.map((pro, i) => (
                      <div className={`pro ${i + 1} mb-4`} key={i}>
                          <div className="flex justify-between tracking-wide">
                              <span className="font-semibold">{pro.company}</span>
                              <span className="">{pro.companyLocation}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span className=""><i>{pro.role}</i></span>
                              <span className="min-w-[200px] text-right">{pro.period}</span>
                          </div>
                          {
                              pro.tasks.map((detail, j) => (
                                  <p key={j} className='dark:text-slate-400 my-2'>•{detail}</p>
                              ))
                          }
                      </div>
                  ))
              }
          </div>}
          {data.skillsNeeded&&<div className="skills mb-6">
          <p className="p-0 mb-4 text-left text-xl border-b-2 border-black font-semibold">
                  SKILLS
              </p>
              {
                  data.skills.map((skill,i) => (
                      <p className="flex flex-col mb-2" key={i}>
                          <span className="font-bold w-fit tracking-wide">•{skill.topic}</span>
                          <span className="dark:text-slate-400">{skill.description}</span>
                      </p>
                  ))
              }
          </div>}
          {data.projectsAndLeadershipNeeded&&<div className="projectsAndLeadership">
              <p className="p-0 mb-4 text-left text-xl border-b-2 border-black font-semibold">
                  PROJECTS AND LEADERSHIPS
              </p>
              {
                  data.projectsAndLeadership.map((project, i) => (
                      <div className={`project ${i + 1} mb-4`} key={i}>
                          <div className="flex justify-between">
                              <span className="font-semibold">{project.role}</span>
                              <span className="">{project.location}</span>
                          </div>
                          <div className="flex justify-between mb-2">
                              <span className="">{project.program}</span>
                              <span className="text-right min-w-[240px]">{project.period}</span>
                          </div>
                          {
                              project.tasks.map((detail, j) => (
                                  <p key={j} className="dark:text-slate-400 my-2">•{detail}</p>
                              ))
                          }
                      </div>
                  ))
              }
          </div>}
            </div>
            </>
  )
}

export default MLCV