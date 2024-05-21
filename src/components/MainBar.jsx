import React, { useState } from 'react'
import Logo from '../assets/linux-tux.svg'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StayPrimaryPortraitOutlinedIcon from '@mui/icons-material/StayPrimaryPortraitOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function MainBar() {

    const duraAnim = 300;

    const [mainOpen, setMainOpen] = useState(false)
    const [mainAnime, setMainAnime] = useState(false)

    const toggleMenu = () => {
        if (mainOpen) {
            setMainAnime(true)
            setTimeout(() => {
                setMainAnime(false)
                setMainOpen(false)
            }, duraAnim);
        } else {
            setMainOpen(true)
        }
        console.log(mainAnime, mainOpen)
    }

    const about = [
        {label : "EMAIL", res : "amine.chr2@gmail.com", icon : <EmailOutlinedIcon fontSize='small'/>},
        {label : "PHONE", res : "+324.76.78.11.02", icon : <StayPrimaryPortraitOutlinedIcon fontSize='small'/>},
        {label : "BIRTHDAY", res : "April 03, 1998", icon : <CalendarMonthOutlinedIcon fontSize='small'/>},
        {label : "LOCATION", res : "Bruxelles,Belgique", icon : <FmdGoodOutlinedIcon fontSize='small'/>},
    ]

    return (
        <main className={`w-[95%] min-h-[16vh] bg-zinc-800/70 border rounded-2xl border-zinc-700 flex flex-col justify-start items-start px-4 py-4 ${mainOpen && !mainAnime ? 'animate-openMenu' : 'animate-closeMenu'} relative overflow-hidden`}>
            <section className='flex items-center justify-start '>
                <div className='w-[4.8rem] h-[4.8rem] rounded-2xl bg-zinc-700/50 flex justify-center items-center'>
                    <img className='h-[80%] w-[80%]' src={Logo} />
                </div>
                <div className='ml-5 flex flex-col justify-center gap-2 '>
                    <h1 className='text-zinc-50 font-semibold text-lg'>Miims Chraibi</h1>
                    <h2 className='text-zinc-50/70 text-xs bg-zinc-700/30 py-0.5 rounded-lg flex justify-center items-center pb-1'>Web Developer</h2>
                </div>
                <a 
                    className='w-[10vw] h-[4.5vh] bg-zinc-800/70 absolute top-[0%] right-[0%] rounded-tr-2xl rounded-bl-2xl text-yellow-300/80 flex items-center justify-center  border-zinc-700  bg-gradient-to-b hover:from-yellow-300/70 hover:to-yellow-500/0 hover:text-zinc-900 duration-300 cursor-pointer hover:shadow-md'
                    onClick={toggleMenu}
                >
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                </a>
            </section>
            {(mainOpen || mainAnime) && (
            <div className={` overflow-hidden w-full flex flex-col justify-start items-center pt-4 `}>
                <div className={`w-full text-white border-y border-zinc-50/10 flex flex-col justify-center items-start gap-3 py-5 
                ${mainOpen && !mainAnime ? 'animate-appear' : 'animate-disappear '}
                `}>
                    {about.map((line , i) =>(
                        <div key={i} className='flex flex-row justify-start items-center gap-4'>
                            <div className='text-yellow-300/80 border border-zinc-700 p-1.5 rounded-xl flex items-center justify-center'>
                                {line.icon}
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1'>
                                <p className='text-xs text-zinc-50/70'>{line.label}</p>
                                <p className='text-sm text-zinc-50 font-semibold'>{line.res}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={`ml-5 mt-4 w-full flex justify-start items-center gap-4
                ${mainOpen && !mainAnime ? 'animate-appear' : 'animate-disappear'}
                `}>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><TwitterIcon fontSize='small'/></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><InstagramIcon fontSize='small' /></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><GitHubIcon fontSize='small'/></p>
                </div>
            </div>
            )}
        </main>
    )
}

export default MainBar
