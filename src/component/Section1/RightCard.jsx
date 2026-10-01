import React from 'react'
import { ArrowRight } from 'lucide-react';
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
 
  return (
    <div id="right" className=' shrink-0 relative h-full w-80 rounded-4xl overflow-hidden' >
      <img  className="h-full w-full object-cover"src={props.img} alt="girl"/>
      < RightCardContent color={props.color} id={props.id} tag={props.tag} />
     
   </div>


  )
}

export default RightCard
