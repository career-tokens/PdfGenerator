import React, { useState } from 'react'
import { animateScroll } from 'react-scroll';

const MoveToCTAButton = () => {
    const [on, setOn] = useState<Boolean>(true);
    const handleClick = () => {
        setOn(false);
        const options = {
            duration: 2000,
            smooth: true,
          };
          
          animateScroll.scrollToBottom(options);
    }
  return (
    <div className="w-full flex  justify-center bg-red-transparent fixed bottom-[10vh] z-[100000]">
          <button onClick={handleClick} className={` ${(on)?"opacity-1":"opacity-0"}
          font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1
           md:mt-24 mt-8 z-[100000] md:text-base text-black text-xs  w-fit mx-auto transition-all`}>
          Components
        </button>
      </div>
  )
}

export default MoveToCTAButton 