import React from "react";

const MyInput = ({ Icon, ...props }) => {
   return (
      <div className={`flex w-full rounded-md overflow-hidden py-2 px-3 bg-grey_light items-center 
      gap-2  shadow-sm`}>
         {Icon && <Icon color="var(--text-grey)" size={'1.2rem'} />}
         <input
            className={`placeholder:text-text_grey placeholder:font-semibold flex-auto bg-inherit`}
            {...props}
         />
      </div>
   )
}

export default MyInput
