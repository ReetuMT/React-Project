import React, { useState } from 'react';
import './Digital.css'

const Digital = ()=>{
    let time=new Date().toLocaleTimeString();
    const [ctime,setTime] = useState(time);

    const UpdateTime= ()=>{
        time=new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(UpdateTime,1000);
    return (
        <>
            <h1 style={{fontSize:250,fontFamily:"emoji"}}>{ctime}</h1>
        </>
    )
}
export default Digital;