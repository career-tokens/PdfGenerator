/* eslint-disable react/jsx-key */
"use client"

import { Airbnb } from "../../components/Airbnb";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";

export default function AirbnbPDFGenerator() {
  const initialData={
    description: "3 nights in Putrajaya , Malaysia",
    bookedBy: "Cikgu Mohd Nor Mohamed",
    date: "Sunday, Oct 22, 2017",
    checkIn: ["Oct 31", "2017"],
    checkOut: ["Nov 3", "2017"],
    address: ["PUTRAJAYA's HEART.5mins from Putrajaya Sentral", "13 Jalan P11f/13 Saujana Aster Condominium", "Putrajaya,Wilayah Persekutuan Putrajaya 62300", "Malaysia"],
    hostedBy: ["Fazly Azry", "+60 12 291 3374"],
    travelers: ["Cikgu Mohd Nor Mohamed"],
    basicCost: {
        costPerNight: 90.00,
        nights:3
    },
    additionalCost: [{
        type: "Cleaning Fees",
        cost:30.00
    },
        {
            type: "Service Fees",
            cost:37.18
        }],
    payment: {
        card: "MASTERCARD",
        lastFourDigits:"0780"
    },
    time: "10.47AM +08",
    receiptId:"HM3TCST2J3"
}
  const [data, setData] = useState(initialData);

  const router = useRouter();

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "airbnb");
    router.push("/viewPDF");
  }
  
  return (
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start">
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        button{
          background-color:red;
          color:white;
          border-radius:4px;
          padding:5px;
          padding-top:3px;
          padding-bottom:3px;
        }

        input{
          background-color:black;
          color:white;
        }
        p{
          padding-bottom:4px;
        }
        `}
      </style>
      <div className="preview w-[700px] scale-50 lg:w-[50%] mt-[-250px] mb-[-250px] lg:scale-100 lg:mt-[0px] lg:mb-[0px]">
        <Airbnb data={data} />
      </div>
      <div className="change-things w-full lg:w-[50%] p-[20px] dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center items-center">
        <div className="w-[450px] shadow-input bg-white dark:bg-black p-4 rounded font-[Roboto]">
          <div className="booking-details pb-6 border-black border-b-2">
            <p className="font-bold text-center text-2xl">Booking Details</p>
            <div className="name mb-3">
            <p>Booked By:</p>
            <Input value={data.bookedBy} onChange={(e)=>{setData({...data,bookedBy:e.target.value})}}/>
          </div>
          <div className="description mb-3">
            <p>Description:</p>
            <Input value={data.description} onChange={(e)=>{setData({...data,description:e.target.value})}}/>
          </div>
          <div className="date-of-booking mb-3">
            <p>Date of Booking:</p>
            <Input value={data.date} onChange={(e)=>{setData({...data,date:e.target.value})}}/>
          </div>
          <div className="checkIn-Out flex justify-between mb-3">
            <div className="checkin">
              <p>Check In</p>
                <Input value={data.checkIn[0]} onChange={(e) => { setData({ ...data, checkIn: { ...data.checkIn, 0: e.target.value } }) }} />
                <div className="h-2"/>
              <Input value={data.checkIn[1]} onChange={(e)=>{setData({...data,checkIn:{...data.checkIn,1:e.target.value}})}}/>
            </div>
            <div className="checkout">
              <p>Check Out</p>
                <Input value={data.checkOut[0]} onChange={(e) => { setData({ ...data, checkOut: { ...data.checkOut, 0: e.target.value } }) }} />
                <div className="h-2"/>
              <Input value={data.checkOut[1]} onChange={(e)=>{setData({...data,checkOut:{...data.checkOut,1:e.target.value}})}}/>
            </div>
          </div>
          <div className="time-receipt">
            <div className="time mb-2">
              <p>Time of booking</p>
              <Input value={data.time} onChange={(e)=>{setData({...data,time:e.target.value})}}/>
            </div>
            <div className="receipt">
              <p>Receipt Id:</p>
              <Input value={data.receiptId} onChange={(e)=>{setData({...data,receiptId:e.target.value})}}/>
            </div>
          </div>
          </div>
          <div className="address pt-2 pb-6 border-black border-b-2">
            <p className="font-bold text-center text-2xl">Address</p>
            <p>Address Line 1:</p>
            <Input value={data.address[0]} onChange={(e) => { setData({ ...data, address: Object.values({ ...data.address, 0: e.target.value }) }) }} />
            <div className="h-1"/>
            <p>Address Line 2:</p>
            <Input value={data.address[1]} onChange={(e) => { setData({ ...data, address: Object.values({ ...data.address, 1: e.target.value }) }) }} />
            <div className="h-1"/>
            <p>Address Line 3:</p>
            <Input value={data.address[2]} onChange={(e) => { setData({ ...data, address: Object.values({ ...data.address, 2: e.target.value }) }) }} />
            <div className="h-1"/>
            <p>Address Line 4:</p>
            <Input value={data.address[3]} onChange={(e)=>{setData({...data,address:Object.values({...data.address,3:e.target.value}) })}}/>
          </div>
          <div className="hostedBy pt-2 pb-6 border-black border-b-2">
            <p className="font-bold text-center text-2xl">Host Info</p>
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
          <div className="costing-details pt-2 pb-6 border-black border-b-2">
            <p className="font-bold text-center text-2xl">Cost Details</p>
            <div className="basiccost flex justify-between mb-3">
            <div className="costpernight">
              <p>Cost per night:</p>
              <Input value={data.basicCost.costPerNight} onChange={(e)=>{setData({...data,basicCost:{...data.basicCost,costPerNight:e.target.value}})}}/>
            </div>
            <div className="nights">
              <p>No. of Nights</p>
              <Input value={data.basicCost.nights} onChange={(e)=>{setData({...data,basicCost:{...data.basicCost,nights:e.target.value}})}}/>
            </div>
            </div>
            <div className="additionalcost flex justify-between mb-3">
            <div className="cleaning">
              <p>Cleaning Fees:</p>
                <Input value={data.additionalCost[0].cost} onChange={(e) => { setData({ ...data, additionalCost: Object.values({ ...data.additionalCost, 0: { type: "Cleaning Fees", cost: e.target.value } })})}}/>
            </div>
            <div className="service">
              <p>Service Fees:</p>
                <Input value={data.additionalCost[1].cost} onChange={(e) => { setData({ ...data, additionalCost: Object.values({ ...data.additionalCost, 1: { type: "Service Fees", cost: e.target.value } })})}}/>
            </div>
          </div>
          </div>
          <div className="travelers pt-2 pb-6 border-black border-b-2">
            <p className="text-center font-bold text-2xl">Travelers</p>
            <div className="text-center">
            <button className="bg-[green] mb-2" onClick={()=>{setData({...data,travelers:Object.values({...data.travelers,[data.travelers.length+1]:"Cikgu Mohd Nor Mohamed"})})}}>Add Traveler</button>
            </div>
            <div className="persons">
              {
                data.travelers.map((item,index) => (
                  <div className="flex justify-between items-center">
                    <Input className="w-[220px] sm:w-[250px]" value={item} onChange={(e) => {
                      setData({ ...data, travelers: Object.values({...data.travelers,[index]:e.target.value}) })
                    }} />
                    <button className="h-[35px] px-[8px]" onClick={() => {
                      if (index != 0)
                      {
                        let arr = [...data.travelers];
                        arr.splice(index, 1);
                        setData({ ...data, travelers: arr });
                        }
                      }}>Remove</button>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="payment pt-2 pb-6">
            <p className="font-bold text-center text-2xl">Payment Details:</p>
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
        </div>
      </div>
      <button className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]" onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
}
