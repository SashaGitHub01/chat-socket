import React from "react";
import { timeAgo } from "../../utils/moment";
import { useNavigate } from "react-router";

const UserItem = ({ dialog }) => {
   const nav = useNavigate();

   const selectDialog = () => {
      nav(`/dialogs?user=${dialog.parthner.id}`)
   }

   return (
      <div
         onClick={selectDialog}
         className="flex items-center hover:bg-grey_light rounded-md cursor-pointer py-5 px-3"
      >
         <div className="rounded-full overflow-hidden shadow-avatar basis-[40px] shrink-0 mr-4">
            <img src={dialog.parthner.avatar} alt="avatar" className="max-w-full block" />
         </div>
         <div className="text-14 truncate flex flex-col gap-1 shrink-1 flex-auto">
            <div className="g">
               <span className="font-semibold">
                  {dialog.parthner.username}
               </span>
            </div>
            <div className="truncate text-second mr-2">
               <span className="text-second text-[12px]">
                  {dialog.lastMessage.content}
               </span>
            </div>
         </div>
         <div className="grow-1 text-second">
            <span className="text-[0.75rem] whitespace-nowrap">
               {timeAgo(dialog.lastMessage.createdAt)}
            </span>
         </div>
      </div>
   )
}

export default UserItem
