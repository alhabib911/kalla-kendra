import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar2 = () => {
  return (
    <div className="navbar bg-vividAuburn border border-osloGrey">
  <div className="border-r-2 border-osloGrey px-7">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        <li tabIndex={0}>
          <a className="justify-between">
          Categories
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Category 1</a></li>
            <li><a>Category 2</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
    <div className="form-control flex flex-row-reverse items-center ">
      <div><input  type="text" placeholder="Search" className=" placeholder-monsoon bg-aquaHaze w-100 rounded-full border-none py-2 -ml-7 px-10" /></div>
     <div className='text-monsoon'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
      
    </div>
  </div>

<div className='flex justify-evenly items-center w-106'>
    {/* one  */}

  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0">
      
      <li tabIndex={0}>
        <a className='text-white hover:text-vividGreen'>
          Categories
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Category 1</a></li>
          <li><a>Category 2</a></li>
        </ul>
      </li>
      
    </ul>
  </div>

   {/* two  */}
  <div>
  <button className="btn btn-ghost btn-circle text-white hover:text-vividGreen">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        
      </div>
    </button>
  </div>

   {/* trhree */}
  <div className='flex gap-9 '>
    <Link className='text-white hover:text-vividGreen' to='/createresume'><button>Create resume</button></Link>
    <Link className='text-white hover:text-vividGreen' to='/upload'><button>Upload</button></Link>
  </div>


{/* four  */}
  <div className='ml-auto'>
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>





</div>
  )
}

export default Navbar2