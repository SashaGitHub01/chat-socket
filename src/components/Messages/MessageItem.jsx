import React from "react";
import { timeHours, dayAndMonth } from "../../utils/moment";

const MessageItem = ({ item, isCreator, withDate, scrollRef }) => {
   return (
      <div className="w-full" ref={scrollRef}>
         {withDate
            && <div className="flex justify-center py-4">
               <div className="py-2 px-4 rounded-lg shadow-sm text-14 bg-grey_light">
                  {dayAndMonth(item.createdAt)}
               </div>
            </div>}
         <div className={`${isCreator ? 'justify-end' : 'justify-start'} flex w-full`}>
            <div className={`max-w-[75%] flex gap-1`}>
               {!isCreator
                  &&
                  <div className="w-[60px] shrink-0 flex flex-col justify-end">
                     <img
                        src={item.creator.avatar}
                        alt="ava"
                        className="rounded-[50%] shadow-avatar overflow-hidden max-w-[40px] mx-auto"
                     />
                  </div>}
               <div className="relative">
                  <div className={`${isCreator
                     ? 'bg-my_msg rounded-br-none text-white'
                     : 'bg-smoke rounded-bl-none'} p-4 rounded-xl`}
                  >
                     <span className="text-14 leading-5">
                        {item.content}
                     </span>
                  </div>
                  <div className="absolute right-0">
                     <span className="text-[0.65rem] text-second">
                        {timeHours(item.createdAt)}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MessageItem
