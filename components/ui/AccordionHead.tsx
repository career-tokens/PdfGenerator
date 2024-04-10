import React, { ReactNode } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

interface Props{
    children: ReactNode;
    open: boolean;
    subpart?: boolean;
}
const AccordionHead:React.FC<Props> = ({children,open,subpart}) => {
  return (
    <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-[#1f2937] ${subpart?"bg-purple-500":""} px-4 py-2 text-left text-sm font-medium text-white hover:bg-opacity-[0.8] ease-in duration-[300] focus:outline-none focus-visible:ring`}>
                {children}
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform ease-in duration-300' : ''
                  } h-5 w-5 text-white flex duration-300 ease-in-out`}
                />
              </Disclosure.Button>
  )
}

export default AccordionHead