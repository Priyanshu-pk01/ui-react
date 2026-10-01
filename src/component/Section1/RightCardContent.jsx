import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
      <div>
      <p className=' leading-relaxed text-shadow-xs text-2xl mb-13 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officia in eos libero, delectus ipsam.</p>
      
      <div className='flex justify-between'>
        <button style={{backgroundColor:props.color}} className='rounded-3xl flex justify-center items-center px-7 py-2  text-white text-2xl' >{props.tag}</button>
        <button style={{backgroundColor:props.color}} className='rounded-full  flex justify-center item-center px-3 py-2  text-white'><ArrowRight size={35} strokeWidth={2.5} /></button>
      </div>
   </div>
   </div>
  )
}

export default RightCardContent
