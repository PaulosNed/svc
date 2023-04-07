import { useState } from 'react'
import Logo from '../assets/silicon-valley-logo.jpg'
import LinkComponent from './LinkComponent'
import burger from '../assets/menu-icon.svg'
import close from '../assets/close-icon.svg'

function NavBar({selectedPage, setSelectedPage}) {
  const [isMenuToggled, setIsMenuToggled] = useState()

  return (
    <div className='py-3 flex justify-between items-center bg-black px-8'>
      <img src={Logo} alt="logo" className='w-16 h-16 rounded-full'/>
      <nav className='flex space-x-5 text-sm'>
        <div className="block md:hidden transition-all duration-500">
          {!isMenuToggled && <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={burger} alt="" />
          </button>}

          {isMenuToggled && (
            <div>
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <img src={close} alt="" />
              </button>
              <div className='w-1/2 z-80 bg-slate-900 flex flex-col gap-4 fixed right-0 px-8 py-8 rounded-xl'>
                <LinkComponent page="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="about" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="admission" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="academics" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="staff" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="announcements" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>
            </div>
          )}
        </div>
        
        <div className='hidden md:flex gap-8'>
          <LinkComponent page="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="about" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="admission" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="academics" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="staff" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <LinkComponent page="announcements" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <button className='ml-10 bg-white hover:bg-yellow-500 transition-all duration-500 hover:scale-105 rounded-full py-2 px-8 -mt-2'>Log-in</button>
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar