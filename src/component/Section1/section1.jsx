import React from 'react'
import Nav from './nav'
import Page1Content from './page1Content'





const Section1 = (props) => {
  return (
    <div className=''>
     
        <Nav />
       <Page1Content users={props.users}/>
     
      
      
    </div>
  )
}

export default Section1
