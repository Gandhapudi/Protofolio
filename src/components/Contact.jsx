import React from 'react'

import { motion } from 'framer-motion'
const Contact = () => {
  const animations={
    visible:{
      x:50,
     
    }

  }
  return (
    <div id="contact" className=' md:p-9  sm:p-7 flex justify-center items-center'>
      <div className='md:w-[40%] md:p-[3%] sm:p-[3%] sm:w-[90%]  flex sm:gap-3 bg-transparent shadow-2xl  md:gap-4 bg-slate-100 rounded-2xl h-[100%] flex-col '>
        <div className=' text-center text-3xl'>Contact Me</div>
       <div>Name</div>
       <input className=' sm:h-7 md:h-10 rounded-lg'></input>
       <div>Email</div>
       <input className=' sm:h-7 md:h-10 rounded-lg' type='email'></input>
       <div>Phone</div>
       <input className=' sm:h-7 md:h-10 rounded-lg'></input>
       <br></br>
       <button className=' bg-green-400 p-2 rounded-lg'>Submit</button>
      </div>
      <div  className='w-[50%] sm:hidden md:block  flex justify-center items-center relative '>
       <div className=' flex items-center justify-center  '><motion.img transition={{repeatType: "mirror",
  repeat:Infinity,duration:2}} initial={{x:0}} whileInView={animations.visible} id="bgwolf" className=' sm:hidden md:block  w-[70%] h-auto ' src="https://png.pngtree.com/png-vector/20220322/ourmid/pngtree-free-howling-red-wolf-logo-png-and-psd-png-image_4500557.png "></motion.img>
       </div>   </div>
      </div>
  )
}

export default Contact