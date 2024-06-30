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
const Education: React.FC<Props> = ({ data, setData }) => {

    const handleRemoveEducation = (index: number) => {
        let arr = [...data.education];
        if (arr.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr.splice(index, 1);
            setData({ ...data, education: arr });
            }
    }
    
    const handleRemoveTask = (eduIndex:number,taskIndex: number) => {
        let arr = [...data.education];
        if (arr[eduIndex].details.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr[eduIndex].details.splice(taskIndex, 1);
            setData({ ...data, education: arr });
            }
    }
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}><p className="text-xl font-semibold text-center pb-0">Education and Honors</p></AccordionHead>
                    <AccordionBody>
                        <div className="education flex flex-col gap-y-3 mb-3 text-slate-400">
                            <div className="firstline flex justify-between text-lg">
                                <p>Do you need this section?</p>
                                <label><input type="checkbox" checked={data.educationNeeded} onChange={(e) => { setData({ ...data, educationNeeded: !data.educationNeeded }) }} /></label>
                            </div>
                            <div className="secondline flex justify-center">
                                <AddButton
                                    description="Add"
                                    cb={() => {
                                        if (data.education.length == 2)
                                            toast.warning("Exceeding two entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                {
                                                    className: 'text-base  w-[400px] flex justify-center',
                                                    duration: 5000,
                                                })
                                        setData({ ...data, education: [{ ...data.education[0] }, ...data.education] })
                                    }} />
                            </div>
                            <div className="thirdpart flex flex-col gap-y-3">
                                {
                                    data.education.map((edu, i) => (
                                        <Disclosure key={i}>
                                            {({ open }) => (
                                                <>
                                                    <AccordionHead subpart={true}  open={open}><p className="text-lg font-semibold text-center pb-0">Education {i + 1}</p></AccordionHead>
                                                    <AccordionBody>
                                                        <div className="flex justify-between  text-slate-400 mb-2">
                                                            <p className="text-lg font-semiboldd">Remove this entry?</p>
                                                            <DeleteButton cb={() => { handleRemoveEducation(i) }} />
                                                        </div>
                                                        <div className="university text-slate-400 mb-5">
                                                            <p>University:</p>
                                                            <Input value={edu.university} onChange={(e) => {
                                                                let arr = [...data.education];
                                                                arr[i].university = e.target.value
                                                                setData({ ...data, education: arr })
                                                            }} />
                                                        </div>
                                                        <div className="universityLocation text-slate-400 mb-5">
                                                            <p>University Location:</p>
                                                            <Input value={edu.universityLocation} onChange={(e) => {
                                                                let arr = [...data.education];
                                                                arr[i].universityLocation = e.target.value
                                                                setData({ ...data, education: arr })
                                                            }} />
                                                        </div>
                                                        <div className="Course text-slate-400 mb-5">
                                                            <p>Course:</p>
                                                            <Input value={edu.course} onChange={(e) => {
                                                                let arr = [...data.education];
                                                                arr[i].course = e.target.value
                                                                setData({ ...data, education: arr })
                                                            }} />
                                                        </div>
                                                        <div className="period text-slate-400 mb-5">
                                                            <p>Period</p>
                                                            <Input value={edu.period} onChange={(e) => {
                                                                let arr = [...data.education];
                                                                arr[i].period = e.target.value
                                                                setData({ ...data, education: arr })
                                                            }} />
                                                        </div>
                                                        <div className="details text-slate-400">
                                                            <div className="firstline flex justify-between items-center mb-5">
                                                                <p>Details:</p>
                                                                <AddButton cb={() => {
                                                                    if (data.education[i].details.length == 2)
                                                                        toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                                            {
                                                                                className: 'text-base  w-[400px] flex justify-center',
                                                                                duration: 5000,
                                                                            })
                                                                    let arr = [...data.education];
                                                                    let details = [arr[i].details[0], ...arr[i].details];
                                                                    arr[i].details = details;
                                                                    setData({ ...data, education: arr })
                                                                }} />
                                                            </div>
                                                            <div className="details lines flex flex-col gap-y-3">
                                                                {
                                                                    edu.details.map((text, j) => (
                                                                        <div key={j} className="flex justify-between">
                                                                            <Input
                                                                                value={text}
                                                                                className="flex-1"
                                                                                onChange={(e) => {
                                                                                    let arr = [...data.education];
                                                                                    arr[i].details[j] = e.target.value;
                                                                                    setData({ ...data, education: arr })
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

export default Education