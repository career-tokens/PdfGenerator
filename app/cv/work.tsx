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
const Work:React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
    const handleWorkChange = (index, field, value) => {
        const updatedWork = [...data.work];
        updatedWork[index][field] = value;
        setData({ ...data, work: updatedWork });
      };
    
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Work</p></AccordionHead>
          <AccordionBody>
          <div className="work flex flex-col text-lg text-slate-400 gap-y-4">
          <div className="add flex justify-center">
          <AddButton cb={()=>{handleAdd("work")}}/>
          </div>
          {
                              data.work.map((item, i) => (
                                <Disclosure key={i}>
                                      {({ open }) => (
                                          <>
                                              <AccordionHead open={open} subpart={true}><p className="text-xl pb-0">Work {i + 1}:</p></AccordionHead>
                                              <AccordionBody>
                                                  <div className={`work ${i + 1} flex flex-col gap-y-3`} key={i}>
                                                      <div className="flex justify-between text-lg text-slate-400">
                                                          <h2>Remove this work experience?</h2>
                                                          <DeleteButton cb={() => { handleRemove("work", i) }} />
                                                      </div>
                                                      <div className="line1 flex justify-between">
                                                          <Input type="text" value={item.company} onChange={(e) => handleWorkChange(i, "company", e.target.value)} />
                                                          <Input type="text" value={item.location} onChange={(e) => handleWorkChange(i, "location", e.target.value)} />
                                                      </div>
                                                      <div className="line2 flex justify-between">
                                                          <Input type="text" value={item.timeline} onChange={(e) => handleWorkChange(i, "timeline", e.target.value)} />
                                                          <Input type="text" value={item.position} onChange={(e) => handleWorkChange(i, "position", e.target.value)} />
                                                      </div>
                                                      <div className="line3">
                                                          <Input type="text" editor={true} value={item.task} onChange={(e) => handleWorkChange(i, "task", e)} />
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

export default Work;