/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { QRCodeSVG } from "qrcode.react";
import { CSS } from '@onedoc/react-print';
const RealEstate = ({ data }) => {

  return (
    <React.Fragment>
    <CSS>
      {
        String.raw`@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        @page{
          size:8in 11in;
          margin:0;
        }`
      }
    </CSS>
    <div className="main flex bg-white pr-2">
      <div className="col1 flex flex-col w-[65%] py-6 px-4">
        <div className="part1">
          <div className="w-[55px] h-1 mb-2 bg-[#8bc34a]" />
          <p className="text-3xl mb-4 text-gray-700 font-semibold">FOR SALE BY OWNER</p>
          </div>
          <div className="image relative mb-6">
            <div className="absolute bottom-0 bg-[#8bc34a] py-3 px-6 rounded text-white text-4xl">
              {data.cost}
            </div>
            <img
              className="w-full h-[350px] rounded"
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="paras text-gray-500 mb-6">
            <p className="mb-4">{data.para1}</p>
            <p>{data.para2}</p>
          </div>
          <div className="some_title mb-4">
            <div className="w-[60px] mb-2 h-1 bg-[#8bc34a]" />
            <p className="text-2xl mb-2 font-semibold text-gray-600">SOME TITLE GOES HERE</p>
            <div className="flex flex-wrap mb-2">
              {data.someTitle.map((feature, i) => (
                <div className="flex w-[50%] text-gray-500 items-center mb-2" key={i}>
                  <div className="w-2 h-2 rounded-full bg-[#8bc34a] mt-[-2px] mr-2"/>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="qr p-4 flex text-black bg-gray-200 items-center">
          <QRCodeSVG
                    className="h-32 rounded-sm overflow-hidden"
                    value="https://www.paynow.com/"
                    size={110}
                    bgColor="white"
                    fgColor="black"
            />
            <div className="ml-3 text-gray-500">
              <p className="text-lg  mt-2 font-semibold text-gray-600">CALL US NOW</p>
              <p><span className="font-semibold text-gray-600">Phone:</span>{data.callUsNow.phone}</p>
              <p><span className="font-semibold text-gray-600">Email:</span>{data.callUsNow.email}</p>
              <p><span className="font-semibold text-gray-600">Address:</span>{ data.callUsNow.address}</p>
            </div>
          </div>
      </div>
      <div className="col2 w-[35%]">
        <div className="part1  w-full px-5 py-4 text-white bg-[#8bc34a] mb-[10px]">
          <p>{data.addressLine1}</p>
          <p>{data.addressLine2}</p>
        </div>
        <div className="images mb-7">
          <img
            className="w-full rounded h-[165px] mb-[10px]"
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <img
            className="w-full rounded h-[165px]"
            src="https://images.unsplash.com/photo-1580504789180-064267820493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhd2luZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className="features rounded-md p-5 bg-[#8bc34a] text-white mb-6">
          {
            data.features.map((feature, i) => (
              <div className="flex items-center" key={i}>
              <div className="w-2 h-2 rounded-full bg-white mt-[-2px] mr-4"/>
              <p>{feature}</p>
            </div>
            ))
          }
        </div>
        <div className="person flex flex-col items-center text-gray-500 mb-6">
          <img
            className="h-[135px] w-[65%] rounded mb-4"
            src="https://media.istockphoto.com/id/1318858332/photo/headshot-portrait-of-smiling-female-employee-posing-in-office.webp?b=1&s=170667a&w=0&k=20&c=xaXWxTDSzfZp6Xa16RFBfFknXBRQkfkZD8BKr07-Aac=" alt="" />
          <p className="text-lg mb-2">{data.ownerLine}</p>
          <div className="w-[40px] h-1 bg-[#8bc34a] mb-2" />
          <p>{data.phone}</p>
          <p>{data.email}</p>
        </div>
        <div className="h-[180px] w-full flex flex-col justify-center items-center">
          <p className="text-lg font-semibold text-gray-600">Real Estate</p>
          <p className="text-md text-gray-500 font-medium">Your logo here</p>
        </div>
      </div>
      </div>
     </React.Fragment>
  )
}

export default RealEstate