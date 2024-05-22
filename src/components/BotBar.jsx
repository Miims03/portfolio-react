import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function BotBar() {

  const location = useLocation();

  const navLinks = [
        { path: "/portfolio-react/", name: "About" },
        { path: "/portfolio-react/resume", name: "Resume" },
        { path: "/portfolio-react/portfolio", name: 'Portfolio' },
        { path: "/portfolio-react/blog", name: "Blog" },
        { path: "/portfolio-react/contact", name: 'Contact' },
    ]

  return (
    <div className='fixed h-[7vh] sm:h-[7.5vh] w-screen bg-zinc-600/30 rounded-t-xl border border-zinc-700 bottom-0 z-10 flex flex-row justify-center items-center gap-4 sm:gap-6 backdrop-blur-lg lg:hidden'>
        {navLinks.map((link, index) => (
                <Link
                    to={link.path}
                    key={index}
                    className={`text-base font-medium ${location.pathname === link.path ? 'text-yellow-300/80' : 'text-gray-50/70'} hover:text-yellow-300/80 duration-300`}
                >
                    {link.name}
                </Link>
            ))}
    </div>
  )
}

export default BotBar