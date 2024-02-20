import React,{useContext} from 'react'
import './App.css'
import {magic} from './App'
function Navbar() {
  const{data,setdata}=useContext(magic)
  
  return (
    <>
     <div className='nav'>
        <div className='nav-left'>
      <h2>@bhi</h2>
      
        </div>
        <div >
   <ul className='nav-rght'>
   <li>Home</li>
   <li>Certificate</li>
    <li>Projects</li>
    <li>Testimonials</li>
    <li>Contact</li>
   </ul>
        </div>
     </div>
    
    
    
    
    
    
    

    
    
    </>
  )
}

export default Navbar