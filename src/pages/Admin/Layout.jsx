import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Sidebar from './Sidebar'

const Layout = () => {
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