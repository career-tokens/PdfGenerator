import React from 'react'
import { TigerCVData } from '../../dataModels/TigerCVData';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import AddButton from '../../components/ui/AddButton';
import { toast } from 'sonner';
import { Disclosure } from '@headlessui/react';
import AccordionHead from '../../components/ui/AccordionHead';
import AccordionBody from '../../components/ui/AccordionBody';
import _ from 'lodash';

interface Props {
    data: TigerCVData;
    setData: React.Dispatch<React.SetStateAction<TigerCVData>>;
  }
const OpenSource: React.FC<Props> = ({ data, setData }) => {
    
    const handleRemoveOpen = (index: number) => {
            if (data.openSourceContributions.length === 1) {
              // If there's only one openSourceContributions entry, prevent deletion
              toast.error("You need to have minimum one entry here", {
                className: 'text-base  w-[400px] flex justify-center',
                duration: 5000,
              });
              return;
            }
            
            const updatedOpenSourceContributions = [...data.openSourceContributions];
            updatedOpenSourceContributions.splice(index, 1); // Remove the item at the given index
            setData({ ...data, openSourceContributions: updatedOpenSourceContributions });
    }
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <AccordionHead open={open}><p className="pb-0">Open Source</p></AccordionHead>
          <AccordionBody>
            <div className="personal-info flex flex-col gap-y-3 mb-3 text-slate-400">
              <div className="firstline flex justify-between text-lg">
                <p>Do you need this section?</p>
                <label><input type="checkbox" checked={data.openSourceNeeded} onChange={(e) => { setData({ ...data, openSourceNeeded: !data.openSourceNeeded }) }} /></label>
              </div>
              <div className="secondline flex justify-center">
                <AddButton
                  description="Add More Details"
                  cb={() => {
                    if (data.openSourceContributions.length == 3)
                      toast.warning("Exceeding three entries here is not advised.The content might not fit in one page and would require 2 pages.",
                        {
                          className: 'text-base  w-[400px] flex justify-center',
                          duration: 5000,
                        })
                    setData({ ...data, openSourceContributions: [data.openSourceContributions[0], ...data.openSourceContributions] })
                  }} />
              </div>
              {
                data.openSourceContributions.map((text, i) => (
                  <div className="flex justify-between gap-x-4" key={i}>
                    <Input
                      className="flex-1"
                      editor={true}
                      value={text}
                      onChange={(e) => {
                        let arr = [...data.openSourceContributions];
                        arr[i] = e;
                        const newData = { ...data, openSourceContributions: arr };
                        if (!_.isEqual(data, newData)) 
                          setData(newData);
                      }} />
                    <DeleteButton cb={() => { handleRemoveOpen(i) }} />
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

export default OpenSource