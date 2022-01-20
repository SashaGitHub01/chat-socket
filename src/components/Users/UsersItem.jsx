import React from "react";
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

const UsersItem = ({ item }) => {
   const nav = useNavigate();

   const handleNav = () => {
      nav(`/dialogs?user=${item.id}`)
   }

   return (
      <div className="bg-grey_light rounded-lg px-4 py-6 shadow-md">
         <div className="flex items-center">
            <div className="shrink-0 grow-0 basis-[70px] mr-3">
               <img src={item.avatar} alt="ava" className="max-w-full rounded-[50%] shadow-avatar" />
            </div>
            <div className="flex-auto self-start">
               <div className="truncate">
                  <span className="font-semibold text-18 leading-8 truncate">
                     {item.username}
                  </span>
               </div>
               <div className="truncate">
                  <span className="text-16 text-text_grey truncate leading-5">
                     {item.email}
                  </span>
               </div>
            </div>
            <div className="" onClick={handleNav}>
               <Button>
                  Send a message
               </Button>
            </div>
         </div>
      </div >
   )
}

export default UsersItem
