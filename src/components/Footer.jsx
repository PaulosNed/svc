import React from 'react'
import LinkComponent from './LinkComponent'
import SocialMedia from './SocialMedia'

function Footer({selectedPage, setSelectedPage}) {
  return (
    <div>
        <div className='grid grid-cols-2 gap-8 md:flex md:justify-between'>
            <div className='flex flex-col gap-2'>
                <p className='uppercase text-slate-100 mb-2 md:mb-4'>navigation</p>
                <LinkComponent page="home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="about" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="admission" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="academics" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="staff" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <LinkComponent page="announcements" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='uppercase text-slate-100 mb-2 md:mb-4'>programs</p>
                <p className='capitalize hover:text-yellow-500 transition duration-500 text-white hover:cursor-pointer'>TVET</p>
                <p className='capitalize hover:text-yellow-500 transition duration-500 text-white hover:cursor-pointer'>Degree</p>
                <p className='capitalize hover:text-yellow-500 transition duration-500 text-white hover:cursor-pointer'>Masters</p>
            </div>
            <div className='flex flex-col gap-2 col-span-2'>
                <p className='uppercase text-slate-100 mb-2 md:mb-4 self-center'>social media</p>
                {<SocialMedia />}
            </div>
            <div className='flex flex-col gap-2 col-span-2'>
                <p className='uppercase text-slate-100 mb-2 md:mb-4'>Address</p>
                <p className='capitalize text-white'>Megenagna, Next to Belvue Hotel</p>
                <p className='capitalize text-white'>Addis Ababa, Ethiopia</p>
                <p className='capitalize text-white'>+251912345689</p>
            </div>
        </div>
        <p className='mt-10 text-white text-center'>Developed by AfroSprinter Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer