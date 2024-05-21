import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'
import About from './pages/About'
import BotBar from './components/BotBar'
import Indic from './components/Indic'
import MainBar from './components/MainBar'
function App() {

  return (
    <div className=' bg-zinc-950 min-h-screen py-4 flex flex-col justify-start items-center gap-5'>
      <Indic />
      <MainBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <BotBar />
    </div>
  )
}

export default App
