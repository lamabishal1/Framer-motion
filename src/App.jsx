import React from 'react'
import './App.css'
import { motion as Motion } from 'framer-motion';

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

function App() {

  return (
    <>
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <Section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10">
    <Box 
    variants={gridSquareVariants}
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-5'>
    <Box className='w-15 h-15 bg-stone-100 rounded-lg'
    initial={{opacity:0, y:30}}
      animate={{opacity:1, y:0}}
      transition={{duration:1, ease:"easeOut", delay:0.2}}
    ></Box>
        <Box className='w-15 h-15 bg-stone-100 rounded-full'></Box>
      </Box>
    <Box 
    variants={gridSquareVariants} 
            className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></Box>
    <Box 
    variants={gridSquareVariants} 
             className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></Box>
    <Box variants={gridSquareVariants} 
             className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></Box>
    <Box variants={gridSquareVariants} 
             className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></Box>
    <Box variants={gridSquareVariants} 
             className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></Box>
      </Section>
      </div>
    
  
  </>
  )
}

export default App
