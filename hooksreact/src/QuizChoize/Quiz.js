import React, { useState } from 'react'
import {Question} from './Question';
import FinalData from './FinalData';

function Quiz() {
    const [data,setData]=useState(Question);
    
  return (
    <div>
      <section className="main_div">
        <h1>Multiple choice question</h1>
        {
            data.map((question)=>{
                const {id}=question;
                return <FinalData key={id}{...question}/>
            })
        }
      </section>
    </div>
  )
}

export default Quiz;
