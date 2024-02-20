
import React,{useContext} from 'react'

import Certificate from './MyImages/Certificate.png'
import {magic} from './App'
function Achieve() {
  const{data,setdata}=useContext(magic)
  return (
    <>
   <div className='certi'>
   <h1 style={{color:'blue'}}> CERTIFICATION</h1>
    
    <img src={Certificate} />
   </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Achieve