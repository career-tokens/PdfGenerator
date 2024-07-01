import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import AccordionBody from '../../components/ui/AccordionBody';
import AddButton from '../../components/ui/AddButton';
import { Input } from '../../components/ui/input';
import DeleteButton from '../../components/ui/DeleteButton';
import { NewCVData } from '../../dataModels/NewCVData';

interface Props{
    data: NewCVData;
    setData: React.Dispatch<React.SetStateAction<NewCVData>>;
    handleAdd: (string) => void;
    handleRemove:(string,number)=>void
}

const Languages:React.FC<Props> = ({data,setData,handleAdd,handleRemove}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="pb-0">Languages:</p></AccordionHead>
                  <AccordionBody>
                  <div className="languages flex flex-col gap-y-4">
            <div className="add flex justify-center">
              <AddButton
                cb={() => {
                  handleAdd("languages");
                }}
              />
            </div>
            {data.languages.map((language, i) => (
              <div className={`language ${i + 1} flex flex-col`} key={i}>
                <div className="flex justify-between items-center mb-[10px]">
                  <h2>Language {i + 1}</h2>

                  <DeleteButton
                    cb={() => {
                      handleRemove("languages", i);
                    }}
                  />
                </div>

                <div className="line1 flex justify-between">
                  <Input
                    type="text"
                    value={language.name}
                    onChange={(e) => {
                      let updatedLanguages = [...data.languages];

                      updatedLanguages[i].name = e.target.value;

                      setData({ ...data, languages: updatedLanguages });
                    }}
                  />

                  <Input
                    type="text"
                    value={language.level}
                    onChange={(e) => {
                      let updatedLanguages = [...data.languages];

                      updatedLanguages[i].level = e.target.value;

                      setData({ ...data, languages: updatedLanguages });
                    }}
                  />
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

export default Languages