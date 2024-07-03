import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
import { Disclosure } from '@headlessui/react';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
import DeleteButton from '../../components/ui/DeleteButton';
import { toast } from 'sonner';
import { AirbnbData } from '../../dataModels/AirbnbData';

interface Props{
  data: AirbnbData;
  setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const Travelers:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>   <p className="text-xl pb-0">Travelers</p></AccordionHead>
                  <AccordionBody>
                  <div className="travelers  pb-6 border-black border-b-2 text-slate-400">
            <div className="flex justify-center mb-5">
                <AddButton cb={() => {
                                        if (data.travelers.length === 3) {
                                          toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                                          {
                                            className: 'text-base  w-[400px] flex justify-center',
                                            duration: 5000,
                                          })
                                        }
                  setData({ ...data, travelers: [...data.travelers, "Cikgu Mohd Nor Mohamed"] })
                }} />
            </div>
            <div className="persons">
              {
                data.travelers.map((item,index) => (
                  <div className="flex justify-between items-center" key={index}>
                    <Input className="flex-1" value={item} onChange={(e) => {
                      let newTravelers = [...data.travelers];
                      newTravelers[index] = e.target.value;
                      setData({ ...data, travelers: newTravelers })
                    }} />
                    <DeleteButton cb={() => {
                      if (index != 0)
                      {
                        let arr = [...data.travelers];
                        arr.splice(index, 1);
                        setData({ ...data, travelers: arr });
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
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Travelers