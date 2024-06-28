/* eslint-disable react/jsx-key */
"use client"

import { Airbnb } from "../../components/templates/Airbnb";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { AirbnbData } from "../../dataModels/AirbnbData";
import Booking from "./booking";
import Address from "./address";
import HostedBy from "./hostedBy";
import CostingDetails from "./costingDetails";
import Travelers from "./travelers";
import Payment from "./payment";

export default function AirbnbPDFGenerator() {
  const initialData:AirbnbData={
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
  const [data, setData] = useState<AirbnbData>(initialData);

  const router = useRouter();

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "airbnb");
    router.push("/viewPDF");
  }
  
  return (
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start  dark:bg-white bg-black  dark:bg-grid-small-black/[0.2] bg-grid-white/[0.2]">
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
      <div className="change-things w-full lg:w-[50%] p-[20px]  relative flex justify-center items-center">
        <div className="w-[550px]  bg-[#0f172a] shadow-input  dark:bg-black p-4 rounded font-[Roboto] gap-y-5 flex flex-col text-slate-400">
          <Booking data={data} setData={setData}/>
          <Address data={data} setData={setData} />
          <HostedBy data={data} setData={setData}/>
<CostingDetails data={data} setData={setData}/>
<Travelers data={data} setData={setData}/>
<Payment data={data} setData={setData}/>
        </div>
      </div>
      <button className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]" onClick={handleGeneratePdf}>Generate PDF</button>
    </div>
  );
}
