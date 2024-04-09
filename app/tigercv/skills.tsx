import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import DeleteButton from '../../components/ui/DeleteButton';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
interface SkillsProps {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const Skills: React.FC<SkillsProps> = ({ data, setData }) => {
    const handleRemoveSkillLine = (index: number) => {
        if (data.skills.length === 1) {
            // If there's only one skills entry, prevent deletion
            alert("At least one skills entry must be present.");
            return;
          }
          
          const updatedSkills = [...data.skills];
          updatedSkills.splice(index, 1); // Remove the item at the given index
          setData({ ...data, skills: updatedSkills });
    }
  return (
      <div className="skills flex flex-col gap-y-3 mb-3">
           <p className="text-2xl font-bold text-center">Skills</p>
    <div className="firstline  flex justify-center">
        <AddButton description="Add More Skills" cb={() => { setData({ ...data, skills: [data.skills[0], ...data.skills] }) }} />
        </div>
        {
          data.skills.map((text, i) => (
            <div className="flex justify-between items-center" key={i}>
              <Input
                className="w-[250px] sm:w-[350px]"
                value={text}
                onChange={(e) => {
                let arr = [...data.skills];
                arr[i] = e.target.value;
                setData({...data,skills:arr})
              }}/>
              <DeleteButton cb={()=>{handleRemoveSkillLine(i)}}/>
            </div>
          ))
        }
    </div>
  )
}

export default Skills