import React from "react";
import MyInput from "../MyInput";
import Button from '../Button/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/actionCreators/authAC";

const SignIn = ({ toggle, error }) => {
   const dispatch = useDispatch();
   const validation = Yup.object().shape({
      email: Yup.string().email('Invalid email').required(),
      password: Yup.string().min(3, 'Short password').required(),
   })

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },

      validationSchema: validation,

      onSubmit: async (values, helpers) => {
         await dispatch(fetchLogin(values))
      }
   })

   return (
      <form className="py-5 px-6 flex flex-col gap-6" onSubmit={formik.handleSubmit}>
         <div className="">
            <div className="mb-2 text-text_grey">
               Email
            </div>
            <MyInput
               type='text'
               name='email'
               value={formik.values.email}
               onChange={formik.handleChange}
            />
         </div>
         <div className="">
            <div className="mb-2 text-text_grey">
               Password
            </div>
            <MyInput
               type='password'
               name='password'
               value={formik.values.password}
               onChange={formik.handleChange}
            />
         </div>
         <Button
            type='submit'
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
         >
            Войти
         </Button>
         <div className="text-center text-14 font-light">
            <span>
               Don't have an account?
               <span
                  className="text-purple underline cursor-pointer pl-1"
                  onClick={toggle}
               >
                  Sign Up
               </span>
            </span>
         </div>
      </form>
   )
}

export default SignIn
