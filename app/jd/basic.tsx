import React from 'react'
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import AddButton from '../../components/ui/AddButton';
import { toast } from 'sonner';
import { Disclosure } from '@headlessui/react';
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
import { JDData } from '../../dataModels/JDData';
interface Props {
    data: JDData;
    setData: React.Dispatch<React.SetStateAction<JDData>>;
  }
const Basic: React.FC<Props> = ({ data, setData }) => {
    
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <AccordionHead open={open}><p className="text-xl font-semibold text-center pb-0">Basic Details</p></AccordionHead>
                  <AccordionBody>
                      <div className="basic-details flex flex-col gap-y-4 text-lg text-gray-300">
                          <div className="topic">
                              <p>Job Category:</p>
                              <Input value={data.jobCategory}
                                  onChange={(e) => {
                                      setData({ ...data, jobCategory: e.target.value })
                                  }} />
                          </div>
                          <div className="hour">
                              <p>Hours Needed</p>
                              <Input value={data.hours}
                                  onChange={(e) => {setData({...data,hours:e.target.value}) }} />
                          </div>
                          <div className="level">
                              <p>Experience Level Required</p>
                              <Input value={data.experience}
                              onChange={(e)=>{setData({...data,experience:e.target.value})}}/>
                          </div>
                          <div className="tips">
                              <p>Higher rates for:</p>
                              <Input
                                  value={data.extraTips}
                              onChange={(e)=>{setData({...data,extraTips:e.target.value})}}/>
                          </div>
                          <div className="role">
                              <p>Job Role</p>
                              <Input
                                  value={data.jobTitle}
                              onChange={(e)=>{setData({...data,jobTitle:e.target.value})}}/>
                          </div>
                          <div className="description">
                              <p>Job Description</p>
                              <Input value={data.jobDescription}
                              onChange={(e)=>{setData({...data,jobDescription:e.target.value})}}/>
                          </div>
                          <div className="goal">
                              <p>Goal of project:</p>
                              <Input value={data.goal} onChange={(e)=>{setData({...data,goal:e.target.value})}}/>
                          </div>
                      </div>
          </AccordionBody>
        </>
      )}
      </Disclosure>
  )
}

export default Basic