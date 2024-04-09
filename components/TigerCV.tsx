import React from 'react'
import { TigerCVData } from '../dataModels/TigerCVData';
import Link from 'next/link';

interface TigerCVDataProps {
  data: TigerCVData;
}
const TigerCV:React.FC<TigerCVDataProps> = ({data}) => {
  return (
      <div className="main bg-white font-[Mulish] py-8 px-8 flex">
      <div className="w-[50%] p-2 flex flex-col">
        <div className="starter flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">{data.name}</p>
          <p className="text-2xl font-semibold">{data.position}</p>
          <p className="text-xl font-medium">{data.location}</p>
          <img className='w-[130px] h-[130px] rounded-[65px] mb-4' src={data.imageUrl} alt="Profile" />
          <div className="links flex flex-wrap px-3 py-1 gap-x-2 gap-y-2">
            {data.portfolio.needed&&
              <Link href={data.portfolio.link}>
            <div className="flex items-center gap-x-1">
              <img width="25" height="15" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyElEQVR4nLXUsW0CQRAF0GecQIIbcODAsUuABpwTOKIHSnADxC7BsUN6sKAFMiTHFzHWSYdEgMTe3s1Ik/63Wu1fbs+D5PnGNBMI7PCUCbR7wHMmEDjiLRMI/GGRCQQarDKBwBmbTCC63WKSCcTQrpQAMaQrpUDUdqUPEDVd6QtE367UANGnK7VAlHal5uSH7ul+4gOzWuAXX90p3/GKx9K7vwdsa8JKgAbrMYJvAScsxwy/BvZ4GTv8AvxgnhHeTvvUBn3Hl/kH1sat3dDkRBYAAAAASUVORK5CYII=" />
              <span>Website</span>
            </div>
              </Link>
            }
            {
              data.twitter.needed &&
              <Link href={data.twitter.link}>
              <div className="flex items-center gap-x-1">
              <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/twitter.png" alt="twitter"/>
                <span>Twitter</span>
              </div>
              </Link>
            }
                                {
              data.github.needed &&
              <Link href={data.github.link}>
              <div className="flex items-center gap-x-1">
              <img width="25" height="15" src="data:image/png;base64,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" alt="github"/>
                <span>Github</span>
              </div>
              </Link>
            }
                    {
              data.linkedin.needed &&
              <Link href={data.linkedin.link}>
              <div className="flex items-center gap-x-1">
              <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
                <span>Linkedin</span>
              </div>
              </Link>
            }
              {
              data.blog.needed &&
              <Link href={data.blog.link}>
              <div className="flex items-center gap-x-1">
              <img width="25" height="15"  src="https://img.icons8.com/color/48/000000/hashnode.png" alt="hashnode"/>
                <span>Blog</span>
              </div>
              </Link>
            }

          </div>
        </div>
        <div className="profile flex flex-col gap-y-2 p-2">
          <div className="w-full font-bold icon box items-center  border-black border-t-2 border-b-2 flex justify-center gap-x-1">
            <img width="25" height="15" src="https://img.icons8.com/ios/50/bank-card-front-side--v1.png" alt="bank-card-front-side--v1" />
            Profile
          </div>
          {
            data.profile.map((item,i) => (
              <p key={i}>{item}</p>
            ))
          }
        </div>
        <div className="skills flex flex-col gap-y-2 p-2">
          <div className="w-full font-bold icon box items-center  border-black border-t-2 border-b-2 flex justify-center gap-x-1">
          <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/head-with-brain.png" alt="head-with-brain"/>
            Skills
          </div>
          {
            data.skills.map((item,i) => (
              <p key={i}>•{item}</p>
            ))
          }
        </div>
        {data.professionalExperienceNeeded&&<div className="professionalExp flex flex-col gap-y-3 p-2">
          <div className="w-full font-bold icon box items-center  border-black border-t-2 border-b-2 flex justify-center gap-x-1">
          <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/head-with-brain.png" alt="head-with-brain"/>
            Professional Experience
          </div>
          {
            data.professionalExperience.map((item,i) => (
              <div className={`exp${i}`} key={i}>
                <p className="font-bold">{item.position}</p>
                <p>{item.company}</p>
                <p>{item.period}</p>
                {
                  item.tasks.map((task, j) => (
                    <p key={j}>•{task}</p>
                  ))
                }
              </div>
            ))
          }
        </div>}
      </div>  
      <div className="w-[50%] p-2 flex flex-col">
      <div className="openSourceContributions flex flex-col gap-y-2 p-2">
          <div className="w-full font-bold icon box items-center  border-black border-t-2 border-b-2 flex justify-center gap-x-1">
          <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/gitlab.png" alt="gitlab"/>
            Open Source and Community
          </div>
          {
            data.openSourceContributions.map((item,i) => (
              <p key={i}>{item}</p>
            ))
          }
        </div>
        <div className="projects flex flex-col gap-y-2 p-2">
          <div className="w-full font-bold icon box items-center  border-black border-t-2 border-b-2 flex justify-center gap-x-1">
          <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/folder-invoices--v2.png" alt="folder-invoices--v2"/>
            Projects
          </div>
          {
            data.projects.map((project, i) => (
              <div className={`project ${i}`} key={i}>
                <p className="text-lg font-bold flex gap-x-1">
                  <span>{project.title}</span>
                  <Link href={project.link}>
                  <img width="25" height="15" src="https://img.icons8.com/ios-filled/50/link--v1.png" alt="link--v1"/>
                  </Link>
                </p>
                <p><i>{project.description}</i></p>
                {
                  project.features.map((feature, j) => (
                    <p key={j}>•{feature}</p>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      </div>
  )
}

export default TigerCV