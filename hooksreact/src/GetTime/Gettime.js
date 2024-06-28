import React, { useState } from 'react';


function GetTime(){
  let getnewtime= new Date().toLocaleTimeString();
  const [newtime,settime]=useState(getnewtime);
  const UpdateTime= ()=>{
    getnewtime= new Date().toLocaleTimeString();
    settime(getnewtime);
  }
    return (
        <>
            <div>
            <h1 style={{color:"green",textTransform:"uppercase"}}>Get Current time Via Clicking on the Button</h1><br/><br />
                <h1>{newtime}</h1>
                <button onClick={UpdateTime}>Get Time</button>
            </div>
        </>
    )
}
export default  GetTime;
