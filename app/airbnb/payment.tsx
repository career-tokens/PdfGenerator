import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { Disclosure } from '@headlessui/react'
import { Input } from '../../components/ui/input'
import { AirbnbData } from '../../dataModels/AirbnbData'

interface Props{
  data: AirbnbData;
  setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const Payment:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Payment Details:</p></AccordionHead>
                  <AccordionBody>
                  <div className="payment pt-2 pb-6 text-slate-400">
          <div className="flex justify-between">
            <div className="card">
              <p>Card Company:</p>
              <Input value={data.payment.card} onChange={(e)=>{setData({...data,payment:{...data.payment,card:e.target.value}})}}/>
            </div>
            <div className="last">
              <p>Last Four Digits:</p>
              <Input value={data.payment.lastFourDigits} onChange={(e)=>{setData({...data,payment:{...data.payment,lastFourDigits:e.target.value}})}}/>
            </div>
          </div>
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Payment