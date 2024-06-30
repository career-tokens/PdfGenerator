import React from 'react'
interface Props{
    cb:()=>void
}
const DeleteButton:React.FC<Props> = ({cb}) => {
  return (
      <>
          <button
              onClick={cb}
  className="inline-flex items-center px-2 h-[35px] bg-[#4a6cf7] transition ease-in-out delay-75 hover:bg-[#4a6cf7]/80 text-white text-sm font-medium rounded-full hover:-translate-y-1 hover:scale-110"
>
  <svg
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      stroke-width="2"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</button>

      </>
  )
}

export default DeleteButton