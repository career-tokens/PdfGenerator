// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import * as React from "react";
import { cn } from "../../lib/utils/cn";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });//dynamically import for preventing deployment error

export interface InputProps {
  value: any;
  className?: string;
  type?: string;
  onChange:(e: any) => void
  editor?: boolean; // Optional boolean property `editor`
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, editor=false, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
      //   style={{
      //     background: useMotionTemplate`
      //   radial-gradient(
      //     ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
      //     var(--blue-500),
      //     transparent 80%
      //   )
      // `,
      //   }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input flex-1"
      >
        {!editor&&<input
          type={type}
          className={cn(
            `flex flex-1 h-10 w-full border-none bg-[#eff2f9] dark:bg-transparent text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-600)]
            transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />}
        <style>
          {
            `
              .dark .ql-picker-label {
  color: #444444;
  font-weight:600;
}
  .light .quill{
  color:black;}
            `
          }
        </style>
        {editor && <ReactQuill theme="snow" {...props}/>}
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
