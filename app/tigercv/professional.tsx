import React from 'react'
import AddButton from '../../components/ui/AddButton';
import { TigerCVData } from '../../dataModels/TigerCVData';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
interface Props{
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
}
const ProfessionalExperience: React.FC<Props> = ({ data, setData }) => {

    const handleRemoveExperience = (index: number) => {
        let arr = [...data.professionalExperience];
        if (arr.length == 1)
            alert("You need to have minimum one entry here.")
        else
        {
            arr.splice(index, 1);
            setData({ ...data, professionalExperience: arr });
            }
    }
    
    const handleRemoveTask = (expIndex:number,taskIndex: number) => {
        let arr = [...data.professionalExperience];
        if (arr[expIndex].tasks.length == 1)
            alert("You need to have minimum one entry here.")
        else
        {
            arr[expIndex].tasks.splice(taskIndex, 1);
            setData({ ...data, professionalExperience: arr });
            }
    }
  return (
      <div className="professionalExperience flex flex-col gap-y-3 mb-3">
          <p className="text-2xl font-bold text-center">Professional Experience</p>
    <div className="firstline flex justify-between">
        <p>Do you need this section?</p>
        <label><input type="checkbox" checked={data.professionalExperienceNeeded} onChange={(e) => { setData({ ...data, professionalExperienceNeeded:!data.professionalExperienceNeeded }) }}/></label>
          </div>
          <div className="secondline flex justify-center">
              <AddButton
                  description="Add more Experience"
                  cb={() => { setData({ ...data, professionalExperience: [{ ...data.professionalExperience[0] }, ...data.professionalExperience] }) }} />
          </div>
          <div className="thirdpart flex flex-col gap-y-3">
              {
                  data.professionalExperience.map((exp,i) => (
                      <>
                          <div className="flex justify-between">
                          <p className="text-xl font-bold">Experience {i + 1}</p>
                          <DeleteButton cb={()=>{handleRemoveExperience(i)}}/>
                      </div>
                                                    <div className="position">
                              <p>Role:</p>
                              <Input value={exp.position} onChange={(e) => {
                                  let arr = [...data.professionalExperience];
                                  arr[i].position = e.target.value
                                  setData({...data,professionalExperience:arr})
                              }} />
                          </div>
                          <div className="company">
                              <p>Company:</p>
                              <Input value={exp.company} onChange={(e) => {
                                  let arr = [...data.professionalExperience];
                                  arr[i].company = e.target.value
                                  setData({...data,professionalExperience:arr})
                              }} />
                          </div>
                          <div className="period">
                              <p>Period</p>
                              <Input value={exp.position} onChange={(e) => {
                                  let arr = [...data.professionalExperience];
                                  arr[i].position = e.target.value
                                  setData({...data,professionalExperience:arr})
                              }} />
                          </div>
                          <div className="tasks">
                              <div className="firstline flex justify-between items-center mb-3">
                                  <p>Tasks:</p>
                                  <AddButton cb={() => {
                                      let arr =[...data.professionalExperience] ;
                                      let tasks = [arr[i].tasks[0], ...arr[i].tasks];
                                      arr[i].tasks = tasks;
                                      setData({...data,professionalExperience:arr})
                                  }} />
                              </div>
                              <div className="tasks lines flex flex-col gap-y-3">
                                  {
                                      exp.tasks.map((text,j) => (
                                          <div key={j} className="flex justify-between">
                                              <Input
                                                  value={text}
                                                  className="w-[250px] sm:w-[350px]"
                                                  onChange={(e) => {
                                       let arr =[...data.professionalExperience] ;
                                                  arr[i].tasks[j] = e.target.value;
                                      setData({...data,professionalExperience:arr})
                                                  }} />
                                              <DeleteButton cb={()=>{handleRemoveTask(i,j)}}/>
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>
                      </> 
                  ))
              }
          </div>
    </div>
  )
}

export default ProfessionalExperience