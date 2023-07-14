import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {data} from "../assets/data"
import { motion } from 'framer-motion';
const Project = () => {
  
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{duration:2}} id="project" className='sm:h-[40vh]  md:h-[50vh] lg:h-[100vh] w-[100%] flex justify-center   bg-slate-500 items-center  '>
 <div className='w-[80%] imgu2 '>
    <Carousel className='' showArrows={false} showThumbs={false} autoPlay={true} showStatus={false} interval={5000} transitionTime={2000} infiniteLoop={true}>
                {
                  data.project.map((e)=><a target='__blank' href={e.url}><div  className=' imgu w-[100%] h-[100%] cursor-pointer '>
                <div className='kaja  shadow-2xl rounded-2xl '>   <img className=' ' alt={""} src={e.img}></img></div> 
                    <div className='absolute opacity-0 transition-all duration-[1000ms] bottom-0 text-center font-extrabold w-[100%] z-50 flex flex-col justify-center items-center  text-white md:h-[40%] sm:h-[100%] rounded-full '>
                      
                      <div className="md:text-6xl sm:text-lg text-black">{e.title.toUpperCase()}</div>
                      <div  className= " text-[#f5b53f] sm:p-[3%] lg:p-[150px] md:text-base sm:text-xs">{e.description}</div>
                      
                      </div>
                  </div></a>)
                }
            </Carousel>
    </div></motion.div>
  )
}

export default Project