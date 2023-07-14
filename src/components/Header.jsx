
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import {GiCrossMark, GiHamburgerMenu} from "react-icons/gi"


import "../styles/anil.scss";
const link={
  hidden:{
  y:-30,
  opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      delay:0.8,
    }
  }
}

const Header = () => {
  const menuopen=()=>{
    let c=document.getElementById("menu");
    let d=document.getElementById("all");
    
    let f=document.getElementById("root")
    console.log(f)
  d.style.filter="blur(5px)";
  c.style.display="block";
  d.style.position="fixed";


 
   

   
  }
  const menuclose=()=>{
    let c=document.getElementById("menu");
    let d=document.getElementById("all");
    
  
  
    d.style.position="relative";
  d.style.filter="blur(0px)";
  c.style.display="none";
  
  }
  return(
    <>
   
    <nav className=' nav1 h-[10vh] flex w-[100%]  justify-center  items-center sm:hidden md:flex '>
        <ul className='   flex w-[100%] h-[50%] items-center  justify-evenly  ' >
            <motion.span variants={link} initial="hidden" animate="visible"  className='navitems hover:after:w-[100%] '><HashLink to="/">Home</HashLink></motion.span>
            <motion.span variants={link} initial="hidden" animate="visible" className='navitems  hover:after:w-[100%]'><HashLink to="/#project">Project</HashLink></motion.span>
            <motion.span variants={link}initial="hidden" animate="visible"  className='navitems  hover:after:w-[100%]'><HashLink to="/#details">Details</HashLink></motion.span>
            <motion.span variants={link}initial="hidden" animate="visible"  className='navitems  hover:after:w-[100%]'><HashLink to="/#acheivements">Certifications</HashLink></motion.span>
            <motion.span variants={link} initial="hidden" animate="visible" className='navitems  hover:after:w-[100%]'><HashLink to="/#contact">Contact</HashLink></motion.span>
            
        </ul>
    </nav>
    <nav id="nav2" className='small h-[4vh] screen overflow-x-hidden  md:hidden flex pr-2 justify-end items-center bg-[url(linear-gradient(to right, #DECBA4, #3E5151))]'>
   <div className=' '>
<GiHamburgerMenu onClick={menuopen} color='orange' />

</div>

    </nav>
    <div  className= 'w-[100%] rounded-3xl h-[100vh] fixed right-0 top-[0%] hidden z-50' id="menu" >
      <motion.div initial={{x:200}} whileInView={{x:0,transition:{stiffness:20,duration:0.6}}}  className='w-[100%] h-[60vh]  bg-white '>
      <div className='flex justify-end pt-[3%] pr-[3%] ' onClick={menuclose}><GiCrossMark/></div>
      <ul className='   flex w-[100%] h-[50%] items-center  justify-evenly flex-col  ' >
            <motion.span variants={link} initial="hidden" onClick={menuclose} animate="visible"  className='navitems hover:after:w-[100%] '><HashLink to="/">Home</HashLink></motion.span>
            <motion.span variants={link} initial="hidden" onClick={menuclose} animate="visible" className='navitems  hover:after:w-[100%]'><HashLink to="/#project">Project</HashLink></motion.span>
            <motion.span variants={link}initial="hidden" onClick={menuclose} animate="visible"  className='navitems  hover:after:w-[100%]'><HashLink to="/#details">Details</HashLink></motion.span>
            <motion.span variants={link}initial="hidden" onClick={menuclose} animate="visible"  className='navitems  hover:after:w-[100%]'><HashLink to="/#acheivements">Certifications</HashLink></motion.span>
            <motion.span variants={link} initial="hidden" onClick={menuclose} animate="visible" className='navitems  hover:after:w-[100%]'><HashLink to="/#contact">Contact</HashLink></motion.span>
            
        </ul></motion.div>
        <div className='h-[40vh] w-[100%]' onClick={menuclose}></div>
    </div>
    
    </>
  )
}

export default Header