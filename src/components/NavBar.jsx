import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
    const location = useLocation();

    const navLinks = [
        { path: "/", name: "About" },
        { path: "/resume", name: "Resume" },
        { path: "/portfolio", name: 'Portfolio' },
        { path: "/blog", name: "Blog" },
        { path: "/contact", name: 'Contact' },
    ]

    return (
        <div className='bg-zinc-700/30 border-b border-l h-[4rem] w-[34rem] border-zinc-700 absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl xl:flex flex-row justify-center items-center gap-10 hidden'>
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
    );
}

export default NavBar;
