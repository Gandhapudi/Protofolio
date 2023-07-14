import React, { useRef } from 'react'
import { animate, motion, motionValue } from 'framer-motion'
import { useAnimationControls } from 'framer-motion'

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
const Details = () => {
  
  let  animationcount=()=>{
          animate(0,95,{duration:1, delay:0.2, onUpdate:(e)=>{document.getElementById("raja").innerHTML=e.toFixed()}});
}
let  animationcount2=()=>{
  animate(0,93,{duration:1, delay:0.2, onUpdate:(e)=>{document.getElementById("raja1").innerHTML=e.toFixed()}});
}
let  animationcount3=()=>{
  console.log(document.getElementById("raja2"))
  animate(0,81.2,{duration:1, delay:0.2, onUpdate:(e)=>{document.getElementById("raja2").innerHTML=e.toFixed(1)}});
}

 
  
  return (
    <>
    
    <div className='main w-[100%] md:h-[100vh] sm:h-[80vh] justify-center items-center  flex flex-col  md:pt-[10%] p-8 gap-4 overflow-hidden ' id="details">
      
      <div className="mainhalf w-[100%] md:h-[25vh]  md:flex-row sm:flex-col flex gap-4  ">
      
        <motion.div initial={a.hidden2} whileInView={a.visible2} className='section1 md:w-[50%] sm:[100%] shadow-2xl shadow-black  bg-slate-300 rounded-lg '>
          <div className='text-center text-lg pt-5'>Sri Vinayaka Vidya Mandir School(Irala) </div>
          <div className='flex justify-between p-6 '><div className=''> <motion.span id="raja"  whileInView={animationcount}  className='sm:text-3xl md:text-6xl'>95</motion.span>
            <span className='sm:text-lg md:text-2xl'>%</span>
            </div>
            <div>
            <span className='sm:text-3xl md:text-6xl' >10</span>
            <span className='sm:text-lg md:text-2xl'>CGPA</span></div>
            </div>
          </motion.div>
        <motion.div initial={a.hidden} whileInView={a.visible}    className='section2 md:w-[50%] sm:[100%] shadow-2xl shadow-black  bg-slate-300 rounded-lg   pt-3 '>
         <div  className='text-center text-lg pt-3'> RK Junior College(Irala)</div>
         <div className='flex justify-between p-6 '><div className=''>
         <motion.span   whileInView={animationcount2} id="raja1" className='sm:text-3xl md:text-6xl'>93</motion.span>
            <span className='sm:text-lg md:text-2xl'>%</span>
            </div>
            <div>
            <span className='sm:text-3xl md:text-6xl'>9.88</span>
            <span className='sm:text-lg md:text-2xl'>CGPA</span></div>
            </div></motion.div>
      </div>
      <motion.div initial={a.hidden3} whileInView={a.visible3}   className='mainhalf2 w-[100%] shadow-2xl shadow-black  bg-slate-300 rounded-lg h-[25vh]'>
      <div className='section3 pt-3'><div   className='text-center text-lg pt-3'> Sree Vidyanikethan Engineering College </div>
      <div className='flex md:justify-evenly sm:justify-between p-6 '><div> <motion.span className='sm:text-3xl md:text-6xl' whileInView={animationcount3} id="raja2" >81.2</motion.span>
            <span className='sm:text-lg md:text-2xl'>%</span>
            </div>
            <div>
            <span className='sm:text-3xl md:text-6xl'>7.95</span>
            <span className='sm:text-lg md:text-2xl'>CGPA</span></div>
            </div></div>
      </motion.div>
    
    </div>
    </>
  )
}

export default Details