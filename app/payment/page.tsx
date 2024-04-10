/* eslint-disable react/jsx-key */
"use client"

import { Payment } from "../../components/Payment";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import {PaymentData} from "../../dataModels/PaymentData";
import { Toaster, toast } from "sonner";

export default function PaymentPdfEditor() {
    const initialData:PaymentData= {
        company: "VIRINK",
        name: "Kira Kosmacheva",
        image:"data:image/jpeg;base64,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",
        receipt_id: "2204-1411",
        invoice_id: "7E2BA474-0012",
        starting_date: "June 1,2023",
        ending_date:"June 1,2024",
        bank: "8454",
        items: [{
            name: "Virink Pro",
            price: 8000
        },
        {
            name: "Virink Lite",
            price: 4000
        }]
    };
  
  const [data, setData] = useState<PaymentData>(initialData);

  const router = useRouter();

  const handleRemoveItem = (index) => {    
    if (data.items.length === 1) {
      // If there's only one item entry, prevent deletion
      toast.error("You need to have minimum one entry here", {
        className: 'text-base  w-[400px] flex justify-center',
        duration: 5000,
      });
      return;
    }
      const updatedItems = [...data.items];
      updatedItems.splice(index, 1); // Remove the item at the given index
      setData({ ...data, items: updatedItems });
  };
  const handleChangeItem = (index, field, value) => {
    const updatedItems = [...data.items];
    updatedItems[index][field] = value;
    setData({ ...data, items: updatedItems });
  };

  const handleAddItem = () => {     
      const updatedItems = [...data.items];
      const previousElement = updatedItems[updatedItems.length - 1];
      updatedItems.push({ ...previousElement });//even by chance dont directly put previousElement, they
      //will share common reference
      setData({ ...data, items: updatedItems });
  }

  const handleGeneratePdf = () => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("template", "payment");
    router.push("/viewPDF");
}


  return (
    <div className="main w-screen min-h-screen lg:flex">
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Literata:opsz@7..72&family=Lora&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat&family=Mulish&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto&family=Varela+Round&display=swap');
        button{
          background-color:red;
          color:white;
          border-radius:4px;
          padding:5px;
        }

        input{
          background-color:black;
          color:white;
        }
        `}
      </style>
      <div className="preview scale-90 lg:w-[50%] lg:scale-100">
        <Payment data={data} />
      </div>
      <div className="change-things  lg:w-[50%] p-[20px] dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center items-center">
        
        <div className="w-[450px] shadow-input bg-white dark:bg-black p-4 rounded font-[Roboto]">
        <div className="name mb-[10px]">
                  <span className="mb-[5px]">Your Name</span>
                  <Input type="text" value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
              </div>
              <div className="company mb-[10px]">
                  <span className="mb-[5px]">Company Name</span>
                  <Input type="text" value={data.company} onChange={(e)=>{setData({...data,company:e.target.value})}}/>
              </div>
              <div className="date mb-[10px] flex">
                  <div className="starting-date w-[45%] mr-[10%]">
                      <span className="mb-[5px]">Starting Date</span>
                      <Input type="text" className="w-full" value={data.starting_date} onChange={(e) => { setData({ ...data, starting_date: e.target.value }) }} />
                  </div>
                  <div className="ending-date w-[45%]">
                      <span className="mb-[5px]">Ending Date</span>
                      <Input type="text" className="w-full" value={data.ending_date} onChange={(e) => { setData({ ...data, ending_date: e.target.value }) }} />
                  </div>
              </div>
              <div className="invoice-receipt mb-[10px] flex">
                  <div className="invoice w-[45%] mr-[10%]">
                      <span className="mb-[5px]">Invoice Id</span>
                      <Input type="text" className="w-full" value={data.invoice_id} onChange={(e) => { setData({ ...data, invoice_id: e.target.value }) }} />
                  </div>
                  <div className="receipt w-[45%]">
                      <span className="mb-[5px]">Receipt Id</span>
                      <Input type="text" className="w-full" value={data.receipt_id} onChange={(e) => { setData({ ...data, receipt_id: e.target.value }) }} />
                  </div>
              </div>
              <div className="card-image mb-[10px]">
                  <span className="mb-[5px]">Card Image Public URL</span>
                  <Input type="text" value={data.image} onChange={(e)=>{setData({...data,image:e.target.value})}}/>
              </div>
              <div className="bank mb-[10px]">
                  <span className="mb-[5px]">Last 4 digits of Bank Account</span>
                  <Input type="text" value={data.bank} onChange={(e)=>{setData({...data,bank:e.target.value})}}/>
              </div>
        <div className="items mb-[10px]">
          <div className="mb-[10px] flex justify-between">
            <span className="font-bold">Items bought</span>
            <button className="bg-[green]" onClick={handleAddItem}>Add Item</button>
          </div>
                  {data.items.map((item, i) => (
                    <div className="item mb-[10px]">
                      <div className="flex justify-between mb-[10px]">
                        <span>Item {i + 1}</span>
                        <button onClick={()=>{handleRemoveItem(i)}}>Remove</button>
                      </div>
                              <div className="flex justify-between">
                               <Input type="text" value={item.name} onChange={(e) => { handleChangeItem(i, "name", e.target.value) }} />
                               <Input type="text" value={item.price} onChange={(e)=>{handleChangeItem(i,"price",e.target.value)}} />
                              </div>
                    </div>
                  ))}
              </div>
        </div>
      </div>
      <button className="fixed right-[5px] top-[5px] p-[5px] rounded bg-[green]" onClick={handleGeneratePdf}>Generate PDF</button>
      <Toaster richColors position="top-center" closeButton/>
    </div>
  );
}
