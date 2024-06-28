/* eslint-disable @next/next/no-img-element */
import { CSS } from '@onedoc/react-print'
import React from 'react'

const JD = ({data}) => {
  return (
    <React.Fragment>
    <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:8in 14in;
          margin:0;
        }`
      }
    </CSS>
      <div className="main bg-white  py-4 px-4 flex flex-col text-base text-gray-500 font-medium">
        <div className="title text-3xl px-2 pb-4 border-b-[3px] border-gray-400 text-[#9bc94e] mb-5">
          {data.jobCategory}
        </div>
        <div className="someoverlay flex flex-col bg-gray-300 py-4 mb-6">
          <div className="p-2 px-4 flex bg-gray-300">
            <div className="hourly flex w-[50%] items-center">
              <img
                className="w-[70px] h-[70px] mr-5"
                src="https://img.icons8.com/ios/50/clock--v1.png"
                alt="" />
              <div className="flex flex-col details ">
                <p className="font-bold text-xl text-gray-600">Hourly Contract</p>
                <p className="font-bold">{data.hours}</p>
                <p className="font-bold">{data.contractType}</p>
              </div>
            </div>
            <div className="level flex w-[50%] items-center">
              <img
                className="w-[70px] h-[70px] mr-5"
                src="https://img.icons8.com/ios/50/creative-commons-commercial.png"
                alt="" />
              <div className="flex flex-col details">
                <p className="font-bold text-xl text-gray-600">{data.experience}</p>
                <p className="font-bold">{data.extraTips}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description mb-6">
          <p className="font-extrabold text-[#1b8343]">{data.jobTitle}</p>
          <p>{data.jobDescription}</p>
        </div>
        <div className="experience flex flex-col mb-6">
          <p className="font-bold text-gray-500">Required Experience</p>
          {
            data.technicalAbilities.map((item,i) => (
              <p key={i}>•{item}</p>
            ))
          }
        </div>
        <div className="goal mb-6">
          {data.goal}
        </div>
        <div className="best-fit flex flex-col mb-6">
          <p className="text-xl font-bold text-gray-500">To be a best fit for this project you need:</p>
          {
            data.bestfit.map((item,i) => (
              <p key={i}>•{item}</p>
            ))
          }
        </div>
        <div className="last">
          If you are interested in the project, please reply with your prior experience and Resume.
        </div>
      </div>
      </React.Fragment>
  )
}

export default JD