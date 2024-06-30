import React from 'react'
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import AddButton from '../../components/ui/AddButton';
import { toast } from 'sonner';
import { Disclosure } from '@headlessui/react';
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
import { JDData } from '../../dataModels/JDData';
interface Props {
    data: JDData;
    setData: React.Dispatch<React.SetStateAction<JDData>>;
  }
const Technical: React.FC<Props> = ({ data, setData }) => {
    
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <AccordionHead open={open}><p className="text-xl font-semibold text-center pb-0">Technical Abilities Required</p></AccordionHead>
                  <AccordionBody>
                      <div className="technical-ability flex flex-col gap-y-4 text-lg text-gray-300">
                      <div className="firstline flex justify-center">
              <AddButton  cb={() => {
                if (data.technicalAbilities.length == 9)
                  toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                    {
                      className: 'text-base  w-[400px] flex justify-center',
                      duration: 5000,
                    })
                setData({ ...data, technicalAbilities: [data.technicalAbilities[0], ...data.technicalAbilities] })
              }} />
                          </div>
                          {
                              data.technicalAbilities.map((item, i) => (
                                  <div className="flex justify-between" key={i}>
                                      <Input
                                          className="flex-1"
                                          value={item}
                                          onChange={(e) => {
                                          let arr = [...data.technicalAbilities];
                                          arr[i] = e.target.value;
                                          setData({...data,technicalAbilities:arr})
                                      }} />
                                      <DeleteButton cb={() => {
                                          let arr = [...data.technicalAbilities];
                                          if (arr.length != 1) {
                                              arr.splice(i, 1);
                                              setData({...data,technicalAbilities:arr})
                                          }
                                          else {
                                            toast.error("You need to have minimum one entry here", {
                                                className: 'text-base  w-[400px] flex justify-center',
                                                duration: 5000,
                                              });
                                          }
                                      }}/>
                                  </div>
                              ))
                          }
                      </div>
          </AccordionBody>
        </>
      )}
      </Disclosure>
  )
}

export default Technical