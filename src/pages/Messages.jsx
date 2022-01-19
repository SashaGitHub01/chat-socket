import React, { useState } from "react";
import Dialogs from "../components/Messages/Dialogs";
import Chat from '../components/Messages/Chat';
import UserInfo from "../components/Messages/UserInfo";
import { useEffect } from "react";
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDialogs } from '../store/actionCreators/dialogsAC';
import { fetchUser } from "../store/actionCreators/userAC";

const Messages = () => {
   const [sel, setSel] = useState(null)
   const dispatch = useDispatch();
   const loc = useLocation();

   const { user: me } = useSelector((state) => state.auth)
   const { dialogs, isLoading } = useSelector((state) => state.dialogs)
   const { user, isLoading: isLoadingU } = useSelector(state => state.user)

   useEffect(() => {
      dispatch(fetchDialogs());
   }, [])

   useEffect(() => {
      if (sel) dispatch(fetchUser(sel))
   }, [sel])

   useEffect(() => {
      if (loc.search) {
         const userId = new URLSearchParams(loc.search).get('user')

         if (userId) setSel(userId)
      } else {
         setSel(null)
      }
   }, [loc.search])

   return (
      <div className="flex flex-auto">
         <Dialogs
            dialogs={dialogs}
            isLoading={isLoading}
            isSelect={sel}
         />
         {sel
            && <Chat sel={sel} user={user} me={me} />}
         <UserInfo user={user} isLoading={isLoadingU} />
      </div>
   )
}

export default Messages
