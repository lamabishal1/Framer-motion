import React from 'react'
import './App.css'
import { motion as Motion, useScroll } from 'framer-motion';

const Section = Motion('section');
const Box = Motion('div');

const gridContainerVariants={
  hidden: { opacity: 0 },
  show: {
  opacity: 1,
  transition: {
  staggerChildren: 0.25,
            },
          },
        }

const gridSquareVariants={
  hidden: { opacity: 0 },
  show: { opacity: 1},
}

const svgIconVariants = {
  hidden: {
  opacity: 0,
  pathLength: 1,
  fill: "rgba(252,211,77,0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252,211,77,1)",
  },
}

function App() {

  const { scrollYProgress } = useScroll();


  return (
    <>
    <div className="flex flex-col gap-10 overflow-x-hidden ">
      <Section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10">
    <Box
    variants={gridSquareVariants}
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-5'>
    <Box className='w-15 h-15 bg-stone-100 rounded-lg'
    initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, ease:"easeOut", delay:0.2}}
    ></Box>
        <Box className='w-15 h-15 bg-stone-100 rounded-full'
        initial={{opacity:0, y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1, ease:"easeOut", delay:0.2}}>

        </Box>
      </Box>
      
    <Box
    variants={gridSquareVariants} 
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

    <Box
    className='w-10 h-10 shadow-md bg-rose-400'
    animate={{
        scale: [1,1.2,1.2,1],
        rotate:[0,90,90,0],
        borderRadius: ["10%","10%","50%","10%"],
      }}
        transition={{
          duration:2,
          ease:"easeInOut",
          repeat: Infinity,
          repeatDelay:1}}/>
            </Box>
    <Box 
    variants={gridSquareVariants}
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
      <Motion.button
      whileTap={{scale: 0.9}}
      whileHover={{
        scale:1.1,
        backgroundColor:"#d1d5db",
        color:"black"
      }}
      transition={{bounceDamping:10, bounceStiffness:600}}
      className="bg-emerald-500 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide">
        Okei
      </Motion.button>
      </Box>

    <Box
    variants={gridSquareVariants}
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
      <Motion.div
      className="w-1/3 h-1/3 bg-orange-400 rounded-5x1 cursor-grab"
      drag
      dragConstraints={{
        top: -125,
        right: 125,
        bottom: 125,
        left: -125,
      }}
        dragTransition={{bounceDamping:10, bounceStiffness:600}}>
      </Motion.div>

    </Box>
    <Box
    variants={gridSquareVariants}
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
      <Box className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
      <Box className='w-full bg-gray-400 rounded-xl h-full origin-bottom'
      style={{ scaleY: scrollYProgress }}>
      </Box>
      </Box>
  
    </Box>
    <Box
    variants={gridSquareVariants}
    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
      <Motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-1/2 stroke-amber-500 stroke-0.5">
        <Motion.path d="m3.75 13.5 10.55-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        variants={svgIconVariants}
        initial="hidden"
        animate="visible"
        transition={{
            default:{
            duration:2,
            ease:"easeInOut",
            delay:1,
            repeat:Infinity,
            repeatType:"reverse",
            repeatDelay: 1,
          },
          fill: {
            duration:1, 
            ease:"easeIn", 
            delay:1, 
            repeat:Infinity,
            repeatType:"reverse",
            repeatDelay:1}
        }}
        ></Motion.path>
      </Motion.svg>

    </Box>
      </Section>
      <section
      className='flex flex-col gap-10 mb-10'>
        <h1 className='text-5xl tracking-wide text-black text-center'>Just Keep Scrolling</h1>
        <p className='text-black font-thin text-4xl w-1/2 mx-auto'>
          This is a basic practice on how to get up and running with Framer Motion with some TailwindCSS.
        </p>
      </section>
      </div>
    
  
  </>
  )
}

export default App
