import { Disclosure } from '@headlessui/react'
import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { Input } from '../../components/ui/input'
import { CVData } from '../../dataModels/CVData'
import AddButton from '../../components/ui/AddButton'
import DeleteButton from '../../components/ui/DeleteButton'

interface Props{
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
  handleAdd: (string) => void;
  handleRemove:(string,number)=>void
}
const Education:React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...data.education];
        updatedEducation[index][field] = value;
        setData({ ...data, education: updatedEducation });
    };
    
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Education</p></AccordionHead>
          <AccordionBody>
          <div className="education flex flex-col text-lg text-slate-400 gap-y-4">
          <div className="add flex justify-center">
          <AddButton cb={()=>{handleAdd("education")}}/>
          </div>
          {
                data.education.map((item, i) => (
                  <Disclosure key={i}>
                    {({ open }) => (
                      <>
                        <AccordionHead open={open} subpart={true}><p className="text-xl pb-0">Education {i + 1}:</p></AccordionHead>
                        <AccordionBody>
                          <div className={`edu ${i + 1} flex flex-col gap-y-3`} key={i}>
                            <div className="flex justify-between text-lg text-slate-400">
                              <h2>Remove this education entry?</h2>
                              <DeleteButton cb={() => { handleRemove("education", i) }} />
                            </div>
                            <div className="line1 flex justify-between">
                              <Input type="text" value={item.university} onChange={(e) => handleEducationChange(i, "university", e.target.value)} />
                              <Input type="text" value={item.universityLocation} onChange={(e) => handleEducationChange(i, "universityLocation", e.target.value)} />
                            </div>
                            <div className="line2 flex justify-between">
                              <Input type="text" value={item.timeline} onChange={(e) => handleEducationChange(i, "timeline", e.target.value)} />
                              <Input type="text" value={item.stream} onChange={(e) => handleEducationChange(i, "stream", e.target.value)} />
                            </div>
                            <div className="line3">
                              <Input editor={true} className="w-full rounded" type="text" value={item.major} onChange={(e) => handleEducationChange(i, "major", e)} />
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

export default Education;