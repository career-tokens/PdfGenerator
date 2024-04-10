import React, { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';

interface AccordionBodyProps {
  children: ReactNode;
}

const AccordionBody: React.FC<AccordionBodyProps> = ({ children }) => {
  return (
    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 sm:text-base">
      {children}
    </Disclosure.Panel>
  );
};

export default AccordionBody;
