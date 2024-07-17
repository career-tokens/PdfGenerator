import React from 'react';
import { Education, Experience, Language, NewCVData, PersonalInfo, Skill } from "../../dataModels/NewCVData";
import { CSS } from '@fileforge/react-print';

interface NewCVDataProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experiences: Experience[];
  languages: Language[];
  education: Education[];
}

export const NewCV:React.FC<NewCVDataProps>= ({ personalInfo, skills, experiences, languages, education }) => {
  return (
    <>
      <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:8in 10in;
          margin:0;
        }`
      }
    </CSS>
      <div className="min-h-screen flex justify-center items-center font-[Poppins]">
        <div className="flex rounded">
          {/* Personal Info & Skills Section */}
          <div className="w-[45%] text-[#fbf0e7] bg-[#444d5e] min-h-screen flex flex-col px-10 py-5">
            <div className="flex justify-center">
              {/* Assuming the image is part of personalInfo but you might need to adjust based on your actual data structure */}
              <img className='w-[130px] h-[130px] rounded-[65px] mb-4' src={personalInfo.image} alt="Profile" />
            </div>
            <p className="text-xl font-semibold">{personalInfo.firstName}</p>
            <p className="text-xl font-semibold mb-3">{personalInfo.lastName}</p>
            <span className="text-sm mb-6">{personalInfo.title}</span>
            <div className="h-[2px] bg-[#fbf0e7] mb-6" />
            <p className="text-sm font-semibold mb-3">ABOUT ME</p>
            <p className="text-sm mb-7" dangerouslySetInnerHTML={{__html: personalInfo.about}}></p>
            <p className="text-sm mb-3 font-semibold">SKILLS</p>
            <div className="text-sm mb-7">
              {skills.map(skill => (
                <p className="mb-2" key={skill.name}>• {skill.name}</p>
              ))}
            </div>
            <p className="text-sm mb-4 font-semibold">CONTACT</p>
            <p className="text-sm mb-2">📞 {personalInfo.contact.phone}</p>
            <p className="text-sm mb-2">✉️ {personalInfo.contact.email}</p>
            <p className="text-sm">📍 {personalInfo.contact.location}</p>
          </div>

          {/* Experiences, Languages, and Education Section */}
          <div className="w-[55%] bg-white min-h-screen py-5 px-5 ml-auto">
            <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-4">WORK EXPERIENCE</div>
            {experiences.map(exp => (
              <div key={exp.company}>
                <p className="text-sm mb-2 font-bold text-black">{exp.company} | {exp.period}</p>
                <p className="text-sm mb-2 text-gray-400 font-bold">{exp.role}, {exp.location}</p>
                <div>
                  {exp.tasks.map(task => (
                    <p className="text-xs mb-1 text-black font-medium" key={task} dangerouslySetInnerHTML={{__html: task}}></p>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">LANGUAGES</div>
            {languages.map(lang => (
              <p className="text-xs mb-1 text-black font-semibold" key={lang.name}>{lang.name}: {lang.level}</p>
            ))}

            <div className="p-1 bg-[#feeeca] text-[#444d5e] text-base font-bold mb-3">EDUCATION</div>
            {education.map(edu => (
              <div key={edu.university}>
                <p className="text-xs mb-1 text-black font-semibold">{edu.timeline} | {edu.universityLocation}</p>
                <p className="text-xs mb-1 text-black font-bold">{edu.stream}</p>
                <p className="text-xs text-gray-500 font-semibold mb-4">{edu.university}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  );
}