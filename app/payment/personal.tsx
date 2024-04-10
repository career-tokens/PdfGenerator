import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { Disclosure } from '@headlessui/react'
import { Input } from '../../components/ui/input'
import { PaymentData } from '../../dataModels/PaymentData'

interface Props{
    data: PaymentData;
    setData: React.Dispatch<React.SetStateAction<PaymentData>>;
}

const Personal:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Personal Details:</p></AccordionHead>
                  <AccordionBody>
                  <div className="personalInfo flex flex-col gap-y-5 mb-5 text-lg text-slate-400">
             <div className="name">
                  <span className="mb-[5px]">Your Name</span>
                  <Input type="text" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
              </div>
              <div className="company">
                  <span className="mb-[5px]">Company Name</span>
                  <Input type="text" value={data.company} onChange={(e)=>{setData({...data,company:e.target.value})}}/>
              </div>
              <div className="date flex">
                  <div className="starting-date w-[45%] mr-[10%]">
                      <span className="mb-[5px]">Starting Date</span>
                      <Input type="text" className="w-full" value={data.starting_date} onChange={(e) => { setData({ ...data, starting_date: e.target.value }) }} />
                  </div>
                  <div className="ending-date w-[45%]">
                      <span className="mb-[5px]">Ending Date</span>
                      <Input type="text" className="w-full" value={data.ending_date} onChange={(e) => { setData({ ...data, ending_date: e.target.value }) }} />
                  </div>
              </div>
              <div className="invoice-receipt flex">
                  <div className="invoice w-[45%] mr-[10%]">
                      <span className="mb-[5px]">Invoice Id</span>
                      <Input type="text" className="w-full" value={data.invoice_id} onChange={(e) => { setData({ ...data, invoice_id: e.target.value }) }} />
                  </div>
                  <div className="receipt w-[45%]">
                      <span className="mb-[5px]">Receipt Id</span>
                      <Input type="text" className="w-full" value={data.receipt_id} onChange={(e) => { setData({ ...data, receipt_id: e.target.value }) }} />
                  </div>
              </div>
              <div className="card-image">
                  <span className="mb-[5px]">Card Image Public URL</span>
                  <Input type="text" value={data.image} onChange={(e)=>{setData({...data,image:e.target.value})}}/>
              </div>
              <div className="bank">
                  <span className="mb-[5px]">Last 4 digits of Bank Account</span>
                  <Input type="text" value={data.bank} onChange={(e)=>{setData({...data,bank:e.target.value})}}/>
              </div>
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Personal