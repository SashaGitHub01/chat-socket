import { Routes, Route } from 'react-router-dom';
import Messages from '../../pages/Messages';
import Users from '../../pages/Users';

const AppRoute = () => {

   return (
      <Routes>
         <Route path='/dialogs' element={<Messages />} />
         <Route path='/users' element={<Users />} />
      </Routes>
   )
}

export default AppRoute
