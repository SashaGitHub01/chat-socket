import React from "react"
import { Camera, Envelope, Phone } from "../../assets/icons";
import Loader from "../Loader";

const UserInfo = ({ user, isLoading }) => {

   return (
      <div className={`w-full max-w-[310px] bg-grey py-8 px-6 ${isLoading ? 'flex justify-center' : ''}`}>
         {isLoading
            ? <Loader />
            : user && <div className="text-center">
               <div className="w-[75px] mx-auto overflow-hidden shadow-avatar rounded-full mb-3">
                  <img src={user.avatar} alt="avatar" />
               </div>
               <div className="n">
                  <span className="leading-10 text-18 font-semibold tracking-wide">
                     {user.username}
                  </span>
               </div>
               <div className="">
                  <span className="text-14 text-second">
                     {user.email}
                  </span>
               </div>
               <div className="flex items-center gap-8 justify-center py-8">
                  <div className="text-text_grey text-20 cursor-pointer hover:text-purple">
                     <Phone />
                  </div>
                  <div className="text-text_grey text-20 cursor-pointer hover:text-purple">
                     <Camera size={'1.6rem'} />
                  </div>
                  <div className="text-text_grey text-20 cursor-pointer hover:text-purple">
                     <Envelope />
                  </div>
               </div>
            </div>}
      </div>
   )
}

export default UserInfo
