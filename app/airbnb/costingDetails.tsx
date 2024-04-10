import React from 'react'
import AccordionBody from '../../components/ui/AccordionBody'
import AccordionHead from '../../components/ui/AccordionHead'
import { Input } from '../../components/ui/input'
import { Disclosure } from '@headlessui/react'
import { AirbnbData } from '../../dataModels/AirbnbData'

interface Props{
  data: AirbnbData;
  setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const CostingDetails:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Cost Details</p></AccordionHead>
                  <AccordionBody>
                  <div className="costing-details pt-2 pb-6 border-black border-b-2 text-slate-400">
            <div className="basiccost flex justify-between mb-3">
            <div className="costpernight">
              <p>Cost per night:</p>
              <Input value={data.basicCost.costPerNight} onChange={(e)=>{setData({...data,basicCost:{...data.basicCost,costPerNight:Number(e.target.value)}})}}/>
            </div>
            <div className="nights">
              <p>No. of Nights</p>
              <Input value={data.basicCost.nights} onChange={(e)=>{setData({...data,basicCost:{...data.basicCost,nights:Number(e.target.value)}})}}/>
            </div>
            </div>
            <div className="additionalcost flex justify-between mb-3">
            <div className="cleaning">
              <p>Cleaning Fees:</p>
                <Input value={data.additionalCost[0].cost} onChange={(e) => { setData({ ...data, additionalCost: [{ type: "Cleaning Fees", cost: Number(e.target.value) },data.additionalCost[1] ]})}}/>
            </div>
            <div className="service">
              <p>Service Fees:</p>
                <Input value={data.additionalCost[1].cost} onChange={(e) => { setData({ ...data, additionalCost: [data.additionalCost[0],{ type: "Service Fees", cost: Number(e.target.value) }]})}}/>
            </div>
          </div>
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default CostingDetails