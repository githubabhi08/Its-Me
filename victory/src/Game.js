import React, { useContext, useState } from 'react'
/* import {Questions} from './QueBank' */
import { magic } from './Quiz'

function Game() {
  
  const[currentQ,setcurrrentQ]=useState(0)
  const[answer,setanswer]=useState('')

  const {score,setscore,setdata}=useContext(magic)

  const dyna=()=>{
     if(Questions[currentQ].Answer==answer){
      setscore(score+1)
     }
    setcurrrentQ(currentQ+1)
   
  }

  const finishQuize=()=>{
    if(Questions[currentQ].Answer==answer){
      setscore(score+1)
     }
     setdata('Extras')
  }




  const Questions=[
    {
        prompt:'Who is the king of kings?',
        optionA:'everyone',
        optionB:'Jesus',
        optionC:'Alian',
        optionD:'No one',
        Answer:'B'
    },
    {
        prompt:'Who is the lord of lords?',
        optionA:'Gabrial',
        optionB:'Michael',
        optionC:'Angles',
        optionD:'Almighty God',
        Answer:'D'
    },
    {
      prompt:'Which is the largest ocean?',
      optionC:'Antartic ocean',
      optionB:'Atlantic ocean',
      optionA:'pacific ocean',
      optionD:'Antartica ocean',
      Answer:'A'
  },
  {
    prompt:'Which is the largest Forest?',
    optionA:'The Amazon rainforest, South America',
    optionB:'Redwood National park,Poland',
    optionC:'Daintree Rainforest, Australia',
    optionD:'Sequoia National Forest, California',
    Answer:'A'
},
{
  prompt:'Which is the largest Desert?',
  optionA:'Arabian Desert:',
  optionB:'Sahara Desert:',
  optionC:'Gobi Desert:',
  optionD:'Antarctic Desert:',
  Answer:'D'
},
{
  prompt:'Who is King of Jungle?',
  optionA:'Elephant',
  optionB:'Jaguar',
  optionC:'Lion',
  optionD:'Lepord',
  Answer:'C'
},
{
  prompt:'Which is the largest Fish?',
  optionA:'Dolphin',
  optionB:'Shark',
  optionC:'Whale',
  optionD:'Penguin',
  Answer:'C'
}
]



  return (
    <>
    
    

   <div >
   <div className='quize'>
   <button id='bestluck' className='btn btn-warning'>Best of Luck!</button>
    <h1>{Questions[currentQ].prompt}</h1>
   </div>

   
    
   <div className='options'>
   <button onClick={()=>setanswer('A')} className='btn btn-primary'>{Questions[currentQ].optionA}</button>
   <div> <button onClick={()=>setanswer('B')} className='btn btn-primary'>{Questions[currentQ].optionB}</button></div>
    <div><button onClick={()=>setanswer('C')} className='btn btn-primary'>{Questions[currentQ].optionC}</button></div>
    <button onClick={()=>setanswer('D')} className='btn btn-primary'>{Questions[currentQ].optionD}</button>
   </div>
    
    
    <div className='last'>
     { currentQ == Questions.length-1? (<button onClick={finishQuize}  className='btn btn-light'>Quize Over</button>) :
    <button onClick={dyna}  className='btn btn-danger'>Next</button> }
    </div>
   </div>
                                   
    
   
    
    
    
    </>
  )
}

export default Game