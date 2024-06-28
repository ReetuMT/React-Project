import React, { useState } from 'react';
import { Questions } from './QuizAPi';
import Myquizlist from './Myquizlist';

import './Quiz.css'
const QuizList = ()=>{
    const [data,setData]=useState(Questions);
    return(
        <>
        <section className="main-div">
        <h1>General Questions</h1>
        {
            data.map((question)=>{
                const {id} =question;   
            return <Myquizlist  key={id} {...question}/>
            })
        }
        </section>
        </>
    )
}
export default QuizList;