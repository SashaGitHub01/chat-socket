import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import Loader from "../Loader";
import { dayAndMonth } from "../../utils/moment";
import { useRef } from "react";

const ChatList = ({ messages, user, isLoading }) => {
   const [dates, setDates] = useState([]);
   const [messagesWithDate, setMessagesWithDate] = useState([]);
   const scrollRef = useRef();
   const listRef = useRef();

   useEffect(() => {
      if (messages) {
         let arr = [];

         messages.forEach(({ createdAt }) => {
            const date = dayAndMonth(createdAt);

            if (arr.includes(date)) return;

            arr.push(dayAndMonth(createdAt))
         });

         setDates(arr);
      }
   }, [messages])

   useEffect(() => {
      if (messages && dates) {
         const ids = [];

         const arr = dates.map((date) => {
            return messages.map(({ createdAt, id }) => {
               if (date === dayAndMonth(createdAt)) {
                  return id;
               } else {
                  return
               }
            })
         })

         arr.forEach((arr) => {
            ids.push(arr.find((id) => id !== undefined))
         })

         setMessagesWithDate(ids)
      }
   }, [messages, dates])

   useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
   }, [messages, scrollRef.current])

   useEffect(() => {
      const current = listRef.current;

      if (current) {
         if ((current.scrollHeight - current.scrollTop - current.offsetHeight) > 0) {
            current.scrollTo({ behavior: 'smooth', top: '777777777777777' })
         }
      }
   }, [listRef.current])

   return (
      <div
         ref={listRef}
         className={`flex flex-col flex-auto gap-7 py-5 border-y border-smoke border-solid max-h-[78%] 
      overflow-y-auto relative z-10 ${isLoading ? 'justify-center' : ''}`}
      >
         {isLoading
            ? <Loader />
            : messages && messagesWithDate
               ? messages.map((item) => {
                  const isCreator = item.creator.id === user.id
                  const withDate = messagesWithDate.includes(item.id);

                  return (
                     <MessageItem
                        item={item}
                        isCreator={isCreator}
                        key={item.id}
                        withDate={withDate}
                        scrollRef={scrollRef}
                     />
                  )
               })
               : messages?.length === 0 || !messages
                  ? <>
                     <div className="text-16 text-center text-second">
                        No messages yet
                     </div>
                  </>
                  : null}
      </div>
   )
}

export default ChatList
