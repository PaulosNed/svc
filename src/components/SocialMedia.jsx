import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

function SocialMedia() {
  return (
    <div className='flex justify-center gap-7'>
        <a 
            href="https://www.linkedin.com/"
            className='hover:opacity-50 transition duration-500'
            target='_blank'
            rel='noreferrer'
        >
            <img src={LinkedIn} alt="linkedIn" />
        </a>
        <a 
            href="https://www.linkedin.com/"
            className='hover:opacity-50 transition duration-500'
            target='_blank'
            rel='noreferrer'
        >
            <img src={Facebook} alt="linkedIn" />
        </a>
        <a 
            href="https://www.linkedin.com/"
            className='hover:opacity-50 transition duration-500'
            target='_blank'
            rel='noreferrer'
        >
            <img src={Instagram} alt="linkedIn" />
        </a>
        <a 
            href="https://www.linkedin.com/"
            className='hover:opacity-50 transition duration-500'
            target='_blank'
            rel='noreferrer'
        >
            <img src={Twitter} alt="linkedIn" />
        </a>
    </div>
  )
}

export default SocialMedia