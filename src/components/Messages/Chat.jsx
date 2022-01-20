import React, { useEffect, useRef } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Back, Send } from "../../assets/icons"
import { socket } from "../../socket"
import { addMessage, fetchDialog } from "../../store/actionCreators/dialogAC"
import Loader from "../Loader"
import ChatForm from "./ChatForm"
import ChatList from "./ChatList"

const Chat = ({ sel, me, user }) => {
   const [isOnline, setIsOnline] = useState(false);
   const dispatch = useDispatch()
   const nav = useNavigate();

   const { messages, isLoading } = useSelector(state => state.dialog)

   const goBack = () => {
      nav('/dialogs')
   }

   const addNewMsg = (data) => {
      dispatch(addMessage(data))
   }

   useEffect(() => {
      socket.on('MESSAGE:ADD', addNewMsg)
      socket.on('USER:OFFLINE', () => setIsOnline(false))
      socket.on('USER:SET_ONLINE', () => setIsOnline(true))
   }, [])

   useEffect(() => {
      if (user) socket.emit('USER:CHECK', user.id, (res) => setIsOnline(res))
   }, [user])

   useEffect(() => {
      if (sel) {
         dispatch(fetchDialog(sel));
      }
   }, [sel])

   return (
      <div className="flex-auto max-h-screen">
         <div className="px-4 flex flex-col h-full">
            <div className="">
               <div className="flex items-center py-3">
                  {user && <>
                     <div className="text-text_grey cursor-pointer" onClick={goBack}>
                        <Back size={'1.5rem'} />
                     </div>
                     <div className="flex-auto text-center flex w-full justify-center items-center gap-2">
                        <span className="text-18 font-semibold tracking-wide">
                           {user.username}
                        </span>
                        <div
                           className={`w-[8px] h-[8px] ${isOnline ? 'bg-emerald-400' : 'bg-red-500'} 
                        rounded-full shadow-sm`}
                        />
                     </div>
                  </>}
               </div>
            </div>
            <ChatList
               messages={messages}
               user={me}
               isLoading={isLoading}
            />
            <ChatForm
               id={user?.id}
               isLoading={isLoading}
            />
         </div>
      </div>
   )
}

export default Chat
