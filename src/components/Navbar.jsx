import { ArrowRight } from 'lucide-react'
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar  ">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-primary">Iqra</a>
  </div>
  <div className="flex-none">
    <button onClick={()=>navigate('/login')} className="btn btn-outline btn-primary rounded-full ">
        login
        <span className='xs'><ArrowRight /> </span>
        </button>
  </div>
</div>
  )
}

export default Navbar