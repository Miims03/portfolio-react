import React from 'react'
import NavBar from '../components/NavBar'
function Resume() {
  return (
    <div className='min-w-[95%] sm:min-w-[35rem] md:min-w-[47rem] lg:min-w-[60rem] duration-300 xl:mt-11 xl xl:min-w-[56rem] xl:min-h-[40rem]
    min-h-[30rem] bg-zinc-800/70 border rounded-2xl border-zinc-700 flex flex-col  justify-start items-start px-4 py-4  xl:relative '>
        <NavBar/>
        <h1 className='text-white'>Resume</h1>
    </div>
  )
}

export default Resume