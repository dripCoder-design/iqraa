import React ,{useEffect, useRef} from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const  {input,setInput} = useAppContext()
  const inputRef = React.useRef()

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setInput( inputRef.current.value)
    console.log("searching for ", inputRef.current.value);
  }
   useEffect(() => {
    const handleClear = () => {
      setInput('')
      
    }

    // Listen for the browser's clear button click
    const inputElement = inputRef.current
    if (inputElement) {
      inputElement.addEventListener('search', handleClear)
      return () => inputElement.removeEventListener('search', handleClear)
    }
  }, [])

  return (
    <div className='mx-8 sm:16 xl:mx--24 relative'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5
             mb-4 border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New: AI feature intergrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>
            <h1 className='text3xl sm:text-6xl fornt-semibold sm:leading-16
            text-gray-700'>Your own <span className='text-primary'>blogging</span> <br /> platform.</h1>
            <p className='my06 sm:my-8 max-w-2xl m-auto max-sm:text-xs
            text-gray-500'>This is your space to think out loud, to share what matters, and to write without filter.
                whether it's one word or a thousand, your story start right here.
            </p>
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto
             bg-white rounded  gap-1.5' >
            <label className="input input-primary w-full pl-4 outline-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input ref={inputRef} type="search" className=" grow" placeholder="Search blog" />

</label>
<button className="btn btn-primary 
rounded hover:scale-105 transition-all cursor-pointer " type='submit'>Search</button>
            </form>
            
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header