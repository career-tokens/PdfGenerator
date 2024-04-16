import { Disclosure } from '@headlessui/react'
import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { Input } from '../../components/ui/input'
import { MLCVData } from '../../dataModels/MLCVData'

interface Props{
  data: MLCVData;
  setData: React.Dispatch<React.SetStateAction<MLCVData>>;
}
const Personal:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
          {({ open }) => (
              <>
                  <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Details:</p></AccordionHead>
          <AccordionBody>
          <div className="personal-info flex flex-col gap-y-5 mb-3 text-slate-400">
          <div className="name">
            <p>Name:</p>
            <Input value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
           </div>
           <div className="email">
            <p>Email:</p>
            <Input value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
          </div>
          <div className="phone">
            <div className="firstline flex justify-between">
              <p>Phone:</p>
              <label><input type="checkbox" checked={data.phoneNeeded} onChange={(e) => { setData({ ...data, phoneNeeded: !data.phoneNeeded } ) }} /></label>
            </div>
            <Input value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value } ) }} />
            </div>
            <div className="address">
            <div className="firstline flex justify-between">
              <p>Address:</p>
              <label><input type="checkbox" checked={data.addressNeeded} onChange={(e) => { setData({ ...data, addressNeeded: !data.addressNeeded } ) }} /></label>
            </div>
            <Input value={data.address} onChange={(e) => { setData({ ...data, address: e.target.value } ) }} />
          </div>

        </div>
                  </AccordionBody>
              </>
          )}
          </Disclosure>
  )
}

export default Personal