import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import AccordionBody from '../../components/ui/AccordionBody';
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { NewCVData } from '../../dataModels/NewCVData';

interface Props{
    data: NewCVData;
    setData: React.Dispatch<React.SetStateAction<NewCVData>>;
    handleAdd: (string) => void;
    handleRemove:(string,number)=>void
}

const Education:React.FC<Props> = ({data,setData,handleAdd,handleRemove}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="pb-0">Education:</p></AccordionHead>
                  <AccordionBody>
                  <div className="education flex flex-col gap-y-4">
            <div className="add flex justify-center">
              <AddButton
                cb={() => {
                  handleAdd("education");
                }}
              />
            </div>
            {data.education.map((edu, i) => (
              <div className={`edu ${i + 1} flex flex-col gap-y-3`} key={i}>
                <div className="flex justify-between items-center text-lg text-slate-400">
                  <h2 className="font-semibold">Education {i + 1}</h2>

                  <DeleteButton
                    cb={() => {
                      handleRemove("education", i);
                    }}
                  />
                </div>

                <div className="line1 flex justify-between">
                  <Input
                    type="text"
                    value={edu.university}
                    onChange={(e) => {
                      let updatedEducation = [...data.education];

                      updatedEducation[i].university = e.target.value;

                      setData({ ...data, education: updatedEducation });
                    }}
                  />

                  <Input
                    type="text"
                    value={edu.universityLocation}
                    onChange={(e) => {
                      let updatedEducation = [...data.education];

                      updatedEducation[i].universityLocation = e.target.value;

                      setData({ ...data, education: updatedEducation });
                    }}
                  />
                </div>

                <div className="line2 flex justify-between">
                  <Input
                    type="text"
                    value={edu.timeline}
                    onChange={(e) => {
                      let updatedEducation = [...data.education];

                      updatedEducation[i].timeline = e.target.value;

                      setData({ ...data, education: updatedEducation });
                    }}
                  />

                  <Input
                    type="text"
                    value={edu.stream}
                    onChange={(e) => {
                      let updatedEducation = [...data.education];

                      updatedEducation[i].stream = e.target.value;

                      setData({ ...data, education: updatedEducation });
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Education