import React from 'react'
import { Input } from '../../components/ui/input'
import { Disclosure } from '@headlessui/react'
import AccordionHead from '../../components/ui/AccordionHead'
import AccordionBody from '../../components/ui/AccordionBody'
import { AirbnbData } from '../../dataModels/AirbnbData'

interface Props{
    data: AirbnbData;
    setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const Address:React.FC<Props> = ({data,setData}) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Address</p></AccordionHead>
                    <AccordionBody>
                        <div className="address pt-2 pb-6 border-black border-b-2 text-slate-400">
                            <p>Address Line 1:</p>
                            <Input value={data.address[0]} onChange={(e) => { setData({ ...data, address: [e.target.value, data.address[1], data.address[2], data.address[3]] }) }} />
                            <div className="h-1" />
                            <p>Address Line 2:</p>
                            <Input value={data.address[1]} onChange={(e) => { setData({ ...data, address: [data.address[0], e.target.value, data.address[2], data.address[3]] }) }} />
                            <div className="h-1" />
                            <p>Address Line 3:</p>
                            <Input value={data.address[2]} onChange={(e) => { setData({ ...data, address: [data.address[0], data.address[1], e.target.value, data.address[3]] }) }} />
                            <div className="h-1" />
                            <p>Address Line 4:</p>
                            <Input value={data.address[3]} onChange={(e) => { setData({ ...data, address: [data.address[0], data.address[1], e.target.value, data.address[3]] }) }} />
                        </div>
                    </AccordionBody>
                </>
            )}
            </Disclosure>
  )
}

export default Address