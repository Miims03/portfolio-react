import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import DevIcon from '../assets/dev.svg'
import DesignIcon from '../assets/design.svg'
import MobileIcon from '../assets/mobile.svg'
import GameIcon from '../assets/game.svg'
import { motion } from 'framer-motion';
import Logo from '../assets/linux-tux.svg'
import CloseIcon from '@mui/icons-material/Close';
function About({ }) {

  const [openTesti, setOpenTesti] = useState(false)
  const [animeTesti, setAnimeTesti] = useState(false)

  const toggleTestimonials = () => {
    if (openTesti){
      setAnimeTesti(true)
      setTimeout(() => {
        setOpenTesti(false)
        setAnimeTesti(false)
      }, 200);
    }
    setOpenTesti(true)
  }

  const cards = [
    { icon: DesignIcon, title: 'Web Designer', text: 'The most modern and high-quality design made at a professional level.' },
    { icon: DevIcon, title: 'Web Development', text: 'High-quality development of sites at the professional level.' },
    { icon: MobileIcon, title: 'Mobile Apps', text: 'Professional development of applications for iOS and Android.' },
    { icon: GameIcon, title: 'Game Development', text: 'High-quality development of sites at the professional level.' },
  ]

  return (
    <motion.div className='max-w-[95%] sm:max-w-[35rem] md:max-w-[47rem] lg:max-w-[60rem] duration-300 xl:mt-11 xl xl:max-w-[56rem] xl:min-h-[40rem]
    min-h-[30rem] bg-zinc-800/70 border rounded-2xl border-zinc-700 flex flex-col justify-start items-start px-4 py-4 lg:relative gap-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <NavBar />

      <h1 className='text-zinc-50 text-2xl sm:text-3xl font-semibold '><span className=' underline underline-offset-8  decoration-3 decoration-yellow-300/80'>Ab</span>out Me</h1>
      <p className='text-zinc-50/70 text-[15px] sm:text-[16.5px]'>
        I'm Creative Director and UI/UX Designer from Brussel, Belgium, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p className='text-zinc-50/70 text-[15px] sm:text-[16.5px]'>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
      <h1 className='text-zinc-50 text-xl sm:text-2xl font-semibold mb-2 sm:mt-4'>What I'm Doing</h1>
      <div className='grid grid-cols-1 w-full gap-4'>
        {cards.map((card, i) => (
          <div key={i} className='flex flex-col sm:flex-row justify-center items-center border-t border-t-zinc-700/50 border-l border-l-zinc-700/50 rounded-2xl bg-gradient-to-br from-zinc-900/20 to-zinc-900/80 w-[100%] h-[10.5rem] sm:h-[9rem] gap-2 px-5 sm:px-8 sm:gap-6 ' >
            <img className='w-[3rem] h-[3rem] '
              src={card.icon} />
            <div className='flex flex-col justify-center items-center sm:items-start sm:gap-1.5'>
              <h2 className='text-zinc-50 text-lg sm:text-xl font-semibold'>{card.title}</h2>
              <p className='text-zinc-50/70 text-sm sm:text-left sm:text-base text-center'>{card.text}</p>
            </div>
          </div>

        ))}
        <h1 className='text-zinc-50 text-xl sm:text-2xl font-semibold my-4 mb-10 sm:mt-4'>Testimonials</h1>
        <div className='w-[100%] h-[11rem] border-t border-t-zinc-700/50 border-l border-l-zinc-700/50 rounded-2xl bg-gradient-to-br from-zinc-900/20 to-zinc-900/80 cursor-pointer'
          onClick={toggleTestimonials}>
          <div className='w-[4rem] h-[4rem] rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex justify-center items-center sm:h-[8rem] sm:w-[8rem] z-10  ml-5 mt-[-2rem]'>
            <img className='h-[70%] w-[70%]' src={Logo} alt="" />
          </div>
          <div className='flex flex-col justify-start items-start w-full h-full px-5 gap-2 mt-2'>
            <h2 className='text-zinc-50 text-xl sm:text-xl font-semibold '>Bob Le Mob</h2>
            <p className='text-zinc-50/70 text-sm sm:text-left sm:text-base text-left line-clamp-4'>Bob Le Mob was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.</p>
          </div>
        </div>
        {(openTesti || animeTesti) && (
          <div className='h-full w-full fixed top-0 left-0 cursor-pointer flex justify-center items-center z-10 overflow-y-auto  '
          // onClick={toggleTestimonials}
          >
            <div className='h-full w-full bg-zinc-950/80 fixed top-0 left-0 cursor-pointer flex justify-center items-center z-20'
            onClick={toggleTestimonials}></div>
            <motion.div className='w-[94%] h-[21rem] border border-zinc-700/50 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 relative z-20'
            initial={{
              scale : openTesti && !animeTesti ? 1.5 : 1,
              opacity : openTesti && !animeTesti ? 0 : 1
            }}
            animate={{
              scale : openTesti && !animeTesti ? 1 : 1.5,
              opacity : openTesti && !animeTesti ? 1 : 0
            }}
            transition={{duration : 0.2}}
            >
              <div className='h-[2rem] w-[2rem] absolute rounded-lg top-3 right-3 flex items-center justify-center bg-zinc-700/80 text-zinc-50/50 hover:text-zinc-50/70 hover:bg-zinc-700 duration-300'
              onClick={toggleTestimonials}>
                <CloseIcon fontSize='small'/>
              </div>
              <div className='w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-800 flex justify-center items-center sm:h-[8rem] sm:w-[8rem] z-10 ml-5 mt-5'>
                <img className='h-[70%] w-[70%]' src={Logo} alt="" />
              </div>
              <div className='flex flex-col justify-start items-start w-full h-full px-5 gap-2 mt-2'>
                <h2 className='text-zinc-50 text-xl sm:text-xl font-semibold '>Bob Le Mob</h2>
                <p className='text-zinc-50/50 text-sm sm:text-xl mb-1.5'>14 April, 2024</p>
                <p className='text-zinc-50/70 text-[15px] sm:text-left sm:text-base text-left'>Bob Le Mob was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>

    </motion.div>
  )
}

export default About