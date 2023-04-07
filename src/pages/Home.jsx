import React from 'react'
import frontImage from '../undraw_education_f8ru.svg';
import {motion} from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Home() {
  return (
    <section id='home' className='flex justify-between'>

            <div className='flex-initial flex flex-col justify-between items-center .p-6'>
                <h1>Silicon Valley College</h1>
                <p>“The place where you get quality education”</p>
                <button>Apply now</button>
            </div>
          
               
            <div className='flex-initial'>
                <img src={frontImage} alt="" width='50%' height="50%" />
            </div>

    </section>
  )
}
