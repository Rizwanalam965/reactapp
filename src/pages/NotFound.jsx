import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-[90vh] bg-gray-100 flex items-center flex-col justify-center gap-6'>
        <h1 className='text-center text-6xl'>NotFound</h1>
        <h2 className='text-center text-6xl'>😥</h2>
        <p className='px-16 w-1/2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, praesentium et? Porro provident doloremque necessitatibus odio voluptate enim repudiandae debitis. Adipisci sapiente nobis et nihil fuga corporis debitis hic temporibus.</p>
        <button className='bg-white font-semibold py-4 px-10 rounded shadow-2xl'>
            <Link to="/">Go Back</Link>
        </button>
    </div>
  )
}

export default NotFound