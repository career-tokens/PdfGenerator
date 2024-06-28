"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import RealEstate from '../../components/templates/RealEstate';


const  RealEstateGenerator= () => {
    const initialData = {
      ownerLine: "Jane Smith,Realtor",
      phone: "705-444-444",
      email: "Carriagent@example.com",
      features: ["7 Bathrooms", "4 Bathrooms", "3085 sqft"],
      someTitle: ["Features neque", "Features neque", "Features hac habitat", "Features hac habitant", "Features est Facus", "Features est lacus"],
      cost: "$1,500,000",
      para1: "From the outside this house looks magnificent. It has been built with brown bricks and has mahogany wooden decorations. Tall,half rounded windows add to the overall style of the house and have been added to the house in a mostly asymmetric way.",
      para2: "A non facilisis inceptos nascetur condimentum ridiculus moletie nunnc feugiat? Marcenas torquent phascellus cubilia id felis. Augue varius dictum iaculis laculis vulputate.",
      addressLine1: "125 Any Street",
      addressLine2: "Santa Rosa CA 95922",
      callUsNow: {
        phone: "022 4335 365435",
        email: "estatik-pdf@example.com",
        address:"Majana Street 22 a. Los Angeles 40559"
      }
    }

  const [data, setData] = useState(initialData);

  const router = useRouter();
  

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "realestate");
    router.push("/viewPDF");
}
  return (
    <div className="main flex flex-col justify-center items-center w-screen min-h-screen lg:flex-row lg:items-start dark:bg-white bg-black  dark:bg-grid-small-black/[0.2] bg-grid-white/[0.2]">
    <style jsx global>
      {`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap");
        button {
          background-color: red;
          color: white;
          border-radius: 4px;
          padding: 5px;
          padding-top: 3px;
          padding-bottom: 3px;
        }

        input {
          background-color: black;
          color: white;
        }
        p {
          padding-bottom: 4px;
        }
      `}
    </style>
    <div className="preview w-[700px] scale-50 lg:w-[50%] mt-[-250px] mb-[-250px] lg:scale-100 lg:mt-[0px] lg:mb-[0px]">
     <RealEstate data={data}/>
    </div>
    <div className="change-things font-[Merriweather] w-full lg:w-[50%] p-[20px]  relative flex justify-center items-center">
        <div className="w-[550px]  bg-[#0f172a] shadow-input  dark:bg-black p-4 rounded font-[Roboto] min-h-screen gap-y-4 flex flex-col">
                  
      </div>
    </div>
    <button
      className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]"
      onClick={handleGeneratePdf}
    >
      Generate PDF
      </button>
  </div>
  )
}

export default RealEstateGenerator;