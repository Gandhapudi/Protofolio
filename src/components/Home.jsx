import React from 'react'
import Project from './Project'
import Details from './Details'
import Contact from './Contact'
import Typewriter from 'typewriter-effect';
import image from "../assets/My project.png";
import {  animate, motion } from 'framer-motion';
import Acheivement from './Acheivement';
const homeanimation={
  hidden:{
    x:-500
  },
  visible:{
    x:0,
    
  }
}
const homeanimation2={
  hidden:{
    x:500,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.8,delay:0.8,type:"spring",stiffness:100}
  
  }
}
const homeanimation3={
  hidden:{
    x:-500,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.8,delay:0.5,type:"spring",stiffness:100}
  
  }
}
const Home = () => {
 
  return (<>
  <div id='all' className=' ' onClick={()=>{let c=document.getElementById("menu");
  c.style.display="none";
  document.getElementById("all").style.filter="blur(0px)"
  }}>
    <Home1></Home1>
    <Project />
    <Details />
    <Acheivement />
    <Contact />
    </div>
    </>
  )
}
const Home1=()=>(
  <>
  
  <motion.main  className=' md:h-[100vh] lg:h-[100vh] w-[100%] sm:h-auto sm:pt-8   lg:flex-row md:flex-row sm:gap-4 sm:justify-center flex-col sm:flex-col main flex p-3' id="home" >
  
  <motion.div variants={homeanimation2} transition={{duration:0.8}} initial="hidden" animate="visible"  className='w-[100%], flex justify-center'>
      <img className='img md:h-[70%] lg:h-[90%]  w-[100%] sm:hidden md:flex ' alt={""}  src={image}></img>
      <div>
       
      </div>
      </motion.div>
  <motion.div variants={homeanimation2} transition={{duration:0.8}} initial="hidden" animate="visible"  className='w-[100%],  md:hidden flex justify-center'>
      <img className='img1 md:h-[100%] lg:h-[100%] w-[60%] rounded-full ' alt={""} src={image}></img>
      <div>
       
      </div>
      </motion.div>
    <motion.div variants={homeanimation} transition={{duration:0.8,when:"beforeChildren"}} initial="hidden" animate="visible" className='content sm:gap-6 w-[100%] flex flex-col items-center md:gap-[10%]  '>
      <br></br>
      <div className=' text-2xl md:text-5xl overflow-hidden'>Hi,I Am</div>
      <div className=' text-2xl md:text-3xl overflow-hidden'>Gandhapudi Anil Kumar</div>
      <Typewriter
    options={{
    strings: ["Fresher","Self Motivated","Hard-Working","Positive Minded"],
    autoStart: true,
    loop: true,
    delay:100,
    
  }}
/>
<div className='flex justify-evenly  w-[100%]'>
<motion.button variants={homeanimation3} initial="hidden" whileHover={{scale:1.1,transition:{delay:0, duration:0.1,yoyo:Infinity}}}  animate="visible" className="hire  overflow-hidden bg-green-500  drop-shadow-md rounded-xl p-[0.7%]"><a href="#contact">Hire Me ↗</a></motion.button>
<motion.div variants={homeanimation2} initial="hidden" whileHover={{scale:1.1,transition:{delay:0, duration:0.1}}}   animate="visible" className=' bg-[#8a8b79]drop-shadow-md rounded-xl p-[0.7%] underline cursor-pointer '><a href="#project">Projects</a></motion.div>
</div>
<div>
 <span className=" font-bold text-lg pr-1">Total Projects Done: </span><motion.span id="value" whileInView={()=>animate(0,3,{ duration:1,delay:0.2, onUpdate:(e)=>{document.getElementById("value").innerHTML=e.toFixed()}})}
   className=' text-md font-extrabold text-4xl'>3</motion.span> </div> 


    </motion.div >
   
   
  </motion.main>
  
  </>
)

export default Home