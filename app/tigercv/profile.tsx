import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { toast } from 'sonner';
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
      <div className="profile flex flex-col gap-y-3 mb-3">
           <p className="text-2xl font-bold text-center">Profile:</p>
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
          <div className="flex justify-between items-center" key={i}>
            <Input
              className="w-[250px] sm:w-[350px]"
              value={text}
              onChange={(e) => {
              let arr = [...data.profile];
              arr[i] = e.target.value;
              setData({...data,profile:arr})
            }}/>
            <DeleteButton cb={()=>{handleRemove(i)}}/>
          </div>
        ))
      }
  </div>
  )
}

export default Profile