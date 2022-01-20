import { Logout, Message, Sun, Users } from '../../assets/icons';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout, setTheme } from '../../store/actionCreators/authAC';

const Nav = () => {
   const dispatch = useDispatch();
   const theme = useSelector(state => state.auth.theme)
   const nav = useNavigate();

   const handleLogout = () => {
      dispatch(fetchLogout())
      nav('/login')
   }

   const changeTheme = (th) => {
      localStorage.setItem('theme', th)
      dispatch(setTheme(th));
   }

   const handleClick = () => {
      if (theme === 'dark') {
         changeTheme('light')
      } else {
         changeTheme('dark')
      }
   }

   return (
      <nav className="bg-grey_light w-[70px] flex flex-col items-center fixed min-h-screen py-5">
         <div className={`max-w-[55px] mb-7 cursor-pointer`}>
            <img src={logo} alt="logo" className="block max-w-full" />
         </div>
         <div className="flex flex-col gap-4 cursor-pointer flex-auto">
            <Link
               to={'/dialogs'}
               className={`flex items-center justify-center cursor-pointer text-text_grey
                     hover:text-purple`}
            >
               <Message size={'1.8rem'} />
            </Link>
            <Link
               to={'/users'}
               className={`flex items-center justify-center cursor-pointer text-text_grey
                     hover:text-purple`}
            >
               <Users size={'1.8rem'} />
            </Link>
            <div
               onClick={handleClick}
               className={`flex items-center justify-center cursor-pointer text-text_grey
                     hover:text-purple`}
            >
               <Sun size={'1.8rem'} />
            </div>
         </div>
         <div
            onClick={handleLogout}
            className={`flex items-center justify-center cursor-pointer text-text_grey
                     hover:text-purple`}
         >
            <Logout size={'1.7rem'} />
         </div>
      </nav>
   )
}

export default Nav
