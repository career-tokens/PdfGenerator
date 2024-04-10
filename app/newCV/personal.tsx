import React from 'react'
import AccordionHead from '../../components/ui/AccordionHead';
import { Disclosure } from '@headlessui/react';
import AccordionBody from '../../components/ui/AccordionBody';
import { Input } from '../../components/ui/input';
import { NewCVData } from '../../dataModels/NewCVData';

interface Props{
    data: NewCVData;
    setData: React.Dispatch<React.SetStateAction<NewCVData>>;
}

const Personal:React.FC<Props> = ({data,setData}) => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
            <AccordionHead open={open}>    <p className="text-xl pb-0 font-semibold">Personal Info:</p></AccordionHead>
                  <AccordionBody>
                  <div className="personalinfo flex flex-col gap-y-4 text-lg text-slate-400">
            <div className="full_name">
              <p>Full Name</p>
              <div className="flex justify-between">
                <Input
                  value={data.personalInfo.firstName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      personalInfo: {
                        ...data.personalInfo,
                        firstName: e.target.value,
                      },
                    });
                  }}
                />
                <Input
                  value={data.personalInfo.lastName}
                  onChange={(e) => {
                    setData({
                      ...data,
                      personalInfo: {
                        ...data.personalInfo,
                        lastName: e.target.value,
                      },
                    });
                  }}
                />
              </div>
            </div>
            <div className="title">
              <p>Title</p>
              <Input
                value={data.personalInfo.title}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      title: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="about">
              <p>About</p>
              <Input
                value={data.personalInfo.about}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      about: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="email">
              <p>Email</p>
              <Input
                value={data.personalInfo.contact.email}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      contact: {
                        ...data.personalInfo.contact,
                        email: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="phone">
              <p>Phone</p>
              <Input
                value={data.personalInfo.contact.phone}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      contact: {
                        ...data.personalInfo.contact,
                        phone: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="location">
              <p>Location</p>
              <Input
                value={data.personalInfo.contact.location}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      contact: {
                        ...data.personalInfo.contact,
                        location: e.target.value,
                      },
                    },
                  });
                }}
              />
            </div>
            <div className="image">
              <p>Image Public URL</p>
              <Input
                value={data.personalInfo.image}
                onChange={(e) => {
                  setData({
                    ...data,
                    personalInfo: {
                      ...data.personalInfo,
                      image: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
            </AccordionBody>
        </>
    )}
    </Disclosure>
  )
}

export default Personal