import React from "react";
import { useState } from "react";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";
import { useSelector } from "react-redux";

const Login = () => {
   const [signin, setSignin] = useState(true);
   const [signup, setSignup] = useState(false);

   const { loginError, regError } = useSelector(state => state.auth)

   const openUp = () => {
      setSignup(true);
      setSignin(false);
   }

   const openIn = () => {
      setSignup(false);
      setSignin(true);
   }

   return (
      <div className="flex-auto items-center justify-center flex flex-col bg-grey_light">
         <div className="shadow-xl rounded-md max-w-[450px] w-full bg-grey">
            <div className="">
               <div className="text-center py-4">
                  <span className="font-semibold text-20">
                     {signin ? 'Sign In' : 'Sign Up'}
                  </span>
               </div>
               <div className="h-[1px] bg-grey w-full"></div>
               {signin
                  ? <SignIn toggle={openUp} error={loginError} />
                  : <SignUp toggle={openIn} error={regError} />}
            </div>
         </div>
      </div>
   )
}

export default Login
