import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { toast } from 'sonner';
import { Disclosure } from '@headlessui/react';
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
interface ProfileProps {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const Profile: React.FC<ProfileProps> = ({ data, setData }) => {
    
    const handleRemove = (index:number) => {
        if (data.profile.length === 1) {
            // If there's only one profile entry, prevent deletion
            toast.error("You need to have minimum one entry here", {
              className: 'text-base  w-[400px] flex justify-center',
              duration: 5000,
            });
            return;
          }
          
          const updatedProfile = [...data.profile];
          updatedProfile.splice(index, 1); // Remove the item at the given index
          setData({ ...data, profile: updatedProfile });
    }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <AccordionHead open={open}><p className="pb-0">Profile</p></AccordionHead>
          <AccordionBody>
          <div className="profile flex flex-col gap-y-3 mb-3">
            
            <div className="firstline flex justify-center">
              <AddButton description="Add More Details" cb={() => {
                if (data.profile.length == 3)
                  toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                    {
                      className: 'text-base  w-[400px] flex justify-center',
                      duration: 5000,
                    })
                setData({ ...data, profile: [data.profile[0], ...data.profile] })
              }} />
            </div>
            {
              data.profile.map((text, i) => (
                <div className="flex justify-between gap-x-4 items-center" key={i}>
                  <Input
                    className="flex-1"
                    value={text}
                    onChange={(e) => {
                      let arr = [...data.profile];
                      arr[i] = e.target.value;
                      setData({ ...data, profile: arr })
                    }} />
                  <DeleteButton cb={() => { handleRemove(i) }} />
                </div>
              ))
            }
            </div>
            </AccordionBody>
        </>
      )}
      </Disclosure>
  )
}

export default Profile