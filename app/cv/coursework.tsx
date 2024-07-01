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
const Coursework:React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
    const handleCourseworkChange = (index, field, value) => {
        const updatedCoursework = [...data.coursework];
        updatedCoursework[index][field] = value;
        setData({ ...data, coursework: updatedCoursework });
      };
    
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Coursework Experience</p></AccordionHead>
          <AccordionBody>
          <div className="coursework flex flex-col  border-black border-b-2 gap-y-4">
          <div className="add flex justify-center">
          <AddButton cb={()=>{handleAdd("coursework")}}/>
          </div>
          {
                data.coursework.map((item, i) => (
                  <Disclosure key={i}>
                    {({ open }) => (
                      <>
                        <AccordionHead open={open} subpart={true}>    <p className="text-xl pb-0 font-semibold">Coursework {i + 1}:</p></AccordionHead>
                        <AccordionBody>
                          <div className={`coursework ${i + 1} flex flex-col gap-y-3`} key={i}>
                            <div className="flex justify-between text-lg text-slate-400">
                              <h2>Remove this coursework?</h2>
                              <DeleteButton cb={() => { handleRemove("coursework", i) }} />
                            </div>
                            <div className="line1 flex flex-col gap-y-3">
                              <Input type="text" value={item.subject} onChange={(e) => handleCourseworkChange(i, "subject", e.target.value)} />
                              <Input type="text" value={item.topics} onChange={(e) => handleCourseworkChange(i, "topics", e.target.value)} />
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

export default Coursework;