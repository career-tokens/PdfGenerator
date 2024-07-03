import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead'
import { Disclosure } from '@headlessui/react'
import AccordionBody from '../../components/ui/AccordionBody'
import { Input } from '../../components/ui/input'
import { toast } from 'sonner'
import AddButton from '../../components/ui/AddButton'
import DeleteButton from '../../components/ui/DeleteButton'
import { PaymentData } from '../../dataModels/PaymentData'

interface Props{
    data: PaymentData;
    setData: React.Dispatch<React.SetStateAction<PaymentData>>;
}

const Items:React.FC<Props> = ({ data, setData }) => {
    
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
        if(data.items.length===4)
        toast.warning("Exceeding four entries here is not advised.The content might not fit in one page and would require 2 pages.",
        {
          className: 'text-base  w-[400px] flex justify-center',
          duration: 5000,
        })  
          const updatedItems = [...data.items];
          const previousElement = updatedItems[updatedItems.length - 1];
          updatedItems.push({ ...previousElement });//even by chance dont directly put previousElement, they
          //will share common reference
          setData({ ...data, items: updatedItems });
      }
    
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="text-xl pb-0">Items Bought:</p></AccordionHead>
                  <AccordionBody>
                  <div className="items text-lg text-slate-400">
          <div className="mb-[10px] flex justify-center">
            <AddButton cb={handleAddItem}/>
          </div>
                  {data.items.map((item, i) => (
                    <div className="item mb-[10px]" key={i}>
                      <div className="flex justify-between mb-[10px]">
                        <span>Item {i + 1}</span>
                        <DeleteButton cb={()=>{handleRemoveItem(i)}}/>
                      </div>
                              <div className="flex justify-between">
                               <Input type="text" value={item.name} onChange={(e) => { handleChangeItem(i, "name", e.target.value) }} />
                               <Input type="text" value={item.price} onChange={(e)=>{handleChangeItem(i,"price",e.target.value)}} />
                              </div>
                    </div>
                  ))}
              </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Items