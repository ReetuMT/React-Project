import React, { useState } from 'react';
function Welcome() {
    const [count,setcount]=useState(0);
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=> setcount(count+1)} >Increse</button>
        <button onClick={()=> setcount(count-1)} >descrese</button>

        </>
    );
}

export default Welcome;