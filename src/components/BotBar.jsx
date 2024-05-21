import React from 'react'
import { Link } from 'react-router-dom'
function BotBar() {
  return (
    <div className='absolute h-[8.55vh] w-screen bg-zinc-600/30 rounded-t-xl border border-zinc-700 bottom-0 z-10 flex flex-row justify-center items-center gap-4 backdrop-blur-sm'>
        {/* <Link to='/'>About</Link> */}
        <a href="" className=' text-yellow-300/80 text-xs font-medium'>About</a>
        <a href="" className='text-gray-50/70 text-xs font-medium '>Resume</a>
        <a href="" className='text-gray-50/70 text-xs font-medium '>Portfolio</a>
        <a href="" className='text-gray-50/70 text-xs font-medium '>Blog</a>
        <a href="" className='text-gray-50/70 text-xs font-medium '>Contact</a>
    </div>
  )
}

export default BotBar