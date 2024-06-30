import React, { ReactNode } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

interface AccordionBodyProps {
  children: ReactNode;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({ children }) => {
  return (
<Transition
  enter="transition duration-300 ease-in"
  enterFrom="opacity-0 transform scale-95"
  enterTo="opacity-100 transform scale-100"
  leave="transition duration-200 ease-out"
  leaveFrom="opacity-100 transform scale-100"
  leaveTo="opacity-0 transform scale-95"
>
  <Disclosure.Panel className="px-4 pb-2 -mt-5 pt-4 text-sm text-gray-500 rounded-b-lg sm:text-base dark:border-slate-800 border-2 border-t-0">
    {children}
  </Disclosure.Panel>
</Transition>

  );
};

export default AccordionBody;
