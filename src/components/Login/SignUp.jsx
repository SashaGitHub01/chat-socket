import React from "react";
import MyInput from "../MyInput";
import Button from '../Button/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { fetchReg } from "../../store/actionCreators/authAC";

const SignUp = ({ toggle }) => {
   const dispatch = useDispatch();
   const validation = Yup.object().shape({
      email: Yup.string().email('Invalid email').required(),
      username: Yup.string().min(2, 'Short name').required(),
      password: Yup.string().min(3, 'Short password').required(),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         username: ''
      },

      validationSchema: validation,

      onSubmit: async (values, helpers) => {
         await dispatch(fetchReg(values))
      }
   })

   return (
      <form className="py-5 px-6 flex flex-col gap-6" onSubmit={formik.handleSubmit}>
         <div className="">
            <div className="mb-2 text-text_grey">
               Email
            </div>
            <MyInput
               value={formik.values.email}
               onChange={formik.handleChange}
               type='text'
               name='email'
            />
         </div>
         <div className="">
            <div className="mb-2 text-text_grey">
               Username
            </div>
            <MyInput
               value={formik.values.username}
               onChange={formik.handleChange}
               type='text'
               name='username'
            />
         </div>
         <div className="">
            <div className="mb-2 text-text_grey">
               Password
            </div>
            <MyInput
               value={formik.values.password}
               onChange={formik.handleChange}
               type='password'
               name='password'
            />
         </div>
         <Button
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            type='submit'>
            Войти
         </Button>
         <div className="text-center text-14 font-light">
            <span>
               Already have an account?
               <span
                  onClick={toggle}
                  className="text-purple underline cursor-pointer pl-1"
               >
                  Sign In
               </span>
            </span>
         </div>
      </form>
   )
}

export default SignUp
