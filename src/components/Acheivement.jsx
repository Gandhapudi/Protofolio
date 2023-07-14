import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from '../assets/data';
import { motion } from 'framer-motion';
const Acheivement = () => {
    const a={
        hidden:{
          x:"40%",
      },
        visible:{
          x:"0",
          
          
          transition:{
            duration:0.5,
            
          }},
          
          hidden2:{
            x:"-40%",
          },
          visible2:{
           x:0,
            transition:{
              duration:0.5
            }
            
           },
        hidden3:{
         y:"40%"
          
        },
        visible3:{
          y:0,
          
          
          
          transition:{
            duration:0.5,
            
          
      
      }}
        
      }
  return (
    <>
    <div id='acheivements' className='flex w-[100%] justify-center h-auto overflow-hidden'>
    <motion.div initial={a.hidden} whileInView={a.visible} className='md:w-[50%] sm:w-[60%] flex items-center   justify-center pt-10 pb-7 '><Carousel  className='' showArrows={true} showThumbs={false} autoPlay={true} showStatus={false} interval={5000} transitionTime={2000} infiniteLoop={true}>
                {
                  data.images.map((e)=><div  className='  w-[100%] cursor-pointer bg-slate-300 h-[100%] object-cover  '>
                <div className='kaja w-[100%] shadow-2xl rounded-2xl object-cover flex justify-center items-center bg-black '>   <img className=' object-cover  acheivemntsimg ' alt={""} src={e.img}></img></div> 
                    {console.log(e)}
                  </div>)
                }
            </Carousel></motion.div>
<div className='w-[50%] sm:hidden md:flex  justify-center items-center'><motion.div initial={a.hidden2} whileInView={a.visible2} className=' md:text-5xl'>Certifications</motion.div></div>

    </div>
    </>
  )
}

export default Acheivement