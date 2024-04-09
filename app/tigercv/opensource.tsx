import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import AddButton from '../../components/ui/AddButton';
interface Props {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const OpenSource: React.FC<Props> = ({ data, setData }) => {
    
    const handleRemoveOpen = (index: number) => {
            if (data.openSourceContributions.length === 1) {
              // If there's only one openSourceContributions entry, prevent deletion
              alert("At least one open source contribution entry must be present.");
              return;
            }
            
            const updatedOpenSourceContributions = [...data.openSourceContributions];
            updatedOpenSourceContributions.splice(index, 1); // Remove the item at the given index
            setData({ ...data, openSourceContributions: updatedOpenSourceContributions });
    }
  return (
    <div className="personal-info flex flex-col gap-y-3 mb-3">
          <p className="text-2xl font-bold text-center">Open Source</p>
          <div className="firstline flex justify-between">
        <p>Do you need this section?</p>
        <label><input type="checkbox" checked={data.openSourceNeeded} onChange={(e) => { setData({ ...data, openSourceNeeded:!data.openSourceNeeded }) }}/></label>
          </div>
          <div className="secondline flex justify-center">
              <AddButton
                  description="Add More Details"
                  cb={() => { setData({ ...data, openSourceContributions: [data.openSourceContributions[0], ...data.openSourceContributions] }) }} />
          </div>
          {
              data.openSourceContributions.map((text, i)=>(
          <div className="flex justify-between" key={i}>
                      <Input
                          className="w-[250px] sm:w-[350px]"
                          value={text}
                          onChange={(e) => {
                          let arr = [...data.openSourceContributions];
                          arr[i] = e.target.value;
                          setData({...data,openSourceContributions:arr})
                      }} />
                      <DeleteButton cb={()=>{handleRemoveOpen(i)}}/>
          </div>
              ))
          }
          </div>
  )
}

export default OpenSource