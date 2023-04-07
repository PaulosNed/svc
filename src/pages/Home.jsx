import React from 'react'
import frontImage from '../undraw_education_f8ru.svg';
import value from '../assets/undraw_graduation_re_gthnV.svg'
import vission from '../assets/undraw_business_plan_re_0v81.svg'
import mission from '../assets/undraw_educator_re_ju47.svg'

export default function Home() {
  return (
    <>
      <section id='home' className='grid md:grid-cols-2 pt-40  mt-10 -mb-24'>
        <div className=' flex flex-col items-center mt-6'>
            <h1 className=' text-6xl font-semibold'>Silicon Valley</h1>
            <h1 className=' text-6xl font-semibold'>College</h1>
            <p className='text-slate-500 text-2xl italic mt-16 text-center'>“The place where you get quality education”</p>
            <button className='rounded-full px-16 py-5 bg-gradient-to-r from-red-500 to-yellow-500 hover:scale-105 transform transition-all duration-500 text-white mt-20'>Apply now</button>
        </div>
        <div className='hidden md:block'>
          <img src={frontImage} alt="" className='h-3/4'/>
        </div>
      </section>

      <section id='about' className=''>
        <div className='w-11/12 md:w-2/3 pt-40 mx-auto py-10'>
          <p className='text-6xl font-inter mb-10 font-bold'>About Us</p>
          
          
          <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 flex flex-col'>
              <p className='text-xl text-green-500 font-bold'>Our Story</p>
              <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ducimus pariatur et impedit, similique exercitationem quos tempora! Earum doloribus laboriosam repellendus! Minus incidunt voluptas nemo exercitationem saepe provident nostrum sit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nemo dolor laudantium doloremque nobis eum, omnis vel sunt beatae hic totam, quibusdam soluta eligendi tenetur possimus necessitatibus deleniti vero illo.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit hic placeat necessitatibus cum enim nam ratione magnam tempore at. Asperiores modi nisi iure dolores neque debitis aspernatur est nulla explicabo.</p>
            </div>
            <div className='md:w-1/2 flex flex-col space-y-10'>
              <div className='grid grid-cols-12 gap-10'>
                <div className='md:col-span-2'></div>
                <div className='col-span-12 md:col-span-10'>
                  <p className='text-3xl font-bold'>6 years on the market</p>
                  <p className='mt-2 text-slate-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus et similique ex ipsum, exercitationem, voluptates minus</p>
                </div>
              </div>
              <div className='grid grid-cols-12 gap-10'>
                <div className='md:col-span-2'></div>
                <div className='col-span-12 md:col-span-10'>
                  <p className='text-3xl font-bold'>More than 10,000 students Graduated</p>
                  <p className='mt-2 text-slate-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus et similique ex ipsum, exercitationem, voluptates minus</p>
                </div>
              </div>
              <div className='grid grid-cols-12 gap-10'>
                <div className='md:col-span-2'></div>
                <div className='col-span-12 md:col-span-10'>
                  <p className='text-3xl font-bold'>Currently Serving 2,000+ Students</p>
                  <p className='mt-2 text-slate-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus et similique ex ipsum, exercitationem, voluptates minus</p>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className='w-full mt-32 flex flex-col gap-5 md:gap-0 md:flex-row items-center md:space-x-20'>
              <div className='md:w-1/2 bg-slate-50 rounded-xl p-2'>
                <img src={mission} alt="" className='w-full h-72 rounded-xl'/>
              </div>
              <div className='md:w-1/2 flex flex-col items-start gap-3 md:gap-8'>
                <p className='text-xl font-bold uppercase'>our mission</p>
                <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque labore a quo accusamus nobis eos? Sapiente libero ea iste sunt exercitationem fugiat quod incidunt velit! Veniam at commodi neque tempore.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quas cum mollitia debitis minima excepturi, assumenda qui cumque eum harum praesentium sequi dignissimos fuga aliquid dolorem. Velit eius harum voluptates?</p>
              </div>
          </div>
          
          
          <div className='w-full mt-32 flex flex-col-reverse gap-5 md:gap-0 md:flex-row items-center md:space-x-20'>
              <div className='md:w-1/2 flex flex-col items-start gap-3 md:gap-8'>
                <p className='text-xl font-bold uppercase'>our Vision</p>
                <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque labore a quo accusamus nobis eos? Sapiente libero ea iste sunt exercitationem fugiat quod incidunt velit! Veniam at commodi neque tempore.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quas cum mollitia debitis minima excepturi, assumenda qui cumque eum harum praesentium sequi dignissimos fuga aliquid dolorem. Velit eius harum voluptates?</p>
              </div>
              <div className='md:w-1/2 bg-slate-50 rounded-xl p-2'>
                <img src={vission} alt="" className='w-full h-72 rounded-xl'/>
              </div>
          </div>
          
          
          <div className='w-full mt-32 flex flex-col gap-5 md:gap-0 md:flex-row items-center md:space-x-20'>
              <div className='md:w-1/2 bg-slate-50 rounded-xl p-2'>
                <img src={value} alt="" className='w-full h-72  rounded-xl'/>
              </div>
              <div className='md:w-1/2 flex flex-col items-start gap-3 md:gap-8'>
                <p className='text-xl font-bold uppercase'>our value</p>
                <p className='text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque labore a quo accusamus nobis eos? Sapiente libero ea iste sunt exercitationem fugiat quod incidunt velit! Veniam at commodi neque tempore.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quas cum mollitia debitis minima excepturi, assumenda qui cumque eum harum praesentium sequi dignissimos fuga aliquid dolorem. Velit eius harum voluptates?</p>
              </div>
          </div>

          <div className='mt-20 p-5 w-full bg-white shadow-lg rounded-xl'>
            <div className='flex flex-col items-center'>
              <p className='text-xl font-inter font-bold uppercase'>Our programs</p>
              <div className='flex gap-5'>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}
