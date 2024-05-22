import React, { useEffect, useState } from 'react'
import Logo from '../assets/linux-tux.svg'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StayPrimaryPortraitOutlinedIcon from '@mui/icons-material/StayPrimaryPortraitOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';
import screenSize from './screenSize';
import { MenuOpen } from '@mui/icons-material';

function MainBar() {
    const screenWidth = screenSize().width
    const [HeightValue, setHeightValue] = useState("")
    const [widthValue, setWidthValue] = useState("")
    const [HeightValueMenu, setHeightValueMenu] = useState("")

    useEffect(() => {
        if (screenWidth < 640) {
            setHeightValueMenu("26rem")
            setWidthValue('95%')
            setHeightValue('6.5rem')
        }else if (screenWidth >= 640 && screenWidth < 768) {
            setHeightValueMenu("37rem")
            setWidthValue('35rem')
            setHeightValue('11.2rem')
        } else if (screenWidth >= 768 && screenWidth < 1024) {
            setHeightValue('11.2rem')
            setHeightValueMenu("29rem")
            setWidthValue('47rem')
        }else if (screenWidth >= 1024 && screenWidth < 1280){
            setHeightValue('11.2rem')
            setHeightValueMenu("29rem")
            setWidthValue('60rem')
        }else if (screenWidth >= 1280){
            setWidthValue('17.2rem')
            setHeightValue('44rem')
            setHeightValueMenu("44rem")
        }
      }, [screenWidth])

    const [mainOpen, setMainOpen] = useState(false)
    const [mainAnime, setMainAnime] = useState(true)

    const toggleMenu = () => {
        setMainOpen(!mainOpen)
        setMainAnime(!mainAnime)
    }

    const about = [
        {label : "EMAIL", res : "amine.chr2@gmail.com", icon : <EmailOutlinedIcon fontSize='small'/>},
        {label : "PHONE", res : "+(32)476-781-102", icon : <StayPrimaryPortraitOutlinedIcon fontSize='small'/>},
        {label : "BIRTHDAY", res : "April 03, 1998", icon : <CalendarMonthOutlinedIcon fontSize='small'/>},
        {label : "LOCATION", res : "Bruxelles,Belgique", icon : <FmdGoodOutlinedIcon fontSize='small'/>},
    ]
    

    return (
        <motion.main className={` bg-zinc-800/70 border rounded-2xl border-zinc-700 flex flex-col justify-start items-start xl:items-center pl-3 xl:pl-0  lg:text-red-50  xl:sticky  
        relative overflow-hidden sm:mt-11 sm:pl-8 xl:top-[4rem]`}
        initial={{height : HeightValue ,minWidth : widthValue}}
        animate={{
            height: mainOpen && !mainAnime ? HeightValueMenu : HeightValue,
            minWidth: widthValue
        }}
        exit='base'
        transition={{ duration: 0.3 }}
        >
            <section className='flex xl:flex-col justify-start items-center mt-3 xl:gap-4  sm:py-3'>
                <div className='w-[4.8rem] h-[4.8rem] rounded-3xl bg-zinc-700/50 flex justify-center items-center sm:h-[8rem] sm:w-[8rem] '>
                    <img className='h-[70%] w-[70%]' src={Logo} />
                </div>
                <div className='ml-5 xl:ml-0 flex flex-col justify-center items-center gap-2 sm:gap-5'>
                    <h1 className='text-zinc-50 font-semibold text-lg sm:text-3xl  '>Amine Chraibi</h1>
                    <h2 className='text-zinc-50/70 text-xs bg-zinc-700/30 pt-0.5 sm:pt-1.5 rounded-lg flex justify-center items-center pb-1 sm:pb-1.5 sm:w-32'>Web Developer</h2>
                </div>
                <button  before='Show Contacts'
                    className='min-w-[2.5rem] min-h-[2.2rem] bg-zinc-800/70 absolute top-[0%] right-[0%] rounded-tr-2xl rounded-bl-2xl text-yellow-300/80 flex items-center justify-center  border-zinc-700 border-l cursor-pointer hover:border-l hover:border-t hover:border-t-yellow-300/80 hover:border-l-yellow-300/80 bg-gradient-to-br hover:from-yellow-300/30 hover:via-transparent hover:to-transparent
                    sm:text-xs sm:font-semibold sm:px-4 sm:after:content-[attr(before)]  xl:hidden'
                    onClick={toggleMenu}
                >
                    <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                    {/* Show Contact */}
                </button>
            </section>
            {(mainOpen || mainAnime) && (
            <div className={` w-full flex flex-col justify-center items-center pt-4 xl:hidden`}>
                <motion.div className={` w-[96%] text-white border-y border-zinc-50/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 md:gap-9  gap-3.5 sm:gap-6 py-5 sm:py-8 mr-[2%] sm:mr-[5%] pl-0`}
                animate={{ opacity: mainOpen && !mainAnime ? 1 : 0 }}
                transition={{ type: 'tween' , duration: 0.3 }}
                >
                    {about.map((line , i) =>(
                        <div key={i} className='flex flex-row justify-start items-center gap-4 sm:gap-5'>
                            <div className='text-yellow-300/80 border border-zinc-700 p-1.5 sm:p-3 rounded-xl flex items-center justify-center hover:text-zinc-700 hover:bg-yellow-300/80 duration-300 cursor-pointer '>
                                {line.icon}
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1 sm:gap-0 '>
                                <p className='text-xs text-zinc-50/70'>{line.label}</p>
                                <p className='text-sm text-zinc-50 font-semibold sm:text-base'>{line.res}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <motion.div className={`ml-6 mt-4 w-full flex justify-start items-center gap-5 sm:pt-3`}
                animate={{ opacity: mainOpen && !mainAnime ? 1 : 0 }}
                transition={{ type: 'tween' , duration: 0.3 }}
                >
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><TwitterIcon fontSize='small'/></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><InstagramIcon fontSize='small' /></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><GitHubIcon fontSize='small'/></p>
                </motion.div>
            </div>
            )}


            <div className={` hidden flex-col justify-center items-center  xl:flex `}>
                <motion.div className={` w-[96%] text-white border-y border-zinc-50/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 md:gap-9  gap-3.5 sm:gap-6 py-5 sm:py-8 mr-[2%] sm:mr-[5%] pl-0`}
                >
                    {about.map((line , i) =>(
                        <div key={i} className='flex flex-row justify-start items-center gap-4 sm:gap-5'>
                            <div className='text-yellow-300/80 border border-zinc-700 p-1.5 sm:p-3 rounded-xl flex items-center justify-center hover:text-zinc-700 hover:bg-yellow-300/80 duration-300 cursor-pointer '>
                                {line.icon}
                            </div>
                            <div className='flex flex-col justify-start items-start gap-1 sm:gap-0 '>
                                <p className='text-xs text-zinc-50/70'>{line.label}</p>
                                <p className='text-sm text-zinc-50 font-semibold sm:text-base'>{line.res}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <motion.div className={` flex justify-center items-center gap-5 mt-5`}
                >
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><TwitterIcon fontSize='medium'/></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><InstagramIcon fontSize='medium' /></p>
                    <p className='text-zinc-50/70 hover:text-zinc-50 duration-300 cursor-pointer'><GitHubIcon fontSize='medium'/></p>
                </motion.div>
            </div>
        </motion.main>
    )
}

export default MainBar
