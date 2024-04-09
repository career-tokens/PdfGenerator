import React from 'react'
import { Input } from '../../components/ui/input'
import { TigerCVData } from '../../dataModels/TigerCVData';
interface PersonalInfoProps {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const PersonalInfo:React.FC<PersonalInfoProps> = ({data,setData}) => {
  return (
      <div className="personal-info flex flex-col gap-y-3 mb-3">
          <p className="text-2xl font-bold text-center">Personal Info</p>
                <div className="name">
            <p>Name:</p>
            <Input value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}} />
          </div>
          <div className="position">
            <p>Role:</p>
            <Input value={data.position} onChange={(e)=>{setData({...data,position:e.target.value})}} />
          </div>
          <div className="imageUrl">
            <p>Public Image URL:</p>
            <Input value={data.imageUrl} onChange={(e)=>{setData({...data,imageUrl:e.target.value})}} />
          </div>
          <div className="portfolio">
            <div className="firstline flex justify-between">
              <p>Portfolio:</p>
              <label><input type="checkbox" checked={data.portfolio.needed} onChange={(e) => { setData({ ...data, portfolio: { ...data.portfolio, needed: !data.portfolio.needed } }) }}/></label>
            </div>
            <Input value={data.portfolio.link} onChange={(e)=>{setData({...data,portfolio:{...data.portfolio,link:e.target.value}})}} />
          </div>
          <div className="twitter">
            <div className="firstline flex justify-between">
              <p>Twitter:</p>
              <label><input type="checkbox" checked={data.twitter.needed} onChange={(e) => { setData({ ...data, twitter: { ...data.twitter, needed: !data.twitter.needed } }) }}/></label>
            </div>
            <Input value={data.twitter.link} onChange={(e)=>{setData({...data,twitter:{...data.twitter,link:e.target.value}})}} />
          </div>
          <div className="github">
            <div className="firstline flex justify-between">
              <p>Github:</p>
              <label><input type="checkbox" checked={data.github.needed} onChange={(e) => { setData({ ...data, github: { ...data.github, needed: !data.github.needed } }) }}/></label>
            </div>
            <Input value={data.github.link} onChange={(e)=>{setData({...data,github:{...data.github,link:e.target.value}})}} />
          </div>
          <div className="linkedin">
            <div className="firstline flex justify-between">
              <p>Linkedin:</p>
              <label><input type="checkbox" checked={data.linkedin.needed} onChange={(e) => { setData({ ...data, linkedin: { ...data.linkedin, needed: !data.linkedin.needed } }) }}/></label>
            </div>
            <Input value={data.linkedin.link} onChange={(e)=>{setData({...data,linkedin:{...data.linkedin,link:e.target.value}})}} />
          </div>
          <div className="blog">
            <div className="firstline flex justify-between">
              <p>Blog:</p>
              <label><input type="checkbox" checked={data.blog.needed} onChange={(e) => { setData({ ...data, blog: { ...data.blog, needed: !data.blog.needed } }) }}/></label>
            </div>
            <Input value={data.blog.link} onChange={(e)=>{setData({...data,blog:{...data.blog,link:e.target.value}})}} />
          </div>
      </div>
  )
}

export default PersonalInfo