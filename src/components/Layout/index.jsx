import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
   return (
      <>
         <div
            className={`max-w-[1250px] mx-auto bg-grey_light w-full h-full 
            flex-auto relative flex flex-col`}
         >
            <div className="flex flex-auto">
               <Nav />
               <main className="flex flex-auto flex-col ml-[70px]">
                  {children}
               </main>
            </div>
         </div>
      </>
   )
}

export default Layout
