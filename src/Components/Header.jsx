import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const username = "Prakash";

  return (
    <>
    <div className='bg-blue-500 flex justify-between px-24 py-4 items-center'>
        <Link to='/' className='text-3xl font-semibold font-serif'>🧠 MindMosaic</Link>
        <div className='flex gap-10 text-[18px]'>
            <Link to='/Explore'>Explore</Link>
            <Link to='/AddBlog'>Contribute</Link>
            <Link to={'/Profile/${username}'}>Profile</Link>
        </div>
    </div>
    </>
  )
}

export default Header
