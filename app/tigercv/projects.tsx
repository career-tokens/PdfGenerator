import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import DeleteButton from '../../components/ui/DeleteButton';
import { Input } from '../../components/ui/input';
import AddButton from '../../components/ui/AddButton';
interface Props {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const Projects: React.FC<Props> = ({ data, setData }) => {
    
    const handleRemoveProject = (index: number) => {
        if (data.projects.length === 1) {
            // If there's only one projects entry, prevent deletion
            alert("At least one open source contribution entry must be present.");
            return;
          }
        let arr = [...data.projects];
        arr.splice(index, 1);
        setData({...data,projects:arr})
    }

    const handleRemoveFeature = (projectIndex:number,featureIndex:number) => {
        if (data.projects[projectIndex].features.length === 1) {
            // If there's only one projects entry, prevent deletion
            alert("At least one project feature entry must be present.");
            return;
          }
        let arr = [...data.projects];
        arr[projectIndex].features.splice(featureIndex, 1);
        setData({...data,projects:arr})
    }
  return (
    <div className="personal-info flex flex-col gap-y-7 mb-3">
          <p className="text-2xl font-bold text-center">Projects</p>
          {
              data.projects.map((project, i) => (
                  <div className="flex flex-col gap-y-3" key={i}>
                      <div className="flex justify-between">
                          <p className="text-xl font-bold">Project {i + 1}</p>
                          <DeleteButton cb={()=>{handleRemoveProject(i)}}/>
                      </div>
                      
                      <div className="name">
                          <p>Project Name:</p>
                          <Input
                              value={project.title}
                              onChange={(e) => {
                              let arr = [...data.projects];
                              arr[i].title = e.target.value;
                              setData({...data,projects:arr})
                          }} />
                      </div>
                      <div className="link">
                          <p>Project Link:</p>
                          <Input
                              value={project.link}
                              onChange={(e) => {
                              let arr = [...data.projects];
                              arr[i].link = e.target.value;
                              setData({...data,projects:arr})
                          }} />
                      </div>
                      <div className="description">
                          <p>Project Description:</p>
                          <Input
                              value={project.description}
                              onChange={(e) => {
                              let arr = [...data.projects];
                              arr[i].description = e.target.value;
                              setData({...data,projects:arr})
                          }} />
                      </div>
                      <div className="features flex flex-col gap-y-3">
                          <div className="secondline flex justify-between">
                             <p>Features</p> 
              <AddButton
                  description="Add"
                                  cb={() => {
                                      let arr = [...data.projects];
                                      arr[i].features = [arr[i].features[0], ...arr[i].features]
                                      setData({...data,projects:arr})
                  }} />
          </div>
                          {
                              project.features.map((feature, j) => (
                                  <div className="feature flex justify-between items-center" key={j}>
                                      <Input
                                          className="w-[250px] sm:w-[350px]"
                                          value={feature}
                                          onChange={(e) => {
                                          let arr = [...data.projects];
                                          arr[i].features[j] = e.target.value;
                                          setData({...data,projects:arr})
                                      }} />
                                      <DeleteButton cb={()=>{handleRemoveFeature(i,j)}}/>
                                  </div>
                              ))
                          }
                      </div>
                  </div>
              ))
          }
          </div>
  )
}

export default Projects