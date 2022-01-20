import react, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import AppRoute from './components/AppRoute/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from './store/actionCreators/authAC'
import Login from './pages/Login';
import { Route, Routes, useNavigate } from 'react-router';
import { socket } from './socket';

function App() {
   const nav = useNavigate();
   const dispatch = useDispatch()
   const { isInitialized, isAuth, theme, user } = useSelector(state => state.auth);

   useEffect(() => {
      if (theme && isInitialized) {
         document.body.setAttribute('data-theme', theme);
      }
   }, [theme, isInitialized])

   useEffect(() => {
      dispatch(fetchAuth())
   }, [])

   useEffect(() => {
      if (isAuth && isInitialized) {
         nav('/dialogs');
      }

      if (!isAuth && isInitialized) {
         nav('/login')
      }
   }, [isAuth, isInitialized])

   return (
      <>
         {isInitialized
            ? <>
               {isAuth
                  ? <Layout>
                     <AppRoute isAuth={isAuth} />
                  </Layout>
                  : <Routes>
                     <Route path='/login' element={<Login />} />
                  </Routes>}
            </>
            : null}
      </>
   );
}

export default App;
