
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import BotBar from './components/BotBar'
import Indic from './components/Indic'
import MainBar from './components/MainBar'

function App() {

  const lesRoutes = [
    { path: "/", element: About },
    { path: "/resume", element: Resume },
    { path: "/portfolio", element: Portfolio },
    { path: "/blog", element: Blog },
    { path: "/contact", element: Contact },
  ]

  return (
    <div className=' bg-zinc-950 min-h-screen py-5 flex flex-col xl:flex-row justify-start xl:justify-center xl:items-start  items-center gap-2 sm:gap-8 xl:relative xl:gap-5'>
      <Indic />

      <BrowserRouter>
      <MainBar />
        <Routes>
        {lesRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element/>} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BotBar />
      </BrowserRouter>
      
    </div>
  )
}

export default App
