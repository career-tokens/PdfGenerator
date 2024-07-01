import { Disclosure } from '@headlessui/react'
import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { Input } from '../../components/ui/input'
import { CVData } from '../../dataModels/CVData'

interface Props{
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
}
const Details:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="pb-0">Details</p></AccordionHead>
          <AccordionBody>
          <div className="details flex flex-col  border-black border-b-2 gap-y-3">
          <div className="name ">
          <Input  type="text" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
        </div>
        <div className="phoneNumbers flex justify-between">
          <Input  type="text" value={data.phoneNumber1} onChange={(e)=>{setData({...data,phoneNumber1:e.target.value})}}/>
          <Input  type="text" value={data.phoneNumber2} onChange={(e)=>{setData({...data,phoneNumber2:e.target.value})}}/>
        </div>
        <div className="address flex justify-between">
          <Input  type="text" value={data.addressLine1} onChange={(e)=>{setData({...data,addressLine1:e.target.value})}}/>
          <Input  type="text" value={data.addressLine2} onChange={(e)=>{setData({...data,addressLine2:e.target.value})}}/>
        </div>
        <div className="emails flex justify-between">
          <Input  type="text" value={data.email1} onChange={(e)=>{setData({...data,email1:e.target.value})}}/>
          <Input  type="text" value={data.email2} onChange={(e)=>{setData({...data,email2:e.target.value})}}/>
        </div>
        </div>
                  </AccordionBody>
              </>
          )}
          </Disclosure>
  )
}

export default Details