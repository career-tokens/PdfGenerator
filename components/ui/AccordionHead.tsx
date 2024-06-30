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
    <>
      <style>
{`@import url('https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');`}
</style>
    <Disclosure.Button className={`font-[Ubuntu] flex w-full justify-between items-center rounded-lg bg-transparent dark:border-slate-800 border-2 ${open&&"border-b-0 rounded-b-none"} ${subpart?"bg-purple-500":""} px-4 py-2 text-left text-lg font-medium dark:font-medium text-gray-600 dark:text-gray-300 hover:bg-opacity-[0.8] ease-in duration-[300] focus:outline-none focus-visible:ring`}>
                {children}
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform ease-in duration-300' : ''
                  } h-5 w-5 text-black dark:text-white flex duration-300 ease-in-out`}
                />
      </Disclosure.Button>
      </>
  )
}

export default AccordionHead