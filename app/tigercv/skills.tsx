import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import DeleteButton from '../../components/ui/DeleteButton';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
import { toast } from 'sonner';
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import AccordionBody from '../../components/ui/AccordionBody';
interface SkillsProps {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const Skills: React.FC<SkillsProps> = ({ data, setData }) => {
    const handleRemoveSkillLine = (index: number) => {
        if (data.skills.length === 1) {
            // If there's only one skills entry, prevent deletion
            toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
            return;
          }
          
          const updatedSkills = [...data.skills];
          updatedSkills.splice(index, 1); // Remove the item at the given index
          setData({ ...data, skills: updatedSkills });
    }
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <AccordionHead open={open}><p className="pb-0">Skills</p></AccordionHead>
          <AccordionBody>
            <div className="skills flex flex-col gap-y-3 mb-3">
              <div className="firstline  flex justify-center">
                <AddButton description="Add More Skills" cb={() => {
                  if (data.skills.length == 3)
                    toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                      {
                        className: 'text-base  w-[400px] flex justify-center',
                        duration: 5000,
                      })
                  setData({ ...data, skills: [data.skills[0], ...data.skills] })
                }} />
              </div>
              {
                data.skills.map((text, i) => (
                  <div className="flex justify-between items-center gap-x-4" key={i}>
                    <Input
                      editor={true}
                      className="flex-1"
                      value={text}
                      onChange={(e) => {
                        let arr = [...data.skills];
                        arr[i] = e;
                        setData({ ...data, skills: arr })
                      }} />
                    <DeleteButton cb={() => { handleRemoveSkillLine(i) }} />
                  </div>
                ))
              }
            </div>
          </AccordionBody>
        </>
      )}
      </Disclosure>
  )
}

export default Skills