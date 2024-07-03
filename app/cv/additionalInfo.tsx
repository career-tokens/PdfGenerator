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
const AdditionalInfo:React.FC<Props> = ({ data, setData, handleAdd, handleRemove }) => {
    
  const handleAdditionalInfoChange = (index, field, value) => {
    const updatedAdditionalInfo = [...data.additionalInfo];
    updatedAdditionalInfo[index][field] = value;
    setData({ ...data, additionalInfo: updatedAdditionalInfo });
  };
    
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Additional Info</p></AccordionHead>
          <AccordionBody>
          <div className="additionalInfo flex flex-col gap-y-4">
          <div className="add flex justify-center">
          <AddButton cb={()=>{handleAdd("additionalInfo")}}/>
          </div>
          {
                data.additionalInfo.map((item, i) => (
                  <Disclosure key={i}>
                    {({ open }) => (
                      <>
                        <AccordionHead open={open} subpart={true}>    <p className="text-xl pb-0">Additional Information {i + 1}</p></AccordionHead>
                        <AccordionBody>
                          <div className={`additionalInfo ${i + 1} flex flex-col text-lg text-slate-400`} key={i}>
                            <div className="flex justify-between">
                              <h2>Remove this entry?</h2>
                              <DeleteButton cb={() => { handleRemove("additionalInfo", i) }} />
                            </div>
                            <div className="line1 flex flex-col gap-y-3">
                              <Input type="text" value={item.subject} onChange={(e) => handleAdditionalInfoChange(i, "subject", e.target.value)} />
                              <Input editor={true} type="text" value={item.description} onChange={(e) => handleAdditionalInfoChange(i, "description", e)} />
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

export default AdditionalInfo;