import React, { useContext, useState } from 'react'
import { magic } from './Quiz'
import './CSS/Quiz.css'




function Extras() {

    const {score,setscore,setdata}=useContext(magic)
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
        prompt:'Which is the largest ocean in the world?',
        optionC:'Antartic ocean',
        optionB:'Atlantic ocean',
        optionA:'pacific ocean',
        optionD:'Antartica ocean',
        Answer:'A'
    },
    {
      prompt:'Which is the largest Forest in the world?',
      optionA:'The Amazon rainforest, South America',
      optionB:'Redwood National park,Poland',
      optionC:'Daintree Rainforest, Australia',
      optionD:'Sequoia National Forest, California',
      Answer:'A'
  },
  {
    prompt:'Which is the largest Desert in the world?',
    optionA:'Arabian Desert:',
    optionB:'Sahara Desert:',
    optionC:'Gobi Desert:',
    optionD:'Antarctic Desert:',
    Answer:'D'
  },
  {
    prompt:'Who is the King of the Jungle?',
    optionA:'Elephant',
    optionB:'Jaguar',
    optionC:'Lion',
    optionD:'Lepord',
    Answer:'C'
  },
  {
    prompt:'Which is the largest Fish in the World',
    optionA:'Dolphin',
    optionB:'Shark',
    optionC:'Whale',
    optionD:'Penguin',
    Answer:'C'
  }
  ]
    
    const restart=()=>{
        setscore(0)
        setdata('abhi')
    }



  return (
    <>
    
    
    <div className='jess'>
    <h1>Your Score here...</h1>
    
    <h3>{score}/{Questions.length}</h3>
    
    <button  onClick={()=>{restart()}} className='btn btn-warning'>Restart</button>
    </div>
    
    
    
    </>
  )
}

export default Extras