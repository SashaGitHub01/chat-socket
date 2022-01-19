import react, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import AppRoute from './components/AppRoute/index';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from './store/actionCreators/authAC'
import Login from './pages/Login';

function App() {
   const dispatch = useDispatch()
   const { isInitialized, isAuth, theme } = useSelector(state => state.auth);

   useEffect(() => {
      if (theme && isInitialized) {
         document.body.setAttribute('data-theme', theme);
      }
   }, [theme, isInitialized])

   useEffect(() => {
      dispatch(fetchAuth())
   }, [])

   return (
      <>
         {isInitialized
            ? <>
               {isAuth
                  ? <Layout>
                     <AppRoute />
                  </Layout>
                  : <Login />}
            </>
            : null}
      </>
   );
}

export default App;
