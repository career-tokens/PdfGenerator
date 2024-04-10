import React from 'react'
import { Input } from '../../components/ui/input'
import AccordionBody from '../../components/ui/AccordionBody'
import { Disclosure } from '@headlessui/react'
import AccordionHead from '../../components/ui/AccordionHead'
import { AirbnbData } from '../../dataModels/AirbnbData'

interface Props{
    data: AirbnbData;
    setData: React.Dispatch<React.SetStateAction<AirbnbData>>;
}

const Booking:React.FC<Props> = ({data,setData}) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Booking Details</p></AccordionHead>
                    <AccordionBody>
                        <div className="booking-details pb-6 border-black border-b-2 text-slate-400">
                            <div className="name mb-3">
                                <p>Booked By:</p>
                                <Input value={data.bookedBy} onChange={(e) => { setData({ ...data, bookedBy: e.target.value }) }} />
                            </div>
                            <div className="description mb-3">
                                <p>Description:</p>
                                <Input value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
                            </div>
                            <div className="date-of-booking mb-3">
                                <p>Date of Booking:</p>
                                <Input value={data.date} onChange={(e) => { setData({ ...data, date: e.target.value }) }} />
                            </div>
                            <div className="checkIn-Out flex justify-between mb-3">
                                <div className="checkin">
                                    <p>Check In</p>
                                    <Input value={data.checkIn[0]} onChange={(e) => { setData({ ...data, checkIn: { ...data.checkIn, 0: e.target.value } }) }} />
                                    <div className="h-2" />
                                    <Input value={data.checkIn[1]} onChange={(e) => { setData({ ...data, checkIn: { ...data.checkIn, 1: e.target.value } }) }} />
                                </div>
                                <div className="checkout">
                                    <p>Check Out</p>
                                    <Input value={data.checkOut[0]} onChange={(e) => { setData({ ...data, checkOut: { ...data.checkOut, 0: e.target.value } }) }} />
                                    <div className="h-2" />
                                    <Input value={data.checkOut[1]} onChange={(e) => { setData({ ...data, checkOut: { ...data.checkOut, 1: e.target.value } }) }} />
                                </div>
                            </div>
                            <div className="time-receipt">
                                <div className="time mb-2">
                                    <p>Time of booking</p>
                                    <Input value={data.time} onChange={(e) => { setData({ ...data, time: e.target.value }) }} />
                                </div>
                                <div className="receipt">
                                    <p>Receipt Id:</p>
                                    <Input value={data.receiptId} onChange={(e) => { setData({ ...data, receiptId: e.target.value }) }} />
                                </div>
                            </div>
                        </div>
                    </AccordionBody>
                </>
            )}
            </Disclosure>
  )
}

export default Booking