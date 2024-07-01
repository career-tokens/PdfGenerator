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
const Projects: React.FC<Props> = ({ data, setData }) => {

    const handleRemoveProjects = (index: number) => {
        let arr = [...data.projectsAndLeadership];
        if (arr.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr.splice(index, 1);
            setData({ ...data, projectsAndLeadership: arr });
            }
    }
    
    const handleRemoveTask = (projectIndex:number,taskIndex: number) => {
        let arr = [...data.projectsAndLeadership];
        if (arr[projectIndex].tasks.length == 1)
                        toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
        else
        {
            arr[projectIndex].tasks.splice(taskIndex, 1);
            setData({ ...data, projectsAndLeadership: arr });
            }
    }
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}><p className="pb-0">Projects and Honors</p></AccordionHead>
                    <AccordionBody>
                        <div className="projectsAndLeadership flex flex-col gap-y-3 mb-3 text-slate-400">
                            <div className="firstline flex justify-between text-lg">
                                <p>Do you need this section?</p>
                                <label><input type="checkbox" checked={data.projectsAndLeadershipNeeded} onChange={(e) => { setData({ ...data, projectsAndLeadershipNeeded: !data.projectsAndLeadershipNeeded }) }} /></label>
                            </div>
                            <div className="secondline flex justify-center">
                                <AddButton
                                    description="Add"
                                    cb={() => {
                                        if (data.projectsAndLeadership.length == 2)
                                            toast.warning("Exceeding two entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                {
                                                    className: 'text-base  w-[400px] flex justify-center',
                                                    duration: 5000,
                                                })
                                        setData({ ...data, projectsAndLeadership: [{ ...data.projectsAndLeadership[0] }, ...data.projectsAndLeadership] })
                                    }} />
                            </div>
                            <div className="thirdpart flex flex-col gap-y-3">
                                {
                                    data.projectsAndLeadership.map((project, i) => (
                                        <Disclosure key={i}>
                                            {({ open }) => (
                                                <>
                                                    <AccordionHead subpart={true}  open={open}><p className="text-lg font-semibold text-center pb-0">Project {i + 1}</p></AccordionHead>
                                                    <AccordionBody>
                                                        <div className="flex justify-between  text-slate-400 mb-2">
                                                            <p className="text-lg font-semiboldd">Remove this entry?</p>
                                                            <DeleteButton cb={() => { handleRemoveProjects(i) }} />
                                                        </div>
                                                        <div className="role text-slate-400 mb-5">
                                                            <p>role:</p>
                                                            <Input value={project.role} onChange={(e) => {
                                                                let arr = [...data.projectsAndLeadership];
                                                                arr[i].role = e.target.value
                                                                setData({ ...data, projectsAndLeadership: arr })
                                                            }} />
                                                        </div>
                                                        <div className="program text-slate-400 mb-5">
                                                            <p>Program:</p>
                                                            <Input value={project.program} onChange={(e) => {
                                                                let arr = [...data.projectsAndLeadership];
                                                                arr[i].program = e.target.value
                                                                setData({ ...data, projectsAndLeadership: arr })
                                                            }} />
                                                        </div>
                                                        <div className="location text-slate-400 mb-5">
                                                            <p>Location:</p>
                                                            <Input value={project.location} onChange={(e) => {
                                                                let arr = [...data.projectsAndLeadership];
                                                                arr[i].location = e.target.value
                                                                setData({ ...data, projectsAndLeadership: arr })
                                                            }} />
                                                        </div>
                                                        <div className="period text-slate-400 mb-5">
                                                            <p>Period</p>
                                                            <Input value={project.period} onChange={(e) => {
                                                                let arr = [...data.projectsAndLeadership];
                                                                arr[i].period = e.target.value
                                                                setData({ ...data, projectsAndLeadership: arr })
                                                            }} />
                                                        </div>
                                                        <div className="tasks text-slate-400">
                                                            <div className="firstline flex justify-between items-center mb-5">
                                                                <p>Tasks:</p>
                                                                <AddButton cb={() => {
                                                                    if (data.projectsAndLeadership[i].tasks.length == 2)
                                                                        toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                                            {
                                                                                className: 'text-base  w-[400px] flex justify-center',
                                                                                duration: 5000,
                                                                            })
                                                                    let arr = [...data.projectsAndLeadership];
                                                                    let tasks = [arr[i].tasks[0], ...arr[i].tasks];
                                                                    arr[i].tasks = tasks;
                                                                    setData({ ...data, projectsAndLeadership: arr })
                                                                }} />
                                                            </div>
                                                            <div className="tasks lines flex flex-col gap-y-3">
                                                                {
                                                                    project.tasks.map((text, j) => (
                                                                        <div key={j} className="flex justify-between gap-x-4">
                                                                            <Input
                                                                                value={text}
                                                                                className="flex-1"
                                                                                onChange={(e) => {
                                                                                    let arr = [...data.projectsAndLeadership];
                                                                                    arr[i].tasks[j] = e.target.value;
                                                                                    setData({ ...data, projectsAndLeadership: arr })
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

export default Projects