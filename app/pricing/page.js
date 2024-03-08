"use client"
import React from 'react'
import {Boxes} from "../../components/ui/background-boxes"
const Pricing = () => {
  return (
      <div className="font-[Poppins] h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <style jsx global> 
              {`
                   @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
              `}
          </style> 
      <div className="absolute inset-0 w-full h-full bg-slate-900  z-[1] [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
          <Boxes />
          <div className="heading text-center text-4xl z-20 mb-[20px]">
              <p className="text-white">Need Custom PDFs?</p>
              <p className="text-[#2ba680]">We&apos;ve got you covered</p>
              <p className="flex gap-x-[15px]">
                  <span className="text-[#FFD700]">Simple Pricing</span>
                  <span className="text-[#f8f8ff]">No Hidden Fees</span>
              </p>
          </div>
          <div className="payment-info flex flex-wrap w-[80vw] justify-center gap-[15px] z-[2] mb-[20px]">
              <div className="free p-4 w-[300px] bg-white flex flex-col gap-y-[15px] rounded-lg">
                  <p className="text-[#2ba680] text-xl font-semibold">Existing Templates</p>
                  <p className="text-3xl font-bold">Free</p>
                  <p className="text-[#808080 ] text-lg">All existing templates are free to use.Unlimited changes.Unlimited Downloads.</p>
              </div>
              <div className="custom p-4 w-[300px] bg-white flex flex-col gap-y-[15px] rounded-lg">
                  <p className="text-[#2ba680] text-xl font-semibold">Custom Templates</p>
                  <p className="text-3xl font-bold">20$/Page</p>
                  <p className="text-[#808080 ] text-lg">Custom templates developed to suit your business needs and requirements.</p>
              </div>
          </div>
          <div className="rounded-lg p-3 z-[2] bg-[#2ba680] text-white text-center">
              Mail here for custom templates:<br/>mainakcollege8967@gmail.com
          </div>
    </div>

  )
}

export default Pricing