import React, { useState } from 'react';
import './Quiz.css'

function FinalData({ id, question, A, B, C, D, answer }) {
  const [answers, setAn] = useState(false);
  const [questions,setAnswer]=useState("");

  const selectedAswer = (option) => {
    
    setAn(option === answer);
alert("Wrong ans,Please Choose correct answer")
  }

  return (
    <div>
      <div className="main-head">
        <p>{id}. {question}</p>
        <ol type="A">
          <li  onClick={() => selectedAswer('A')}>{A}</li>
          <li onClick={() => selectedAswer('B')}>{B}</li>
          <li onClick={() => selectedAswer('C')}>{C}</li>
          <li onClick={() => selectedAswer('D')}>{D}</li>
        </ol>
      </div>

      {answers && <p className='answers'><span style={{ fontWeight: "bold" }}>Answer: </span>{answer}</p>}
      
      <hr />
    </div>
  )
}

export default FinalData
