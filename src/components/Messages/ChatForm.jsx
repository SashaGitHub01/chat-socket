import React from "react";
import { Send } from "../../assets/icons";
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { fetchCreateMsg } from "../../store/actionCreators/dialogAC";
import { useState } from "react";
import { useEffect } from "react";

const ChatForm = ({ id, isLoading }) => {
   const [visible, setVisible] = useState(true);
   const dispatch = useDispatch();

   const formik = useFormik({
      initialValues: {
         content: ''
      },

      onSubmit: async (values, helpers) => {
         await dispatch(fetchCreateMsg({ ...values, id }));

         helpers.resetForm();

      }
   })

   useEffect(() => {
      if (formik.values.content.length) {
         setVisible(true)
      } else {
         setVisible(false)
      }
   }, [formik.values.content])

   return (
      <form className="py-4 flex gap-3 items-center" onSubmit={formik.handleSubmit}>
         <textarea
            disabled={isLoading}
            name="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            rows={7}
            placeholder="Type your message..."
            className={`resize-none w-full text-14 leading-4 px-2 h-full bg-inherit`}
         />
         {visible
            && <button
               disabled={formik.isSubmitting}
               type="submit"
               className={`bg-purple w-[40px] h-[40px] rounded-[50%] 
                     flex items-center justify-center text-white cursor-pointer hover:bg-purple_hover`}
            >
               <Send size={'1.4rem'} />
            </button>}
      </form>
   )
}

export default ChatForm
