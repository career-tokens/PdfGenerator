import React from 'react'
import AddButton from '../../components/ui/AddButton';
import { TigerCVData } from '../../dataModels/TigerCVData';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { toast } from 'sonner';
import AccordionBody from '../../components/ui/AccordionBody';
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
interface Props{
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
}
const ProfessionalExperience: React.FC<Props> = ({ data, setData }) => {

    const handleRemoveExperience = (index: number) => {
        let arr = [...data.professionalExperience];
        if (arr.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr.splice(index, 1);
            setData({ ...data, professionalExperience: arr });
            }
    }
    
    const handleRemoveTask = (expIndex:number,taskIndex: number) => {
        let arr = [...data.professionalExperience];
        if (arr[expIndex].tasks.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr[expIndex].tasks.splice(taskIndex, 1);
            setData({ ...data, professionalExperience: arr });
            }
    }
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}><p className="pb-0">Professional Experience</p></AccordionHead>
                    <AccordionBody>
                        <div className="professionalExperience flex flex-col gap-y-3 mb-3 text-slate-400">
                            <div className="firstline flex justify-between text-lg">
                                <p>Do you need this section?</p>
                                <label><input type="checkbox" checked={data.professionalExperienceNeeded} onChange={(e) => { setData({ ...data, professionalExperienceNeeded: !data.professionalExperienceNeeded }) }} /></label>
                            </div>
                            <div className="secondline flex justify-center">
                                <AddButton
                                    description="Add more Experience"
                                    cb={() => {
                                        if (data.professionalExperience.length == 3)
                                            toast.warning("Exceeding two entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                {
                                                    className: 'text-base  w-[400px] flex justify-center',
                                                    duration: 5000,
                                                })
                                        setData({ ...data, professionalExperience: [{ ...data.professionalExperience[0] }, ...data.professionalExperience] })
                                    }} />
                            </div>
                            <div className="thirdpart flex flex-col gap-y-3">
                                {
                                    data.professionalExperience.map((exp, i) => (
                                        <Disclosure key={i}>
                                            {({ open }) => (
                                                <>
                                                    <AccordionHead subpart={true}  open={open}><p className="text-lg font-semibold text-center pb-0">Experience {i + 1}</p></AccordionHead>
                                                    <AccordionBody>
                                                        <div className="flex justify-between  text-slate-400 mb-2">
                                                            <p className="text-lg">Remove this experience?</p>
                                                            <DeleteButton cb={() => { handleRemoveExperience(i) }} />
                                                        </div>
                                                        <div className="position text-slate-400 mb-5">
                                                            <p>Role:</p>
                                                            <Input className="" value={exp.position} onChange={(e) => {
                                                                let arr = [...data.professionalExperience];
                                                                arr[i].position = e.target.value
                                                                setData({ ...data, professionalExperience: arr })
                                                            }} />
                                                        </div>
                                                        <div className="company text-slate-400 mb-5">
                                                            <p>Company:</p>
                                                            <Input className="" value={exp.company} onChange={(e) => {
                                                                let arr = [...data.professionalExperience];
                                                                arr[i].company = e.target.value
                                                                setData({ ...data, professionalExperience: arr })
                                                            }} />
                                                        </div>
                                                        <div className="period text-slate-400 mb-5">
                                                            <p>Period</p>
                                                            <Input className="" value={exp.period} onChange={(e) => {
                                                                let arr = [...data.professionalExperience];
                                                                arr[i].period = e.target.value
                                                                setData({ ...data, professionalExperience: arr })
                                                            }} />
                                                        </div>
                                                        <div className="tasks text-slate-400">
                                                            <div className="firstline flex justify-between items-center mb-5">
                                                                <p>Tasks:</p>
                                                                <AddButton cb={() => {
                                                                    if (data.professionalExperience[i].tasks.length == 3)
                                                                        toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                                            {
                                                                                className: 'text-base  w-[400px] flex justify-center',
                                                                                duration: 5000,
                                                                            })
                                                                    let arr = [...data.professionalExperience];
                                                                    let tasks = [arr[i].tasks[0], ...arr[i].tasks];
                                                                    arr[i].tasks = tasks;
                                                                    setData({ ...data, professionalExperience: arr })
                                                                }} />
                                                            </div>
                                                            <div className="tasks lines flex flex-col gap-y-3">
                                                                {
                                                                    exp.tasks.map((text, j) => (
                                                                        <div key={j} className="flex justify-between gap-x-4">
                                                                            <Input
                                                                                editor={true}
                                                                                value={text}
                                                                                className="flex-1"
                                                                                onChange={(e) => {
                                                                                    let arr = [...data.professionalExperience];
                                                                                    arr[i].tasks[j] = e;
                                                                                    setData({ ...data, professionalExperience: arr })
                                                                                }} />
                                                                            <DeleteButton cb={() => { handleRemoveTask(i, j) }} />
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>
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

export default ProfessionalExperience