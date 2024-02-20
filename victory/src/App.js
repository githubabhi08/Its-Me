import React, { createContext, useState } from 'react'

import './App.css'

import Navbar from './Navbar'
import Main from './Main'
import Services from './Services'
import Achieve from './Achieve'
import ProjectCounter from './ProjectCounter'
import AbhiMart from './AbhiMart'
import MySwiper from './MySwiper'
import Quiz from './Quiz'
import Todo from './Todo'
import Pages from './Pages'
import Temp from './Temp'
import Testimony from './Testimony'
import Contact from './Contact'
import Footer from './Footer'
import Resume from './Resume'
import Logo from './Logo'





const magic=createContext()
function App() {
  const[data,setdata]=useState('')
  return (
    <>
   

   <magic.Provider value={{data,setdata}}>
     
   {data=='' && <Navbar />}
   
    {data=='' && <Main />}
    {data=='' && <Services />}
    {data=='' && <Logo />}
  
    {data=='resume' && <Resume />}



    {data=='' && <Achieve />}
    {data=='' && <ProjectCounter />}
    {data=='' && <MySwiper />}
    {data=='mart' && <AbhiMart />}
    {data=='jesus' && <Quiz />}
    {data=='todo' && <Todo />}
    {data=='pages' && <Pages />}
    {data=='temp' && <Temp />}
    {data=='' && <Testimony />}
    {data=='' && <Contact />}
    {data=='' && <Footer />}
   </magic.Provider>
   
    
    
    </>
  )
}
export {magic}
export default App




