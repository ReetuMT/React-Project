import React,{useState,useEffect} from 'react'

function Useeffect() {
    const [num,setNum] =useState(0)
    useEffect(()=>{
        alert("cliked")
        document.title=`you click me ${num} times`
    },[])

    return (
    <div>
      <button onClick={()=>{setNum(num+1);}}>Click me {num}</button>
    </div>
  )
}

export default Useeffect
