import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import DeleteButton from '../../components/ui/DeleteButton';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
import { toast } from 'sonner';
import AccordionBody from '../../components/ui/AccordionBody';
import { Disclosure } from '@headlessui/react';
import AccordionHead from '../../components/ui/AccordionHead';
interface Props {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const Projects: React.FC<Props> = ({ data, setData }) => {
    
    const handleRemoveProject = (index: number) => {
        if (data.projects.length === 1) {
            // If there's only one projects entry, prevent deletion
            toast.error("You need to have minimum one entry here", {
                className: 'text-base  w-[400px] flex justify-center',
                duration: 5000,
              });
            return;
          }
        let arr = [...data.projects];
        arr.splice(index, 1);
        setData({...data,projects:arr})
    }

    const handleRemoveFeature = (projectIndex:number,featureIndex:number) => {
        if (data.projects[projectIndex].features.length === 1) {
            // If there's only one projects entry, prevent deletion
            toast.error("You need to have minimum one entry here", {
                className: 'text-base  w-[400px] flex justify-center',
                duration: 5000,
              });
            return;
          }
        let arr = [...data.projects];
        arr[projectIndex].features.splice(featureIndex, 1);
        setData({...data,projects:arr})
    }
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}><p className="pb-0">Projects</p></AccordionHead>
                    <AccordionBody>
                        <div className="personal-info flex flex-col gap-y-7 mb-3">
                            <div className="flex justify-center">
                                <AddButton
                                    description="Add More Projects"
                                    cb={() => {
                                        if (data.projects.length == 4)
                                            toast.warning("Exceeding four entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                {
                                                    className: 'text-base  w-[400px] flex justify-center',
                                                    duration: 5000,
                                                })
                                        setData({ ...data, projects: [{ ...data.projects[0] }, ...data.projects] })
                                    }} />
                            </div>
                            {
                                data.projects.map((project, i) => (
                                    <Disclosure key={i}>
                                        {({ open }) => (
                                            <>
                                                <AccordionHead subpart={true} open={open}><p className="text-lg font-semibold text-center pb-0">Project {i + 1}</p></AccordionHead>
                                                <AccordionBody>
                                                    <div className="flex flex-col gap-y-3 text-slate-400">
                                                        <div className="flex justify-between">
                                                            <p className="text-lg font-bold">Remove this project?</p>
                                                            <DeleteButton cb={() => { handleRemoveProject(i) }} />
                                                        </div>
                      
                                                        <div className="name">
                                                            <p>Project Name:</p>
                                                            <Input
                                                                value={project.title}
                                                                onChange={(e) => {
                                                                    let arr = [...data.projects];
                                                                    arr[i].title = e.target.value;
                                                                    setData({ ...data, projects: arr })
                                                                }} />
                                                        </div>
                                                        <div className="link">
                                                            <p>Project Link:</p>
                                                            <Input
                                                                value={project.link}
                                                                onChange={(e) => {
                                                                    let arr = [...data.projects];
                                                                    arr[i].link = e.target.value;
                                                                    setData({ ...data, projects: arr })
                                                                }} />
                                                        </div>
                                                        <div className="description mb-3">
                                                            <p>Project Description:</p>
                                                            <Input
                                                                value={project.description}
                                                                onChange={(e) => {
                                                                    let arr = [...data.projects];
                                                                    arr[i].description = e.target.value;
                                                                    setData({ ...data, projects: arr })
                                                                }} />
                                                        </div>
                                                        <div className="features flex flex-col gap-y-3">
                                                            <div className="secondline flex justify-between items-center">
                                                                <p>Features</p>
                                                                <AddButton
                                                                    description="Add"
                                                                    cb={() => {
                                                                        if (data.projects[i].features.length == 3)
                                                                            toast.warning("Exceeding five entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                                                                {
                                                                                    className: 'text-base  w-[400px] flex justify-center',
                                                                                    duration: 5000,
                                                                                })
                                                                        let arr = [...data.projects];
                                                                        arr[i].features = [arr[i].features[0], ...arr[i].features]
                                                                        setData({ ...data, projects: arr })
                                                                    }} />
                                                            </div>
                                                            {
                                                                project.features.map((feature, j) => (
                                                                    <div className="feature flex justify-between items-center gap-x-4" key={j}>
                                                                        <Input
                                                                            className="flex-1"
                                                                            value={feature}
                                                                            onChange={(e) => {
                                                                                let arr = [...data.projects];
                                                                                arr[i].features[j] = e.target.value;
                                                                                setData({ ...data, projects: arr })
                                                                            }} />
                                                                        <DeleteButton cb={() => { handleRemoveFeature(i, j) }} />
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
                    </AccordionBody>
                    </>
            )}
            </Disclosure>
  )
}

export default Projects