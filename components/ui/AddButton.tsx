import React from 'react'
interface Props{
  cb: () => void,
  description?:string
}
const AddButton:React.FC<Props> = ({cb,description}) => {
  return (
      <button
      onClick={cb}
      style={{
        width: description==="Add more Experience" ? 210 :description==="Add More Details"? 175:description==="Add More Skills"?165:description==="Add More Projects"?185: 81
      }}
  className="text-white rounded-lg relative  h-8 cursor-pointer flex items-center border border-[#4a6cf7] bg-[#4a6cf7] group hover:bg-[#4a6cf7] active:bg-[#4a6cf7] active:border-[#4a6cf7] pl-2"
>
  <span
    className="text-white font-semibold transform group-hover:translate-x-5 transition-all duration-300"
      >{description ? description : "Add"}</span>
  <span
    className="absolute right-0 h-full w-10 rounded-lg bg-[#4a6cf7] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
  >
    <svg
      className="svg w-8 text-white"
      fill="none"
      height="24"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
    </svg>
  </span>
</button>

  )
}

export default AddButton