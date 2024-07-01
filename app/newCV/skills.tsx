import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
import { Disclosure } from '@headlessui/react';
import { NewCVData } from '../../dataModels/NewCVData';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
import DeleteButton from '../../components/ui/DeleteButton';

interface Props{
    data: NewCVData;
    setData: React.Dispatch<React.SetStateAction<NewCVData>>;
    handleAdd: (string) => void;
    handleRemove:(string,number)=>void
}

const Skills = ({data,setData,handleAdd,handleRemove}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="pb-0">Skills:</p></AccordionHead>
                  <AccordionBody>
                  <div className="skills flex flex-col gap-y-4">
            <div className="add flex justify-center text-base">
                              <AddButton
                                  description='Add More Skills'
                cb={() => {
                  handleAdd("skills");
                }}
              />
            </div>
            {data.skills.map((skill, i) => (
              <div className="flex justify-between gap-x-4" key={i}>
                <Input
                  className=""
                  value={skill.name}
                  onChange={(e) => {
                    let updatedSkills = [...data.skills];
                    updatedSkills[i].name = e.target.value;
                    setData({ ...data, skills: updatedSkills });
                  }}
                />
                <DeleteButton
                  cb={() => {
                    handleRemove("skills", i);
                  }}
                />
              </div>
            ))}
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Skills