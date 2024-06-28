import React, { useState } from 'react';
import './Counter.css'


function Counter(){
    const state= useState();
    const [count,setCount] = useState(0);
    const Increase = ()=>{
       setCount(count+ 1);
    }
    const Decrease = ()=>{
        setCount(count- 1);
     }
    return(
        <>
        <div className="counter-container">
            <h1>{count}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
        </div>
        </>
    )
}
export default Counter;