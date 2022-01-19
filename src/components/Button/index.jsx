import React from "react";

const Button = ({ children, ...props }) => {
   return (
      <button
         className={`rounded-full bg-purple text-grey_light text-18 min-h-[32px] px-4 text-center 
         hover:bg-violet-600 shadow-purple hover:shadow-purple_blur
          disabled:pointer-events-none disabled:opacity-40`}
         {...props}
      >
         {children}
      </button>
   )
}

export default Button
