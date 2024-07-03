import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import AccordionBody from '../../components/ui/AccordionBody';
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { NewCVData } from '../../dataModels/NewCVData';
import { toast } from 'sonner';

interface Props{
    data: NewCVData;
    setData: React.Dispatch<React.SetStateAction<NewCVData>>;
    handleAdd: (string) => void;
    handleRemove:(string,number)=>void
}

const Experience: React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
    const handleAddTask = (i) => {
        if (data.experiences[i].tasks.length == 4)
        toast.warning("Exceeding four entries here is not advised.The content might not fit in one page and would require 2 pages.",
          {
            className: 'text-base  w-[400px] flex justify-center',
            duration: 5000,
          })
        const updatedExperiences = [...data.experiences];
        updatedExperiences[i].tasks.push(updatedExperiences[i].tasks[updatedExperiences[i].tasks.length - 1]); //here its a simple value(string)
        //so no issue
      setData({ ...data, experiences: updatedExperiences });
    }

    const handleRemoveTask = (i, j) => {
        const updatedExperiences = [...data.experiences];
        if (updatedExperiences[i].tasks.length === 1) {
            // If there's only one education entry, prevent deletion
            toast.error("You need to have minimum one entry here", {
                className: 'text-base  w-[400px] flex justify-center',
                duration: 5000,
              });
            return;
        }
        updatedExperiences[i].tasks.splice(j, 1);
        setData({ ...data, experiences: updatedExperiences });
    }
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="pb-0">Experiences</p></AccordionHead>
                  <AccordionBody>
                  <div className="experience flex flex-col gap-y-5">
                              <div className="flex justify-center">
                              <AddButton
                                  description='Add more Experience'
                cb={() => {
                  handleAdd("experiences");
                }}
              />
                              </div>
                          {data.experiences.map((exp, i) => (
                      <Disclosure key={i}>
                                  {({ open }) => (
                                      <>
                                          <AccordionHead subpart={true} open={open}>   <p className="text-xl pb-0">Experience {i + 1}</p></AccordionHead>
                                          <AccordionBody>
                                          <div className={`exp ${i + 1} flex flex-col gap-y-3 text-lg text-slate-400`} key={i}>
                  <div className="flex justify-between items-center">
                    <h2 className="">Remove this experience?</h2>

                    <DeleteButton
                      cb={() => {
                        handleRemove("experiences", i);
                      }}
                    />
                  </div>

                  <div className="line1 flex justify-between">
                    <Input
                      type="text"
                      value={exp.company}
                      onChange={(e) => {
                        let updatedExperiences = [...data.experiences];

                        updatedExperiences[i].company = e.target.value;

                        setData({ ...data, experiences: updatedExperiences });
                      }}
                    />

                    <Input
                      type="text"
                      value={exp.period}
                      onChange={(e) => {
                        let updatedExperiences = [...data.experiences];

                        updatedExperiences[i].period = e.target.value;

                        setData({ ...data, experiences: updatedExperiences });
                      }}
                    />
                  </div>

                  <div className="line2 flex justify-between">
                    <Input
                      type="text"
                      value={exp.role}
                      onChange={(e) => {
                        let updatedExperiences = [...data.experiences];

                        updatedExperiences[i].role = e.target.value;

                        setData({ ...data, experiences: updatedExperiences });
                      }}
                    />

                    <Input
                      type="text"
                      value={exp.location}
                      onChange={(e) => {
                        let updatedExperiences = [...data.experiences];

                        updatedExperiences[i].location = e.target.value;

                        setData({ ...data, experiences: updatedExperiences });
                      }}
                    />
                      </div>
                      
                      <div className="tasks flex flex-col gap-y-2">
                          <div className="flex justify-between items-center text-base">
                              <span className="text-lg mb-3 font-semibold">Tasks</span>
                              <AddButton cb={() => { handleAddTask(i) }}/>
                          </div>
                          {
                              exp.tasks.map((task, j) => (
                                  <div className={`task ${j + 1} flex justify-between gap-x-4 items-center mb-2`} key={j}>
                                  <Input
                                          editor={true}
                                          value={task}
                                          className="flex-1"
                                          onChange={(e) => {
                                            let updatedExperiences = [...data.experiences];

                                            updatedExperiences[i].tasks[j] = e;
                      
                                            setData({ ...data, experiences: updatedExperiences });
                                          }} />
                                                        <DeleteButton
                    cb={() => {
                      handleRemoveTask( i,j);
                    }}
                  />
                                  </div>
                              ))
                          }
                      </div>
                </div>
                                          </AccordionBody>
                                      </>
                                  )}
                                  </Disclosure>
              ))}
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Experience;