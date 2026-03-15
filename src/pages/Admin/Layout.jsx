import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
 
  const {axios,setToken,navigate} = useAppContext();
  const logout = () =>{
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null);
    navigate('/');
  }

  return (
   <>
   <div>
    <Navbar />
    <div className='flex h-[calc(100vh-70px)]'>
       <Sidebar />
        <Outlet />
    </div>
   </div>
   </>
  )
}

export default Layout