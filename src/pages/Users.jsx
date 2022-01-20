import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from "../store/actionCreators/usersAC";
import Loader from '../components/Loader'
import UsersItem from "../components/Users/UsersItem";

const Users = () => {
   const dispatch = useDispatch()
   const { users, isLoading } = useSelector(state => state.users)
   const { user } = useSelector(state => state.auth)

   useEffect(() => {
      dispatch(fetchUsers())
   }, [])

   return (
      <div className={`h-full px-6 bg-grey`}>
         <div className="text-[1.6rem] font-semibold py-3">
            Users
         </div>
         <div className={`flex h-full ${isLoading ? 'items-center justify-center' : ''}`}>
            <div className="flex flex-col gap-6 flex-auto">
               {isLoading
                  ? <Loader />
                  : users && users.map((item) => {
                     if (item.id === user.id) return null;

                     return <UsersItem item={item} key={item.id} />
                  })}
            </div>
         </div>
      </div>
   )
}

export default Users
