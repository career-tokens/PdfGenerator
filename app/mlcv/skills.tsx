import React from 'react'
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { toast } from 'sonner';
import AccordionBody from '../../components/ui/AccordionBody';
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import { MLCVData } from '../../dataModels/MLCVData';
interface Props{
    data: MLCVData;
    setData: React.Dispatch<React.SetStateAction<MLCVData>>;
}
const Skills: React.FC<Props> = ({ data, setData }) => {

    const handleRemoveSkills = (index: number) => {
        let arr = [...data.skills];
        if (arr.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr.splice(index, 1);
            setData({ ...data, skills: arr });
            }
    }
    
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}><p className="text-xl font-semibold text-center pb-0">Skills</p></AccordionHead>
                    <AccordionBody>
                        <div className="skills flex flex-col gap-y-3 mb-3 text-slate-400">
                            <div className="firstline flex justify-between text-lg">
                                <p>Do you need this section?</p>
                                <label><input type="checkbox" checked={data.skillsNeeded} onChange={(e) => { setData({ ...data, skillsNeeded: !data.skillsNeeded }) }} /></label>
                            </div>
                            <div className="secondline flex justify-center">
                                <AddButton
                                    description="Add"
                                    cb={() => {
                                        if (data.skills.length == 3)
                                            toast.warning("Exceeding two entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                {
                                                    className: 'text-base  w-[400px] flex justify-center',
                                                    duration: 5000,
                                                })
                                        setData({ ...data, skills: [{ ...data.skills[0] }, ...data.skills] })
                                    }} />
                            </div>
                            <div className="thirdpart flex flex-col gap-y-3">
                                {
                                    data.skills.map((skill, i) => (
                                        <Disclosure key={i}>
                                            {({ open }) => (
                                                <>
                                                    <AccordionHead subpart={true}  open={open}><p className="text-lg font-semibold text-center pb-0">Skills {i + 1}</p></AccordionHead>
                                                    <AccordionBody>
                                                        <div className="flex justify-between  text-slate-400 mb-2">
                                                            <p className="text-lg font-semiboldd">Remove this entry?</p>
                                                            <DeleteButton cb={() => { handleRemoveSkills(i) }} />
                                                        </div>
                                                        <div className="topic text-slate-400 mb-5">
                                                            <p>Technology Group:</p>
                                                            <Input value={skill.topic} onChange={(e) => {
                                                                let arr = [...data.skills];
                                                                arr[i].topic = e.target.value
                                                                setData({ ...data, skills: arr })
                                                            }} />
                                                        </div>
                                                        <div className="description text-slate-400 mb-5">
                                                            <p>Technologies:</p>
                                                            <Input value={skill.description} onChange={(e) => {
                                                                let arr = [...data.skills];
                                                                arr[i].description = e.target.value
                                                                setData({ ...data, skills: arr })
                                                            }} />
                                                        </div>
                                                    </AccordionBody>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))
                                }
                            </div>
                        </div>
                    </AccordionBody>
                </>
            )}
            </Disclosure>
  )
}

export default Skills