import React,{useContext} from 'react'
import './App.css'
import emoji from './MyImages/emoji.webp'
import project from './MyImages/project.webp'
import {magic} from './App'
function Services() {
  const{data,setdata}=useContext(magic)
  return (
    <>
    
  <div className='spec'>
  <h1>
        My <br /> <span>Specifications</span>
    </h1>
    <p id='add'>I am someone who really loves his job and enjoys doing it. <br />Besides, I prefer
    doing smart work and emphasize more on it instead of hard work  <br />and i am always excited to learn tech's that 
    makes my job easy and efficient.</p>
    <button onClick={()=>{setdata('resume')}}>My Resume</button>
  </div>
    
    {/* boxex */}
    
    <div className='boxing'>
        <div className='box1'>
            <h1><i class="fa-solid fa-face-grin-hearts"></i></h1>
            <h1>Design</h1>
            <h3>Amazing <br /><span>UI & UX</span></h3>
        </div>

        <div className='box2'>
            
            <h1>Projects</h1>
            <img src={project} />
        </div>

        <div className='box3'>
            <img src={emoji} />
            <h1>React <br /> Developer</h1>
            {/* <h3>Amazing <br /><span>UI & UX</span></h3> */}
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Services