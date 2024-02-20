import React,{useContext} from 'react'
import './App.css'
import port_Img from './MyImages/port_Img.webp'
import sm from './MyImages/sm.png'
import fire from './MyImages/fire.webp'
import {magic} from './App'
function Main()  {
  const{data,setdata}=useContext(magic)
  return (
    <>
    
   <div className='me'>
   <span>I Am <br/></span>
    <span>Abhi <br/></span>
    <span>A React Developer, having robust knowledge of all frontend technologies. <br/>
    Have been part of multiple dynamic Projects, created from scratch.<br/> Available to get Hired.
    </span>
   </div>
    
    <div className='social'>
    <a href='https://github.com/githubabhi08'><i class="fa-brands fa-square-github"></i></a>
    <a href=''><i class="fa-brands fa-linkedin"></i></a>
    <a href=''><i class="fa-brands fa-whatsapp"></i></a>
    <a href=''><i class="fa-brands fa-instagram"></i></a>
    </div>
  <div>
     <div className='sm'>
     <img src={sm} className='sms'/>
     </div>

   

   <div className='sm2'>
   <img src={fire} className='fr2'/>
   </div>

   
    
  </div>
  
    <div className='Image'>
    <img src={port_Img} />
    
    </div>
    
    </>
  )
}

export default Main