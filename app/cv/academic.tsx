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
const Academic:React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
  const handleAcademicChange = (index, field, value) => {
    const updatedAcademic = [...data.academic];
    updatedAcademic[index][field] = value;
    setData({ ...data, academic: updatedAcademic });
  };
    
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Academic Experience</p></AccordionHead>
          <AccordionBody>
          <div className="academic flex flex-col  border-black border-b-2 gap-y-4">
          <div className="add flex justify-center">
          <AddButton cb={()=>{handleAdd("academic")}}/>
          </div>
          {
                data.academic.map((item, i) => (
                  <Disclosure key={i}>
                    {({ open }) => (
                      <>
                        <AccordionHead open={open} subpart={true}><p className="text-xl pb-0 font-semibold">Academic {i + 1}</p></AccordionHead>
                        <AccordionBody>
                          <div className={`academic ${i + 1} flex flex-col gap-y-3`} key={i}>
                            <div className="flex justify-between text-lg text-slate-400">
                              <h2>Remove this academic entry?</h2>
                              <DeleteButton cb={() => { handleRemove("academic", i) }} />
                            </div>
                            <div className="line1 flex justify-between">
                              <Input type="text" value={item.company} onChange={(e) => handleAcademicChange(i, "company", e.target.value)} />
                              <Input type="text" value={item.location} onChange={(e) => handleAcademicChange(i, "location", e.target.value)} />
                            </div>
                            <div className="line2 flex justify-between">
                              <Input type="text" value={item.timeline} onChange={(e) => handleAcademicChange(i, "timeline", e.target.value)} />
                              <Input type="text" value={item.position} onChange={(e) => handleAcademicChange(i, "position", e.target.value)} />
                            </div>
                            <div className="line3">
                              <Input type="text" value={item.task} onChange={(e) => handleAcademicChange(i, "task", e.target.value)} />
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

export default Academic;