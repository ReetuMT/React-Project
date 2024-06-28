import React, { useState } from 'react'

const Myquizlist = ({question,answer}) => {
    const [answers,setAnswer]=useState(false);
    // const getAnswer = (answers)=>{
    // console.log(answers)
    // }
  return (
    <div>
      <div className="main-heading">
        <h4 onClick={()=>setAnswer(!answers)}>{answers? "-": "+"}</h4>
        <h2>{question}</h2>
      </div>
      <br />
      {answers && <p className='answers'>{answer}</p>}
      
    </div>
  )
}

export default Myquizlist
