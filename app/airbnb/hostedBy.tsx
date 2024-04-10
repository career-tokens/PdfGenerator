import React from 'react'
import AccordionBody from '../../components/ui/AccordionBody'
import AccordionHead from '../../components/ui/AccordionHead'
import { Disclosure } from '@headlessui/react'
import { Input } from '../../components/ui/input'
import { AirbnbData } from '../../dataModels/AirbnbData'

interface Props{
  data: AirbnbData;
  setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const HostedBy:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Host Info</p></AccordionHead>
                  <AccordionBody>
                  <div className="hostedBy pt-2 pb-6 border-black border-b-2 text-slate-400">
            <div className="flex justify-between">
            <div className="host">
              <p>Host:</p>
              <Input value={data.hostedBy[0]} onChange={(e) => {
                console.log({ ...data, hostedBy: { ...data.hostedBy, 0: e.target.value } })
                setData({ ...data, hostedBy: { ...data.hostedBy, 0: e.target.value } })
              }} />
            </div>
            <div className="phone">
              <p>Host{"'"}s Phone Number:</p>
              <Input value={data.hostedBy[1]} onChange={(e)=>{setData({...data,hostedBy:{...data.hostedBy,1:e.target.value}})}}/>
            </div>
          </div>
          </div>
                  </AccordionBody>
              </>
          )}
          </Disclosure>
  )
}

export default HostedBy