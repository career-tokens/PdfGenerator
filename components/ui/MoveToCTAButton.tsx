import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll';

const MoveToCTAButton = () => {
  const [on, setOn] = useState<Boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 3.5) {
        setOn(false);
      }
      else
        setOn(true)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleClick = () => {
        setOn(false);
        const options = {
            duration: 2000,
            smooth: true,
          };
          
          animateScroll.scrollToBottom(options);
    }
  return (<>
    {on&&<div className="w-full flex  justify-center bg-red-transparent fixed bottom-[10vh] z-[300]">
          <button onClick={handleClick} className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1
           md:mt-24 mt-8 z-[100000] md:text-base text-black text-xs  w-fit mx-auto transition-all">
          Click here to view the components
        </button>
    </div>}
    </>
  )
}

export default MoveToCTAButton 