import React from 'react'
import './CSS/Contact.css'
import telep from './MyImages/telep.webp'
function Contact() {
  return (
    <>
    
   <div className='contact'>
   <div className='row'>
   <div id='con'>
   <h1 >CONTACT</h1>
   </div>
        <div className='col-md-7 second'>
            <h1>GET IN TOUCH <br/>CONTACT ME</h1>
            <div className='fonts'>
            <h2><i class="fa-solid fa-phone"></i>  9131492196</h2>
            <h2><i class="fa-solid fa-envelope"></i> Abhi24abc@gmail.com</h2>
            <h2><i class="fa-solid fa-location-dot"></i> Korba, (C.G)</h2>
            </div>
            <img src={telep} className='img-fluid telep' />

        </div>
        <div className='col-md-5 frm'>
        <>
  <form className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
      Name
    </label>
    <input type='text' placeholder='Your name...' className="form-control" />
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />

<div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Leave your comment
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
    />
  </div>

  <div className='submit'>
    <input type='submit' value='SUBMIT' />
  </div>

  </form>
  
</>

        </div>
    </div>
   </div>
    
    
    
    
    
    
    </>
  )
}

export default Contact